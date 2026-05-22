#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import os
import subprocess
import tempfile
import urllib.parse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


HOST = "0.0.0.0"
PORT = 8123
BASE_DIR = Path(__file__).resolve().parent
CACHE_DIR = Path(tempfile.gettempdir()) / "bildvokabeltrainer-tts-cache"
CACHE_DIR.mkdir(parents=True, exist_ok=True)

VOICE_MAP = {
    "es": "Eddy (Spanisch (Spanien))",
    "es-es": "Eddy (Spanisch (Spanien))",
    "es-mx": "Eddy (Spanisch (Mexiko))",
    "de": "Anna",
    "de-de": "Anna",
    "en": "Daniel",
    "en-gb": "Daniel",
    "en-us": "Eddy (Englisch (USA))",
    "ru": None,
    "ru-ru": None,
}


def sanitize_lang(raw_lang: str) -> str:
    return (raw_lang or "es").strip().lower()


def pick_voice(raw_lang: str) -> str | None:
    lang = sanitize_lang(raw_lang)
    return VOICE_MAP.get(lang, VOICE_MAP.get(lang.split("-")[0], "Daniel"))


def build_cache_path(text: str, lang: str) -> Path:
    digest = hashlib.sha256(f"{lang}\0{text}".encode("utf-8")).hexdigest()
    return CACHE_DIR / f"{digest}.wav"


def generate_audio(text: str, lang: str) -> Path | None:
    cache_path = build_cache_path(text, lang)

    if cache_path.exists():
        return cache_path

    voice = pick_voice(lang)
    if not voice:
        return None

    env = os.environ.copy()
    env["LANG"] = "en_US.UTF-8"
    temp_aiff = CACHE_DIR / f"{cache_path.stem}.aiff"

    subprocess.run(
        ["say", "-v", voice, "-o", str(temp_aiff), text],
        check=True,
        env=env,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    subprocess.run(
        ["afconvert", "-f", "WAVE", "-d", "LEI16@22050", str(temp_aiff), str(cache_path)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    try:
        temp_aiff.unlink(missing_ok=True)
    except Exception:
        pass

    return cache_path


class AppHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)

        if parsed.path == "/tts":
            self.serve_tts(parsed.query)
            return

        super().do_GET()

    def serve_tts(self, query: str) -> None:
        params = urllib.parse.parse_qs(query)
        text = (params.get("text", [""])[0] or "").strip()
        lang = sanitize_lang((params.get("lang", ["es"])[0] or "es"))

        if not text:
            self.send_response(400)
            self.end_headers()
            return

        try:
            audio_path = generate_audio(text, lang)
        except Exception:
            self.send_response(500)
            self.end_headers()
            return

        if not audio_path or not audio_path.exists():
            self.send_response(204)
            self.end_headers()
            return

        data = audio_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "audio/wav")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, format: str, *args) -> None:
        return


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), AppHandler)
    print(f"Bildvokabeltrainer server running on http://{HOST}:{PORT}")
    server.serve_forever()
