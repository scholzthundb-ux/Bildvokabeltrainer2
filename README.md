# Bildvokabeltrainer2

Die App selbst steckt in [index.html](/Users/birgitscholz/Projekte/Bildvokabeltrainer2/index.html).
Neue Bilder und Woerter pflegst du ab jetzt in [bilder-daten.js](/Users/birgitscholz/Projekte/Bildvokabeltrainer2/bilder-daten.js).

## Neues Bild hinzufuegen

1. Lege die neue Bilddatei in diesen Ordner.
2. Oeffne [bilder-daten.js](/Users/birgitscholz/Projekte/Bildvokabeltrainer2/bilder-daten.js).
3. Suche den passenden Bereich:
   `playa`, `ropa`, `rutina` oder `casa`
4. Fuege in `images: [ ... ]` einen neuen Block nach diesem Muster ein:

```js
{
  title: "La playa - Bild 5",
  file: "mein-bild.png",
  hotspots: [
    { wort: "el sol", clickX: 50, clickY: 20, labelX: 58, labelY: 14 }
  ]
}
```

## Bedeutung der Werte

- `title`: Name des Bildes in der App
- `file`: Dateiname des Bildes
- `wort`: spanisches Wort oder Ausdruck
- `clickX`, `clickY`: Stelle, die man antippen soll, in Prozent
- `labelX`, `labelY`: Stelle, an der das Wort angezeigt wird, in Prozent

## Wichtig

Wenn dir ChatGPT kuenftig nur einen Datenblock fuer ein neues Bild gibt, dann kommt dieser Block fast immer in [bilder-daten.js](/Users/birgitscholz/Projekte/Bildvokabeltrainer2/bilder-daten.js) und nicht in `index.html`.
