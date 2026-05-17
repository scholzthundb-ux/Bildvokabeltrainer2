// Hier pflegst du nur die Inhalte deiner Bilder.
// Die eigentliche App bleibt in index.html und muss dafuer normalerweise
// nicht mehr angefasst werden.
//
// So fuegst du spaeter ein neues Bild hinzu:
// 1. Bilddatei in diesen Ordner legen
// 2. Im passenden Bereich unten einen neuen Eintrag in "images" anfuegen
// 3. Titel, Dateiname und Hotspots eintragen
//
// Vorlage fuer ein neues Bild:
// {
//   title: "La playa - Bild 5",
//   file: "mein-bild.png",
//   hotspots: [
//     { wort: { es: "el sol", de: "die Sonne", en: "the sun", ru: "солнце" }, clickX: 50, clickY: 20, labelX: 58, labelY: 14 }
//   ]
// }

window.APP_FOLDERS = {
  zahlen: {
    title: "Los números",
    images: [
      {
        title: "Los números – Bild 1",
        file: "Zahlen1.png",
        hotspots: [
          { wort: { es: "uno", de: "eins", en: "one", ru: "один" }, clickX: 20.5, clickY: 19.5, labelX: 26, labelY: 10.5, areaW: 22, areaH: 20 },
          { wort: { es: "dos", de: "zwei", en: "two", ru: "два" }, clickX: 47.5, clickY: 18.5, labelX: 52, labelY: 10.5, areaW: 23, areaH: 20 },
          { wort: { es: "tres", de: "drei", en: "three", ru: "три" }, clickX: 76.5, clickY: 19.0, labelX: 81, labelY: 10.5, areaW: 24, areaH: 21 },
          { wort: { es: "cuatro", de: "vier", en: "four", ru: "четыре" }, clickX: 19.5, clickY: 38.0, labelX: 27, labelY: 29.5, areaW: 24, areaH: 22 },
          { wort: { es: "cinco", de: "fünf", en: "five", ru: "пять" }, clickX: 49.5, clickY: 39.0, labelX: 55, labelY: 30.5, areaW: 24, areaH: 21 },
          { wort: { es: "seis", de: "sechs", en: "six", ru: "шесть" }, clickX: 77.0, clickY: 38.5, labelX: 83, labelY: 30, areaW: 25, areaH: 22 },
          { wort: { es: "siete", de: "sieben", en: "seven", ru: "семь" }, clickX: 26.0, clickY: 60.5, labelX: 19, labelY: 53, areaW: 33, areaH: 16 },
          { wort: { es: "ocho", de: "acht", en: "eight", ru: "восемь" }, clickX: 67.0, clickY: 61.0, labelX: 60, labelY: 53, areaW: 29, areaH: 17 },
          { wort: { es: "nueve", de: "neun", en: "nine", ru: "девять" }, clickX: 21.0, clickY: 84.0, labelX: 16, labelY: 76, areaW: 25, areaH: 21 },
          { wort: { es: "diez", de: "zehn", en: "ten", ru: "десять" }, clickX: 65.5, clickY: 84.5, labelX: 58, labelY: 75.5, areaW: 31, areaH: 23 }
        ]
      },
      {
        title: "Los números – Bild 2",
        file: "zahlen2.png",
        hotspots: [
          { wort: { es: "once", de: "elf", en: "eleven", ru: "одиннадцать" }, clickX: 20.5, clickY: 18.5, labelX: 26, labelY: 10.5, areaW: 25, areaH: 22 },
          { wort: { es: "doce", de: "zwölf", en: "twelve", ru: "двенадцать" }, clickX: 50.0, clickY: 18.5, labelX: 56, labelY: 10.5, areaW: 24, areaH: 22 },
          { wort: { es: "trece", de: "dreizehn", en: "thirteen", ru: "тринадцать" }, clickX: 79.5, clickY: 18.5, labelX: 84, labelY: 10.5, areaW: 26, areaH: 22 },
          { wort: { es: "catorce", de: "vierzehn", en: "fourteen", ru: "четырнадцать" }, clickX: 20.5, clickY: 43.0, labelX: 27, labelY: 34.5, areaW: 25, areaH: 24 },
          { wort: { es: "quince", de: "fünfzehn", en: "fifteen", ru: "пятнадцать" }, clickX: 50.0, clickY: 43.0, labelX: 55, labelY: 34.5, areaW: 24, areaH: 24 },
          { wort: { es: "dieciséis", de: "sechzehn", en: "sixteen", ru: "шестнадцать" }, clickX: 79.5, clickY: 43.0, labelX: 84, labelY: 34.5, areaW: 25, areaH: 24 },
          { wort: { es: "diecisiete", de: "siebzehn", en: "seventeen", ru: "семнадцать" }, clickX: 20.5, clickY: 68.0, labelX: 14, labelY: 59.5, areaW: 25, areaH: 23 },
          { wort: { es: "dieciocho", de: "achtzehn", en: "eighteen", ru: "восемнадцать" }, clickX: 50.0, clickY: 68.0, labelX: 58, labelY: 59.5, areaW: 24, areaH: 23 },
          { wort: { es: "diecinueve", de: "neunzehn", en: "nineteen", ru: "девятнадцать" }, clickX: 79.5, clickY: 68.0, labelX: 86, labelY: 59.5, areaW: 25, areaH: 23 },
          { wort: { es: "veinte", de: "zwanzig", en: "twenty", ru: "двадцать" }, clickX: 50.0, clickY: 89.0, labelX: 57, labelY: 80.5, areaW: 39, areaH: 16 }
        ]
      }
    ]
  },

  playa: {
    title: "La playa",
    images: [
      {
        title: "La playa – Bild 1",
        file: "strand-ohne-woerter.png",
        hotspots: [
          { wort: { es: "el sol", de: "die Sonne", en: "the sun", ru: "солнце" }, clickX: 76.4, clickY: 22.9, labelX: 74, labelY: 22, areaW: 17, areaH: 17, shape: "circle" },
          { wort: { es: "la palmera", de: "die Palme", en: "the palm tree", ru: "пальма" }, clickX: 11.5, clickY: 31.8, labelX: 22, labelY: 31, areaW: 26, areaH: 31 },
          { wort: { es: "el mar", de: "das Meer", en: "the sea", ru: "море" }, clickX: 36.33, clickY: 47.46, labelX: 42, labelY: 44 },
          { wort: { es: "el barco", de: "das Boot", en: "the boat", ru: "лодка" }, clickX: 53.3, clickY: 45.2, labelX: 56, labelY: 48, areaW: 16, areaH: 13 },
          { wort: { es: "la ola", de: "die Welle", en: "the wave", ru: "волна" }, clickX: 76.8, clickY: 55.8, labelX: 72, labelY: 58, areaW: 12, areaH: 10 },
          { wort: { es: "la tabla de surf", de: "das Surfbrett", en: "the surfboard", ru: "доска для сёрфинга" }, clickX: 46.58, clickY: 58.59, labelX: 61, labelY: 63 },
          { wort: { es: "el bañador", de: "der Badeanzug", en: "the swimsuit", ru: "купальник" }, clickX: 35.8, clickY: 70.4, labelX: 56, labelY: 68, areaW: 16, areaH: 18 },
          { wort: { es: "la sombrilla", de: "der Sonnenschirm", en: "the parasol", ru: "пляжный зонтик" }, clickX: 14.8, clickY: 61.4, labelX: 12, labelY: 69, areaW: 31, areaH: 22 },
          { wort: { es: "la toalla", de: "das Handtuch", en: "the towel", ru: "полотенце" }, clickX: 20.5, clickY: 82.5, labelX: 18, labelY: 90, areaW: 31, areaH: 16 },
          { wort: { es: "las gafas de sol", de: "die Sonnenbrille", en: "the sunglasses", ru: "солнцезащитные очки" }, clickX: 39.1, clickY: 88.7, labelX: 41, labelY: 92, areaW: 10, areaH: 8 },
          { wort: { es: "la crema solar", de: "die Sonnencreme", en: "the sun cream", ru: "солнцезащитный крем" }, clickX: 59.86, clickY: 86.98, labelX: 66, labelY: 89 },
          { wort: { es: "la concha", de: "die Muschel", en: "the seashell", ru: "ракушка" }, clickX: 95.0, clickY: 84.7, labelX: 86, labelY: 90, areaW: 8, areaH: 9 },
          { wort: { es: "el chiringuito", de: "die Strandbar", en: "the beach bar", ru: "пляжный бар" }, clickX: 92.5, clickY: 49.7, labelX: 79, labelY: 66, areaW: 15, areaH: 17 }
        ]
      },
      {
        title: "La playa – Bild 2",
        file: "strand2.png?v=2",
        hotspots: [
          { wort: { es: "el sol", de: "die Sonne", en: "the sun", ru: "солнце" }, clickX: 24.9, clickY: 16.2, labelX: 33, labelY: 15, areaW: 18, areaH: 18, shape: "circle" },
          { wort: { es: "la gaviota", de: "die Möwe", en: "the seagull", ru: "чайка" }, clickX: 68.95, clickY: 18.03, labelX: 67, labelY: 13, areaW: 14, areaH: 10 },
          { wort: { es: "el socorrista", de: "der Rettungsschwimmer", en: "the lifeguard", ru: "спасатель" }, clickX: 75.0, clickY: 42.71, labelX: 80, labelY: 35, areaW: 14, areaH: 28 },
          { wort: { es: "el salvavidas", de: "der Rettungsring", en: "the lifebuoy", ru: "спасательный круг" }, clickX: 57.52, clickY: 57.03, labelX: 51, labelY: 52, areaW: 16, areaH: 16, shape: "circle" },
          { wort: { es: "la sombrilla", de: "der Sonnenschirm", en: "the parasol", ru: "пляжный зонтик" }, clickX: 17.58, clickY: 48.2, labelX: 27, labelY: 47, areaW: 24, areaH: 23 },
          { wort: { es: "la tumbona", de: "die Sonnenliege", en: "the sun lounger", ru: "шезлонг" }, clickX: 17.97, clickY: 75.00, labelX: 26, labelY: 72 },
          { wort: { es: "el sombrero de sol", de: "der Sonnenhut", en: "the sun hat", ru: "солнечная шляпа" }, clickX: 30.76, clickY: 75.6, labelX: 36, labelY: 73, areaW: 11, areaH: 11 },
          { wort: { es: "el castillo de arena", de: "die Sandburg", en: "the sandcastle", ru: "песочный замок" }, clickX: 49.7, clickY: 84.5, labelX: 57, labelY: 81, areaW: 18, areaH: 16 },
          { wort: { es: "la niña", de: "das Mädchen", en: "the girl", ru: "девочка" }, clickX: 83.79, clickY: 74.74, labelX: 88, labelY: 69 },
          { wort: { es: "la pala", de: "die Schaufel", en: "the spade", ru: "лопатка" }, clickX: 63.0, clickY: 92.9, labelX: 65, labelY: 90, areaW: 12, areaH: 10 },
          { wort: { es: "la pelota", de: "der Ball", en: "the ball", ru: "мяч" }, clickX: 81.8, clickY: 89.6, labelX: 83, labelY: 89, areaW: 11, areaH: 11, shape: "circle" },
          { wort: { es: "el flotador", de: "der Schwimmring", en: "the inflatable ring", ru: "надувной круг" }, clickX: 83.1, clickY: 62.17, labelX: 82, labelY: 55, areaW: 17, areaH: 17, shape: "circle" }
        ]
      },
      {
        title: "La playa – Bild 3",
        file: "strand5.png",
        hotspots: [
          { wort: { es: "la playa", de: "der Strand", en: "the beach", ru: "пляж" }, clickX: 16.7, clickY: 22.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el mar", de: "das Meer", en: "the sea", ru: "море" }, clickX: 50, clickY: 22.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la ola", de: "die Welle", en: "the wave", ru: "волна" }, clickX: 83.3, clickY: 22.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la arena", de: "der Sand", en: "the sand", ru: "песок" }, clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el sol", de: "die Sonne", en: "the sun", ru: "солнце" }, clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el cielo", de: "der Himmel", en: "the sky", ru: "небо" }, clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la costa", de: "die Küste", en: "the coast", ru: "побережье" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la bahía", de: "die Bucht", en: "the bay", ru: "бухта" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la isla", de: "die Insel", en: "the island", ru: "остров" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 4",
        file: "strand6.png",
        hotspots: [
          { wort: { es: "el socorrista", de: "der Rettungsschwimmer", en: "the lifeguard", ru: "спасатель" }, clickX: 16.7, clickY: 23.5, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la familia", de: "die Familie", en: "the family", ru: "семья" }, clickX: 50, clickY: 23.5, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el buceador", de: "der Taucher", en: "the diver", ru: "дайвер" }, clickX: 83.3, clickY: 23.5, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el nadador", de: "der Schwimmer", en: "the swimmer", ru: "пловец" }, clickX: 16.7, clickY: 53.0, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el surfista", de: "der Surfer", en: "the surfer", ru: "сёрфер" }, clickX: 50, clickY: 53.0, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "los peces", de: "die Fische", en: "the fish", ru: "рыбы" }, clickX: 83.3, clickY: 53.0, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el barco", de: "das Boot", en: "the boat", ru: "лодка" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el kayak", de: "das Kajak", en: "the kayak", ru: "каяк" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el colchón hinchable", de: "die Luftmatratze", en: "the inflatable mattress", ru: "надувной матрас" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 5",
        file: "strand7.png",
        hotspots: [
          { wort: { es: "el chiringuito", de: "die Strandbar", en: "the beach bar", ru: "пляжный бар" }, clickX: 16.7, clickY: 23.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la sombrilla", de: "der Sonnenschirm", en: "the parasol", ru: "пляжный зонтик" }, clickX: 50, clickY: 23.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la tumbona", de: "die Sonnenliege", en: "the sun lounger", ru: "шезлонг" }, clickX: 83.3, clickY: 23.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la toalla", de: "das Handtuch", en: "the towel", ru: "полотенце" }, clickX: 16.7, clickY: 50.8, labelX: 24, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "las gafas de sol", de: "die Sonnenbrille", en: "the sunglasses", ru: "солнцезащитные очки" }, clickX: 50, clickY: 50.8, labelX: 50, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "la crema solar", de: "die Sonnencreme", en: "the sun cream", ru: "солнцезащитный крем" }, clickX: 83.3, clickY: 50.8, labelX: 76, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "el sombrero de sol", de: "der Sonnenhut", en: "the sun hat", ru: "солнечная шляпа" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el bolso de playa", de: "die Strandtasche", en: "the beach bag", ru: "пляжная сумка" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la nevera portátil", de: "die Kühlbox", en: "the cool box", ru: "сумка-холодильник" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 6",
        file: "strand8.png",
        hotspots: [
          { wort: { es: "el bañador", de: "der Badeanzug", en: "the swimsuit", ru: "купальник" }, clickX: 16.7, clickY: 23.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el bikini", de: "der Bikini", en: "the bikini", ru: "бикини" }, clickX: 50, clickY: 23.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el bañador (de hombre)", de: "die Badehose", en: "the swimming trunks", ru: "плавки" }, clickX: 83.3, clickY: 23.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la camiseta", de: "das T-Shirt", en: "the T-shirt", ru: "футболка" }, clickX: 16.7, clickY: 50.8, labelX: 24, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "los pantalones cortos", de: "die Shorts", en: "the shorts", ru: "шорты" }, clickX: 50, clickY: 50.8, labelX: 50, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "las chanclas", de: "die Flip-Flops", en: "the flip-flops", ru: "шлёпанцы" }, clickX: 83.3, clickY: 50.8, labelX: 76, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "el vestido de playa", de: "das Strandkleid", en: "the beach dress", ru: "пляжное платье" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la gaviota", de: "die Möwe", en: "the seagull", ru: "чайка" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "las algas", de: "die Algen", en: "the seaweed", ru: "водоросли" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 7",
        file: "strand9.png",
        hotspots: [
          { wort: { es: "el salvavidas", de: "der Rettungsring", en: "the lifebuoy", ru: "спасательный круг" }, clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la tabla de surf", de: "das Surfbrett", en: "the surfboard", ru: "доска для сёрфинга" }, clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la bandera roja", de: "die rote Flagge", en: "the red flag", ru: "красный флаг" }, clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la pala", de: "die Schaufel", en: "the spade", ru: "лопатка" }, clickX: 16.7, clickY: 50.8, labelX: 24, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "el cubo", de: "der Eimer", en: "the bucket", ru: "ведро" }, clickX: 50, clickY: 50.8, labelX: 50, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "la pelota", de: "der Ball", en: "the ball", ru: "мяч" }, clickX: 83.3, clickY: 50.8, labelX: 76, labelY: 42, areaW: 30, areaH: 26 },
          { wort: { es: "el flotador", de: "der Schwimmring", en: "the inflatable ring", ru: "надувной круг" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la concha", de: "die Muschel", en: "the seashell", ru: "ракушка" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el castillo de arena", de: "die Sandburg", en: "the sandcastle", ru: "песочный замок" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 8",
        file: "strand10.png",
        hotspots: [
          { wort: { es: "los refrescos", de: "die Erfrischungsgetränke", en: "the soft drinks", ru: "прохладительные напитки" }, clickX: 16.7, clickY: 23.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la cerveza", de: "das Bier", en: "the beer", ru: "пиво" }, clickX: 50, clickY: 23.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el cóctel", de: "der Cocktail", en: "the cocktail", ru: "коктейль" }, clickX: 83.3, clickY: 23.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el zumo", de: "der Saft", en: "the juice", ru: "сок" }, clickX: 16.7, clickY: 53.0, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el helado", de: "das Eis", en: "the ice cream", ru: "мороженое" }, clickX: 50, clickY: 53.0, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el picnic", de: "das Picknick", en: "the picnic", ru: "пикник" }, clickX: 83.3, clickY: 53.0, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el libro", de: "das Buch", en: "the book", ru: "книга" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la revista", de: "die Zeitschrift", en: "the magazine", ru: "журнал" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la cámara", de: "der Fotoapparat", en: "the camera", ru: "фотоаппарат" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 9",
        file: "strand3.png",
        hotspots: [
          { wort: { es: "tomar el sol", de: "sich sonnen", en: "to sunbathe", ru: "загорать" }, clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "nadar", de: "schwimmen", en: "to swim", ru: "плавать" }, clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "bucear", de: "tauchen", en: "to dive", ru: "нырять" }, clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "pasear por la playa", de: "am Strand spazieren gehen", en: "to walk along the beach", ru: "гулять по пляжу" }, clickX: 16.7, clickY: 51.5, labelX: 28, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: { es: "hacer castillos de arena", de: "Sandburgen bauen", en: "to build sandcastles", ru: "строить песочные замки" }, clickX: 50, clickY: 51.5, labelX: 50, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: { es: "leer un libro", de: "ein Buch lesen", en: "to read a book", ru: "читать книгу" }, clickX: 83.3, clickY: 51.5, labelX: 74, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: { es: "recoger conchas", de: "Muscheln sammeln", en: "to collect seashells", ru: "собирать ракушки" }, clickX: 16.7, clickY: 81.8, labelX: 25, labelY: 75, areaW: 30, areaH: 26 },
          { wort: { es: "sacar fotos", de: "Fotos machen", en: "to take photos", ru: "фотографировать" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 26 },
          { wort: { es: "el surfista", de: "der Surfer", en: "the surfer", ru: "сёрфер" }, clickX: 83.3, clickY: 81.8, labelX: 74, labelY: 75, areaW: 30, areaH: 26 }
        ]
      },
      {
        title: "La playa – Bild 10",
        file: "strand4.png",
        hotspots: [
          { wort: { es: "hacer snorkel", de: "schnorcheln", en: "to go snorkelling", ru: "заниматься сноркелингом" }, clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "jugar al voleibol playa", de: "Beachvolleyball spielen", en: "to play beach volleyball", ru: "играть в пляжный волейбол" }, clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "tumbarse en la toalla", de: "sich auf das Handtuch legen", en: "to lie on the towel", ru: "лежать на полотенце" }, clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "tomar algo en\nun chiringuito", de: "etwas in einer Strandbar trinken", en: "to have a drink at a beach bar", ru: "выпить что-нибудь в пляжном баре" }, clickX: 16.7, clickY: 50, labelX: 28, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: { es: "darse un baño", de: "baden gehen", en: "to go for a swim", ru: "искупаться" }, clickX: 50, clickY: 50, labelX: 50, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: { es: "comer un helado", de: "ein Eis essen", en: "to eat an ice cream", ru: "есть мороженое" }, clickX: 83.3, clickY: 50, labelX: 74, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: { es: "jugar con la pelota", de: "mit dem Ball spielen", en: "to play with the ball", ru: "играть в мяч" }, clickX: 16.7, clickY: 83.3, labelX: 25, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "mirar el mar", de: "aufs Meer schauen", en: "to look at the sea", ru: "смотреть на море" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "escuchar música", de: "Musik hören", en: "to listen to music", ru: "слушать музыку" }, clickX: 83.3, clickY: 83.3, labelX: 74, labelY: 75, areaW: 30, areaH: 28 }
        ]
      }
    ]
  },

  ropa: {
    title: "La ropa",
    images: [
      {
        title: "La ropa – Bild 1",
        file: "ropa1.png",
        hotspots: [
          { wort: { es: "la camiseta", de: "das T-Shirt", en: "the T-shirt", ru: "футболка" }, clickX: 16.7, clickY: 22.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la camisa", de: "das Hemd", en: "the shirt", ru: "рубашка" }, clickX: 50, clickY: 22.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la blusa", de: "die Bluse", en: "the blouse", ru: "блузка" }, clickX: 83.3, clickY: 22.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el jersey", de: "der Pullover", en: "the jumper", ru: "джемпер" }, clickX: 16.7, clickY: 51.5, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la sudadera con capucha", de: "der Kapuzenpullover", en: "the hoodie", ru: "худи" }, clickX: 50, clickY: 51.5, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la chaqueta vaquera", de: "die Jeansjacke", en: "the denim jacket", ru: "джинсовая куртка" }, clickX: 83.3, clickY: 51.5, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el chaleco", de: "die Weste", en: "the waistcoat", ru: "жилет" }, clickX: 16.7, clickY: 82.5, labelX: 24, labelY: 75, areaW: 30, areaH: 26 },
          { wort: { es: "el top", de: "das Top", en: "the top", ru: "топ" }, clickX: 50, clickY: 82.5, labelX: 50, labelY: 75, areaW: 30, areaH: 26 },
          { wort: { es: "la sudadera", de: "das Sweatshirt", en: "the sweatshirt", ru: "свитшот" }, clickX: 83.3, clickY: 82.5, labelX: 76, labelY: 75, areaW: 30, areaH: 26 }
        ]
      },
      {
        title: "La ropa – Bild 2",
        file: "ropa2.png",
        hotspots: [
          { wort: { es: "los vaqueros", de: "die Jeans", en: "the jeans", ru: "джинсы" }, clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "los pantalones", de: "die Hose", en: "the trousers", ru: "брюки" }, clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "los pantalones cortos", de: "die Shorts", en: "the shorts", ru: "шорты" }, clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la falda", de: "der Rock", en: "the skirt", ru: "юбка" }, clickX: 16.7, clickY: 51.0, labelX: 24, labelY: 42, areaW: 31, areaH: 29 },
          { wort: { es: "el vestido", de: "das Kleid", en: "the dress", ru: "платье" }, clickX: 50, clickY: 51.0, labelX: 50, labelY: 42, areaW: 31, areaH: 29 },
          { wort: { es: "las mallas", de: "die Leggings", en: "the leggings", ru: "леггинсы" }, clickX: 83.3, clickY: 51.0, labelX: 76, labelY: 42, areaW: 31, areaH: 29 },
          { wort: { es: "el bañador (de hombre)", de: "die Badehose", en: "the swimming trunks", ru: "плавки" }, clickX: 16.7, clickY: 82.3, labelX: 24, labelY: 75, areaW: 31, areaH: 29 },
          { wort: { es: "el bikini", de: "der Bikini", en: "the bikini", ru: "бикини" }, clickX: 50, clickY: 82.3, labelX: 50, labelY: 75, areaW: 31, areaH: 29 },
          { wort: { es: "el bañador", de: "der Badeanzug", en: "the swimsuit", ru: "купальник" }, clickX: 83.3, clickY: 82.3, labelX: 76, labelY: 75, areaW: 31, areaH: 29 }
        ]
      },
      {
        title: "La ropa – Bild 3",
        file: "ropa3.png",
        hotspots: [
          { wort: { es: "los zapatos", de: "die Schuhe", en: "the shoes", ru: "туфли" }, clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: { es: "las zapatillas", de: "die Turnschuhe", en: "the trainers", ru: "кроссовки" }, clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: { es: "las sandalias", de: "die Sandalen", en: "the sandals", ru: "сандалии" }, clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: { es: "las botas", de: "die Stiefel", en: "the boots", ru: "сапоги" }, clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 27 },
          { wort: { es: "las chanclas", de: "die Flip-Flops", en: "the flip-flops", ru: "шлёпанцы" }, clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 27 },
          { wort: { es: "las zapatillas de casa", de: "die Hausschuhe", en: "the slippers", ru: "тапочки" }, clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 27 },
          { wort: { es: "los tacones", de: "die High Heels", en: "the high heels", ru: "туфли на каблуках" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 31, areaH: 31 },
          { wort: { es: "las botas de agua", de: "die Gummistiefel", en: "the wellington boots", ru: "резиновые сапоги" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 31, areaH: 31 },
          { wort: { es: "las botas de montaña", de: "die Wanderstiefel", en: "the hiking boots", ru: "походные ботинки" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La ropa – Bild 4",
        file: "ropa4.png",
        hotspots: [
          { wort: { es: "el sombrero", de: "der Hut", en: "the hat", ru: "шляпа" }, clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: { es: "la gorra", de: "die Kappe", en: "the cap", ru: "кепка" }, clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: { es: "el gorro de lana", de: "die Wollmütze", en: "the woolly hat", ru: "вязаная шапка" }, clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: { es: "las manoplas", de: "die Fäustlinge", en: "the mittens", ru: "варежки" }, clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 27 },
          { wort: { es: "los guantes", de: "die Handschuhe", en: "the gloves", ru: "перчатки" }, clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 27 },
          { wort: { es: "el pañuelo", de: "das Halstuch", en: "the neckerchief", ru: "платок" }, clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 27 },
          { wort: { es: "la bufanda", de: "der Schal", en: "the scarf", ru: "шарф" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 31, areaH: 31 },
          { wort: { es: "el cinturón", de: "der Gürtel", en: "the belt", ru: "ремень" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 31, areaH: 31 },
          { wort: { es: "los tirantes", de: "die Hosenträger", en: "the braces", ru: "подтяжки" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La ropa – Bild 5",
        file: "ropa5.png",
        hotspots: [
          { wort: { es: "los calcetines", de: "die Socken", en: "the socks", ru: "носки" }, clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "las medias", de: "die Strumpfhosen", en: "the tights", ru: "колготки" }, clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "los calzoncillos", de: "die Unterhosen", en: "the underpants", ru: "трусы" }, clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "las bragas", de: "die Slips", en: "the knickers", ru: "трусики" }, clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la camiseta interior", de: "das Unterhemd", en: "the undershirt", ru: "майка" }, clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el sujetador", de: "der BH", en: "the bra", ru: "бюстгальтер" }, clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el pijama", de: "der Pyjama", en: "the pyjamas", ru: "пижама" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el albornoz", de: "der Bademantel", en: "the dressing gown", ru: "халат" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el pantalón de pijama", de: "die Pyjamahose", en: "the pyjama bottoms", ru: "пижамные брюки" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La ropa – Bild 6",
        file: "ropa6.png",
        hotspots: [
          { wort: { es: "el abrigo", de: "der Mantel", en: "the coat", ru: "пальто" }, clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el cortavientos", de: "die Windjacke", en: "the windbreaker", ru: "ветровка" }, clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el chubasquero", de: "der Regenmantel", en: "the raincoat", ru: "дождевик" }, clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "la chaqueta de cuero", de: "die Lederjacke", en: "the leather jacket", ru: "кожаная куртка" }, clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la chaqueta vaquera", de: "die Jeansjacke", en: "the denim jacket", ru: "джинсовая куртка" }, clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la parka", de: "die Parka", en: "the parka", ru: "парка" }, clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el cárdigan", de: "die Strickjacke", en: "the cardigan", ru: "кардиган" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el anorak", de: "der Anorak", en: "the anorak", ru: "анорак" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la chaqueta de plumas", de: "die Daunenjacke", en: "the padded jacket", ru: "пуховик" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La ropa – Bild 7",
        file: "ropa7.png",
        hotspots: [
          { wort: { es: "el traje", de: "der Anzug", en: "the suit", ru: "костюм" }, clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el traje de chaqueta", de: "der Hosenanzug", en: "the jacket suit", ru: "брючный костюм" }, clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el chándal", de: "der Trainingsanzug", en: "the tracksuit", ru: "спортивный костюм" }, clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: { es: "el uniforme", de: "die Uniform", en: "the uniform", ru: "форма" }, clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el disfraz", de: "das Kostüm", en: "the costume", ru: "костюм" }, clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el mono", de: "der Overall", en: "the overalls", ru: "комбинезон" }, clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la americana", de: "das Sakko", en: "the blazer", ru: "пиджак" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el vestido de novia", de: "das Brautkleid", en: "the wedding dress", ru: "свадебное платье" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 }
        ]
      }
    ]
  },

  rutina: {
    title: "Rutina diaria",
    images: [
      {
        title: "Rutina diaria – Bild 1",
        file: "manana_v1.png",
        hotspots: [
          { wort: { es: "la mañana", de: "der Morgen", en: "the morning", ru: "утро" }, clickX: 50, clickY: 19.5, labelX: 58, labelY: 10, areaW: 86, areaH: 13 },
          { wort: { es: "despertarse", de: "aufwachen", en: "to wake up", ru: "просыпаться" }, clickX: 16.7, clickY: 37, labelX: 25, labelY: 31, areaW: 27, areaH: 20 },
          { wort: { es: "levantarse", de: "aufstehen", en: "to get up", ru: "вставать" }, clickX: 50, clickY: 37, labelX: 50, labelY: 31, areaW: 27, areaH: 20 },
          { wort: { es: "abrir la ventana", de: "das Fenster öffnen", en: "to open the window", ru: "открывать окно" }, clickX: 83.3, clickY: 37, labelX: 75, labelY: 31, areaW: 27, areaH: 20 },
          { wort: { es: "ducharse", de: "duschen", en: "to have a shower", ru: "принимать душ" }, clickX: 16.7, clickY: 61, labelX: 27, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "lavarse los dientes", de: "sich die Zähne putzen", en: "to brush your teeth", ru: "чистить зубы" }, clickX: 50, clickY: 61, labelX: 50, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "vestirse", de: "sich anziehen", en: "to get dressed", ru: "одеваться" }, clickX: 83.3, clickY: 61, labelX: 75, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "desayunar", de: "frühstücken", en: "to have breakfast", ru: "завтракать" }, clickX: 16.7, clickY: 84, labelX: 25, labelY: 78, areaW: 27, areaH: 20 },
          { wort: { es: "salir de casa", de: "das Haus verlassen", en: "to leave the house", ru: "выходить из дома" }, clickX: 50, clickY: 84, labelX: 50, labelY: 78, areaW: 27, areaH: 20 },
          { wort: { es: "ir al trabajo", de: "zur Arbeit gehen", en: "to go to work", ru: "идти на работу" }, clickX: 83.3, clickY: 84, labelX: 75, labelY: 78, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 2",
        file: "tarde_v1.png",
        hotspots: [
          { wort: { es: "la tarde", de: "der Nachmittag", en: "the afternoon", ru: "день" }, clickX: 50, clickY: 19.5, labelX: 58, labelY: 10, areaW: 86, areaH: 13 },
          { wort: { es: "trabajar", de: "arbeiten", en: "to work", ru: "работать" }, clickX: 16.7, clickY: 38, labelX: 25, labelY: 32, areaW: 27, areaH: 20 },
          { wort: { es: "almorzar", de: "zu Mittag essen", en: "to have lunch", ru: "обедать" }, clickX: 50, clickY: 38, labelX: 50, labelY: 32, areaW: 27, areaH: 20 },
          { wort: { es: "terminar de trabajar", de: "mit der Arbeit fertig sein", en: "to finish work", ru: "заканчивать работу" }, clickX: 83.3, clickY: 38, labelX: 75, labelY: 32, areaW: 27, areaH: 20 },
          { wort: { es: "volver a casa", de: "nach Hause zurückkehren", en: "to go home", ru: "возвращаться домой" }, clickX: 16.7, clickY: 61, labelX: 27, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "tomar un café", de: "einen Kaffee trinken", en: "to have a coffee", ru: "выпить кофе" }, clickX: 50, clickY: 61, labelX: 50, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "dar un paseo", de: "spazieren gehen", en: "to go for a walk", ru: "идти на прогулку" }, clickX: 83.3, clickY: 61, labelX: 75, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "hacer deporte", de: "Sport treiben", en: "to do exercise", ru: "заниматься спортом" }, clickX: 16.7, clickY: 84, labelX: 25, labelY: 78, areaW: 27, areaH: 20 },
          { wort: { es: "hacer la compra", de: "einkaufen gehen", en: "to do the shopping", ru: "делать покупки" }, clickX: 50, clickY: 84, labelX: 50, labelY: 78, areaW: 27, areaH: 20 },
          { wort: { es: "recoger a los niños", de: "die Kinder abholen", en: "to pick up the children", ru: "забирать детей" }, clickX: 83.3, clickY: 84, labelX: 75, labelY: 78, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 3",
        file: "noche_v1.png",
        hotspots: [
          { wort: { es: "la noche", de: "der Abend", en: "the evening", ru: "вечер" }, clickX: 50, clickY: 19.5, labelX: 60, labelY: 9, areaW: 86, areaH: 13 },
          { wort: { es: "preparar la cena", de: "das Abendessen vorbereiten", en: "to prepare dinner", ru: "готовить ужин" }, clickX: 16.7, clickY: 38, labelX: 25, labelY: 32, areaW: 27, areaH: 20 },
          { wort: { es: "poner la mesa", de: "den Tisch decken", en: "to set the table", ru: "накрывать на стол" }, clickX: 50, clickY: 38, labelX: 50, labelY: 32, areaW: 27, areaH: 20 },
          { wort: { es: "cenar", de: "zu Abend essen", en: "to have dinner", ru: "ужинать" }, clickX: 83.3, clickY: 38, labelX: 75, labelY: 32, areaW: 27, areaH: 20 },
          { wort: { es: "ver la tele", de: "fernsehen", en: "to watch TV", ru: "смотреть телевизор" }, clickX: 16.7, clickY: 61, labelX: 27, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "leer", de: "lesen", en: "to read", ru: "читать" }, clickX: 50, clickY: 61, labelX: 50, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "bañarse", de: "baden", en: "to have a bath", ru: "принимать ванну" }, clickX: 83.3, clickY: 61, labelX: 75, labelY: 55, areaW: 27, areaH: 20 },
          { wort: { es: "ponerse el pijama", de: "den Pyjama anziehen", en: "to put on your pyjamas", ru: "надевать пижаму" }, clickX: 16.7, clickY: 84, labelX: 25, labelY: 78, areaW: 27, areaH: 20 },
          { wort: { es: "apagar la luz", de: "das Licht ausmachen", en: "to turn off the light", ru: "выключать свет" }, clickX: 50, clickY: 84, labelX: 50, labelY: 78, areaW: 27, areaH: 20 },
          { wort: { es: "acostarse", de: "ins Bett gehen", en: "to go to bed", ru: "ложиться спать" }, clickX: 83.3, clickY: 84, labelX: 75, labelY: 78, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 4",
        file: "finde_v1.png",
        hotspots: [
          { wort: { es: "el fin de semana", de: "das Wochenende", en: "the weekend", ru: "выходные" }, clickX: 50, clickY: 19.5, labelX: 70, labelY: 9, areaW: 86, areaH: 13 },
          { wort: { es: "levantarse tarde", de: "spät aufstehen", en: "to get up late", ru: "поздно вставать" }, clickX: 16.7, clickY: 37, labelX: 25, labelY: 31, areaW: 27, areaH: 20 },
          { wort: { es: "desayunar tranquilamente", de: "in Ruhe frühstücken", en: "to have a leisurely breakfast", ru: "спокойно завтракать" }, clickX: 50, clickY: 37, labelX: 50, labelY: 31, areaW: 27, areaH: 20 },
          { wort: { es: "hacer una excursión", de: "einen Ausflug machen", en: "to go on an excursion", ru: "отправиться на экскурсию" }, clickX: 83.3, clickY: 37, labelX: 75, labelY: 31, areaW: 27, areaH: 20 },
          { wort: { es: "visitar a la familia", de: "die Familie besuchen", en: "to visit the family", ru: "навещать семью" }, clickX: 16.7, clickY: 60, labelX: 27, labelY: 54, areaW: 27, areaH: 20 },
          { wort: { es: "quedar con amigos", de: "sich mit Freunden treffen", en: "to meet friends", ru: "встречаться с друзьями" }, clickX: 50, clickY: 60, labelX: 50, labelY: 54, areaW: 27, areaH: 20 },
          { wort: { es: "ir de compras", de: "shoppen gehen", en: "to go shopping", ru: "ходить по магазинам" }, clickX: 83.3, clickY: 60, labelX: 75, labelY: 54, areaW: 27, areaH: 20 },
          { wort: { es: "ver una película", de: "einen Film schauen", en: "to watch a film", ru: "смотреть фильм" }, clickX: 16.7, clickY: 86, labelX: 25, labelY: 80, areaW: 27, areaH: 20 },
          { wort: { es: "salir a cenar", de: "essen gehen", en: "to go out for dinner", ru: "идти ужинать вне дома" }, clickX: 50, clickY: 86, labelX: 50, labelY: 80, areaW: 27, areaH: 20 },
          { wort: { es: "descansar", de: "sich ausruhen", en: "to rest", ru: "отдыхать" }, clickX: 83.3, clickY: 86, labelX: 75, labelY: 80, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 5",
        file: "rutina1.png",
        hotspots: [
          { wort: { es: "despertar a los niños", de: "die Kinder wecken", en: "to wake the children", ru: "будить детей" }, clickX: 16.7, clickY: 20, labelX: 28, labelY: 13, areaW: 27, areaH: 22 },
          { wort: { es: "preparar el desayuno", de: "das Frühstück vorbereiten", en: "to prepare breakfast", ru: "готовить завтрак" }, clickX: 50, clickY: 20, labelX: 50, labelY: 13, areaW: 27, areaH: 22 },
          { wort: { es: "llevar a los niños al colegio", de: "die Kinder zur Schule bringen", en: "to take the children to school", ru: "отводить детей в школу" }, clickX: 83.3, clickY: 20, labelX: 72, labelY: 13, areaW: 27, areaH: 22 },
          { wort: { es: "recoger a los niños", de: "die Kinder abholen", en: "to pick up the children", ru: "забирать детей" }, clickX: 16.7, clickY: 50, labelX: 28, labelY: 42, areaW: 27, areaH: 22 },
          { wort: { es: "ayudar con los deberes", de: "bei den Hausaufgaben helfen", en: "to help with homework", ru: "помогать с домашним заданием" }, clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 27, areaH: 22 },
          { wort: { es: "preparar la merienda", de: "den Imbiss vorbereiten", en: "to prepare a snack", ru: "готовить полдник" }, clickX: 83.3, clickY: 50, labelX: 72, labelY: 42, areaW: 27, areaH: 22 },
          { wort: { es: "jugar juntos", de: "zusammen spielen", en: "to play together", ru: "играть вместе" }, clickX: 16.7, clickY: 78, labelX: 28, labelY: 70, areaW: 27, areaH: 22 },
          { wort: { es: "leer un cuento", de: "eine Geschichte vorlesen", en: "to read a story", ru: "читать сказку" }, clickX: 50, clickY: 78, labelX: 50, labelY: 70, areaW: 27, areaH: 22 },
          { wort: { es: "acostar a los niños", de: "die Kinder ins Bett bringen", en: "to put the children to bed", ru: "укладывать детей спать" }, clickX: 83.3, clickY: 78, labelX: 72, labelY: 70, areaW: 27, areaH: 22 }
        ]
      }
    ]
  },

  casa: {
    title: "La casa",
    images: [
      {
        title: "La casa – Bild 1",
        file: "Haus2.png",
        hotspots: [
          { wort: { es: "el piso", de: "die Wohnung", en: "the flat", ru: "квартира" }, clickX: 11.5, clickY: 10.5, labelX: 14, labelY: 19, areaW: 20.5, areaH: 14.5, shape: "circle", zoomImage: "Haus3.png", zoomLabelX: 50, zoomLabelY: 8 },
          { wort: { es: "el rascacielos", de: "der Wolkenkratzer", en: "the skyscraper", ru: "небоскрёб" }, clickX: 34.5, clickY: 23.5, labelX: 34.5, labelY: 42, areaW: 26, areaH: 39 },
          { wort: { es: "el bloque de pisos", de: "der Wohnblock", en: "the apartment block", ru: "многоквартирный дом" }, clickX: 75.5, clickY: 23.5, labelX: 75.5, labelY: 42, areaW: 40, areaH: 38 },
          { wort: { es: "las casas adosadas", de: "die Reihenhäuser", en: "the terraced houses", ru: "таунхаусы" }, clickX: 25.5, clickY: 53.2, labelX: 25.5, labelY: 66.5, areaW: 47, areaH: 25 },
          { wort: { es: "la casa pareada", de: "das Doppelhaus", en: "the semi-detached house", ru: "дом на две семьи" }, clickX: 75, clickY: 53, labelX: 75, labelY: 66.5, areaW: 41, areaH: 25 },
          { wort: { es: "el chalet", de: "das Einfamilienhaus", en: "the detached house", ru: "отдельный дом" }, clickX: 25.5, clickY: 84, labelX: 25.5, labelY: 96, areaW: 42, areaH: 24 },
          { wort: { es: "la urbanización", de: "die Wohnsiedlung", en: "the housing estate", ru: "жилой комплекс" }, clickX: 76.5, clickY: 84.5, labelX: 76.5, labelY: 96, areaW: 43, areaH: 24 }
        ]
      },
      {
        title: "La casa – Bild 2",
        file: "Haus4.png",
        hotspots: [
          { wort: { es: "la chimenea", de: "der Schornstein", en: "the chimney", ru: "дымоход" }, clickX: 63.9, clickY: 7.7, labelX: 67, labelY: 4.5 },
          { wort: { es: "el tejado", de: "das Dach", en: "the roof", ru: "крыша" }, clickX: 76.1, clickY: 16.0, labelX: 73, labelY: 11.5 },
          { wort: { es: "el canalón", de: "die Dachrinne", en: "the gutter", ru: "водосток" }, clickX: 92.0, clickY: 28.7, labelX: 84, labelY: 24.5 },
          { wort: { es: "el balcón", de: "der Balkon", en: "the balcony", ru: "балкон" }, clickX: 28.2, clickY: 39.6, labelX: 21, labelY: 31.5, areaW: 29, areaH: 18 },
          { wort: { es: "la bajante", de: "das Fallrohr", en: "the downpipe", ru: "водосточная труба" }, clickX: 51.3, clickY: 40.6, labelX: 58, labelY: 36.5 },
          { wort: { es: "la fachada", de: "die Fassade", en: "the façade", ru: "фасад" }, clickX: 86.3, clickY: 44.6, labelX: 77, labelY: 39.5 },
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 30.7, clickY: 67.2, labelX: 31, labelY: 55.5, areaW: 10, areaH: 24 },
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 62.7, clickY: 66.1, labelX: 72, labelY: 53.3, areaW: 12, areaH: 16.5 },
          { wort: { es: "las escaleras", de: "die Treppe", en: "the stairs", ru: "лестница" }, clickX: 20.1, clickY: 89.6, labelX: 27, labelY: 88.8 },
          { wort: { es: "la terraza", de: "die Terrasse", en: "the terrace", ru: "терраса" }, clickX: 84.3, clickY: 85.6, labelX: 82.5, labelY: 90.5, areaW: 30, areaH: 19 }
        ]
      },
      {
        title: "La casa – Bild 3",
        file: "Haus5.png",
        hotspots: [
          { wort: { es: "el timbre", de: "die Klingel", en: "the doorbell", ru: "звонок" }, clickX: 10.9, clickY: 18.9, labelX: 18, labelY: 14.5, areaW: 8, areaH: 10 },
          { wort: { es: "el buzón", de: "der Briefkasten", en: "the letterbox", ru: "почтовый ящик" }, clickX: 12.0, clickY: 29.4, labelX: 19, labelY: 25.5, areaW: 12, areaH: 13 },
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 26.0, clickY: 25.5, labelX: 35, labelY: 22.5, areaW: 15, areaH: 24 },
          { wort: { es: "la persiana", de: "der Rollladen", en: "the roller shutter", ru: "рольставни" }, clickX: 69.5, clickY: 19.0, labelX: 68, labelY: 14.5, areaW: 24, areaH: 18 },
          { wort: { es: "la chimenea", de: "der Schornstein", en: "the chimney", ru: "дымоход" }, clickX: 18.5, clickY: 62.5, labelX: 31, labelY: 62.5, areaW: 8, areaH: 10 },
          { wort: { es: "la ventana de tejado", de: "das Dachfenster", en: "the roof window", ru: "мансардное окно" }, clickX: 46.8, clickY: 70.5, labelX: 63, labelY: 65.5, areaW: 22, areaH: 17 },
          { wort: { es: "el canalón", de: "die Dachrinne", en: "the gutter", ru: "водосток" }, clickX: 41.0, clickY: 82.0, labelX: 57.5, labelY: 77.5, areaW: 24, areaH: 8 },
          { wort: { es: "la bajante", de: "das Fallrohr", en: "the downpipe", ru: "водосточная труба" }, clickX: 20.5, clickY: 92.0, labelX: 37.5, labelY: 88.5, areaW: 12, areaH: 12 },
          { wort: { es: "la barandilla del balcón", de: "das Balkongeländer", en: "the balcony railing", ru: "балконные перила" }, clickX: 77.5, clickY: 78.0, labelX: 68, labelY: 72.5, areaW: 31, areaH: 25 }
        ]
      },
      {
        title: "La casa – Bild 4",
        file: "Haus6.png",
        hotspots: [
          { wort: { es: "el ático", de: "das Dachgeschoss", en: "the attic", ru: "мансарда" }, clickX: 50.0, clickY: 16.5, labelX: 39, labelY: 11.5, areaW: 48, areaH: 18 },
          { wort: { es: "el segundo piso", de: "der zweite Stock", en: "the second floor", ru: "третий этаж" }, clickX: 34.5, clickY: 31.5, labelX: 31, labelY: 26.5, areaW: 31, areaH: 15 },
          { wort: { es: "el primer piso", de: "der erste Stock", en: "the first floor", ru: "второй этаж" }, clickX: 34.5, clickY: 47.5, labelX: 31, labelY: 42.5, areaW: 31, areaH: 15 },
          { wort: { es: "la planta baja", de: "das Erdgeschoss", en: "the ground floor", ru: "первый этаж" }, clickX: 34.5, clickY: 63.5, labelX: 31, labelY: 58.5, areaW: 31, areaH: 15 },
          { wort: { es: "la escalera", de: "die Leiter", en: "the ladder", ru: "лестница" }, clickX: 83.6, clickY: 52.0, labelX: 77.5, labelY: 50.5, areaW: 19, areaH: 43 },
          { wort: { es: "el ascensor", de: "der Aufzug", en: "the lift", ru: "лифт" }, clickX: 62.8, clickY: 49.5, labelX: 79, labelY: 45, areaW: 12, areaH: 35 },
          { wort: { es: "el portal", de: "der Hausflur", en: "the entrance hall", ru: "подъезд" }, clickX: 41.5, clickY: 84.0, labelX: 43, labelY: 79.5, areaW: 17, areaH: 18 },
          { wort: { es: "los buzones", de: "die Briefkästen", en: "the letterboxes", ru: "почтовые ящики" }, clickX: 21.0, clickY: 87.7, labelX: 27.5, labelY: 85, areaW: 13, areaH: 11 },
          { wort: { es: "el garaje", de: "die Garage", en: "the garage", ru: "гараж" }, clickX: 79.5, clickY: 87.8, labelX: 78, labelY: 84, areaW: 36, areaH: 18 }
        ]
      },
      {
        title: "La casa – Bild 5",
        file: "Haus7.png",
        hotspots: [
          { wort: { es: "el porche", de: "die Veranda", en: "the porch", ru: "крыльцо" }, clickX: 50.0, clickY: 22.0, labelX: 40, labelY: 16.5, areaW: 37, areaH: 18 },
          { wort: { es: "la entrada", de: "der Eingang", en: "the entrance", ru: "вход" }, clickX: 56.0, clickY: 30.5, labelX: 65, labelY: 25.5, areaW: 11, areaH: 14 },
          { wort: { es: "el jardín", de: "der Garten", en: "the garden", ru: "сад" }, clickX: 18.5, clickY: 43.0, labelX: 27.5, labelY: 38, areaW: 24, areaH: 18 },
          { wort: { es: "el césped", de: "der Rasen", en: "the lawn", ru: "газон" }, clickX: 73.0, clickY: 50.0, labelX: 82, labelY: 45, areaW: 28, areaH: 22 },
          { wort: { es: "el camino", de: "der Weg", en: "the path", ru: "дорожка" }, clickX: 52.0, clickY: 59.5, labelX: 63, labelY: 54.5, areaW: 20, areaH: 28 },
          { wort: { es: "la valla", de: "der Zaun", en: "the fence", ru: "забор" }, clickX: 17.5, clickY: 70.5, labelX: 27.5, labelY: 65.5, areaW: 26, areaH: 16 },
          { wort: { es: "la verja", de: "das Tor", en: "the gate", ru: "ворота" }, clickX: 50.0, clickY: 76.0, labelX: 40.5, labelY: 71, areaW: 18, areaH: 18 },
          { wort: { es: "la acera", de: "der Gehweg", en: "the pavement", ru: "тротуар" }, clickX: 74.0, clickY: 88.5, labelX: 83, labelY: 83.5, areaW: 34, areaH: 12 },
          { wort: { es: "la calle", de: "die Straße", en: "the street", ru: "улица" }, clickX: 32.0, clickY: 96.0, labelX: 22, labelY: 91, areaW: 56, areaH: 8 }
        ]
      },
      {
        title: "La casa – Bild 6",
        file: "Haus9.png",
        openLabel: { wort: { es: "la habitación", de: "das Zimmer", en: "the room", ru: "комната" }, labelX: 82, labelY: 9 },
        speakOpenLabel: true,
        hotspots: [
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 10.8, clickY: 49.5, labelX: 18, labelY: 37, areaW: 17, areaH: 56 },
          { wort: { es: "el interruptor", de: "der Lichtschalter", en: "the light switch", ru: "выключатель" }, clickX: 4.9, clickY: 46.5, labelX: 12.5, labelY: 42.5, areaW: 6, areaH: 12 },
          { wort: { es: "el techo", de: "die Decke", en: "the ceiling", ru: "потолок" }, clickX: 50.0, clickY: 13.5, labelX: 57, labelY: 8.5, areaW: 62, areaH: 22 },
          { wort: { es: "la pared", de: "die Wand", en: "the wall", ru: "стена" }, clickX: 52.5, clickY: 43.5, labelX: 61, labelY: 38.5, areaW: 42, areaH: 30 },
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 88.0, clickY: 40.0, labelX: 79.5, labelY: 34.5, areaW: 17, areaH: 27 },
          { wort: { es: "el alféizar", de: "die Fensterbank", en: "the window sill", ru: "подоконник" }, clickX: 86.0, clickY: 51.0, labelX: 79.5, labelY: 56.5, areaW: 18, areaH: 8 },
          { wort: { es: "el enchufe", de: "die Steckdose", en: "the socket", ru: "розетка" }, clickX: 26.0, clickY: 60.0, labelX: 18.5, labelY: 65, areaW: 7, areaH: 8 },
          { wort: { es: "la esquina", de: "die Ecke", en: "the corner", ru: "угол" }, clickX: 72.8, clickY: 61.5, labelX: 80, labelY: 66, areaW: 8, areaH: 8, shape: "circle" },
          { wort: { es: "el suelo", de: "der Fußboden", en: "the floor", ru: "пол" }, clickX: 57.0, clickY: 80.5, labelX: 65.5, labelY: 74.5, areaW: 62, areaH: 38 }
        ]
      },
      {
        title: "La casa – Bild 7",
        file: "zimmer2.png",
        hotspots: [
          { wort: { es: "el marco", de: "der Rahmen", en: "the frame", ru: "рама" }, clickX: 18.8, clickY: 17.1, labelX: 25.5, labelY: 11.5, areaW: 14, areaH: 14 },
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 36.8, clickY: 51.0, labelX: 23.5, labelY: 36.5, areaW: 24, areaH: 60 },
          { wort: { es: "la pared", de: "die Wand", en: "the wall", ru: "стена" }, clickX: 83.3, clickY: 18.1, labelX: 88.5, labelY: 12.5, areaW: 22, areaH: 18 },
          { wort: { es: "la bisagra", de: "das Scharnier", en: "the hinge", ru: "петля" }, clickX: 56.4, clickY: 51.5, labelX: 66, labelY: 28, areaW: 8, areaH: 56 },
          { wort: { es: "el interruptor", de: "der Lichtschalter", en: "the light switch", ru: "выключатель" }, clickX: 9.4, clickY: 46.0, labelX: 13.5, labelY: 41.5, areaW: 9, areaH: 8 },
          { wort: { es: "el enchufe", de: "die Steckdose", en: "the socket", ru: "розетка" }, clickX: 9.5, clickY: 69.1, labelX: 14.5, labelY: 64.5, areaW: 9, areaH: 8 },
          { wort: { es: "el umbral", de: "die Schwelle", en: "the threshold", ru: "порог" }, clickX: 42.3, clickY: 86.2, labelX: 51, labelY: 81.5, areaW: 18, areaH: 10 },
          { wort: { es: "la manilla", de: "die Klinke", en: "the handle", ru: "ручка" }, clickX: 78.2, clickY: 42.4, labelX: 86, labelY: 37.5, areaW: 14, areaH: 12 },
          { wort: { es: "el ojo de la cerradura", de: "das Schlüsselloch", en: "the keyhole", ru: "замочная скважина" }, clickX: 74.5, clickY: 51.8, labelX: 85.5, labelY: 48.5, areaW: 6, areaH: 7 },
          { wort: { es: "la llave", de: "der Schlüssel", en: "the key", ru: "ключ" }, clickX: 80.5, clickY: 61.1, labelX: 88.5, labelY: 57.5, areaW: 14, areaH: 11 }
        ]
      },
      {
        title: "La casa – Bild 8",
        file: "zimmer3.png",
        hotspots: [
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 34.0, clickY: 20.5, labelX: 24, labelY: 15, areaW: 57, areaH: 57 },
          { wort: { es: "el marco", de: "der Rahmen", en: "the frame", ru: "рама" }, clickX: 76.0, clickY: 56.0, labelX: 83, labelY: 50, areaW: 16, areaH: 60 },
          { wort: { es: "el cristal", de: "die Scheibe", en: "the pane", ru: "стекло" }, clickX: 41.0, clickY: 44.0, labelX: 26.5, labelY: 37, areaW: 35, areaH: 33 },
          { wort: { es: "la veneciana", de: "die Jalousie", en: "the Venetian blind", ru: "жалюзи" }, clickX: 68.8, clickY: 28.7, labelX: 80, labelY: 22.5, areaW: 23, areaH: 13 },
          { wort: { es: "la manilla", de: "die Klinke", en: "the handle", ru: "ручка" }, clickX: 28.6, clickY: 48.5, labelX: 15.5, labelY: 44.5, areaW: 6, areaH: 9 },
          { wort: { es: "el alféizar", de: "die Fensterbank", en: "the window sill", ru: "подоконник" }, clickX: 22.8, clickY: 77.2, labelX: 25, labelY: 72.5, areaW: 43, areaH: 11 }
        ]
      },
      {
        title: "La casa – Bild 9",
        file: "haus10.png",
        hotspots: [
          { wort: { es: "la casa", de: "das Haus", en: "the house", ru: "дом" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el tejado", de: "das Dach", en: "the roof", ru: "крыша" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la chimenea", de: "der Schornstein", en: "the chimney", ru: "дымоход" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el canalón", de: "die Dachrinne", en: "the gutter", ru: "водосток" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el bajante", de: "das Fallrohr", en: "the downpipe", ru: "водосточная труба" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la fachada", de: "die Fassade", en: "the façade", ru: "фасад" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el balcón", de: "der Balkon", en: "the balcony", ru: "балкон" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 10",
        file: "haus11.png",
        hotspots: [
          { wort: { es: "la terraza", de: "die Terrasse", en: "the terrace", ru: "терраса" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la piscina", de: "der Pool", en: "the pool", ru: "бассейн" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la fachada", de: "die Fassade", en: "the façade", ru: "фасад" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la escalera", de: "die Leiter", en: "the ladder", ru: "лестница" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el porche", de: "die Veranda", en: "the porch", ru: "крыльцо" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la barandilla", de: "das Geländer", en: "the handrail", ru: "перила" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la luz exterior", de: "die Außenlampe", en: "the outdoor light", ru: "уличный светильник" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el toldo", de: "die Markise", en: "the awning", ru: "маркиза" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la antena parabólica", de: "die Satellitenschüssel", en: "the satellite dish", ru: "спутниковая тарелка" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 11",
        file: "haus12.png",
        hotspots: [
          { wort: { es: "el jardín", de: "der Garten", en: "the garden", ru: "сад" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el césped", de: "der Rasen", en: "the lawn", ru: "газон" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el camino", de: "der Weg", en: "the path", ru: "дорожка" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la valla", de: "der Zaun", en: "the fence", ru: "забор" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la verja", de: "das Tor", en: "the gate", ru: "ворота" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el seto", de: "die Hecke", en: "the hedge", ru: "живая изгородь" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el árbol", de: "der Baum", en: "the tree", ru: "дерево" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "las flores", de: "die Blumen", en: "the flowers", ru: "цветы" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la jardinera", de: "der Blumenkasten", en: "the planter", ru: "кашпо" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 12",
        file: "haus13.png",
        hotspots: [
          { wort: { es: "la calle", de: "die Straße", en: "the street", ru: "улица" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la acera", de: "der Gehweg", en: "the pavement", ru: "тротуар" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la entrada para coches", de: "die Einfahrt", en: "the driveway", ru: "подъездная дорожка" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el aparcamiento", de: "der Parkplatz", en: "the parking area", ru: "парковка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el cubo de basura", de: "der Mülleimer", en: "the bin", ru: "мусорное ведро" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el garaje", de: "die Garage", en: "the garage", ru: "гараж" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el carport", de: "das Carport", en: "the carport", ru: "навес для машины" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el buzón", de: "der Briefkasten", en: "the letterbox", ru: "почтовый ящик" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el número de la casa", de: "die Hausnummer", en: "the house number", ru: "номер дома" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 13",
        file: "haus14.png",
        hotspots: [
          { wort: { es: "el portal", de: "der Hausflur", en: "the entrance hall", ru: "подъезд" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el timbre", de: "die Klingel", en: "the doorbell", ru: "звонок" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el portero automático", de: "die Gegensprechanlage", en: "the intercom", ru: "домофон" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el umbral", de: "die Schwelle", en: "the threshold", ru: "порог" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la manilla", de: "die Klinke", en: "the handle", ru: "ручка" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el pomo", de: "der Türknauf", en: "the doorknob", ru: "дверная ручка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el ojo de la cerradura", de: "das Schlüsselloch", en: "the keyhole", ru: "замочная скважина" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la bisagra", de: "das Scharnier", en: "the hinge", ru: "петля" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el marco", de: "der Rahmen", en: "the frame", ru: "рама" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 14",
        file: "haus15.png",
        hotspots: [
          { wort: { es: "la persiana", de: "der Rollladen", en: "the roller shutter", ru: "рольставни" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la veneciana", de: "die Jalousie", en: "the Venetian blind", ru: "жалюзи" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el cristal", de: "die Scheibe", en: "the pane", ru: "стекло" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "las rejas", de: "die Gitter", en: "the bars", ru: "решётки" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la ventana de tejado", de: "das Dachfenster", en: "the roof window", ru: "мансардное окно" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la claraboya", de: "das Oberlicht", en: "the skylight", ru: "световой люк" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el alféizar", de: "die Fensterbank", en: "the window sill", ru: "подоконник" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el postigo", de: "der Fensterladen", en: "the shutter", ru: "ставня" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la mosquitera", de: "das Fliegengitter", en: "the fly screen", ru: "москитная сетка" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 15",
        file: "haus16.png",
        hotspots: [
          { wort: { es: "el bloque de pisos", de: "der Wohnblock", en: "the apartment block", ru: "многоквартирный дом" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el piso", de: "die Wohnung", en: "the flat", ru: "квартира" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el ascensor", de: "der Aufzug", en: "the lift", ru: "лифт" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el patio", de: "der Innenhof", en: "the courtyard", ru: "внутренний двор" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la azotea", de: "die Dachterrasse", en: "the roof terrace", ru: "терраса на крыше" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la salida de emergencia", de: "der Notausgang", en: "the emergency exit", ru: "аварийный выход" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el aparcabicis", de: "der Fahrradständer", en: "the bicycle rack", ru: "велопарковка" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "los contenedores", de: "die Container", en: "the bins", ru: "контейнеры" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la portería", de: "die Pförtnerloge", en: "the porter's lodge", ru: "консьержная" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 16",
        file: "haus17.png",
        hotspots: [
          { wort: { es: "el jardín de invierno", de: "der Wintergarten", en: "the conservatory", ru: "зимний сад" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el aire acondicionado", de: "die Klimaanlage", en: "the air conditioner", ru: "кондиционер" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la habitación", de: "das Zimmer", en: "the room", ru: "комната" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el suelo", de: "der Fußboden", en: "the floor", ru: "пол" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el techo", de: "die Decke", en: "the ceiling", ru: "потолок" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la pared", de: "die Wand", en: "the wall", ru: "стена" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la esquina", de: "die Ecke", en: "the corner", ru: "угол" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el enchufe", de: "die Steckdose", en: "the socket", ru: "розетка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el interruptor", de: "der Lichtschalter", en: "the light switch", ru: "выключатель" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 17",
        file: "Haus8.png",
        hotspots: [
          { wort: { es: "el desván", de: "der Dachboden", en: "the loft", ru: "чердак" }, clickX: 50, clickY: 16.5, labelX: 50, labelY: 12, areaW: 47, areaH: 18 },
          { wort: { es: "la habitación infantil", de: "das Kinderzimmer", en: "the children's room", ru: "детская комната" }, clickX: 34.2, clickY: 33.5, labelX: 28, labelY: 38, areaW: 28, areaH: 17 },
          { wort: { es: "el dormitorio", de: "das Schlafzimmer", en: "the bedroom", ru: "спальня" }, clickX: 65.8, clickY: 33.8, labelX: 69, labelY: 38, areaW: 30, areaH: 17 },
          { wort: { es: "el salón", de: "das Wohnzimmer", en: "the living room", ru: "гостиная" }, clickX: 30.0, clickY: 52.2, labelX: 22, labelY: 56, areaW: 21, areaH: 18 },
          { wort: { es: "el comedor", de: "das Esszimmer", en: "the dining room", ru: "столовая" }, clickX: 51.5, clickY: 51.0, labelX: 51, labelY: 51, areaW: 16, areaH: 18 },
          { wort: { es: "la cocina", de: "die Küche", en: "the kitchen", ru: "кухня" }, clickX: 72.0, clickY: 51.0, labelX: 76, labelY: 57, areaW: 18, areaH: 18 },
          { wort: { es: "el baño", de: "das Badezimmer", en: "the bathroom", ru: "ванная комната" }, clickX: 29.5, clickY: 70, labelX: 16.5, labelY: 74, areaW: 17, areaH: 16 },
          { wort: { es: "el pasillo", de: "der Flur", en: "the hallway", ru: "прихожая" }, clickX: 40.5, clickY: 66.0, labelX: 40.5, labelY: 66.5, areaW: 8, areaH: 24 },
          { wort: { es: "el despacho", de: "das Arbeitszimmer", en: "the study", ru: "кабинет" }, clickX: 58.5, clickY: 70, labelX: 63.5, labelY: 75, areaW: 16, areaH: 16 },
          { wort: { es: "el lavadero", de: "die Waschküche", en: "the utility room", ru: "прачечная" }, clickX: 74.5, clickY: 70, labelX: 84, labelY: 74, areaW: 13, areaH: 16 },
          { wort: { es: "el sótano", de: "der Keller", en: "the basement", ru: "подвал" }, clickX: 35.0, clickY: 86.0, labelX: 18, labelY: 91, areaW: 26, areaH: 15 },
          { wort: { es: "el trastero", de: "der Abstellraum", en: "the storage room", ru: "кладовка" }, clickX: 65.5, clickY: 86.0, labelX: 73, labelY: 91, areaW: 31, areaH: 15 }
        ]
      }
    ]
  },

  habitaciones: {
    title: "Las habitaciones",
    images: [
      {
        title: "Las habitaciones – Bild 1",
        file: "Haus8.png",
        disableWordInLearnMode: true,
        hotspots: [
          { wort: { es: "el desván", de: "der Dachboden", en: "the loft", ru: "чердак" }, clickX: 50, clickY: 16.5, labelX: 50, labelY: 12, areaW: 47, areaH: 18, openFolderKey: "desvan", openDelay: 900 },
          { wort: { es: "la habitación infantil", de: "das Kinderzimmer", en: "the children's room", ru: "детская комната" }, clickX: 34.2, clickY: 33.5, labelX: 28, labelY: 38, areaW: 28, areaH: 17, openFolderKey: "cuartoNinos", openDelay: 900 },
          { wort: { es: "el dormitorio", de: "das Schlafzimmer", en: "the bedroom", ru: "спальня" }, clickX: 65.8, clickY: 33.8, labelX: 69, labelY: 38, areaW: 30, areaH: 17 },
          { wort: { es: "el salón", de: "das Wohnzimmer", en: "the living room", ru: "гостиная" }, clickX: 30.0, clickY: 52.2, labelX: 22, labelY: 56, areaW: 21, areaH: 18, openFolderKey: "salon" },
          { wort: { es: "el comedor", de: "das Esszimmer", en: "the dining room", ru: "столовая" }, clickX: 51.5, clickY: 51.0, labelX: 51, labelY: 51, areaW: 16, areaH: 18 },
          { wort: { es: "la cocina", de: "die Küche", en: "the kitchen", ru: "кухня" }, clickX: 72.0, clickY: 51.0, labelX: 76, labelY: 57, areaW: 18, areaH: 18, openFolderKey: "cocina", openDelay: 900 },
          { wort: { es: "el baño", de: "das Badezimmer", en: "the bathroom", ru: "ванная комната" }, clickX: 29.5, clickY: 70, labelX: 16.5, labelY: 74, areaW: 17, areaH: 16, openFolderKey: "bano", openDelay: 900 },
          { wort: { es: "el pasillo", de: "der Flur", en: "the hallway", ru: "прихожая" }, clickX: 40.5, clickY: 66.0, labelX: 40.5, labelY: 66.5, areaW: 8, areaH: 24, openFolderKey: "pasillo", openDelay: 900 },
          { wort: { es: "el despacho", de: "das Arbeitszimmer", en: "the study", ru: "кабинет" }, clickX: 58.5, clickY: 70, labelX: 63.5, labelY: 75, areaW: 16, areaH: 16, openFolderKey: "despacho" },
          { wort: { es: "el lavadero", de: "die Waschküche", en: "the utility room", ru: "прачечная" }, clickX: 74.5, clickY: 70, labelX: 84, labelY: 74, areaW: 13, areaH: 16, openFolderKey: "lavadero", openDelay: 900 },
          { wort: { es: "el sótano", de: "der Keller", en: "the basement", ru: "подвал" }, clickX: 35.0, clickY: 86.0, labelX: 18, labelY: 91, areaW: 26, areaH: 15, openFolderKey: "sotano", openDelay: 900 },
          { wort: { es: "el trastero", de: "der Abstellraum", en: "the storage room", ru: "кладовка" }, clickX: 65.5, clickY: 86.0, labelX: 73, labelY: 91, areaW: 31, areaH: 15 }
        ]
      }
    ]
  },

  salon: {
    title: "El salón",
    images: [
      {
        title: "El salón – Bild 1",
        file: "salon1.png",
        openLabel: { wort: { es: "el salón", de: "das Wohnzimmer", en: "the living room", ru: "гостиная" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 14.5, clickY: 31.5, labelX: 17.5, labelY: 22.0, areaW: 16, areaH: 30 },
          { wort: { es: "la cortina", de: "der Vorhang", en: "the curtain", ru: "штора" }, clickX: 28.0, clickY: 34.0, labelX: 33.0, labelY: 26.0, areaW: 8, areaH: 38 },
          { wort: { es: "la lámpara de pie", de: "die Stehlampe", en: "the floor lamp", ru: "торшер" }, clickX: 40.0, clickY: 40.0, labelX: 47.0, labelY: 31.5, areaW: 15, areaH: 24 },
          { wort: { es: "el cuadro", de: "das Bild", en: "the picture", ru: "картина" }, clickX: 57.0, clickY: 29.5, labelX: 64.0, labelY: 21.5, areaW: 17, areaH: 19 },
          { wort: { es: "el televisor", de: "der Fernseher", en: "the television / the TV", ru: "телевизор" }, clickX: 59.0, clickY: 49.0, labelX: 65.0, labelY: 42.0, areaW: 29, areaH: 11 },
          { wort: { es: "la planta", de: "die Pflanze", en: "the plant", ru: "растение" }, clickX: 82.0, clickY: 56.0, labelX: 76.0, labelY: 49.0, areaW: 14, areaH: 28 },
          { wort: { es: "el sofá", de: "das Sofa", en: "the sofa", ru: "диван" }, clickX: 12.0, clickY: 63.0, labelX: 21.0, labelY: 56.0, areaW: 40, areaH: 20 },
          { wort: { es: "el sillón", de: "der Sessel", en: "the armchair", ru: "кресло" }, clickX: 84.0, clickY: 79.0, labelX: 76.5, labelY: 71.5, areaW: 26, areaH: 31 },
          { wort: { es: "la mesa de centro", de: "der Couchtisch", en: "the coffee table", ru: "журнальный столик" }, clickX: 49.0, clickY: 79.0, labelX: 53.5, labelY: 72.0, areaW: 30, areaH: 22 },
          { wort: { es: "la alfombra", de: "der Teppich / Läufer", en: "the carpet / the runner rug", ru: "ковёр / дорожка" }, clickX: 44.0, clickY: 95.0, labelX: 52.0, labelY: 89.0, areaW: 62, areaH: 16 },
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 97.0, clickY: 43.0, labelX: 88.0, labelY: 50.0, areaW: 6, areaH: 50 }
        ]
      },
      {
        title: "El salón – Bild 2",
        file: "salon2.png",
        hotspots: [
          { wort: { es: "el balcón", de: "der Balkon", en: "the balcony", ru: "балкон" }, clickX: 14.0, clickY: 39.0, labelX: 23.5, labelY: 29.5, areaW: 24, areaH: 50 },
          { wort: { es: "el cuadro", de: "das Bild", en: "the picture", ru: "картина" }, clickX: 56.5, clickY: 34.0, labelX: 63.0, labelY: 28.5, areaW: 17, areaH: 15 },
          { wort: { es: "la planta", de: "die Pflanze", en: "the plant", ru: "растение" }, clickX: 43.0, clickY: 18.5, labelX: 50.0, labelY: 13.0, areaW: 15, areaH: 20 },
          { wort: { es: "la balda", de: "das Regalbrett", en: "the shelf", ru: "полка" }, clickX: 79.5, clickY: 24.0, labelX: 71.5, labelY: 18.5, areaW: 35, areaH: 10 },
          { wort: { es: "los libros", de: "die Bücher", en: "the books", ru: "книги" }, clickX: 58.5, clickY: 22.0, labelX: 66.5, labelY: 16.0, areaW: 10, areaH: 8 },
          { wort: { es: "el cojín", de: "das Kissen", en: "the cushion", ru: "подушка" }, clickX: 6.5, clickY: 69.0, labelX: 14.5, labelY: 62.5, areaW: 14, areaH: 14 },
          { wort: { es: "el cajón", de: "die Schublade", en: "the drawer", ru: "ящик" }, clickX: 65.0, clickY: 66.5, labelX: 72.5, labelY: 61.5, areaW: 26, areaH: 7 },
          { wort: { es: "la mesa de centro", de: "der Couchtisch", en: "the coffee table", ru: "журнальный столик" }, clickX: 49.0, clickY: 85.0, labelX: 58.0, labelY: 81.0, areaW: 34, areaH: 10 },
          { wort: { es: "la taza", de: "die Tasse", en: "the cup", ru: "чашка" }, clickX: 62.5, clickY: 76.5, labelX: 69.5, labelY: 71.0, areaW: 10, areaH: 6 },
          { wort: { es: "la manta", de: "die Decke", en: "the blanket", ru: "одеяло" }, clickX: 14.0, clickY: 88.0, labelX: 22.0, labelY: 79.0, areaW: 22, areaH: 24 },
          { wort: { es: "la planta", de: "die Pflanze", en: "the plant", ru: "растение" }, clickX: 88.0, clickY: 48.5, labelX: 81.0, labelY: 43.5, areaW: 18, areaH: 33 }
        ]
      },
      {
        title: "El salón – Bild 3",
        file: "salon3.png",
        hotspots: [
          { wort: { es: "el sofá", de: "das Sofa", en: "the sofa", ru: "диван" }, clickX: 16.8, clickY: 16.8, labelX: 18.0, labelY: 10.8, areaW: 32.5, areaH: 32.9 },
          { wort: { es: "el sofá cama", de: "das Schlafsofa", en: "the sofa bed", ru: "диван-кровать" }, clickX: 49.9, clickY: 16.8, labelX: 50.0, labelY: 10.8, areaW: 32.5, areaH: 32.9 },
          { wort: { es: "el sillón", de: "der Sessel", en: "the armchair", ru: "кресло" }, clickX: 83.1, clickY: 16.8, labelX: 82.0, labelY: 10.8, areaW: 32.5, areaH: 32.9 },
          { wort: { es: "la mecedora", de: "der Schaukelstuhl", en: "the rocking chair", ru: "кресло-качалка" }, clickX: 16.8, clickY: 50.1, labelX: 18.0, labelY: 42.5, areaW: 32.5, areaH: 32.7 },
          { wort: { es: "la mesa de centro", de: "der Couchtisch", en: "the coffee table", ru: "журнальный столик" }, clickX: 49.9, clickY: 50.1, labelX: 50.0, labelY: 42.5, areaW: 32.5, areaH: 32.7 },
          { wort: { es: "el mueble del televisor", de: "das TV-Möbel", en: "the TV unit", ru: "тумба под телевизор" }, clickX: 83.1, clickY: 50.1, labelX: 82.0, labelY: 42.5, areaW: 32.5, areaH: 32.7 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 16.8, clickY: 83.2, labelX: 18.0, labelY: 74.2, areaW: 32.5, areaH: 32.5 },
          { wort: { es: "la balda", de: "das Regalbrett", en: "the shelf", ru: "полка" }, clickX: 49.9, clickY: 83.2, labelX: 50.0, labelY: 74.2, areaW: 32.5, areaH: 32.5 },
          { wort: { es: "la mesa auxiliar", de: "der Beistelltisch", en: "the side table", ru: "приставной столик" }, clickX: 83.1, clickY: 83.2, labelX: 82.0, labelY: 74.2, areaW: 32.5, areaH: 32.5 }
        ]
      },
      {
        title: "El salón – Bild 4",
        file: "salon4.png",
        hotspots: [
          { wort: { es: "el aparador", de: "das Sideboard", en: "the sideboard", ru: "сервант" }, clickX: 16.9, clickY: 17.2, labelX: 16.8, labelY: 10.8, areaW: 32.3, areaH: 33.7 },
          { wort: { es: "la vitrina", de: "die Vitrine", en: "the display cabinet", ru: "витрина" }, clickX: 49.9, clickY: 17.2, labelX: 50.0, labelY: 10.8, areaW: 32.5, areaH: 33.7 },
          { wort: { es: "la cómoda", de: "die Kommode", en: "the chest of drawers", ru: "комод" }, clickX: 83.0, clickY: 17.2, labelX: 83.2, labelY: 10.8, areaW: 32.4, areaH: 33.7 },
          { wort: { es: "el taburete", de: "der Hocker", en: "the stool", ru: "табурет" }, clickX: 16.9, clickY: 50.8, labelX: 16.8, labelY: 42.5, areaW: 32.3, areaH: 32.5 },
          { wort: { es: "la alfombra", de: "der Teppich / Läufer", en: "the carpet / the runner rug", ru: "ковёр / дорожка" }, clickX: 49.9, clickY: 50.8, labelX: 50.0, labelY: 42.5, areaW: 32.5, areaH: 32.5 },
          { wort: { es: "la cortina", de: "der Vorhang", en: "the curtain", ru: "штора" }, clickX: 83.0, clickY: 50.8, labelX: 83.2, labelY: 42.5, areaW: 32.4, areaH: 32.5 },
          { wort: { es: "la lámpara de techo", de: "die Deckenlampe", en: "the ceiling lamp", ru: "потолочная лампа" }, clickX: 16.9, clickY: 83.5, labelX: 16.8, labelY: 74.2, areaW: 32.3, areaH: 32.1 },
          { wort: { es: "la lámpara de pie", de: "die Stehlampe", en: "the floor lamp", ru: "торшер" }, clickX: 49.9, clickY: 83.5, labelX: 50.0, labelY: 74.2, areaW: 32.5, areaH: 32.1 },
          { wort: { es: "el reloj", de: "die Uhr", en: "the clock", ru: "часы" }, clickX: 83.0, clickY: 83.5, labelX: 83.2, labelY: 74.2, areaW: 32.4, areaH: 32.1 }
        ]
      },
      {
        title: "El salón – Bild 5",
        file: "salon5.png",
        hotspots: [
          { wort: { es: "el cojín", de: "das Kissen", en: "the cushion", ru: "подушка" }, clickX: 16.8, clickY: 16.7, labelX: 16.8, labelY: 10.8, areaW: 32.6, areaH: 32.7 },
          { wort: { es: "la manta", de: "die Decke", en: "the blanket", ru: "одеяло" }, clickX: 49.9, clickY: 16.7, labelX: 50.0, labelY: 10.8, areaW: 32.5, areaH: 32.7 },
          { wort: { es: "el cuadro", de: "das Bild", en: "the picture", ru: "картина" }, clickX: 83.1, clickY: 16.7, labelX: 83.2, labelY: 10.8, areaW: 32.7, areaH: 32.7 },
          { wort: { es: "el marco de fotos", de: "der Bilderrahmen", en: "the photo frame", ru: "рамка для фотографии" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 32.6, areaH: 32.9 },
          { wort: { es: "el libro", de: "das Buch", en: "the book", ru: "книга" }, clickX: 49.9, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 32.5, areaH: 32.9 },
          { wort: { es: "el periódico", de: "die Zeitung", en: "the newspaper", ru: "газета" }, clickX: 83.1, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 32.7, areaH: 32.9 },
          { wort: { es: "la revista", de: "die Zeitschrift", en: "the magazine", ru: "журнал" }, clickX: 16.8, clickY: 83.2, labelX: 16.8, labelY: 74.2, areaW: 32.6, areaH: 32.6 },
          { wort: { es: "la planta", de: "die Pflanze", en: "the plant", ru: "растение" }, clickX: 49.9, clickY: 83.2, labelX: 50.0, labelY: 74.2, areaW: 32.5, areaH: 32.6 },
          { wort: { es: "el jarrón", de: "die Vase", en: "the vase", ru: "ваза" }, clickX: 83.1, clickY: 83.2, labelX: 83.2, labelY: 74.2, areaW: 32.7, areaH: 32.6 }
        ]
      },
      {
        title: "El salón – Bild 6",
        file: "salon6.png",
        hotspots: [
          { wort: { es: "el altavoz", de: "der Lautsprecher", en: "the speaker", ru: "колонка / динамик" }, clickX: 16.8, clickY: 17.8, labelX: 16.8, labelY: 10.8, areaW: 32.4, areaH: 34.7 },
          { wort: { es: "el proyector", de: "der Projektor", en: "the projector", ru: "проектор" }, clickX: 49.9, clickY: 17.8, labelX: 50.0, labelY: 10.8, areaW: 32.5, areaH: 34.7 },
          { wort: { es: "el mando a distancia", de: "die Fernbedienung", en: "the remote control", ru: "пульт дистанционного управления" }, clickX: 83.0, clickY: 17.8, labelX: 83.2, labelY: 10.8, areaW: 32.6, areaH: 34.7 },
          { wort: { es: "los auriculares", de: "die Kopfhörer", en: "the headphones", ru: "наушники" }, clickX: 16.8, clickY: 51.4, labelX: 16.8, labelY: 42.5, areaW: 32.4, areaH: 31.6 },
          { wort: { es: "el equipo de música", de: "die Musikanlage", en: "the stereo system", ru: "музыкальная Anlage / стереосистема" }, clickX: 49.9, clickY: 51.4, labelX: 50.0, labelY: 42.5, areaW: 32.5, areaH: 31.6 },
          { wort: { es: "el televisor", de: "der Fernseher", en: "the television / the TV", ru: "телевизор" }, clickX: 83.0, clickY: 51.4, labelX: 83.2, labelY: 42.5, areaW: 32.6, areaH: 31.6 },
          { wort: { es: "el aire acondicionado", de: "die Klimaanlage", en: "the air conditioner", ru: "кондиционер" }, clickX: 16.8, clickY: 83.6, labelX: 16.8, labelY: 74.2, areaW: 32.4, areaH: 31.8 },
          { wort: { es: "el ventilador de techo", de: "der Deckenventilator", en: "the ceiling fan", ru: "потолочный вентилятор" }, clickX: 49.9, clickY: 83.6, labelX: 50.0, labelY: 74.2, areaW: 32.5, areaH: 31.8 },
          { wort: { es: "la consola", de: "die Spielkonsole", en: "the game console", ru: "игровая приставка" }, clickX: 83.0, clickY: 83.6, labelX: 83.2, labelY: 74.2, areaW: 32.6, areaH: 31.8 }
        ]
      },
      {
        title: "El salón – Bild 7",
        file: "salon7.png",
        hotspots: [
          { wort: { es: "ver la televisión", de: "fernsehen", en: "to watch television", ru: "смотреть телевизор" }, clickX: 16.8, clickY: 16.8, labelX: 16.8, labelY: 10.8, areaW: 32.4, areaH: 32.7 },
          { wort: { es: "sentarse en el sofá", de: "sich aufs Sofa setzen", en: "to sit on the sofa", ru: "садиться на диван" }, clickX: 49.9, clickY: 16.8, labelX: 50.0, labelY: 10.8, areaW: 32.5, areaH: 32.7 },
          { wort: { es: "leer un libro", de: "ein Buch lesen", en: "to read a book", ru: "читать книгу" }, clickX: 83.1, clickY: 16.8, labelX: 83.2, labelY: 10.8, areaW: 32.5, areaH: 32.7 },
          { wort: { es: "encender la luz", de: "das Licht einschalten", en: "to switch on the light", ru: "включать свет" }, clickX: 16.8, clickY: 50.3, labelX: 16.8, labelY: 42.5, areaW: 32.4, areaH: 33.3 },
          { wort: { es: "abrir la ventana", de: "das Fenster öffnen", en: "to open the window", ru: "открывать окно" }, clickX: 49.9, clickY: 50.3, labelX: 50.0, labelY: 42.5, areaW: 32.5, areaH: 33.3 },
          { wort: { es: "escuchar música", de: "Musik hören", en: "to listen to music", ru: "слушать музыку" }, clickX: 83.1, clickY: 50.3, labelX: 83.2, labelY: 42.5, areaW: 32.5, areaH: 33.3 },
          { wort: { es: "regar la planta", de: "die Pflanze gießen", en: "to water the plant", ru: "поливать растение" }, clickX: 16.8, clickY: 83.4, labelX: 16.8, labelY: 74.2, areaW: 32.4, areaH: 32.1 },
          { wort: { es: "pasar la aspiradora", de: "staubsaugen", en: "to vacuum", ru: "пылесосить" }, clickX: 49.9, clickY: 83.4, labelX: 50.0, labelY: 74.2, areaW: 32.5, areaH: 32.1 },
          { wort: { es: "cerrar la cortina", de: "den Vorhang schließen", en: "to close the curtain", ru: "закрывать штору" }, clickX: 83.1, clickY: 83.4, labelX: 83.2, labelY: 74.2, areaW: 32.5, areaH: 32.1 }
        ]
      }
    ]
  },

  cocina: {
    title: "La cocina",
    images: [
      {
        title: "La cocina – Bild 1",
        file: "cocina1.png",
        openLabel: { wort: { es: "la cocina", de: "die Küche", en: "the kitchen", ru: "кухня" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "la nevera", de: "der Kühlschrank", en: "the fridge", ru: "холодильник" }, clickX: 13.5, clickY: 35.0, labelX: 21.0, labelY: 26.5, areaW: 18, areaH: 28 },
          { wort: { es: "el congelador", de: "der Gefrierschrank", en: "the freezer", ru: "морозильник" }, clickX: 13.5, clickY: 58.0, labelX: 22.5, labelY: 53.5, areaW: 16, areaH: 16 },
          { wort: { es: "el armario alto", de: "der Hängeschrank", en: "the wall cabinet", ru: "навесной шкаф" }, clickX: 29.0, clickY: 22.0, labelX: 37.5, labelY: 16.5, areaW: 18, areaH: 18 },
          { wort: { es: "la campana extractora", de: "die Dunstabzugshaube", en: "the extractor hood", ru: "вытяжка" }, clickX: 44.0, clickY: 20.0, labelX: 52.0, labelY: 15.0, areaW: 20, areaH: 18 },
          { wort: { es: "el grifo", de: "der Wasserhahn", en: "the tap", ru: "кран" }, clickX: 69.5, clickY: 39.0, labelX: 78.0, labelY: 38.5, areaW: 9, areaH: 9 },
          { wort: { es: "el fregadero", de: "das Spülbecken", en: "the sink", ru: "раковина" }, clickX: 69.5, clickY: 46.5, labelX: 80.0, labelY: 47.5, areaW: 14, areaH: 6 },
          { wort: { es: "la vitrocerámica", de: "das Cerankochfeld", en: "the ceramic hob", ru: "стеклокерамическая плита" }, clickX: 44.5, clickY: 42.0, labelX: 51.0, labelY: 41.5, areaW: 18, areaH: 5.5 },
          { wort: { es: "el horno", de: "der Backofen", en: "the oven", ru: "духовка" }, clickX: 46.0, clickY: 52.5, labelX: 56.0, labelY: 58.0, areaW: 13, areaH: 16 },
          { wort: { es: "los utensilios de cocina", de: "die Küchenutensilien", en: "the kitchen utensils", ru: "кухонные принадлежности" }, clickX: 24.5, clickY: 41.5, labelX: 31.5, labelY: 37.5, areaW: 8, areaH: 7.5 },
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 71.0, clickY: 29.0, labelX: 78.0, labelY: 24.0, areaW: 23, areaH: 15 },
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 92.0, clickY: 45.0, labelX: 84.0, labelY: 34.0, areaW: 16, areaH: 56 },
          { wort: { es: "el lavavajillas", de: "der Geschirrspüler", en: "the dishwasher", ru: "посудомоечная машина" }, clickX: 75.0, clickY: 58.5, labelX: 82.5, labelY: 54.0, areaW: 14, areaH: 18 },
          { wort: { es: "la mesa", de: "der Tisch", en: "the table", ru: "стол" }, clickX: 14.0, clickY: 77.5, labelX: 24.5, labelY: 72.5, areaW: 30, areaH: 18 },
          { wort: { es: "la silla", de: "der Stuhl", en: "the chair", ru: "стул" }, clickX: 36.5, clickY: 91.5, labelX: 43.0, labelY: 86.5, areaW: 20, areaH: 18 },
          { wort: { es: "la alfombra", de: "der Läufer", en: "the runner rug", ru: "дорожка" }, clickX: 54.0, clickY: 70.0, labelX: 61.0, labelY: 67.5, areaW: 24, areaH: 13 },
          { wort: { es: "la alfombra", de: "der Läufer", en: "the runner rug", ru: "дорожка" }, clickX: 71.5, clickY: 81.5, labelX: 78.0, labelY: 77.0, areaW: 33, areaH: 22 }
        ]
      },
      {
        title: "La cocina – Bild 2",
        file: "cocina2.png",
        hotspots: [
          { wort: { es: "Los muebles y partes de la cocina", de: "Küchenmöbel und Küchenteile", en: "Kitchen furniture and parts", ru: "кухонная мебель и части кухни" }, clickX: 25.0, clickY: 25.0, labelX: 25.0, labelY: 18.0, areaW: 46, areaH: 46, openFolderKey: "cocinaMuebles" },
          { wort: { es: "Los utensilios de la cocina", de: "Küchenutensilien", en: "Kitchen utensils", ru: "кухонные принадлежности" }, clickX: 75.0, clickY: 25.0, labelX: 75.0, labelY: 18.0, areaW: 46, areaH: 46, openFolderKey: "cocinaUtensilios" },
          { wort: { es: "La vajilla", de: "das Geschirr", en: "Crockery", ru: "посуда" }, clickX: 25.0, clickY: 75.0, labelX: 25.0, labelY: 68.0, areaW: 46, areaH: 46, openFolderKey: "cocinaVajilla" },
          { wort: { es: "Los electrodomésticos de la cocina", de: "Küchengeräte", en: "Kitchen appliances", ru: "кухонная техника" }, clickX: 75.0, clickY: 75.0, labelX: 75.0, labelY: 68.0, areaW: 46, areaH: 46, openFolderKey: "cocinaElectrodomesticos" }
        ]
      }
    ]
  },

  cocinaMuebles: {
    title: "Los muebles y partes de la cocina",
    images: [
      {
        title: "Los muebles y partes de la cocina – Bild 1",
        file: "cocina3.png",
        openLabel: { wort: { es: "los muebles y partes de la cocina", de: "Küchenmöbel und Küchenteile", en: "kitchen furniture and parts", ru: "кухонная мебель и части кухни" }, labelX: 50, labelY: 14 },
        hotspots: [
          { wort: { es: "la lámpara", de: "die Lampe", en: "the lamp", ru: "лампа" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la isla", de: "die Insel", en: "the island", ru: "остров" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la banqueta", de: "die Bank", en: "the bench", ru: "скамья" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el taburete", de: "der Hocker", en: "the stool", ru: "табурет" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el armario alto", de: "der Hängeschrank", en: "the wall cabinet", ru: "навесной шкаф" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el armario bajo", de: "der Unterschrank", en: "the base cabinet", ru: "напольный шкаф" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la mesa", de: "der Tisch", en: "the table", ru: "стол" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la silla", de: "der Stuhl", en: "the chair", ru: "стул" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los muebles y partes de la cocina – Bild 2",
        file: "cocina4.png",
        hotspots: [
          { wort: { es: "el cajón", de: "die Schublade", en: "the drawer", ru: "ящик" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la encimera", de: "die Arbeitsplatte", en: "the countertop", ru: "столешница" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la campana extractora", de: "die Dunstabzugshaube", en: "the extractor hood", ru: "вытяжка" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la cocina de gas", de: "der Gasherd", en: "the gas stove", ru: "газовая плита" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cocina eléctrica", de: "der Elektroherd", en: "the electric stove", ru: "электрическая плита" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la vitrocerámica", de: "das Cerankochfeld", en: "the ceramic hob", ru: "стеклокерамическая плита" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la placa de inducción", de: "das Induktionskochfeld", en: "the induction hob", ru: "индукционная плита" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el horno", de: "der Backofen", en: "the oven", ru: "духовка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la estufa", de: "der Herd", en: "the stove", ru: "печь" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los muebles y partes de la cocina – Bild 3",
        file: "cocina5.png",
        hotspots: [
          { wort: { es: "el fregadero", de: "das Spülbecken", en: "the sink", ru: "раковина" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el grifo", de: "der Wasserhahn", en: "the tap", ru: "кран" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la despensa", de: "die Speisekammer", en: "the pantry", ru: "кладовая" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el cubo de basura", de: "der Mülleimer", en: "the bin", ru: "мусорное ведро" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la papelera", de: "der Papierkorb", en: "the waste bin", ru: "мусорная корзина" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el especiero", de: "das Gewürzregal", en: "the spice rack", ru: "полка для специй" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la barra para utensilios", de: "die Utensilienleiste", en: "the utensil rail", ru: "рейлинг для кухонных принадлежностей" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el portarrollos de cocina", de: "der Küchenrollenhalter", en: "the kitchen roll holder", ru: "держатель для кухонного полотенца" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el escurreplatos", de: "der Geschirrabtropfer", en: "the dish drainer", ru: "сушилка для посуды" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      }
    ]
  },

  cocinaUtensilios: {
    title: "Los utensilios de la cocina",
    images: [
      {
        title: "Los utensilios de la cocina – Bild 1",
        file: "cocina6.png",
        openLabel: { wort: { es: "los utensilios de la cocina", de: "Küchenutensilien", en: "kitchen utensils", ru: "кухонные принадлежности" }, labelX: 50, labelY: 14 },
        hotspots: [
          { wort: { es: "la olla", de: "der Kochtopf", en: "the pot", ru: "кастрюля" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la tapa", de: "der Deckel", en: "the lid", ru: "крышка" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la sartén", de: "die Pfanne", en: "the frying pan", ru: "сковорода" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la olla exprés", de: "der Schnellkochtopf", en: "the pressure cooker", ru: "скороварка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cazuela", de: "der Schmortopf", en: "the saucepan", ru: "кастрюля" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el escurridor", de: "der Abtropfer", en: "the drainer", ru: "сушилка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el colador", de: "das Sieb", en: "the sieve", ru: "сито" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el bol para mezclar", de: "die Rührschüssel", en: "the mixing bowl", ru: "миска для смешивания" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el cucharón", de: "die Suppenkelle", en: "the ladle", ru: "половник" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los utensilios de la cocina – Bild 2",
        file: "cocina11.png",
        hotspots: [
          { wort: { es: "la espátula", de: "der Pfannenwender", en: "the spatula", ru: "лопатка" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la cuchara de madera", de: "der Kochlöffel", en: "the wooden spoon", ru: "деревянная ложка" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el cuchillo de cocina", de: "das Küchenmesser", en: "the kitchen knife", ru: "кухонный нож" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la espumadera", de: "die Schaumkelle", en: "the skimmer", ru: "шумовка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "las pinzas de cocina", de: "die Küchenzange", en: "the kitchen tongs", ru: "кухонные щипцы" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el mazo para carne", de: "der Fleischklopfer", en: "the meat mallet", ru: "молоток для мяса" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "las varillas", de: "der Schneebesen", en: "the whisk", ru: "венчик" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el rodillo", de: "das Nudelholz", en: "the rolling pin", ru: "скалка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el pelador", de: "der Sparschäler", en: "the peeler", ru: "овощечистка" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los utensilios de la cocina – Bild 3",
        file: "cocina9.png",
        hotspots: [
          { wort: { es: "el abrebotellas", de: "der Flaschenöffner", en: "the bottle opener", ru: "открывалка для бутылок" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el abrelatas", de: "der Dosenöffner", en: "the tin opener", ru: "консервный нож" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el sacacorchos", de: "der Korkenzieher", en: "the corkscrew", ru: "штопор" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la tabla de cortar", de: "das Schneidebrett", en: "the chopping board", ru: "разделочная доска" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el rallador", de: "die Reibe", en: "the grater", ru: "тёрка" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el mortero", de: "der Mörser", en: "the mortar", ru: "ступка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el exprimidor", de: "die Zitronenpresse", en: "the juicer", ru: "соковыжималка" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el embudo", de: "der Trichter", en: "the funnel", ru: "воронка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el hervidor de agua", de: "der Wasserkocher", en: "the kettle", ru: "чайник" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los utensilios de la cocina – Bild 4",
        file: "cocina13.png",
        hotspots: [
          { wort: { es: "la pinza de azúcar", de: "die Zuckerzange", en: "the sugar tongs", ru: "щипцы для сахара" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el salero", de: "der Salzstreuer", en: "the salt shaker", ru: "солонка" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la bandeja", de: "das Tablett", en: "the tray", ru: "поднос" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el pimentero", de: "der Pfefferstreuer", en: "the pepper shaker", ru: "перечница" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la panera", de: "der Brotkorb", en: "the bread basket", ru: "хлебная корзина" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la aceitera", de: "die Ölflasche", en: "the oil dispenser", ru: "бутылка для масла" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la vinagrera", de: "die Essigflasche", en: "the vinegar cruet", ru: "бутылка для уксуса" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la botella", de: "die Flasche", en: "the bottle", ru: "бутылка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el termo", de: "die Thermoskanne", en: "the flask", ru: "термос" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los utensilios de la cocina – Bild 5",
        file: "cocina14.png",
        hotspots: [
          { wort: { es: "la taza medidora", de: "der Messbecher", en: "the measuring cup", ru: "мерный стакан" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la hielera", de: "der Eiskübel", en: "the ice bucket", ru: "ведёрко для льда" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el táper", de: "die Frischhaltedose", en: "the food container", ru: "контейнер" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la fiambrera", de: "die Brotdose", en: "the lunch box", ru: "ланч-бокс" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el bote", de: "die Dose", en: "the container", ru: "банка" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el tarro", de: "das Glas", en: "the jar", ru: "банка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el papel de aluminio", de: "die Alufolie", en: "the aluminium foil", ru: "алюминиевая фольга" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el film transparente", de: "die Frischhaltefolie", en: "the cling film", ru: "пищевая плёнка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la bolsa de congelación", de: "der Gefrierbeutel", en: "the freezer bag", ru: "пакет для заморозки" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los utensilios de la cocina – Bild 6",
        file: "cocina10.png",
        hotspots: [
          { wort: { es: "el temporizador", de: "der Timer", en: "the timer", ru: "таймер" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la cucharilla medidora", de: "der Messlöffel", en: "the measuring spoon", ru: "мерная ложка" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el mantel", de: "die Tischdecke", en: "the tablecloth", ru: "скатерть" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la servilleta", de: "die Serviette", en: "the napkin", ru: "салфетка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el paño de cocina", de: "das Geschirrtuch", en: "the tea towel", ru: "кухонное полотенце" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el trapo", de: "der Lappen", en: "the cloth", ru: "тряпка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el salvamanteles", de: "der Untersetzer", en: "the trivet", ru: "подставка под горячее" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el delantal", de: "die Schürze", en: "the apron", ru: "фартук" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el guante de cocina", de: "der Ofenhandschuh", en: "the oven glove", ru: "кухонная рукавица" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      }
    ]
  },

  cocinaVajilla: {
    title: "La vajilla",
    images: [
      {
        title: "La vajilla – Bild 1",
        file: "cocina7.png",
        openLabel: { wort: { es: "la vajilla", de: "das Geschirr", en: "crockery", ru: "посуда" }, labelX: 50, labelY: 14 },
        hotspots: [
          { wort: { es: "los cubiertos", de: "das Besteck", en: "the cutlery", ru: "столовые приборы" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el tenedor", de: "die Gabel", en: "the fork", ru: "вилка" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la cuchara", de: "der Löffel", en: "the spoon", ru: "ложка" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la cucharilla", de: "der Teelöffel", en: "the teaspoon", ru: "чайная ложка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el cuchillo", de: "das Messer", en: "the knife", ru: "нож" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el plato", de: "der Teller", en: "the plate", ru: "тарелка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el plato pequeño", de: "der kleine Teller", en: "the side plate", ru: "маленькая тарелка" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el plato hondo", de: "der tiefe Teller", en: "the deep plate", ru: "глубокая тарелка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el plato llano", de: "der flache Teller", en: "the dinner plate", ru: "плоская тарелка" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "La vajilla – Bild 2",
        file: "cocina8.png",
        hotspots: [
          { wort: { es: "la taza", de: "die Tasse", en: "the cup", ru: "чашка" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el bol", de: "die Schüssel", en: "the bowl", ru: "миска" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el vaso", de: "das Glas", en: "the glass", ru: "стакан" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la jarra de cerveza", de: "der Bierkrug", en: "the beer mug", ru: "пивная кружка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la copa de vino", de: "das Weinglas", en: "the wine glass", ru: "бокал для вина" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la copa de cava", de: "das Sektglas", en: "the champagne flute", ru: "бокал для шампанского" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cafetera", de: "die Kaffeekanne", en: "the coffee pot", ru: "кофейник" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la tetera", de: "die Teekanne", en: "the teapot", ru: "заварочный чайник" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la jarra", de: "der Krug", en: "the jug", ru: "кувшин" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "La vajilla – Bild 3",
        file: "cocina12.png",
        hotspots: [
          { wort: { es: "la jarra de agua", de: "der Wasserkrug", en: "the water jug", ru: "кувшин для воды" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el azucarero", de: "die Zuckerdose", en: "the sugar bowl", ru: "сахарница" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la huevera", de: "der Eierbecher", en: "the egg cup", ru: "подставка для яйца" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la ensaladera", de: "die Salatschüssel", en: "the salad bowl", ru: "салатница" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la fuente", de: "die Servierplatte", en: "the serving dish", ru: "блюдо" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la mantequera", de: "die Butterdose", en: "the butter dish", ru: "маслёнка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la sopera", de: "die Suppenschüssel", en: "the soup tureen", ru: "супница" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la salsera", de: "das Saucenschälchen", en: "the gravy boat", ru: "соусник" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la quesera", de: "die Käseglocke", en: "the cheese dish", ru: "сырница" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      }
    ]
  },

  cocinaElectrodomesticos: {
    title: "Los electrodomésticos de la cocina",
    images: [
      {
        title: "Los electrodomésticos de la cocina – Bild 1",
        file: "cocina15.png",
        openLabel: { wort: { es: "los electrodomésticos de la cocina", de: "Küchengeräte", en: "kitchen appliances", ru: "кухонная техника" }, labelX: 50, labelY: 14 },
        hotspots: [
          { wort: { es: "la nevera", de: "der Kühlschrank", en: "the fridge", ru: "холодильник" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el congelador", de: "der Gefrierschrank", en: "the freezer", ru: "морозильник" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el lavavajillas", de: "der Geschirrspüler", en: "the dishwasher", ru: "посудомоечная машина" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la cocina con horno", de: "der Herd mit Backofen", en: "the cooker with oven", ru: "плита с духовкой" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el microondas", de: "die Mikrowelle", en: "the microwave", ru: "микроволновка" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la tostadora", de: "der Toaster", en: "the toaster", ru: "тостер" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cafetera eléctrica", de: "die Kaffeemaschine", en: "the coffee maker", ru: "кофеварка" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la arrocera", de: "der Reiskocher", en: "the rice cooker", ru: "рисоварка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la sandwichera", de: "der Sandwichmaker", en: "the sandwich maker", ru: "сэндвичница" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los electrodomésticos de la cocina – Bild 2",
        file: "cocina16.png",
        hotspots: [
          { wort: { es: "la freidora", de: "die Fritteuse", en: "the deep fryer", ru: "фритюрница" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la freidora de aire", de: "die Heißluftfritteuse", en: "the air fryer", ru: "аэрофритюрница" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la batidora de mano", de: "der Stabmixer", en: "the hand blender", ru: "погружной блендер" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la batidora de varillas", de: "das Handrührgerät", en: "the hand mixer", ru: "ручной миксер" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la batidora de vaso", de: "der Standmixer", en: "the blender", ru: "блендер" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la licuadora", de: "die Saftpresse", en: "the juicer", ru: "соковыжималка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la amasadora", de: "die Küchenmaschine", en: "the stand mixer", ru: "тестомес" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el robot de cocina", de: "die Küchenmaschine", en: "the food processor", ru: "кухонный комбайн" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el exprimidor eléctrico", de: "die elektrische Saftpresse", en: "the electric juicer", ru: "электрическая соковыжималка" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "Los electrodomésticos de la cocina – Bild 3",
        file: "cocina17.png",
        hotspots: [
          { wort: { es: "el molinillo", de: "die Mühle", en: "the grinder", ru: "измельчитель" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la báscula de cocina", de: "die Küchenwaage", en: "the kitchen scales", ru: "кухонные весы" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la gofrera", de: "das Waffeleisen", en: "the waffle maker", ru: "вафельница" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la máquina de hacer pan", de: "der Brotbackautomat", en: "the bread maker", ru: "хлебопечка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el grill eléctrico", de: "der Elektrogrill", en: "the electric grill", ru: "электрогриль" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la heladera", de: "die Eismaschine", en: "the ice cream maker", ru: "мороженица" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la yogurtera", de: "der Joghurtbereiter", en: "the yoghurt maker", ru: "йогуртница" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la máquina de palomitas", de: "die Popcornmaschine", en: "the popcorn maker", ru: "попкорница" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la envasadora al vacío", de: "das Vakuumiergerät", en: "the vacuum sealer", ru: "вакуумный упаковщик" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      }
    ]
  },

  desvan: {
    title: "El desván",
    images: [
      {
        title: "El desván – Bild 1",
        file: "desvan1.png",
        openLabel: { wort: { es: "el desván", de: "der Dachboden", en: "the loft", ru: "чердак" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "las vigas de madera", de: "die Holzbalken", en: "the wooden beams", ru: "деревянные балки" }, clickX: 26.0, clickY: 10.0, labelX: 34, labelY: 7.8, areaW: 24, areaH: 8 },
          { wort: { es: "la telaraña", de: "das Spinnennetz", en: "the cobweb", ru: "паутина" }, clickX: 16.0, clickY: 24.5, labelX: 28, labelY: 23, areaW: 16, areaH: 14 },
          { wort: { es: "la lámpara", de: "die Lampe", en: "the lamp", ru: "лампа" }, clickX: 46.8, clickY: 27.2, labelX: 55, labelY: 21.8, areaW: 14, areaH: 13 },
          { wort: { es: "la ventana de tejado", de: "das Dachfenster", en: "the roof window", ru: "мансардное окно" }, clickX: 79.5, clickY: 20.0, labelX: 73.0, labelY: 14, areaW: 21, areaH: 17 },
          { wort: { es: "la caja de ropa vieja", de: "die Kiste mit alter Kleidung", en: "the box of old clothes", ru: "коробка со старой одеждой" }, clickX: 18.0, clickY: 60.5, labelX: 26.0, labelY: 56.0, areaW: 17, areaH: 14 },
          { wort: { es: "la silla plegable", de: "der Klappstuhl", en: "the folding chair", ru: "складной стул" }, clickX: 86.8, clickY: 60.5, labelX: 78.5, labelY: 55.5, areaW: 15, areaH: 14 },
          { wort: { es: "el baúl", de: "die Truhe", en: "the trunk", ru: "сундук" }, clickX: 50.0, clickY: 74.8, labelX: 51, labelY: 73.8, areaW: 24, areaH: 16 },
          { wort: { es: "la escalera", de: "die Leiter", en: "the ladder", ru: "лестница" }, clickX: 14.5, clickY: 82.5, labelX: 17, labelY: 88, areaW: 22, areaH: 34 },
          { wort: { es: "la maleta", de: "der Koffer", en: "the suitcase", ru: "чемодан" }, clickX: 74.3, clickY: 82.8, labelX: 82, labelY: 77.2, areaW: 18, areaH: 15 }
        ]
      },
      {
        title: "El desván – Bild 2",
        file: "habitaciones3.png",
        hotspots: [
          { wort: { es: "el desván", de: "der Dachboden", en: "the loft", ru: "чердак" }, clickX: 50.0, clickY: 26.0, labelX: 63, labelY: 17, areaW: 92, areaH: 42 },
          { wort: { es: "la buhardilla", de: "die Dachkammer", en: "the attic room", ru: "мансарда" }, clickX: 50.0, clickY: 75.0, labelX: 64, labelY: 65, areaW: 92, areaH: 40 }
        ]
      },
      {
        title: "El desván – Bild 3",
        file: "desvan2.png",
        hotspots: [
          { wort: { es: "la caja de libros", de: "die Bücherkiste", en: "the box of books", ru: "коробка с книгами" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el baúl", de: "die Truhe", en: "the trunk", ru: "сундук" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la maleta", de: "der Koffer", en: "the suitcase", ru: "чемодан" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "la lámpara", de: "die Lampe", en: "the lamp", ru: "лампа" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la escalera", de: "die Leiter", en: "the ladder", ru: "лестница" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la telaraña", de: "das Spinnennetz", en: "the cobweb", ru: "паутина" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la araña", de: "die Spinne", en: "the spider", ru: "паук" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la ventana de tejado", de: "das Dachfenster", en: "the roof window", ru: "мансардное окно" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "las vigas de madera", de: "die Holzbalken", en: "the wooden beams", ru: "деревянные балки" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El desván – Bild 4",
        file: "desvan3.png",
        hotspots: [
          { wort: { es: "la linterna", de: "die Taschenlampe", en: "the torch", ru: "фонарик" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el polvo", de: "der Staub", en: "the dust", ru: "пыль" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "los juguetes antiguos", de: "die alten Spielsachen", en: "the old toys", ru: "старые игрушки" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "los adornos de Navidad", de: "der Weihnachtsschmuck", en: "the Christmas decorations", ru: "рождественские украшения" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "el armario", de: "der Schrank", en: "the wardrobe", ru: "шкаф" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "las herramientas", de: "die Werkzeuge", en: "the tools", ru: "инструменты" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la ropa vieja", de: "die alte Kleidung", en: "the old clothes", ru: "старая одежда" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la manta", de: "die Decke", en: "the blanket", ru: "одеяло" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el fantasma", de: "das Gespenst", en: "the ghost", ru: "привидение" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El desván – Bild 5",
        file: "desvan4.png",
        hotspots: [
          { wort: { es: "la silla plegable", de: "der Klappstuhl", en: "the folding chair", ru: "складной стул" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el sofá", de: "das Sofa", en: "the sofa", ru: "диван" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "los cuadros", de: "die Bilder", en: "the pictures", ru: "картины" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: { es: "el gramófono", de: "das Grammofon", en: "the gramophone", ru: "граммофон" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "los álbumes de fotos", de: "die Fotoalben", en: "the photo albums", ru: "фотоальбомы" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "las cartas", de: "die Briefe", en: "the letters", ru: "письма" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: { es: "la máquina de escribir", de: "die Schreibmaschine", en: "the typewriter", ru: "печатная машинка" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el reloj de bolsillo", de: "die Taschenuhr", en: "the pocket watch", ru: "карманные часы" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el espejo", de: "der Spiegel", en: "the mirror", ru: "зеркало" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      }
    ]
  },

  pasillo: {
    title: "El pasillo",
    images: [
      {
        title: "El pasillo – Bild 1",
        file: "pasillo1.png",
        openLabel: { wort: { es: "el pasillo", de: "der Flur", en: "the hallway", ru: "прихожая" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "el espejo", de: "der Spiegel", en: "the mirror", ru: "зеркало" }, clickX: 11.5, clickY: 27.5, labelX: 19.0, labelY: 20.0, areaW: 14, areaH: 36 },
          { wort: { es: "las llaves", de: "die Schlüssel (Pl.)", en: "the keys", ru: "ключи" }, clickX: 16.5, clickY: 64.0, labelX: 24.5, labelY: 59.5, areaW: 15, areaH: 5.5 },
          { wort: { es: "la cómoda", de: "die Kommode", en: "the chest of drawers", ru: "комод" }, clickX: 11.0, clickY: 84.0, labelX: 20.0, labelY: 78.0, areaW: 22, areaH: 33 },
          { wort: { es: "la lámpara", de: "die Lampe", en: "the lamp", ru: "лампа" }, clickX: 54.0, clickY: 11.0, labelX: 62.0, labelY: 9.0, areaW: 10, areaH: 8 },
          { wort: { es: "la puerta", de: "die Tür", en: "the door", ru: "дверь" }, clickX: 52.5, clickY: 41.0, labelX: 60.0, labelY: 29.0, areaW: 18, areaH: 36 },
          { wort: { es: "la pared", de: "die Wand", en: "the wall", ru: "стена" }, clickX: 91.0, clickY: 12.0, labelX: 83.0, labelY: 12.0, areaW: 24, areaH: 24 },
          { wort: { es: "el perchero", de: "die Garderobe", en: "the coat rack", ru: "вешалка" }, clickX: 87.5, clickY: 36.5, labelX: 80.5, labelY: 24.0, areaW: 18, areaH: 52 },
          { wort: { es: "la planta", de: "die Pflanze", en: "the plant", ru: "растение" }, clickX: 86.5, clickY: 75.0, labelX: 79.0, labelY: 67.0, areaW: 18, areaH: 31 },
          { wort: { es: "la alfombra", de: "der Läufer", en: "the runner rug", ru: "дорожка" }, clickX: 58.0, clickY: 87.0, labelX: 66.0, labelY: 80.0, areaW: 38, areaH: 33 },
          { wort: { es: "el suelo", de: "der Fußboden", en: "the floor", ru: "пол" }, clickX: 94.0, clickY: 97.0, labelX: 87.0, labelY: 90.0, areaW: 12, areaH: 10 }
        ]
      },
      {
        title: "El pasillo – Bild 2",
        file: "pasillo2.png",
        hotspots: [
          { wort: { es: "la mirilla", de: "der Türspion", en: "the peephole", ru: "глазок" }, clickX: 17.2, clickY: 17.8, labelX: 24, labelY: 9.5, areaW: 30.6, areaH: 32.4 },
          { wort: { es: "el suelo", de: "der Fußboden", en: "the floor", ru: "пол" }, clickX: 49.1, clickY: 17.8, labelX: 50, labelY: 9.5, areaW: 30.5, areaH: 32.4 },
          { wort: { es: "el espejo", de: "der Spiegel", en: "the mirror", ru: "зеркало" }, clickX: 81.9, clickY: 17.8, labelX: 76, labelY: 9.5, areaW: 32.0, areaH: 32.4 },
          { wort: { es: "el perchero", de: "die Garderobe", en: "the coat rack", ru: "вешалка" }, clickX: 17.2, clickY: 52.1, labelX: 24, labelY: 42, areaW: 30.6, areaH: 33.8 },
          { wort: { es: "la alfombra", de: "der Läufer", en: "the runner rug", ru: "дорожка" }, clickX: 49.1, clickY: 52.1, labelX: 50, labelY: 42, areaW: 30.5, areaH: 33.8 },
          { wort: { es: "la cómoda", de: "die Kommode", en: "the chest of drawers", ru: "комод" }, clickX: 81.9, clickY: 52.1, labelX: 76, labelY: 42, areaW: 32.0, areaH: 33.8 },
          { wort: { es: "el cuelgallaves", de: "das Schlüsselbrett", en: "the key holder", ru: "ключница" }, clickX: 17.2, clickY: 84.3, labelX: 24, labelY: 75, areaW: 30.6, areaH: 28.4 },
          { wort: { es: "las llaves", de: "die Schlüssel (Pl.)", en: "the keys", ru: "ключи" }, clickX: 49.1, clickY: 84.3, labelX: 50, labelY: 75, areaW: 30.5, areaH: 28.4 },
          { wort: { es: "el felpudo", de: "die Fußmatte", en: "the doormat", ru: "коврик у двери" }, clickX: 81.9, clickY: 84.3, labelX: 76, labelY: 75, areaW: 32.0, areaH: 28.4 }
        ]
      },
      {
        title: "El pasillo – Bild 3",
        file: "pasillo3.png",
        hotspots: [
          { wort: { es: "el paragüero", de: "der Schirmständer", en: "the umbrella stand", ru: "подставка для зонтов" }, clickX: 16.9, clickY: 18.2, labelX: 24, labelY: 9.5, areaW: 32.0, areaH: 35.2 },
          { wort: { es: "el zapatero", de: "das Schuhregal", en: "the shoe rack", ru: "обувная полка" }, clickX: 49.8, clickY: 18.2, labelX: 50, labelY: 9.5, areaW: 32.4, areaH: 35.2 },
          { wort: { es: "el cuadro", de: "das Bild", en: "the picture", ru: "картина" }, clickX: 82.6, clickY: 18.2, labelX: 76, labelY: 9.5, areaW: 32.2, areaH: 35.2 },
          { wort: { es: "la planta", de: "die Pflanze", en: "the plant", ru: "растение" }, clickX: 16.9, clickY: 52.0, labelX: 24, labelY: 42, areaW: 32.0, areaH: 31.4 },
          { wort: { es: "el interruptor", de: "der Lichtschalter", en: "the light switch", ru: "выключатель" }, clickX: 49.8, clickY: 52.0, labelX: 50, labelY: 42, areaW: 32.4, areaH: 31.4 },
          { wort: { es: "el enchufe", de: "die Steckdose", en: "the socket", ru: "розетка" }, clickX: 82.6, clickY: 52.0, labelX: 76, labelY: 42, areaW: 32.2, areaH: 31.4 },
          { wort: { es: "el teléfono fijo", de: "das Festnetztelefon", en: "the landline phone", ru: "стационарный телефон" }, clickX: 16.9, clickY: 83.7, labelX: 24, labelY: 75, areaW: 32.0, areaH: 31.2 },
          { wort: { es: "el reloj de pared", de: "die Wanduhr", en: "the wall clock", ru: "настенные часы" }, clickX: 49.8, clickY: 83.7, labelX: 50, labelY: 75, areaW: 32.4, areaH: 31.2 },
          { wort: { es: "el portero automático", de: "die Gegensprechanlage", en: "the intercom", ru: "домофон" }, clickX: 82.6, clickY: 83.7, labelX: 76, labelY: 75, areaW: 32.2, areaH: 31.2 }
        ]
      }
    ]
  },

  sotano: {
    title: "El sótano",
    images: [
      {
        title: "El sótano – Bild 1",
        file: "sotano1.png",
        specialTopLabel: {"es":"el sótano","de":"der Keller","en":"the basement","ru":"подвал"},
        hotspots: [
          { wort: { es: "las tuberías", de: "die Rohre", en: "the pipes", ru: "трубы" }, clickX: 23.5, clickY: 14.4, labelX: 31.5, labelY: 11.5, areaW: 18, areaH: 10 },
          { wort: { es: "la bombilla", de: "die Glühbirne", en: "the light bulb", ru: "лампочка" }, clickX: 55.6, clickY: 10.5, labelX: 64, labelY: 8.2, areaW: 11, areaH: 10 },
          { wort: { es: "la rejilla de ventilación", de: "das Lüftungsgitter", en: "the air vent", ru: "вентиляционная решётка" }, clickX: 77.0, clickY: 20.7, labelX: 71.5, labelY: 16.5, areaW: 13, areaH: 11 },
          { wort: { es: "el cuadro eléctrico", de: "der Sicherungskasten", en: "the electrical panel", ru: "электрощиток" }, clickX: 12.4, clickY: 38.4, labelX: 22, labelY: 34.5, areaW: 16, areaH: 18 },
          { wort: { es: "el calentador de agua", de: "der Warmwasserbereiter", en: "the water heater", ru: "водонагреватель" }, clickX: 43.2, clickY: 53.4, labelX: 52, labelY: 48.5, areaW: 14, areaH: 17 },
          { wort: { es: "la barandilla", de: "das Geländer", en: "the handrail", ru: "перила" }, clickX: 88.4, clickY: 46.1, labelX: 80.5, labelY: 40.5, areaW: 16, areaH: 18 },
          { wort: { es: "la caldera", de: "der Heizkessel", en: "the boiler", ru: "котёл" }, clickX: 7.7, clickY: 75.9, labelX: 15, labelY: 71.5, areaW: 16, areaH: 18 },
          { wort: { es: "la escalera", de: "die Leiter", en: "the ladder", ru: "лестница" }, clickX: 77.8, clickY: 72.2, labelX: 70.5, labelY: 67.5, areaW: 16, areaH: 18 },
          { wort: { es: "el desagüe", de: "der Abfluss", en: "the drain", ru: "слив" }, clickX: 51.1, clickY: 93.1, labelX: 59, labelY: 88.5, areaW: 14, areaH: 10 }
        ]
      },
      {
        title: "El sótano – Bild 2",
        file: "sotano3.png",
        hotspots: [
          { wort: { es: "la escalera", de: "die Leiter", en: "the ladder", ru: "лестница" }, clickX: 16.5, clickY: 17.7, labelX: 16.8, labelY: 10.8, areaW: 30.5, areaH: 33.7 },
          { wort: { es: "el pasamanos", de: "der Handlauf", en: "the banister", ru: "поручень" }, clickX: 47.6, clickY: 17.7, labelX: 50.0, labelY: 10.8, areaW: 30.6, areaH: 33.7 },
          { wort: { es: "el techo bajo", de: "die niedrige Decke", en: "the low ceiling", ru: "низкий потолок" }, clickX: 81.0, clickY: 17.7, labelX: 83.2, labelY: 10.8, areaW: 35.4, areaH: 33.7 },
          { wort: { es: "el escalón", de: "die Stufe", en: "the step", ru: "ступенька" }, clickX: 16.5, clickY: 50.9, labelX: 16.8, labelY: 42.5, areaW: 30.5, areaH: 32.1 },
          { wort: { es: "la grieta", de: "der Riss", en: "the crack", ru: "трещина" }, clickX: 47.6, clickY: 50.9, labelX: 50.0, labelY: 42.5, areaW: 30.6, areaH: 32.1 },
          { wort: { es: "la columna", de: "die Säule", en: "the pillar", ru: "колонна" }, clickX: 81.0, clickY: 50.9, labelX: 83.2, labelY: 42.5, areaW: 35.4, areaH: 32.1 },
          { wort: { es: "la puerta metálica", de: "die Metalltür", en: "the metal door", ru: "металлическая дверь" }, clickX: 16.5, clickY: 83.2, labelX: 16.8, labelY: 74.2, areaW: 30.5, areaH: 31.7 },
          { wort: { es: "la ventana pequeña", de: "das kleine Fenster", en: "the small window", ru: "маленькое окно" }, clickX: 47.6, clickY: 83.2, labelX: 50.0, labelY: 74.2, areaW: 30.6, areaH: 31.7 },
          { wort: { es: "el tubo", de: "das Rohr", en: "the pipe", ru: "труба" }, clickX: 81.0, clickY: 83.2, labelX: 83.2, labelY: 74.2, areaW: 35.4, areaH: 31.7 }
        ]
      },
      {
        title: "El sótano – Bild 3",
        file: "sotano2.png",
        hotspots: [
          { wort: { es: "la tubería", de: "die Leitung", en: "the pipework", ru: "трубопровод" }, clickX: 17.2, clickY: 18.6, labelX: 16.8, labelY: 10.8, areaW: 31.2, areaH: 35.0 },
          { wort: { es: "el cuadro eléctrico", de: "der Sicherungskasten", en: "the electrical panel", ru: "электрощиток" }, clickX: 49.0, clickY: 18.6, labelX: 50.0, labelY: 10.8, areaW: 31.8, areaH: 35.0 },
          { wort: { es: "la caldera", de: "der Heizkessel", en: "the boiler", ru: "котёл" }, clickX: 81.8, clickY: 18.6, labelX: 83.2, labelY: 10.8, areaW: 33.0, areaH: 35.0 },
          { wort: { es: "el calentador", de: "der Heizkörper", en: "the heater", ru: "нагреватель" }, clickX: 17.2, clickY: 51.9, labelX: 16.8, labelY: 42.5, areaW: 31.2, areaH: 31.1 },
          { wort: { es: "la bombilla", de: "die Glühbirne", en: "the light bulb", ru: "лампочка" }, clickX: 49.0, clickY: 51.9, labelX: 50.0, labelY: 42.5, areaW: 31.8, areaH: 31.1 },
          { wort: { es: "el interruptor", de: "der Lichtschalter", en: "the light switch", ru: "выключатель" }, clickX: 81.8, clickY: 51.9, labelX: 83.2, labelY: 42.5, areaW: 33.0, areaH: 31.1 },
          { wort: { es: "el enchufe", de: "die Steckdose", en: "the socket", ru: "розетка" }, clickX: 17.2, clickY: 83.3, labelX: 16.8, labelY: 74.2, areaW: 31.2, areaH: 31.1 },
          { wort: { es: "la rejilla de ventilación", de: "das Lüftungsgitter", en: "the air vent", ru: "вентиляционная решётка" }, clickX: 49.0, clickY: 83.3, labelX: 50.0, labelY: 74.2, areaW: 31.8, areaH: 31.1 },
          { wort: { es: "el desagüe", de: "der Abfluss", en: "the drain", ru: "слив" }, clickX: 81.8, clickY: 83.3, labelX: 83.2, labelY: 74.2, areaW: 33.0, areaH: 31.1 }
        ]
      },
      {
        title: "El sótano – Bild 4",
        file: "sotano4.png",
        hotspots: [
          { wort: { es: "el cable", de: "das Kabel", en: "the cable", ru: "кабель" }, clickX: 17.2, clickY: 17.0, labelX: 16.8, labelY: 10.8, areaW: 32.7, areaH: 32.6 },
          { wort: { es: "el fusible", de: "die Sicherung", en: "the fuse", ru: "предохранитель" }, clickX: 50.0, clickY: 17.0, labelX: 50.0, labelY: 10.8, areaW: 32.6, areaH: 32.6 },
          { wort: { es: "la linterna", de: "die Taschenlampe", en: "the torch", ru: "фонарик" }, clickX: 82.9, clickY: 17.0, labelX: 83.2, labelY: 10.8, areaW: 32.4, areaH: 32.6 },
          { wort: { es: "el manómetro", de: "das Manometer", en: "the pressure gauge", ru: "манометр" }, clickX: 17.2, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 32.7, areaH: 32.8 },
          { wort: { es: "el radiador", de: "der Heizkörper", en: "the radiator", ru: "радиатор" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 32.6, areaH: 32.8 },
          { wort: { es: "la válvula", de: "das Ventil", en: "the valve", ru: "клапан" }, clickX: 82.9, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 32.4, areaH: 32.8 },
          { wort: { es: "el grifo", de: "der Wasserhahn", en: "the tap", ru: "кран" }, clickX: 17.2, clickY: 83.3, labelX: 16.8, labelY: 74.2, areaW: 32.7, areaH: 33.3 },
          { wort: { es: "el contador de agua", de: "der Wasserzähler", en: "the water meter", ru: "счётчик воды" }, clickX: 50.0, clickY: 83.3, labelX: 50.0, labelY: 74.2, areaW: 32.6, areaH: 33.3 },
          { wort: { es: "la llave de paso", de: "der Absperrhahn", en: "the shut-off valve", ru: "запорный кран" }, clickX: 82.9, clickY: 83.3, labelX: 83.2, labelY: 74.2, areaW: 32.4, areaH: 33.3 }
        ]
      }
    ]
  },

  bano: {
    title: "El baño",
    images: [
      {
        title: "El baño – Bild 1",
        file: "bano1.png",
        openLabel: { wort: { es: "el baño", de: "das Badezimmer", en: "the bathroom", ru: "ванная комната" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 6.0, clickY: 18.0, labelX: 15, labelY: 11, areaW: 9, areaH: 26 },
          { wort: { es: "la cortina de ducha", de: "der Duschvorhang", en: "the shower curtain", ru: "занавеска для душа" }, clickX: 21.0, clickY: 32.5, labelX: 28, labelY: 20, areaW: 11, areaH: 34 },
          { wort: { es: "la ducha", de: "die Dusche", en: "the shower", ru: "душ" }, clickX: 35.0, clickY: 33.5, labelX: 46, labelY: 25, areaW: 14, areaH: 28 },
          { wort: { es: "el espejo", de: "der Spiegel", en: "the mirror", ru: "зеркало" }, clickX: 57.0, clickY: 25.5, labelX: 68, labelY: 13, areaW: 22, areaH: 18 },
          { wort: { es: "el armario del baño", de: "der Badezimmerschrank", en: "the bathroom cabinet", ru: "шкафчик для ванной" }, clickX: 79.5, clickY: 25.5, labelX: 76.5, labelY: 25.5, areaW: 14, areaH: 22 },
          { wort: { es: "el lavabo", de: "das Waschbecken", en: "the washbasin", ru: "раковина" }, clickX: 56.0, clickY: 52.0, labelX: 56.0, labelY: 48.0, areaW: 28, areaH: 11 },
          { wort: { es: "la toalla", de: "das Handtuch", en: "the towel", ru: "полотенце" }, clickX: 92.0, clickY: 47.5, labelX: 82.5, labelY: 45.5, areaW: 11, areaH: 18 },
          { wort: { es: "la bañera", de: "die Badewanne", en: "the bathtub", ru: "ванна" }, clickX: 12.0, clickY: 69.5, labelX: 27.0, labelY: 64.0, areaW: 26, areaH: 32 },
          { wort: { es: "el váter", de: "die Toilette", en: "the toilet", ru: "унитаз" }, clickX: 80.5, clickY: 73.5, labelX: 72.5, labelY: 71.0, areaW: 17, areaH: 16 },
          { wort: { es: "la alfombrilla", de: "die Badematte", en: "the bath mat", ru: "коврик" }, clickX: 53.5, clickY: 85.5, labelX: 63.0, labelY: 86.5, areaW: 34, areaH: 15 },
          { wort: { es: "el cesto de la ropa sucia", de: "der Wäschekorb", en: "the laundry basket", ru: "корзина для белья" }, clickX: 91.5, clickY: 91.5, labelX: 84.0, labelY: 88.5, areaW: 18, areaH: 13 }
        ]
      },
      {
        title: "El baño – Bild 2",
        file: "bano2.png",
        hotspots: [
          { wort: { es: "el lavabo", de: "das Waschbecken", en: "the washbasin", ru: "раковина" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 33 },
          { wort: { es: "el grifo", de: "der Wasserhahn", en: "the tap", ru: "кран" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 33 },
          { wort: { es: "el desagüe", de: "der Abfluss", en: "the drain", ru: "слив" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 33 },
          { wort: { es: "el tapón", de: "der Stöpsel", en: "the plug", ru: "пробка" }, clickX: 16.8, clickY: 52.0, labelX: 16.8, labelY: 43.7, areaW: 30, areaH: 30 },
          { wort: { es: "el agua fría", de: "das kalte Wasser", en: "the cold water", ru: "холодная вода" }, clickX: 50.0, clickY: 52.0, labelX: 50.0, labelY: 43.7, areaW: 30, areaH: 30 },
          { wort: { es: "el agua caliente", de: "das warme Wasser", en: "the hot water", ru: "горячая вода" }, clickX: 83.2, clickY: 52.0, labelX: 83.2, labelY: 43.7, areaW: 30, areaH: 30 },
          { wort: { es: "el mueble bajo lavabo", de: "der Waschtischunterschrank", en: "the vanity unit", ru: "тумба под раковиной" }, clickX: 16.8, clickY: 82.8, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el armario del baño", de: "der Badezimmerschrank", en: "the bathroom cabinet", ru: "шкафчик для ванной" }, clickX: 50.0, clickY: 82.8, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el espejo", de: "der Spiegel", en: "the mirror", ru: "зеркало" }, clickX: 83.2, clickY: 82.8, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El baño – Bild 3",
        file: "bano3.png",
        hotspots: [
          { wort: { es: "la ducha", de: "die Dusche", en: "the shower", ru: "душ" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 27 },
          { wort: { es: "la alcachofa de la ducha", de: "der Duschkopf", en: "the shower head", ru: "лейка душа" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 27 },
          { wort: { es: "la grifería de la ducha", de: "die Duscharmatur", en: "the shower tap", ru: "смеситель для душа" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 27 },
          { wort: { es: "la mampara", de: "die Duschwand", en: "the shower screen", ru: "душевая перегородка" }, clickX: 16.8, clickY: 48.5, labelX: 16.8, labelY: 41.0, areaW: 30, areaH: 31 },
          { wort: { es: "la cortina de ducha", de: "der Duschvorhang", en: "the shower curtain", ru: "занавеска для душа" }, clickX: 50.0, clickY: 48.5, labelX: 50.0, labelY: 41.0, areaW: 30, areaH: 31 },
          { wort: { es: "el váter", de: "die Toilette", en: "the toilet", ru: "унитаз" }, clickX: 83.2, clickY: 48.5, labelX: 83.2, labelY: 41.0, areaW: 30, areaH: 31 },
          { wort: { es: "la tapa del váter", de: "der Toilettendeckel", en: "the toilet lid", ru: "крышка унитаза" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "la cisterna", de: "der Spülkasten", en: "the cistern", ru: "бачок" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: { es: "el botón de descarga", de: "der Spülknopf", en: "the flush button", ru: "кнопка смыва" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El baño – Bild 4",
        file: "bano4.png",
        hotspots: [
          { wort: { es: "el bidé", de: "das Bidet", en: "the bidet", ru: "биде" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la bañera", de: "die Badewanne", en: "the bathtub", ru: "ванна" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el cesto de la ropa sucia", de: "der Wäschekorb", en: "the laundry basket", ru: "корзина для белья" }, clickX: 16.8, clickY: 51.5, labelX: 16.8, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el botiquín", de: "der Medizinschrank", en: "the medicine cabinet", ru: "аптечка" }, clickX: 50.0, clickY: 51.5, labelX: 50.0, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el radiador", de: "der Heizkörper", en: "the radiator", ru: "радиатор" }, clickX: 83.2, clickY: 51.5, labelX: 83.2, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el toallero", de: "der Handtuchhalter", en: "the towel rail", ru: "полотенцедержатель" }, clickX: 16.8, clickY: 82.5, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 29 },
          { wort: { es: "el radiador toallero", de: "der Handtuchheizkörper", en: "the heated towel rail", ru: "полотенцесушитель" }, clickX: 50.0, clickY: 82.5, labelX: 50.0, labelY: 75.5, areaW: 31, areaH: 29 },
          { wort: { es: "la alfombrilla", de: "die Badematte", en: "the bath mat", ru: "коврик" }, clickX: 83.2, clickY: 82.5, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 29 }
        ]
      },
      {
        title: "El baño – Bild 5",
        file: "bano5.png",
        hotspots: [
          { wort: { es: "la lavadora", de: "die Waschmaschine", en: "the washing machine", ru: "стиральная машина" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la secadora", de: "der Trockner", en: "the tumble dryer", ru: "сушильная машина" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la ropa sucia", de: "die schmutzige Wäsche", en: "the dirty laundry", ru: "грязное бельё" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el papel higiénico", de: "das Toilettenpapier", en: "the toilet paper", ru: "туалетная бумага" }, clickX: 16.8, clickY: 51.5, labelX: 16.8, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el portarrollos", de: "der Toilettenpapierhalter", en: "the toilet roll holder", ru: "держатель для туалетной бумаги" }, clickX: 50.0, clickY: 51.5, labelX: 50.0, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el cepillo del váter", de: "die Toilettenbürste", en: "the toilet brush", ru: "ёршик для унитаза" }, clickX: 83.2, clickY: 51.5, labelX: 83.2, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "la papelera de baño", de: "der Badezimmereimer", en: "the bathroom bin", ru: "мусорное ведро в ванной" }, clickX: 16.8, clickY: 83.0, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "la báscula", de: "die Waage", en: "the scales", ru: "весы" }, clickX: 50.0, clickY: 83.0, labelX: 50.0, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "el ambientador", de: "der Lufterfrischer", en: "the air freshener", ru: "освежитель воздуха" }, clickX: 83.2, clickY: 83.0, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El baño – Bild 6",
        file: "bano6.png",
        hotspots: [
          { wort: { es: "el champú", de: "das Shampoo", en: "the shampoo", ru: "шампунь" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "el jabón", de: "die Seife", en: "the soap", ru: "мыло" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "el gel de ducha", de: "das Duschgel", en: "the shower gel", ru: "гель для душа" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "la esponja", de: "der Schwamm", en: "the sponge", ru: "губка" }, clickX: 16.8, clickY: 50.8, labelX: 16.8, labelY: 43.8, areaW: 31, areaH: 29 },
          { wort: { es: "el guante de baño", de: "der Waschhandschuh", en: "the wash mitt", ru: "мочалка-рукавица" }, clickX: 50.0, clickY: 50.8, labelX: 50.0, labelY: 43.8, areaW: 31, areaH: 29 },
          { wort: { es: "la toalla", de: "das Handtuch", en: "the towel", ru: "полотенце" }, clickX: 83.2, clickY: 50.8, labelX: 83.2, labelY: 43.8, areaW: 31, areaH: 29 },
          { wort: { es: "el albornoz", de: "der Bademantel", en: "the dressing gown", ru: "халат" }, clickX: 16.8, clickY: 83.0, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "las chanclas", de: "die Flip-Flops", en: "the flip-flops", ru: "шлёпанцы" }, clickX: 50.0, clickY: 83.0, labelX: 50.0, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "la crema corporal", de: "die Körperlotion", en: "the body lotion", ru: "крем для тела" }, clickX: 83.2, clickY: 83.0, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El baño – Bild 7",
        file: "bano7.png",
        hotspots: [
          { wort: { es: "el dispensador de jabón", de: "der Seifenspender", en: "the soap dispenser", ru: "дозатор мыла" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el cepillo de dientes", de: "die Zahnbürste", en: "the toothbrush", ru: "зубная щётка" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la pasta de dientes", de: "die Zahnpasta", en: "the toothpaste", ru: "зубная паста" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el cepillo de dientes eléctrico", de: "die elektrische Zahnbürste", en: "the electric toothbrush", ru: "электрическая зубная щётка" }, clickX: 16.8, clickY: 51.5, labelX: 16.8, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el hilo dental", de: "die Zahnseide", en: "the dental floss", ru: "зубная нить" }, clickX: 50.0, clickY: 51.5, labelX: 50.0, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el enjuague bucal", de: "die Mundspülung", en: "the mouthwash", ru: "ополаскиватель для рта" }, clickX: 83.2, clickY: 51.5, labelX: 83.2, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el algodón", de: "die Watte", en: "the cotton wool", ru: "вата" }, clickX: 16.8, clickY: 84.0, labelX: 16.8, labelY: 76.5, areaW: 31, areaH: 29 },
          { wort: { es: "los bastoncillos", de: "die Wattestäbchen", en: "the cotton buds", ru: "ватные палочки" }, clickX: 50.0, clickY: 84.0, labelX: 50.0, labelY: 76.5, areaW: 31, areaH: 29 },
          { wort: { es: "la crema facial", de: "die Gesichtscreme", en: "the face cream", ru: "крем для лица" }, clickX: 83.2, clickY: 84.0, labelX: 83.2, labelY: 76.5, areaW: 31, areaH: 29 }
        ]
      },
      {
        title: "El baño – Bild 8",
        file: "bano8.png",
        hotspots: [
          { wort: { es: "el peine", de: "der Kamm", en: "the comb", ru: "гребень" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "el cepillo del pelo", de: "die Haarbürste", en: "the hairbrush", ru: "щётка для волос" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "el cepillo redondo", de: "die Rundbürste", en: "the round brush", ru: "круглая щётка" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "el secador", de: "der Föhn", en: "the hairdryer", ru: "фен" }, clickX: 16.8, clickY: 51.5, labelX: 16.8, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "la plancha del pelo", de: "das Glätteisen", en: "the hair straightener", ru: "выпрямитель для волос" }, clickX: 50.0, clickY: 51.5, labelX: 50.0, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el rizador", de: "der Lockenstab", en: "the curling iron", ru: "плойка" }, clickX: 83.2, clickY: 51.5, labelX: 83.2, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "los rulos", de: "die Lockenwickler", en: "the hair rollers", ru: "бигуди" }, clickX: 16.8, clickY: 84.0, labelX: 16.8, labelY: 76.5, areaW: 31, areaH: 29 },
          { wort: { es: "la goma del pelo", de: "das Haargummi", en: "the hair tie", ru: "резинка для волос" }, clickX: 50.0, clickY: 84.0, labelX: 50.0, labelY: 76.5, areaW: 31, areaH: 29 },
          { wort: { es: "la horquilla", de: "die Haarklammer", en: "the hair grip", ru: "заколка" }, clickX: 83.2, clickY: 84.0, labelX: 83.2, labelY: 76.5, areaW: 31, areaH: 29 }
        ]
      },
      {
        title: "El baño – Bild 9",
        file: "bano9.png",
        hotspots: [
          { wort: { es: "el maquillaje", de: "das Make-up", en: "the makeup", ru: "макияж" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "la máscara de pestañas", de: "die Wimperntusche", en: "the mascara", ru: "тушь" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "la barra de labios", de: "der Lippenstift", en: "the lipstick", ru: "губная помада" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "el perfume", de: "das Parfüm", en: "the perfume", ru: "духи" }, clickX: 16.8, clickY: 51.5, labelX: 16.8, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el desodorante", de: "das Deodorant", en: "the deodorant", ru: "дезодорант" }, clickX: 50.0, clickY: 51.5, labelX: 50.0, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el espejo de mano", de: "der Handspiegel", en: "the hand mirror", ru: "ручное зеркало" }, clickX: 83.2, clickY: 51.5, labelX: 83.2, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "la diadema", de: "der Haarreif", en: "the headband", ru: "ободок" }, clickX: 16.8, clickY: 83.0, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "el esmalte de uñas", de: "der Nagellack", en: "the nail polish", ru: "лак для ногтей" }, clickX: 50.0, clickY: 83.0, labelX: 50.0, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "el rizador de pestañas", de: "die Wimpernzange", en: "the eyelash curler", ru: "щипцы для ресниц" }, clickX: 83.2, clickY: 83.0, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El baño – Bild 10",
        file: "bano10.png",
        hotspots: [
          { wort: { es: "la maquinilla de afeitar", de: "der Rasierer", en: "the razor", ru: "бритва" }, clickX: 16.8, clickY: 19.8, labelX: 16.8, labelY: 12.3, areaW: 31, areaH: 36 },
          { wort: { es: "la espuma de afeitar", de: "der Rasierschaum", en: "the shaving foam", ru: "пена для бритья" }, clickX: 50.0, clickY: 19.8, labelX: 50.0, labelY: 12.3, areaW: 31, areaH: 36 },
          { wort: { es: "la afeitadora eléctrica", de: "der Elektrorasierer", en: "the electric shaver", ru: "электробритва" }, clickX: 83.2, clickY: 19.8, labelX: 83.2, labelY: 12.3, areaW: 31, areaH: 36 },
          { wort: { es: "las pinzas", de: "die Pinzette", en: "the tweezers", ru: "пинцет" }, clickX: 16.8, clickY: 53.0, labelX: 16.8, labelY: 45.5, areaW: 31, areaH: 29 },
          { wort: { es: "las tijeras de uñas", de: "die Nagelschere", en: "the nail scissors", ru: "ножницы для ногтей" }, clickX: 50.0, clickY: 53.0, labelX: 50.0, labelY: 45.5, areaW: 31, areaH: 29 },
          { wort: { es: "el cortauñas", de: "der Nagelknipser", en: "the nail clippers", ru: "кусачки для ногтей" }, clickX: 83.2, clickY: 53.0, labelX: 83.2, labelY: 45.5, areaW: 31, areaH: 29 },
          { wort: { es: "la lima de uñas", de: "die Nagelfeile", en: "the nail file", ru: "пилочка для ногтей" }, clickX: 16.8, clickY: 84.2, labelX: 16.8, labelY: 76.8, areaW: 31, areaH: 29 },
          { wort: { es: "la compresa", de: "die Binde", en: "the sanitary pad", ru: "прокладка" }, clickX: 50.0, clickY: 84.2, labelX: 50.0, labelY: 76.8, areaW: 31, areaH: 29 },
          { wort: { es: "los tampones", de: "die Tampons", en: "the tampons", ru: "тампоны" }, clickX: 83.2, clickY: 84.2, labelX: 83.2, labelY: 76.8, areaW: 31, areaH: 29 }
        ]
      },
      {
        title: "El baño – Bild 11",
        file: "bano11.png",
        hotspots: [
          { wort: { es: "ducharse", de: "duschen", en: "to have a shower", ru: "принимать душ" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "bañarse", de: "baden", en: "to have a bath", ru: "принимать ванну" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "lavarse la cara", de: "sich das Gesicht waschen", en: "to wash your face", ru: "умываться" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "enjabonarse", de: "sich einseifen", en: "to soap yourself", ru: "намыливаться" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 34 },
          { wort: { es: "lavarse el pelo", de: "sich die Haare waschen", en: "to wash your hair", ru: "мыть волосы" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 34 },
          { wort: { es: "secarse", de: "sich abtrocknen", en: "to dry yourself", ru: "вытираться" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 34 },
          { wort: { es: "ponerse pasta de dientes", de: "Zahnpasta auftragen", en: "to put toothpaste on the toothbrush", ru: "наносить зубную пасту" }, clickX: 16.8, clickY: 83.0, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "cepillarse los dientes", de: "sich die Zähne putzen", en: "to brush your teeth", ru: "чистить зубы" }, clickX: 50.0, clickY: 83.0, labelX: 50.0, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "usar hilo dental", de: "Zahnseide benutzen", en: "to floss your teeth", ru: "пользоваться зубной нитью" }, clickX: 83.2, clickY: 83.0, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El baño – Bild 12",
        file: "bano12.png",
        hotspots: [
          { wort: { es: "enjuagarse la boca", de: "den Mund ausspülen", en: "to rinse your mouth", ru: "полоскать рот" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "mirarse al espejo", de: "in den Spiegel schauen", en: "to look in the mirror", ru: "смотреться в зеркало" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "afeitarse", de: "sich rasieren", en: "to shave", ru: "бриться" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 34 },
          { wort: { es: "ponerse desodorante", de: "Deodorant auftragen", en: "to put on deodorant", ru: "наносить дезодорант" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 33 },
          { wort: { es: "ponerse crema", de: "Creme auftragen", en: "to apply cream", ru: "наносить крем" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 33 },
          { wort: { es: "secarse el pelo", de: "sich die Haare föhnen", en: "to dry your hair", ru: "сушить волосы" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 33 },
          { wort: { es: "peinarse", de: "sich kämmen", en: "to comb your hair", ru: "причёсываться" }, clickX: 16.8, clickY: 83.0, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "cepillarse el pelo", de: "sich die Haare bürsten", en: "to brush your hair", ru: "расчёсывать волосы" }, clickX: 50.0, clickY: 83.0, labelX: 50.0, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "hacerse rizos", de: "sich Locken machen", en: "to curl your hair", ru: "завивать волосы" }, clickX: 83.2, clickY: 83.0, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El baño – Bild 13",
        file: "bano13.png",
        hotspots: [
          { wort: { es: "teñirse el pelo", de: "sich die Haare färben", en: "to dye your hair", ru: "красить волосы" }, clickX: 16.8, clickY: 17.0, labelX: 16.8, labelY: 9.5, areaW: 31, areaH: 34 },
          { wort: { es: "cortarse el pelo", de: "sich die Haare schneiden lassen", en: "to get your hair cut", ru: "стричься" }, clickX: 51.5, clickY: 17.0, labelX: 51.5, labelY: 9.5, areaW: 34, areaH: 34 },
          { wort: { es: "maquillarse", de: "sich schminken", en: "to put on makeup", ru: "краситься" }, clickX: 83.2, clickY: 17.0, labelX: 83.2, labelY: 9.5, areaW: 31, areaH: 34 },
          { wort: { es: "ponerse rímel", de: "Wimperntusche auftragen", en: "to put on mascara", ru: "наносить тушь" }, clickX: 16.8, clickY: 51.5, labelX: 16.8, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "pintarse los labios", de: "sich die Lippen schminken", en: "to put on lipstick", ru: "красить губы" }, clickX: 51.5, clickY: 51.5, labelX: 51.5, labelY: 44.0, areaW: 34, areaH: 31 },
          { wort: { es: "desmaquillarse", de: "sich abschminken", en: "to remove your makeup", ru: "снимать макияж" }, clickX: 83.2, clickY: 51.5, labelX: 83.2, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "cortarse las uñas", de: "sich die Nägel schneiden", en: "to trim your nails", ru: "стричь ногти" }, clickX: 16.8, clickY: 83.0, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "pintarse las uñas", de: "sich die Nägel lackieren", en: "to paint your nails", ru: "красить ногти" }, clickX: 51.5, clickY: 83.0, labelX: 51.5, labelY: 75.5, areaW: 34, areaH: 31 },
          { wort: { es: "pesarse", de: "sich wiegen", en: "to weigh yourself", ru: "взвешиваться" }, clickX: 83.2, clickY: 83.0, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 31 }
        ]
      }
    ]
  },

  lavadero: {
    title: "El lavadero",
    images: [
      {
        title: "El lavadero – Bild 1",
        file: "lavadero1.png",
        openLabel: { wort: { es: "el lavadero", de: "die Waschküche", en: "the utility room", ru: "прачечная" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "la secadora", de: "der Trockner", en: "the tumble dryer", ru: "сушильная машина" }, clickX: 14.5, clickY: 38.0, labelX: 20.5, labelY: 31.5, areaW: 21, areaH: 23 },
          { wort: { es: "la lavadora", de: "die Waschmaschine", en: "the washing machine", ru: "стиральная машина" }, clickX: 15.5, clickY: 66.5, labelX: 19.5, labelY: 63.5, areaW: 24, areaH: 24 },
          { wort: { es: "el detergente", de: "das Waschmittel", en: "the detergent", ru: "моющее средство" }, clickX: 30.0, clickY: 36.5, labelX: 36.0, labelY: 32.0, areaW: 10, areaH: 15 },
          { wort: { es: "el suavizante", de: "der Weichspüler", en: "the fabric softener", ru: "кондиционер для белья" }, clickX: 37.8, clickY: 38.3, labelX: 43.5, labelY: 34.0, areaW: 9, areaH: 13 },
          { wort: { es: "el tendedero", de: "der Wäscheständer", en: "the clothes airer", ru: "сушилка для белья" }, clickX: 58.0, clickY: 42.5, labelX: 64.0, labelY: 38.5, areaW: 28, areaH: 18 },
          { wort: { es: "el fregadero", de: "das Spülbecken", en: "the sink", ru: "раковина" }, clickX: 88.0, clickY: 49.0, labelX: 80.0, labelY: 45.5, areaW: 20, areaH: 10 },
          { wort: { es: "la plancha", de: "das Bügeleisen", en: "the iron", ru: "утюг" }, clickX: 76.0, clickY: 59.0, labelX: 70.0, labelY: 55.5, areaW: 12, areaH: 14 },
          { wort: { es: "la tabla de planchar", de: "das Bügelbrett", en: "the ironing board", ru: "гладильная доска" }, clickX: 59.0, clickY: 68.5, labelX: 55.0, labelY: 64.5, areaW: 24, areaH: 11 },
          { wort: { es: "el cesto de la ropa", de: "der Wäschekorb", en: "the laundry basket", ru: "корзина для белья" }, clickX: 55.0, clickY: 86.5, labelX: 46.0, labelY: 82.5, areaW: 22, areaH: 15 }
        ]
      },
      {
        title: "El lavadero – Bild 2",
        file: "lavadero2.png",
        hotspots: [
          { wort: { es: "la lavadora", de: "die Waschmaschine", en: "the washing machine", ru: "стиральная машина" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la secadora", de: "der Trockner", en: "the tumble dryer", ru: "сушильная машина" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el fregadero", de: "das Spülbecken", en: "the sink", ru: "раковина" }, clickX: 16.8, clickY: 51.5, labelX: 16.8, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el grifo", de: "der Wasserhahn", en: "the tap", ru: "кран" }, clickX: 50.0, clickY: 51.5, labelX: 50.0, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el interruptor", de: "der Lichtschalter", en: "the light switch", ru: "выключатель" }, clickX: 83.2, clickY: 51.5, labelX: 83.2, labelY: 44.0, areaW: 31, areaH: 31 },
          { wort: { es: "el enchufe", de: "die Steckdose", en: "the socket", ru: "розетка" }, clickX: 16.8, clickY: 83.0, labelX: 16.8, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "el tendedero", de: "der Wäscheständer", en: "the clothes airer", ru: "сушилка для белья" }, clickX: 50.0, clickY: 83.0, labelX: 50.0, labelY: 75.5, areaW: 31, areaH: 31 },
          { wort: { es: "la cuerda de tender", de: "die Wäscheleine", en: "the washing line", ru: "бельевая верёвка" }, clickX: 83.2, clickY: 83.0, labelX: 83.2, labelY: 75.5, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El lavadero – Bild 3",
        file: "lavadero3.png",
        hotspots: [
          { wort: { es: "las pinzas de la ropa", de: "die Wäscheklammern", en: "the clothes pegs", ru: "прищепки" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la tabla de planchar", de: "das Bügelbrett", en: "the ironing board", ru: "гладильная доска" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la plancha", de: "das Bügeleisen", en: "the iron", ru: "утюг" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el cesto de la ropa", de: "der Wäschekorb", en: "the laundry basket", ru: "корзина для белья" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la ropa sucia", de: "die schmutzige Wäsche", en: "the dirty laundry", ru: "грязное бельё" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la percha", de: "der Kleiderbügel", en: "the coat hanger", ru: "вешалка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el cubo de plástico", de: "der Plastikeimer", en: "the plastic bucket", ru: "пластиковое ведро" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "las palanganas de plástico", de: "die Plastikschüsseln", en: "the plastic basins", ru: "пластиковые тазы" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el recogedor", de: "die Kehrschaufel", en: "the dustpan", ru: "совок" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El lavadero – Bild 4",
        file: "lavadero4.png",
        hotspots: [
          { wort: { es: "el cepillo", de: "die Bürste", en: "the brush", ru: "щётка" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el detergente en polvo", de: "das Waschpulver", en: "the washing powder", ru: "стиральный порошок" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el detergente líquido", de: "das Flüssigwaschmittel", en: "the liquid detergent", ru: "жидкое средство для стирки" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el suavizante", de: "der Weichspüler", en: "the fabric softener", ru: "кондиционер для белья" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el spray quitamanchas", de: "das Fleckenspray", en: "the stain remover spray", ru: "спрей для удаления пятен" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el tinte para ropa", de: "die Textilfarbe", en: "the fabric dye", ru: "краска для ткани" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la lejía", de: "die Bleiche", en: "the bleach", ru: "отбеливатель" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el jabón", de: "die Seife", en: "the soap", ru: "мыло" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "las cápsulas de detergente", de: "die Waschmittelkapseln", en: "the detergent pods", ru: "капсулы для стирки" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El lavadero – Bild 5",
        file: "lavadero5.png",
        hotspots: [
          { wort: { es: "clasificar la ropa", de: "die Wäsche sortieren", en: "to sort the laundry", ru: "сортировать бельё" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "quitar una mancha", de: "einen Fleck entfernen", en: "to remove a stain", ru: "выводить пятно" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "poner la lavadora", de: "die Waschmaschine anstellen", en: "to start the washing machine", ru: "запускать стиральную машину" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "vaciar la lavadora", de: "die Waschmaschine ausräumen", en: "to empty the washing machine", ru: "разгружать стиральную машину" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "tender la ropa", de: "die Wäsche aufhängen", en: "to hang out the washing", ru: "развешивать бельё" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "secar la ropa", de: "die Wäsche trocknen", en: "to dry the clothes", ru: "сушить бельё" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "planchar la ropa", de: "die Wäsche bügeln", en: "to iron the clothes", ru: "гладить бельё" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "doblar la ropa", de: "die Wäsche zusammenlegen", en: "to fold the clothes", ru: "складывать бельё" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "guardar la ropa", de: "die Wäsche wegräumen", en: "to put the clothes away", ru: "убирать одежду" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      }
    ]
  },

  despacho: {
    title: "El despacho",
    images: [
      {
        title: "El despacho – Bild 1",
        file: "despacho1.png",
        openLabel: { wort: { es: "el despacho", de: "das Arbeitszimmer", en: "the study", ru: "кабинет" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "la lámpara de escritorio", de: "die Schreibtischlampe", en: "the desk lamp", ru: "настольная лампа" }, clickX: 23.0, clickY: 36.0, labelX: 31.5, labelY: 32.5, areaW: 16, areaH: 22 },
          { wort: { es: "el tablón de anuncios", de: "die Pinnwand", en: "the noticeboard", ru: "доска объявлений" }, clickX: 43.5, clickY: 19.5, labelX: 52.0, labelY: 15.0, areaW: 26, areaH: 20 },
          { wort: { es: "el ordenador", de: "der Computer", en: "the computer", ru: "компьютер" }, clickX: 44.0, clickY: 37.0, labelX: 52.0, labelY: 32.0, areaW: 22, areaH: 16 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 78.0, clickY: 11.5, labelX: 70.0, labelY: 10.5, areaW: 38, areaH: 15 },
          { wort: { es: "el archivador", de: "der Aktenordner", en: "the lever arch file", ru: "папка-регистратор" }, clickX: 70.0, clickY: 26.5, labelX: 79.0, labelY: 22.5, areaW: 20, areaH: 14 },
          { wort: { es: "la impresora", de: "der Drucker", en: "the printer", ru: "принтер" }, clickX: 89.0, clickY: 46.0, labelX: 80.0, labelY: 42.0, areaW: 24, areaH: 14 },
          { wort: { es: "el teclado", de: "die Tastatur", en: "the keyboard", ru: "клавиатура" }, clickX: 36.0, clickY: 51.5, labelX: 43.0, labelY: 48.5, areaW: 18, areaH: 6 },
          { wort: { es: "el ratón", de: "die Maus", en: "the mouse", ru: "мышь" }, clickX: 49.5, clickY: 52.0, labelX: 57.0, labelY: 49.5, areaW: 8, areaH: 6 },
          { wort: { es: "la carpeta", de: "die Mappe", en: "the folder", ru: "папка" }, clickX: 62.0, clickY: 53.0, labelX: 70.0, labelY: 49.5, areaW: 15, areaH: 9 },
          { wort: { es: "la silla de oficina", de: "der Bürostuhl", en: "the office chair", ru: "офисное кресло" }, clickX: 24.0, clickY: 74.0, labelX: 34.0, labelY: 67.0, areaW: 32, areaH: 38 },
          { wort: { es: "la bandeja de documentos", de: "die Papierablage", en: "the paper tray", ru: "лоток для документов" }, clickX: 80.0, clickY: 63.0, labelX: 86.5, labelY: 59.0, areaW: 18, areaH: 16 },
          { wort: { es: "el destructor de documentos", de: "der Aktenvernichter", en: "the paper shredder", ru: "уничтожитель документов" }, clickX: 91.0, clickY: 82.0, labelX: 82.0, labelY: 78.5, areaW: 14, areaH: 17 }
        ]
      },
      {
        title: "El despacho – Bild 2",
        file: "despacho2.png",
        hotspots: [
          { wort: { es: "la pantalla", de: "der Bildschirm", en: "the screen", ru: "экран" }, clickX: 58.0, clickY: 34.0, labelX: 67.0, labelY: 13.0, areaW: 58, areaH: 31 },
          { wort: { es: "la torre del ordenador", de: "der Computer-Tower", en: "the computer tower", ru: "системный блок" }, clickX: 10.5, clickY: 47.5, labelX: 21.5, labelY: 42.0, areaW: 19, areaH: 32 },
          { wort: { es: "los auriculares", de: "die Kopfhörer", en: "the headphones", ru: "наушники" }, clickX: 14.0, clickY: 74.0, labelX: 22.5, labelY: 71.0, areaW: 18, areaH: 18 },
          { wort: { es: "el teclado", de: "die Tastatur", en: "the keyboard", ru: "клавиатура" }, clickX: 47.5, clickY: 69.5, labelX: 56.0, labelY: 66.5, areaW: 36, areaH: 13 },
          { wort: { es: "la memoria USB", de: "der USB-Stick", en: "the USB stick", ru: "флешка" }, clickX: 54.5, clickY: 82.0, labelX: 64.5, labelY: 79.0, areaW: 16, areaH: 10 },
          { wort: { es: "el ratón", de: "die Maus", en: "the mouse", ru: "мышь" }, clickX: 81.0, clickY: 71.5, labelX: 72.5, labelY: 68.5, areaW: 11, areaH: 11 },
          { wort: { es: "la alfombrilla", de: "die Badematte", en: "the bath mat", ru: "коврик" }, clickX: 93.0, clickY: 72.5, labelX: 84.0, labelY: 82.0, areaW: 10, areaH: 12 }
        ]
      },
      {
        title: "El despacho – Bild 3",
        file: "despacho3.png",
        hotspots: [
          { wort: { es: "el escritorio", de: "der Schreibtisch", en: "the desk", ru: "письменный стол" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la silla de oficina", de: "der Bürostuhl", en: "the office chair", ru: "офисное кресло" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la lámpara de escritorio", de: "die Schreibtischlampe", en: "the desk lamp", ru: "настольная лампа" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el archivador", de: "der Aktenordner", en: "the lever arch file", ru: "папка-регистратор" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la papelera", de: "der Papierkorb", en: "the waste bin", ru: "мусорная корзина" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la bandeja de documentos", de: "die Papierablage", en: "the paper tray", ru: "лоток для документов" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el tablón de anuncios", de: "die Pinnwand", en: "the noticeboard", ru: "доска объявлений" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el ordenador", de: "der Computer", en: "the computer", ru: "компьютер" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El despacho – Bild 4",
        file: "despacho4.png",
        hotspots: [
          { wort: { es: "el portátil", de: "der Laptop", en: "the laptop", ru: "ноутбук" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el teclado", de: "die Tastatur", en: "the keyboard", ru: "клавиатура" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el ratón", de: "die Maus", en: "the mouse", ru: "мышь" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la alfombrilla", de: "die Badematte", en: "the bath mat", ru: "коврик" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la impresora", de: "der Drucker", en: "the printer", ru: "принтер" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el escáner", de: "der Scanner", en: "the scanner", ru: "сканер" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el destructor de documentos", de: "der Aktenvernichter", en: "the paper shredder", ru: "уничтожитель документов" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el teléfono fijo", de: "das Festnetztelefon", en: "the landline phone", ru: "стационарный телефон" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el móvil", de: "das Handy", en: "the mobile phone", ru: "мобильный телефон" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El despacho – Bild 5",
        file: "despacho5.png",
        hotspots: [
          { wort: { es: "la calculadora", de: "der Taschenrechner", en: "the calculator", ru: "калькулятор" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la tableta", de: "das Tablet", en: "the tablet", ru: "планшет" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "los auriculares", de: "die Kopfhörer", en: "the headphones", ru: "наушники" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el micrófono", de: "das Mikrofon", en: "the microphone", ru: "микрофон" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el altavoz", de: "der Lautsprecher", en: "the speaker", ru: "колонка" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la webcam", de: "die Webcam", en: "the webcam", ru: "веб-камера" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el cargador", de: "das Ladegerät", en: "the charger", ru: "зарядное устройство" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la memoria USB", de: "der USB-Stick", en: "the USB stick", ru: "флешка" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la máquina de escribir", de: "die Schreibmaschine", en: "the typewriter", ru: "печатная машинка" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El despacho – Bild 6",
        file: "despacho6.png",
        hotspots: [
          { wort: { es: "la perforadora", de: "der Locher", en: "the hole punch", ru: "дырокол" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la grapadora", de: "der Hefter", en: "the stapler", ru: "степлер" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el quitagrapas", de: "der Klammerentferner", en: "the staple remover", ru: "антистеплер" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el sacapuntas", de: "der Anspitzer", en: "the pencil sharpener", ru: "точилка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el sello", de: "der Stempel", en: "the stamp", ru: "штамп" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la almohadilla para sellos", de: "das Stempelkissen", en: "the stamp pad", ru: "штемпельная подушка" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el portarrollos de cinta adhesiva", de: "der Abroller für Klebeband", en: "the tape dispenser", ru: "диспенсер для клейкой ленты" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la cinta adhesiva", de: "das Klebeband", en: "the sticky tape", ru: "клейкая лента" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el sujetapapeles", de: "die Büroklammer", en: "the paper clip", ru: "скрепка" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El despacho – Bild 7",
        file: "despacho7.png",
        hotspots: [
          { wort: { es: "la chincheta", de: "die Reißzwecke", en: "the drawing pin", ru: "кнопка" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la goma de borrar", de: "der Radiergummi", en: "the rubber", ru: "ластик" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la regla", de: "das Lineal", en: "the ruler", ru: "линейка" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "las tijeras", de: "die Schere", en: "the scissors", ru: "ножницы" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el corrector líquido", de: "der Flüssigkorrektor", en: "the correction fluid", ru: "корректор" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el pegamento", de: "der Kleber", en: "the glue", ru: "клей" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el pegamento en barra", de: "der Klebestift", en: "the glue stick", ru: "клей-карандаш" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "las gomas elásticas", de: "die Gummibänder", en: "the elastic bands", ru: "резинки" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el portalápices", de: "der Stiftebecher", en: "the pen pot", ru: "карандашница" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El despacho – Bild 8",
        file: "despacho8.png",
        hotspots: [
          { wort: { es: "el bolígrafo", de: "der Kugelschreiber", en: "the pen", ru: "шариковая ручка" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el lápiz", de: "der Bleistift", en: "the pencil", ru: "карандаш" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "los lápices de colores", de: "die Buntstifte", en: "the coloured pencils", ru: "цветные карандаши" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "el rotulador", de: "der Filzstift", en: "the felt-tip pen", ru: "фломастер" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el libro", de: "das Buch", en: "the book", ru: "книга" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "las notas adhesivas", de: "die Haftnotizen", en: "the sticky notes", ru: "стикеры" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el sobre", de: "der Briefumschlag", en: "the envelope", ru: "конверт" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "la hoja de papel", de: "das Blatt Papier", en: "the sheet of paper", ru: "лист бумаги" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el archivador", de: "der Aktenordner", en: "the lever arch file", ru: "папка-регистратор" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "El despacho – Bild 9",
        file: "despacho9.png",
        hotspots: [
          { wort: { es: "el subrayador", de: "der Textmarker", en: "the highlighter", ru: "текстовыделитель" }, clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la carpeta", de: "die Mappe", en: "the folder", ru: "папка" }, clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "las fichas", de: "die Karteikarten", en: "the index cards", ru: "карточки" }, clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: { es: "la libreta", de: "der Notizblock", en: "the notepad", ru: "записная книжка" }, clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el cuaderno", de: "das Heft", en: "the notebook", ru: "тетрадь" }, clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "la agenda", de: "der Terminkalender", en: "the diary", ru: "ежедневник" }, clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: { es: "el calendario de pared", de: "der Wandkalender", en: "the wall calendar", ru: "настенный календарь" }, clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "los documentos", de: "die Dokumente", en: "the documents", ru: "документы" }, clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: { es: "el bloc de notas", de: "der Block", en: "the notepad", ru: "блокнот" }, clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      }
    ]
  },

  cuartoNinos: {
    title: "La habitación infantil",
    images: [
      {
        title: "La habitación infantil – Bild 1",
        file: "ninos1.png",
        openLabel: { wort: { es: "la habitación infantil", de: "das Kinderzimmer", en: "the children's room", ru: "детская комната" }, labelX: 50, labelY: 9 },
        hotspots: [
          { wort: { es: "la ventana", de: "das Fenster", en: "the window", ru: "окно" }, clickX: 7.0, clickY: 26.5, labelX: 19, labelY: 22.5, areaW: 14, areaH: 28 },
          { wort: { es: "la lámpara", de: "die Lampe", en: "the lamp", ru: "лампа" }, clickX: 6.8, clickY: 48.8, labelX: 14.5, labelY: 44.0, areaW: 11, areaH: 16 },
          { wort: { es: "el armario", de: "der Schrank", en: "the wardrobe", ru: "шкаф" }, clickX: 52.5, clickY: 31.5, labelX: 61, labelY: 25.0, areaW: 22, areaH: 31 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 86.0, clickY: 25.0, labelX: 79.0, labelY: 19.0, areaW: 18, areaH: 22 },
          { wort: { es: "el peluche", de: "das Kuscheltier", en: "the cuddly toy", ru: "плюшевая игрушка" }, clickX: 29.0, clickY: 47.5, labelX: 39.0, labelY: 42.0, areaW: 11, areaH: 14 },
          { wort: { es: "la cama", de: "das Bett", en: "the bed", ru: "кровать" }, clickX: 33.5, clickY: 58.5, labelX: 40.0, labelY: 63.0, areaW: 33, areaH: 18 },
          { wort: { es: "el escritorio", de: "der Schreibtisch", en: "the desk", ru: "письменный стол" }, clickX: 77.0, clickY: 48.5, labelX: 81.5, labelY: 45.0, areaW: 28, areaH: 14 },
          { wort: { es: "la silla", de: "der Stuhl", en: "the chair", ru: "стул" }, clickX: 69.0, clickY: 61.5, labelX: 72.0, labelY: 73.0, areaW: 16, areaH: 20 },
          { wort: { es: "la mochila escolar", de: "der Schulrucksack", en: "the school rucksack", ru: "школьный рюкзак" }, clickX: 93.0, clickY: 70.5, labelX: 86.5, labelY: 70.5, areaW: 12, areaH: 17 },
          { wort: { es: "la casa de muñecas", de: "das Puppenhaus", en: "the doll's house", ru: "кукольный домик" }, clickX: 33.0, clickY: 80.5, labelX: 23.0, labelY: 79.0, areaW: 22, areaH: 22 },
          { wort: { es: "las muñecas", de: "die Puppen", en: "the dolls", ru: "куклы" }, clickX: 56.0, clickY: 83.8, labelX: 70.5, labelY: 79.0, areaW: 14, areaH: 15 },
        ]
      },
      {
        title: "La habitación infantil – Bild 2",
        file: "ninos2.png",
        hotspots: [
          { wort: { es: "el móvil de cuna", de: "das Mobile über dem Bettchen", en: "the cot mobile", ru: "мобиль для кроватки" }, clickX: 25.5, clickY: 17.5, labelX: 17.5, labelY: 18.5, areaW: 20, areaH: 16 },
          { wort: { es: "la cuna", de: "das Kinderbett", en: "the cot", ru: "детская кроватка" }, clickX: 31.0, clickY: 37.0, labelX: 40.0, labelY: 30.5, areaW: 33, areaH: 25 },
          { wort: { es: "la balda", de: "das Regalbrett", en: "the shelf", ru: "полка" }, clickX: 77.5, clickY: 12.5, labelX: 75.5, labelY: 10.0, areaW: 28, areaH: 11 },
          { wort: { es: "el cambiador", de: "der Wickeltisch", en: "the changing table", ru: "пеленальный столик" }, clickX: 69.0, clickY: 36.0, labelX: 77.5, labelY: 29.5, areaW: 24, areaH: 20 },
          { wort: { es: "la trona", de: "der Hochstuhl", en: "the high chair", ru: "детский стульчик" }, clickX: 84.5, clickY: 58.0, labelX: 82.5, labelY: 48.0, areaW: 18, areaH: 25 },
          { wort: { es: "los bloques de construcción", de: "die Bausteine", en: "the building blocks", ru: "строительные кубики" }, clickX: 28.0, clickY: 61.5, labelX: 29.5, labelY: 59.0, areaW: 24, areaH: 16 },
          { wort: { es: "el libro infantil", de: "das Kinderbuch", en: "the children's book", ru: "детская книга" }, clickX: 56.0, clickY: 63.5, labelX: 68.5, labelY: 58.0, areaW: 18, areaH: 14 },
          { wort: { es: "el chupete", de: "der Schnuller", en: "the dummy", ru: "пустышка" }, clickX: 23.0, clickY: 73.0, labelX: 26.0, labelY: 72.0, areaW: 10, areaH: 10 },
          { wort: { es: "el sonajero", de: "die Rassel", en: "the rattle", ru: "погремушка" }, clickX: 39.0, clickY: 80.0, labelX: 50.5, labelY: 88.0, areaW: 16, areaH: 15 },
          { wort: { es: "el osito de peluche", de: "der Teddybär", en: "the teddy bear", ru: "плюшевый мишка" }, clickX: 63.5, clickY: 81.0, labelX: 78.5, labelY: 76.0, areaW: 15, areaH: 18 }
        ]
      },
      {
        title: "La habitación infantil – Bild 3",
        file: "ninos4.png",
        hotspots: [
          { wort: { es: "el armario", de: "der Schrank", en: "the wardrobe", ru: "шкаф" }, clickX: 16.7, clickY: 17.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cómoda", de: "die Kommode", en: "the chest of drawers", ru: "комод" }, clickX: 50, clickY: 17.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cuna", de: "das Kinderbett", en: "the cot", ru: "детская кроватка" }, clickX: 83.3, clickY: 17.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cuna mecedora", de: "die Wiege", en: "the rocking crib", ru: "колыбель-качалка" }, clickX: 16.7, clickY: 52.2, labelX: 24, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "el parque para bebés", de: "der Laufstall", en: "the playpen", ru: "манеж" }, clickX: 50, clickY: 52.2, labelX: 50, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "el cambiador", de: "der Wickeltisch", en: "the changing table", ru: "пеленальный столик" }, clickX: 83.3, clickY: 52.2, labelX: 76, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "la trona", de: "der Hochstuhl", en: "the high chair", ru: "детский стульчик" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el capazo", de: "die Babywanne", en: "the carrycot", ru: "люлька" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la litera", de: "das Etagenbett", en: "the bunk bed", ru: "двухъярусная кровать" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La habitación infantil – Bild 4",
        file: "ninos5.png",
        hotspots: [
          { wort: { es: "el pañal", de: "die Windel", en: "the nappy", ru: "подгузник" }, clickX: 16.7, clickY: 18.0, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el biberón", de: "das Fläschchen", en: "the baby bottle", ru: "бутылочка" }, clickX: 50, clickY: 18.0, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el chupete", de: "der Schnuller", en: "the dummy", ru: "пустышка" }, clickX: 83.3, clickY: 18.0, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el termómetro", de: "das Thermometer", en: "the thermometer", ru: "термометр" }, clickX: 16.7, clickY: 50.0, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la bañera para bebés", de: "die Babybadewanne", en: "the baby bath", ru: "детская ванночка" }, clickX: 50, clickY: 50.0, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el orinal", de: "das Töpfchen", en: "the potty", ru: "горшок" }, clickX: 83.3, clickY: 50.0, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el cubo para pañales", de: "der Windeleimer", en: "the nappy bin", ru: "ведро для подгузников" }, clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el vigilabebés", de: "das Babyfon", en: "the baby monitor", ru: "радионяня" }, clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la luz nocturna", de: "das Nachtlicht", en: "the night light", ru: "ночник" }, clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La habitación infantil – Bild 5",
        file: "ninos11.png",
        hotspots: [
          { wort: { es: "la báscula para bebés", de: "die Babywaage", en: "the baby scales", ru: "детские весы" }, clickX: 16.7, clickY: 19.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "las toallitas húmedas", de: "die Feuchttücher", en: "the baby wipes", ru: "влажные салфетки" }, clickX: 50, clickY: 19.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el babero", de: "das Lätzchen", en: "the bib", ru: "слюнявчик" }, clickX: 83.3, clickY: 19.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el mordedor", de: "der Beißring", en: "the teether", ru: "прорезыватель" }, clickX: 16.7, clickY: 50.2, labelX: 24, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "la ropa de bebé", de: "die Babykleidung", en: "the baby clothes", ru: "детская одежда" }, clickX: 50, clickY: 50.2, labelX: 50, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "la manta de bebé", de: "die Babydecke", en: "the baby blanket", ru: "детское одеяло" }, clickX: 83.3, clickY: 50.2, labelX: 76, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "el vaso con asas", de: "der Trinklernbecher", en: "the sippy cup", ru: "чашка-непроливайка" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la crema para bebés", de: "die Babycreme", en: "the baby cream", ru: "детский крем" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el portabebés", de: "die Babytrage", en: "the baby carrier", ru: "переноска для ребёнка" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La habitación infantil – Bild 6",
        file: "ninos6.png",
        hotspots: [
          { wort: { es: "el oso de peluche", de: "der Teddybär", en: "the teddy bear", ru: "плюшевый медведь" }, clickX: 16.7, clickY: 19.6, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la muñeca", de: "die Puppe", en: "the doll", ru: "кукла" }, clickX: 50, clickY: 19.6, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la pelota", de: "der Ball", en: "the ball", ru: "мяч" }, clickX: 83.3, clickY: 19.6, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el sonajero", de: "die Rassel", en: "the rattle", ru: "погремушка" }, clickX: 16.7, clickY: 51.2, labelX: 24, labelY: 42, areaW: 30, areaH: 30 },
          { wort: { es: "el pato de goma", de: "die Gummiente", en: "the rubber duck", ru: "резиновая уточка" }, clickX: 50, clickY: 51.2, labelX: 50, labelY: 42, areaW: 30, areaH: 30 },
          { wort: { es: "el tren de juguete", de: "der Spielzeugzug", en: "the toy train", ru: "игрушечный поезд" }, clickX: 83.3, clickY: 51.2, labelX: 76, labelY: 42, areaW: 30, areaH: 30 },
          { wort: { es: "el coche de juguete", de: "das Spielzeugauto", en: "the toy car", ru: "игрушечная машинка" }, clickX: 16.7, clickY: 82.3, labelX: 24, labelY: 75, areaW: 30, areaH: 30 },
          { wort: { es: "los bloques", de: "die Bauklötze", en: "the blocks", ru: "кубики" }, clickX: 50, clickY: 82.3, labelX: 50, labelY: 75, areaW: 30, areaH: 30 },
          { wort: { es: "la casa de muñecas", de: "das Puppenhaus", en: "the doll's house", ru: "кукольный домик" }, clickX: 83.3, clickY: 82.3, labelX: 76, labelY: 75, areaW: 30, areaH: 30 }
        ]
      },
      {
        title: "La habitación infantil – Bild 7",
        file: "ninos7.png",
        hotspots: [
          { wort: { es: "el rompecabezas", de: "das Puzzle", en: "the jigsaw puzzle", ru: "пазл" }, clickX: 16.7, clickY: 18.7, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el libro ilustrado", de: "das Bilderbuch", en: "the picture book", ru: "книжка с картинками" }, clickX: 50, clickY: 18.7, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el libro para colorear", de: "das Malbuch", en: "the colouring book", ru: "раскраска" }, clickX: 83.3, clickY: 18.7, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la caja de juguetes", de: "die Spielzeugkiste", en: "the toy box", ru: "ящик для игрушек" }, clickX: 16.7, clickY: 51.5, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el móvil de cuna", de: "das Mobile über dem Bettchen", en: "the cot mobile", ru: "мобиль для кроватки" }, clickX: 50, clickY: 51.5, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "el caballito balancín", de: "das Schaukelpferd", en: "the rocking horse", ru: "лошадка-качалка" }, clickX: 83.3, clickY: 51.5, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "los juguetes", de: "die Spielsachen", en: "the toys", ru: "игрушки" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "los lápices de colores", de: "die Buntstifte", en: "the coloured pencils", ru: "цветные карандаши" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el papel", de: "das Papier", en: "the paper", ru: "бумага" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La habitación infantil – Bild 8",
        file: "ninos8.png",
        hotspots: [
          { wort: { es: "llorar", de: "weinen", en: "to cry", ru: "плакать" }, clickX: 16.7, clickY: 18.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "mecer al bebé", de: "das Baby wiegen", en: "to rock the baby", ru: "укачивать малыша" }, clickX: 50, clickY: 18.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "dar el biberón", de: "das Fläschchen geben", en: "to feed the baby with a bottle", ru: "кормить из бутылочки" }, clickX: 83.3, clickY: 18.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "amamantar al bebé", de: "das Baby stillen", en: "to breastfeed the baby", ru: "кормить грудью" }, clickX: 16.7, clickY: 50.0, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "jugar", de: "spielen", en: "to play", ru: "играть" }, clickX: 50, clickY: 50.0, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "leer un cuento", de: "eine Geschichte vorlesen", en: "to read a story", ru: "читать сказку" }, clickX: 83.3, clickY: 50.0, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "acostar al niño", de: "das Kind ins Bett bringen", en: "to put the child to bed", ru: "укладывать ребёнка спать" }, clickX: 16.7, clickY: 82.0, labelX: 24, labelY: 75, areaW: 30, areaH: 31 },
          { wort: { es: "cantar una nana", de: "ein Schlaflied singen", en: "to sing a lullaby", ru: "петь колыбельную" }, clickX: 50, clickY: 82.0, labelX: 50, labelY: 75, areaW: 30, areaH: 31 },
          { wort: { es: "dormir", de: "schlafen", en: "to sleep", ru: "спать" }, clickX: 83.3, clickY: 82.0, labelX: 76, labelY: 75, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "La habitación infantil – Bild 9",
        file: "ninos9.png",
        hotspots: [
          { wort: { es: "calmar al bebé", de: "das Baby beruhigen", en: "to calm the baby", ru: "успокаивать малыша" }, clickX: 16.7, clickY: 18.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "empujar el carrito", de: "den Kinderwagen schieben", en: "to push the pram", ru: "катить коляску" }, clickX: 50, clickY: 18.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "pesar al bebé", de: "das Baby wiegen", en: "to weigh the baby", ru: "взвешивать малыша" }, clickX: 83.3, clickY: 18.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "medir la temperatura", de: "die Temperatur messen", en: "to take the temperature", ru: "измерять температуру" }, clickX: 16.7, clickY: 50.0, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "cambiar los pañales", de: "die Windeln wechseln", en: "to change the nappies", ru: "менять подгузники" }, clickX: 50, clickY: 50.0, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "bañar al bebé", de: "das Baby baden", en: "to bathe the baby", ru: "купать малыша" }, clickX: 83.3, clickY: 50.0, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "peinar al bebé", de: "das Baby kämmen", en: "to comb the baby's hair", ru: "причёсывать малыша" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "dar de comer al bebé", de: "das Baby füttern", en: "to feed the baby", ru: "кормить малыша" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "ir al orinal", de: "aufs Töpfchen gehen", en: "to use the potty", ru: "ходить на горшок" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La habitación infantil – Bild 10",
        file: "ninos3.png",
        specialTopLabel: {"es":"la habitación juvenil","de":"das Jugendzimmer","en":"the teenager's room","ru":"комната подростка"},
        hotspots: [
          { wort: { es: "los pósteres", de: "die Poster", en: "the posters", ru: "постеры" }, clickX: 37.5, clickY: 17.5, labelX: 51.0, labelY: 12.5, areaW: 33, areaH: 22 },
          { wort: { es: "la balda", de: "das Regalbrett", en: "the shelf", ru: "полка" }, clickX: 83.0, clickY: 27.5, labelX: 75.5, labelY: 25.0, areaW: 27, areaH: 9 },
          { wort: { es: "la consola", de: "die Spielkonsole", en: "the game console", ru: "игровая приставка" }, clickX: 45.0, clickY: 39.2, labelX: 52.0, labelY: 35.0, areaW: 13, areaH: 7 },
          { wort: { es: "el mando", de: "der Controller", en: "the controller", ru: "геймпад" }, clickX: 55.5, clickY: 43.0, labelX: 62.5, labelY: 38.0, areaW: 9, areaH: 8 },
          { wort: { es: "el altavoz", de: "der Lautsprecher", en: "the speaker", ru: "колонка" }, clickX: 65.5, clickY: 49.5, labelX: 71.5, labelY: 47.0, areaW: 8, areaH: 9 },
          { wort: { es: "el ordenador", de: "der Computer", en: "the computer", ru: "компьютер" }, clickX: 86.0, clickY: 46.5, labelX: 78.0, labelY: 41.0, areaW: 22, areaH: 18 },
          { wort: { es: "el teclado", de: "die Tastatur", en: "the keyboard", ru: "клавиатура" }, clickX: 72.5, clickY: 60.2, labelX: 65.5, labelY: 58.0, areaW: 20, areaH: 7 },
          { wort: { es: "los auriculares", de: "die Kopfhörer", en: "the headphones", ru: "наушники" }, clickX: 90.5, clickY: 66.0, labelX: 81.5, labelY: 64.0, areaW: 16, areaH: 10 },
          { wort: { es: "la silla giratoria", de: "der Drehstuhl", en: "the swivel chair", ru: "вращающееся кресло" }, clickX: 73.0, clickY: 79.5, labelX: 62.5, labelY: 88.0, areaW: 19, areaH: 27 },
          { wort: { es: "el móvil", de: "das Handy", en: "the mobile phone", ru: "мобильный телефон" }, clickX: 7.5, clickY: 54.5, labelX: 14.0, labelY: 49.5, areaW: 9, areaH: 8 },
          { wort: { es: "la cama", de: "das Bett", en: "the bed", ru: "кровать" }, clickX: 20.5, clickY: 42.8, labelX: 28.0, labelY: 41.0, areaW: 34, areaH: 17 },
          { wort: { es: "la alfombra", de: "der Teppich", en: "the rug", ru: "ковёр" }, clickX: 40.0, clickY: 76.0, labelX: 48.0, labelY: 70.0, areaW: 39, areaH: 31 },
          { wort: { es: "la mochila escolar", de: "der Schulrucksack", en: "the school rucksack", ru: "школьный рюкзак" }, clickX: 14.0, clickY: 93.0, labelX: 24.0, labelY: 87.0, areaW: 17, areaH: 18 }
        ]
      },
      {
        title: "La habitación infantil – Bild 11",
        file: "ninos10.png",
        hotspots: [
          { wort: { es: "la cama", de: "das Bett", en: "the bed", ru: "кровать" }, clickX: 16.7, clickY: 19.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la cama alta", de: "das Hochbett", en: "the loft bed", ru: "кровать-чердак" }, clickX: 50, clickY: 19.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "el escritorio", de: "der Schreibtisch", en: "the desk", ru: "письменный стол" }, clickX: 83.3, clickY: 19.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 31 },
          { wort: { es: "la silla giratoria", de: "der Drehstuhl", en: "the swivel chair", ru: "вращающееся кресло" }, clickX: 16.7, clickY: 50.2, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la estantería", de: "das Regal", en: "the shelving unit / the bookcase", ru: "стеллаж / книжный шкаф" }, clickX: 50, clickY: 50.2, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la balda", de: "das Regalbrett", en: "the shelf", ru: "полка" }, clickX: 83.3, clickY: 50.2, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: { es: "la alfombra", de: "der Teppich", en: "the rug", ru: "ковёр" }, clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la lámpara de escritorio", de: "die Schreibtischlampe", en: "the desk lamp", ru: "настольная лампа" }, clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "el armario", de: "der Schrank", en: "the wardrobe", ru: "шкаф" }, clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La habitación infantil – Bild 12",
        file: "ninos12.png",
        hotspots: [
          { wort: { es: "el ordenador", de: "der Computer", en: "the computer", ru: "компьютер" }, clickX: 17.6, clickY: 17.7, labelX: 24, labelY: 9.5, areaW: 32.4, areaH: 33.5 },
          { wort: { es: "el teclado", de: "die Tastatur", en: "the keyboard", ru: "клавиатура" }, clickX: 49.9, clickY: 17.7, labelX: 50, labelY: 9.5, areaW: 31.4, areaH: 33.5 },
          { wort: { es: "el ratón", de: "die Maus", en: "the mouse", ru: "мышь" }, clickX: 82.2, clickY: 17.7, labelX: 76, labelY: 9.5, areaW: 32.6, areaH: 33.5 },
          { wort: { es: "el ordenador portátil", de: "der Laptop", en: "the laptop", ru: "ноутбук" }, clickX: 17.6, clickY: 50.8, labelX: 24, labelY: 42, areaW: 32.4, areaH: 32.2 },
          { wort: { es: "la tableta", de: "das Tablet", en: "the tablet", ru: "планшет" }, clickX: 49.9, clickY: 50.8, labelX: 50, labelY: 42, areaW: 31.4, areaH: 32.2 },
          { wort: { es: "el altavoz", de: "der Lautsprecher", en: "the speaker", ru: "колонка" }, clickX: 82.2, clickY: 50.8, labelX: 76, labelY: 42, areaW: 32.6, areaH: 32.2 },
          { wort: { es: "los auriculares", de: "die Kopfhörer", en: "the headphones", ru: "наушники" }, clickX: 17.6, clickY: 83.1, labelX: 24, labelY: 75, areaW: 32.4, areaH: 31.8 },
          { wort: { es: "el móvil", de: "das Handy", en: "the mobile phone", ru: "мобильный телефон" }, clickX: 49.9, clickY: 83.1, labelX: 50, labelY: 75, areaW: 31.4, areaH: 31.8 },
          { wort: { es: "la radio", de: "das Radio", en: "the radio", ru: "радио" }, clickX: 82.2, clickY: 83.1, labelX: 76, labelY: 75, areaW: 32.6, areaH: 31.8 }
        ]
      },
      {
        title: "La habitación infantil – Bild 13",
        file: "ninos13.png",
        hotspots: [
          { wort: { es: "el televisor", de: "der Fernseher", en: "the television / the TV", ru: "телевизор" }, clickX: 16.7, clickY: 18.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 32 },
          { wort: { es: "el teclado musical", de: "das Keyboard", en: "the keyboard", ru: "клавишный инструмент" }, clickX: 50, clickY: 18.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 32 },
          { wort: { es: "la guitarra", de: "die Gitarre", en: "the guitar", ru: "гитара" }, clickX: 83.3, clickY: 18.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 32 },
          { wort: { es: "los pósteres", de: "die Poster", en: "the posters", ru: "постеры" }, clickX: 16.7, clickY: 54.0, labelX: 24, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "las gafas de realidad virtual", de: "die VR-Brille", en: "the VR goggles", ru: "очки виртуальной реальности" }, clickX: 50, clickY: 54.0, labelX: 50, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "la consola", de: "die Spielkonsole", en: "the game console", ru: "игровая приставка" }, clickX: 83.3, clickY: 54.0, labelX: 76, labelY: 42, areaW: 30, areaH: 31 },
          { wort: { es: "el mando", de: "der Controller", en: "the controller", ru: "геймпад" }, clickX: 16.7, clickY: 84.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "los videojuegos", de: "die Videospiele", en: "the video games", ru: "видеоигры" }, clickX: 50, clickY: 84.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: { es: "la mochila escolar", de: "der Schulrucksack", en: "the school rucksack", ru: "школьный рюкзак" }, clickX: 83.3, clickY: 84.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La habitación infantil – Bild 14",
        file: "ninos14.png",
        hotspots: [
          { wort: { es: "el libro", de: "das Buch", en: "the book", ru: "книга" }, clickX: 17.6, clickY: 17.7, labelX: 24, labelY: 9.5, areaW: 32.4, areaH: 33.5 },
          { wort: { es: "el papel", de: "das Papier", en: "the paper", ru: "бумага" }, clickX: 49.8, clickY: 17.7, labelX: 50, labelY: 9.5, areaW: 31.3, areaH: 33.5 },
          { wort: { es: "el bolígrafo", de: "der Kugelschreiber", en: "the pen", ru: "шариковая ручка" }, clickX: 82.2, clickY: 17.7, labelX: 76, labelY: 9.5, areaW: 32.6, areaH: 33.5 },
          { wort: { es: "el cuaderno", de: "das Heft", en: "the notebook", ru: "тетрадь" }, clickX: 17.6, clickY: 50.8, labelX: 24, labelY: 42, areaW: 32.4, areaH: 32.2 },
          { wort: { es: "los rotuladores", de: "die Filzstifte", en: "the felt-tip pens", ru: "фломастеры" }, clickX: 49.8, clickY: 50.8, labelX: 50, labelY: 42, areaW: 31.3, areaH: 32.2 },
          { wort: { es: "el estuche", de: "das Mäppchen", en: "the pencil case", ru: "пенал" }, clickX: 82.2, clickY: 50.8, labelX: 76, labelY: 42, areaW: 32.6, areaH: 32.2 },
          { wort: { es: "la regla", de: "das Lineal", en: "the ruler", ru: "линейка" }, clickX: 17.6, clickY: 83.1, labelX: 24, labelY: 75, areaW: 32.4, areaH: 31.8 },
          { wort: { es: "las tijeras", de: "die Schere", en: "the scissors", ru: "ножницы" }, clickX: 49.8, clickY: 83.1, labelX: 50, labelY: 75, areaW: 31.3, areaH: 31.8 },
          { wort: { es: "la calculadora", de: "der Taschenrechner", en: "the calculator", ru: "калькулятор" }, clickX: 82.2, clickY: 83.1, labelX: 76, labelY: 75, areaW: 32.6, areaH: 31.8 }
        ]
      },
      {
        title: "La habitación infantil – Bild 15",
        file: "ninos15.png",
        hotspots: [
          { wort: { es: "jugar a videojuegos", de: "Videospiele spielen", en: "to play video games", ru: "играть в видеоигры" }, clickX: 17.0, clickY: 16.9, labelX: 24, labelY: 8.3, areaW: 32.5, areaH: 32.9 },
          { wort: { es: "escuchar música", de: "Musik hören", en: "to listen to music", ru: "слушать музыку" }, clickX: 50.0, clickY: 16.9, labelX: 50, labelY: 8.3, areaW: 32.2, areaH: 32.9 },
          { wort: { es: "ver la televisión", de: "fernsehen", en: "to watch television", ru: "смотреть телевизор" }, clickX: 83.0, clickY: 16.9, labelX: 76, labelY: 8.3, areaW: 32.7, areaH: 32.9 },
          { wort: { es: "navegar por internet", de: "im Internet surfen", en: "to browse the internet", ru: "сидеть в интернете" }, clickX: 17.0, clickY: 50.0, labelX: 24, labelY: 40.5, areaW: 32.5, areaH: 32.6 },
          { wort: { es: "chatear con amigos", de: "mit Freunden chatten", en: "to chat with friends", ru: "общаться в чате с друзьями" }, clickX: 50.0, clickY: 50.0, labelX: 50, labelY: 40.5, areaW: 32.2, areaH: 32.6 },
          { wort: { es: "llamar a un amigo", de: "einen Freund anrufen", en: "to call a friend", ru: "звонить другу" }, clickX: 83.0, clickY: 50.0, labelX: 76, labelY: 40.5, areaW: 32.7, areaH: 32.6 },
          { wort: { es: "grabar vídeos", de: "Videos aufnehmen", en: "to record videos", ru: "снимать видео" }, clickX: 17.0, clickY: 83.1, labelX: 24, labelY: 75, areaW: 32.5, areaH: 32.8 },
          { wort: { es: "hacer una videollamada", de: "einen Videoanruf machen", en: "to make a video call", ru: "делать видеозвонок" }, clickX: 50.0, clickY: 83.1, labelX: 50, labelY: 75, areaW: 32.2, areaH: 32.8 },
          { wort: { es: "sacar fotos", de: "Fotos machen", en: "to take photos", ru: "фотографировать" }, clickX: 83.0, clickY: 83.1, labelX: 76, labelY: 75, areaW: 32.7, areaH: 32.8 }
        ]
      },
      {
        title: "La habitación infantil – Bild 16",
        file: "ninos16.png",
        hotspots: [
          { wort: { es: "tocar la guitarra", de: "Gitarre spielen", en: "to play the guitar", ru: "играть на гитаре" }, clickX: 16.9, clickY: 17.7, labelX: 24, labelY: 8.3, areaW: 32.8, areaH: 34.8 },
          { wort: { es: "tocar el teclado", de: "Keyboard spielen", en: "to play the keyboard", ru: "играть на клавишах" }, clickX: 50.0, clickY: 17.7, labelX: 50, labelY: 8.3, areaW: 32.0, areaH: 34.8 },
          { wort: { es: "cantar", de: "singen", en: "to sing", ru: "петь" }, clickX: 83.0, clickY: 17.7, labelX: 76, labelY: 8.3, areaW: 32.8, areaH: 34.8 },
          { wort: { es: "dibujar", de: "zeichnen", en: "to draw", ru: "рисовать" }, clickX: 16.9, clickY: 51.7, labelX: 24, labelY: 40.5, areaW: 32.8, areaH: 32.6 },
          { wort: { es: "pintar", de: "malen", en: "to paint", ru: "рисовать красками" }, clickX: 50.0, clickY: 51.7, labelX: 50, labelY: 40.5, areaW: 32.0, areaH: 32.6 },
          { wort: { es: "escribir un diario", de: "Tagebuch schreiben", en: "to keep a diary", ru: "вести дневник" }, clickX: 83.0, clickY: 51.7, labelX: 76, labelY: 40.5, areaW: 32.8, areaH: 32.6 },
          { wort: { es: "leer", de: "lesen", en: "to read", ru: "читать" }, clickX: 16.9, clickY: 84.0, labelX: 24, labelY: 75, areaW: 32.8, areaH: 31.2 },
          { wort: { es: "escuchar música", de: "Musik hören", en: "to listen to music", ru: "слушать музыку" }, clickX: 50.0, clickY: 84.0, labelX: 50, labelY: 75, areaW: 32.0, areaH: 31.2 },
          { wort: { es: "hacer una fiesta con amigos", de: "mit Freunden eine Party machen", en: "to have a party with friends", ru: "устраивать вечеринку с друзьями" }, clickX: 83.0, clickY: 84.0, labelX: 76, labelY: 75, areaW: 32.8, areaH: 31.2 }
        ]
      },
      {
        title: "La habitación infantil – Bild 17",
        file: "ninos17.png",
        hotspots: [
          { wort: { es: "hacer la cama", de: "das Bett machen", en: "to make the bed", ru: "заправлять кровать" }, clickX: 16.7, clickY: 18.2, labelX: 24, labelY: 9.5, areaW: 32.3, areaH: 35.7 },
          { wort: { es: "ordenar la habitación", de: "das Zimmer aufräumen", en: "to tidy the room", ru: "убирать комнату" }, clickX: 49.7, clickY: 18.2, labelX: 50, labelY: 9.5, areaW: 32.6, areaH: 35.7 },
          { wort: { es: "guardar la ropa", de: "die Wäsche wegräumen", en: "to put the clothes away", ru: "убирать одежду" }, clickX: 82.9, clickY: 18.2, labelX: 76, labelY: 9.5, areaW: 32.9, areaH: 35.7 },
          { wort: { es: "limpiar el escritorio", de: "den Schreibtisch aufräumen", en: "to clean the desk", ru: "убирать письменный стол" }, clickX: 16.7, clickY: 52.0, labelX: 24, labelY: 42, areaW: 32.3, areaH: 31.2 },
          { wort: { es: "estudiar", de: "lernen", en: "to study", ru: "учиться" }, clickX: 49.7, clickY: 52.0, labelX: 50, labelY: 42, areaW: 32.6, areaH: 31.2 },
          { wort: { es: "hacer los deberes", de: "Hausaufgaben machen", en: "to do homework", ru: "делать домашнее задание" }, clickX: 82.9, clickY: 52.0, labelX: 76, labelY: 42, areaW: 32.9, areaH: 31.2 },
          { wort: { es: "descansar", de: "sich ausruhen", en: "to rest", ru: "отдыхать" }, clickX: 16.7, clickY: 83.8, labelX: 24, labelY: 75, areaW: 32.3, areaH: 31.8 },
          { wort: { es: "preparar la mochila", de: "den Rucksack packen", en: "to pack the school bag", ru: "собирать рюкзак" }, clickX: 49.7, clickY: 83.8, labelX: 50, labelY: 75, areaW: 32.6, areaH: 31.8 },
          { wort: { es: "dormir", de: "schlafen", en: "to sleep", ru: "спать" }, clickX: 82.9, clickY: 83.8, labelX: 76, labelY: 75, areaW: 32.9, areaH: 31.8 }
        ]
      }
    ]
  }
};
