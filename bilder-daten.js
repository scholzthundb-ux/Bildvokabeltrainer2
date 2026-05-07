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
//     { wort: "el sol", clickX: 50, clickY: 20, labelX: 58, labelY: 14 }
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
          { wort: "uno", clickX: 20.5, clickY: 19.5, labelX: 26, labelY: 10.5, areaW: 22, areaH: 20 },
          { wort: "dos", clickX: 47.5, clickY: 18.5, labelX: 52, labelY: 10.5, areaW: 23, areaH: 20 },
          { wort: "tres", clickX: 76.5, clickY: 19.0, labelX: 81, labelY: 10.5, areaW: 24, areaH: 21 },
          { wort: "cuatro", clickX: 19.5, clickY: 38.0, labelX: 27, labelY: 29.5, areaW: 24, areaH: 22 },
          { wort: "cinco", clickX: 49.5, clickY: 39.0, labelX: 55, labelY: 30.5, areaW: 24, areaH: 21 },
          { wort: "seis", clickX: 77.0, clickY: 38.5, labelX: 83, labelY: 30, areaW: 25, areaH: 22 },
          { wort: "siete", clickX: 26.0, clickY: 60.5, labelX: 19, labelY: 53, areaW: 33, areaH: 16 },
          { wort: "ocho", clickX: 67.0, clickY: 61.0, labelX: 60, labelY: 53, areaW: 29, areaH: 17 },
          { wort: "nueve", clickX: 21.0, clickY: 84.0, labelX: 16, labelY: 76, areaW: 25, areaH: 21 },
          { wort: "diez", clickX: 65.5, clickY: 84.5, labelX: 58, labelY: 75.5, areaW: 31, areaH: 23 }
        ]
      },
      {
        title: "Los números – Bild 2",
        file: "zahlen2.png",
        hotspots: [
          { wort: "once", clickX: 20.5, clickY: 18.5, labelX: 26, labelY: 10.5, areaW: 25, areaH: 22 },
          { wort: "doce", clickX: 50.0, clickY: 18.5, labelX: 56, labelY: 10.5, areaW: 24, areaH: 22 },
          { wort: "trece", clickX: 79.5, clickY: 18.5, labelX: 84, labelY: 10.5, areaW: 26, areaH: 22 },
          { wort: "catorce", clickX: 20.5, clickY: 43.0, labelX: 27, labelY: 34.5, areaW: 25, areaH: 24 },
          { wort: "quince", clickX: 50.0, clickY: 43.0, labelX: 55, labelY: 34.5, areaW: 24, areaH: 24 },
          { wort: "dieciséis", clickX: 79.5, clickY: 43.0, labelX: 84, labelY: 34.5, areaW: 25, areaH: 24 },
          { wort: "diecisiete", clickX: 20.5, clickY: 68.0, labelX: 14, labelY: 59.5, areaW: 25, areaH: 23 },
          { wort: "dieciocho", clickX: 50.0, clickY: 68.0, labelX: 58, labelY: 59.5, areaW: 24, areaH: 23 },
          { wort: "diecinueve", clickX: 79.5, clickY: 68.0, labelX: 86, labelY: 59.5, areaW: 25, areaH: 23 },
          { wort: "veinte", clickX: 50.0, clickY: 89.0, labelX: 57, labelY: 80.5, areaW: 39, areaH: 16 }
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
          { wort: "el sol", clickX: 76.4, clickY: 22.9, labelX: 74, labelY: 22, areaW: 17, areaH: 17, shape: "circle" },
          { wort: "la palmera", clickX: 11.5, clickY: 31.8, labelX: 22, labelY: 31, areaW: 26, areaH: 31 },
          { wort: "el mar", clickX: 36.33, clickY: 47.46, labelX: 42, labelY: 44 },
          { wort: "el barco", clickX: 53.3, clickY: 45.2, labelX: 56, labelY: 48, areaW: 16, areaH: 13 },
          { wort: "la ola", clickX: 76.8, clickY: 55.8, labelX: 72, labelY: 58, areaW: 12, areaH: 10 },
          { wort: "la tabla de surf", clickX: 46.58, clickY: 58.59, labelX: 61, labelY: 63 },
          { wort: "el bañador", clickX: 35.8, clickY: 70.4, labelX: 56, labelY: 68, areaW: 16, areaH: 18 },
          { wort: "la sombrilla", clickX: 14.8, clickY: 61.4, labelX: 12, labelY: 69, areaW: 31, areaH: 22 },
          { wort: "la toalla", clickX: 20.5, clickY: 82.5, labelX: 18, labelY: 90, areaW: 31, areaH: 16 },
          { wort: "las gafas de sol", clickX: 39.1, clickY: 88.7, labelX: 41, labelY: 92, areaW: 10, areaH: 8 },
          { wort: "la crema solar", clickX: 59.86, clickY: 86.98, labelX: 66, labelY: 89 },
          { wort: "la concha", clickX: 95.0, clickY: 84.7, labelX: 86, labelY: 90, areaW: 8, areaH: 9 },
          { wort: "el chiringuito", clickX: 92.5, clickY: 49.7, labelX: 79, labelY: 66, areaW: 15, areaH: 17 }
        ]
      },
      {
        title: "La playa – Bild 2",
        file: "strand2.png?v=2",
        hotspots: [
          { wort: "el sol", clickX: 24.9, clickY: 16.2, labelX: 33, labelY: 15, areaW: 18, areaH: 18, shape: "circle" },
          { wort: "la gaviota", clickX: 68.95, clickY: 18.03, labelX: 67, labelY: 13, areaW: 14, areaH: 10 },
          { wort: "el socorrista", clickX: 75.0, clickY: 42.71, labelX: 80, labelY: 35, areaW: 14, areaH: 28 },
          { wort: "el salvavidas", clickX: 57.52, clickY: 57.03, labelX: 51, labelY: 52, areaW: 16, areaH: 16, shape: "circle" },
          { wort: "la sombrilla", clickX: 17.58, clickY: 48.2, labelX: 27, labelY: 47, areaW: 24, areaH: 23 },
          { wort: "la tumbona", clickX: 17.97, clickY: 75.00, labelX: 26, labelY: 72 },
          { wort: "el sombrero de sol", clickX: 30.76, clickY: 75.6, labelX: 36, labelY: 73, areaW: 11, areaH: 11 },
          { wort: "el castillo de arena", clickX: 49.7, clickY: 84.5, labelX: 57, labelY: 81, areaW: 18, areaH: 16 },
          { wort: "la niña", clickX: 83.79, clickY: 74.74, labelX: 88, labelY: 69 },
          { wort: "la pala", clickX: 63.0, clickY: 92.9, labelX: 65, labelY: 90, areaW: 12, areaH: 10 },
          { wort: "la pelota", clickX: 81.8, clickY: 89.6, labelX: 83, labelY: 89, areaW: 11, areaH: 11, shape: "circle" },
          { wort: "el flotador", clickX: 83.1, clickY: 62.17, labelX: 82, labelY: 55, areaW: 17, areaH: 17, shape: "circle" }
        ]
      },
      {
        title: "La playa – Bild 3",
        file: "strand5.png",
        hotspots: [
          { wort: "la playa", clickX: 16.7, clickY: 22.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el mar", clickX: 50, clickY: 22.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la ola", clickX: 83.3, clickY: 22.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la arena", clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el sol", clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el cielo", clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "la costa", clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la bahía", clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la isla", clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 4",
        file: "strand6.png",
        hotspots: [
          { wort: "el socorrista", clickX: 16.7, clickY: 23.5, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la familia", clickX: 50, clickY: 23.5, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el buceador", clickX: 83.3, clickY: 23.5, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el nadador", clickX: 16.7, clickY: 53.0, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el surfista", clickX: 50, clickY: 53.0, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "los peces", clickX: 83.3, clickY: 53.0, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el barco", clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el kayak", clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el colchón hinchable", clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 5",
        file: "strand7.png",
        hotspots: [
          { wort: "el chiringuito", clickX: 16.7, clickY: 23.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la sombrilla", clickX: 50, clickY: 23.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la tumbona", clickX: 83.3, clickY: 23.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la toalla", clickX: 16.7, clickY: 50.8, labelX: 24, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "las gafas de sol", clickX: 50, clickY: 50.8, labelX: 50, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "la crema solar", clickX: 83.3, clickY: 50.8, labelX: 76, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "el sombrero de sol", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el bolso de playa", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la nevera portátil", clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 6",
        file: "strand8.png",
        hotspots: [
          { wort: "el bañador", clickX: 16.7, clickY: 23.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el bikini", clickX: 50, clickY: 23.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el bañador (de hombre)", clickX: 83.3, clickY: 23.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la camiseta", clickX: 16.7, clickY: 50.8, labelX: 24, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "los pantalones cortos", clickX: 50, clickY: 50.8, labelX: 50, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "las chanclas", clickX: 83.3, clickY: 50.8, labelX: 76, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "el vestido de playa", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la gaviota", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "las algas", clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 7",
        file: "strand9.png",
        hotspots: [
          { wort: "el salvavidas", clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la tabla de surf", clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la bandera roja", clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la pala", clickX: 16.7, clickY: 50.8, labelX: 24, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "el cubo", clickX: 50, clickY: 50.8, labelX: 50, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "la pelota", clickX: 83.3, clickY: 50.8, labelX: 76, labelY: 42, areaW: 30, areaH: 26 },
          { wort: "el flotador", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la concha", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el castillo de arena", clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 8",
        file: "strand10.png",
        hotspots: [
          { wort: "los refrescos", clickX: 16.7, clickY: 23.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la cerveza", clickX: 50, clickY: 23.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el cóctel", clickX: 83.3, clickY: 23.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el zumo", clickX: 16.7, clickY: 53.0, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el helado", clickX: 50, clickY: 53.0, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el picnic", clickX: 83.3, clickY: 53.0, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el libro", clickX: 16.7, clickY: 83.3, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la revista", clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la cámara", clickX: 83.3, clickY: 83.3, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La playa – Bild 9",
        file: "strand3.png",
        hotspots: [
          { wort: "tomar el sol", clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "nadar", clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "bucear", clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "pasear por la playa", clickX: 16.7, clickY: 51.5, labelX: 28, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: "hacer castillos de arena", clickX: 50, clickY: 51.5, labelX: 50, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: "leer un libro", clickX: 83.3, clickY: 51.5, labelX: 74, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: "recoger conchas", clickX: 16.7, clickY: 81.8, labelX: 25, labelY: 75, areaW: 30, areaH: 26 },
          { wort: "sacar fotos", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 26 },
          { wort: "el surfista", clickX: 83.3, clickY: 81.8, labelX: 74, labelY: 75, areaW: 30, areaH: 26 }
        ]
      },
      {
        title: "La playa – Bild 10",
        file: "strand4.png",
        hotspots: [
          { wort: "hacer snorkel", clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "jugar al voleibol playa", clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "tumbarse en la toalla", clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "tomar algo en\nun chiringuito", clickX: 16.7, clickY: 50, labelX: 28, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: "darse un baño", clickX: 50, clickY: 50, labelX: 50, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: "comer un helado", clickX: 83.3, clickY: 50, labelX: 74, labelY: 41.5, areaW: 30, areaH: 28 },
          { wort: "jugar con la pelota", clickX: 16.7, clickY: 83.3, labelX: 25, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "mirar el mar", clickX: 50, clickY: 83.3, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "escuchar música", clickX: 83.3, clickY: 83.3, labelX: 74, labelY: 75, areaW: 30, areaH: 28 }
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
          { wort: "la camiseta", clickX: 16.7, clickY: 22.8, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la camisa", clickX: 50, clickY: 22.8, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la blusa", clickX: 83.3, clickY: 22.8, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el jersey", clickX: 16.7, clickY: 51.5, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "la sudadera con capucha", clickX: 50, clickY: 51.5, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "la chaqueta vaquera", clickX: 83.3, clickY: 51.5, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el chaleco", clickX: 16.7, clickY: 82.5, labelX: 24, labelY: 75, areaW: 30, areaH: 26 },
          { wort: "el top", clickX: 50, clickY: 82.5, labelX: 50, labelY: 75, areaW: 30, areaH: 26 },
          { wort: "la sudadera", clickX: 83.3, clickY: 82.5, labelX: 76, labelY: 75, areaW: 30, areaH: 26 }
        ]
      },
      {
        title: "La ropa – Bild 2",
        file: "ropa2.png",
        hotspots: [
          { wort: "los vaqueros", clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "los pantalones", clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "los pantalones cortos", clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la falda", clickX: 16.7, clickY: 51.0, labelX: 24, labelY: 42, areaW: 31, areaH: 29 },
          { wort: "el vestido", clickX: 50, clickY: 51.0, labelX: 50, labelY: 42, areaW: 31, areaH: 29 },
          { wort: "las mallas", clickX: 83.3, clickY: 51.0, labelX: 76, labelY: 42, areaW: 31, areaH: 29 },
          { wort: "el bañador (de hombre)", clickX: 16.7, clickY: 82.3, labelX: 24, labelY: 75, areaW: 31, areaH: 29 },
          { wort: "el bikini", clickX: 50, clickY: 82.3, labelX: 50, labelY: 75, areaW: 31, areaH: 29 },
          { wort: "el bañador", clickX: 83.3, clickY: 82.3, labelX: 76, labelY: 75, areaW: 31, areaH: 29 }
        ]
      },
      {
        title: "La ropa – Bild 3",
        file: "ropa3.png",
        hotspots: [
          { wort: "los zapatos", clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: "las zapatillas", clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: "las sandalias", clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: "las botas", clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 27 },
          { wort: "las chanclas", clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 27 },
          { wort: "las zapatillas de casa", clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 27 },
          { wort: "los tacones", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 31, areaH: 31 },
          { wort: "las botas de agua", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 31, areaH: 31 },
          { wort: "las botas de montaña", clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La ropa – Bild 4",
        file: "ropa4.png",
        hotspots: [
          { wort: "el sombrero", clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: "la gorra", clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: "el gorro de lana", clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 31, areaH: 31 },
          { wort: "las manoplas", clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 27 },
          { wort: "los guantes", clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 27 },
          { wort: "el pañuelo", clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 27 },
          { wort: "la bufanda", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 31, areaH: 31 },
          { wort: "el cinturón", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 31, areaH: 31 },
          { wort: "los tirantes", clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La ropa – Bild 5",
        file: "ropa5.png",
        hotspots: [
          { wort: "los calcetines", clickX: 16.7, clickY: 21.2, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "las medias", clickX: 50, clickY: 21.2, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "los calzoncillos", clickX: 83.3, clickY: 21.2, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "las bragas", clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "la camiseta interior", clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el sujetador", clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el pijama", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el albornoz", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el pantalón de pijama", clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La ropa – Bild 6",
        file: "ropa6.png",
        hotspots: [
          { wort: "el abrigo", clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el cortavientos", clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el chubasquero", clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "la chaqueta de cuero", clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "la chaqueta vaquera", clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "la parka", clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el cárdigan", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el anorak", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "la chaqueta de plumas", clickX: 83.3, clickY: 81.8, labelX: 76, labelY: 75, areaW: 30, areaH: 28 }
        ]
      },
      {
        title: "La ropa – Bild 7",
        file: "ropa7.png",
        hotspots: [
          { wort: "el traje", clickX: 16.7, clickY: 19.5, labelX: 24, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el traje de chaqueta", clickX: 50, clickY: 19.5, labelX: 50, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el chándal", clickX: 83.3, clickY: 19.5, labelX: 76, labelY: 9.5, areaW: 30, areaH: 28 },
          { wort: "el uniforme", clickX: 16.7, clickY: 50, labelX: 24, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el disfraz", clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "el mono", clickX: 83.3, clickY: 50, labelX: 76, labelY: 42, areaW: 30, areaH: 28 },
          { wort: "la americana", clickX: 16.7, clickY: 81.8, labelX: 24, labelY: 75, areaW: 30, areaH: 28 },
          { wort: "el vestido de novia", clickX: 50, clickY: 81.8, labelX: 50, labelY: 75, areaW: 30, areaH: 28 }
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
          { wort: "la mañana", clickX: 50, clickY: 19.5, labelX: 58, labelY: 10, areaW: 86, areaH: 13 },
          { wort: "despertarse", clickX: 16.7, clickY: 37, labelX: 25, labelY: 31, areaW: 27, areaH: 20 },
          { wort: "levantarse", clickX: 50, clickY: 37, labelX: 50, labelY: 31, areaW: 27, areaH: 20 },
          { wort: "abrir la ventana", clickX: 83.3, clickY: 37, labelX: 75, labelY: 31, areaW: 27, areaH: 20 },
          { wort: "ducharse", clickX: 16.7, clickY: 61, labelX: 27, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "lavarse los dientes", clickX: 50, clickY: 61, labelX: 50, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "vestirse", clickX: 83.3, clickY: 61, labelX: 75, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "desayunar", clickX: 16.7, clickY: 84, labelX: 25, labelY: 78, areaW: 27, areaH: 20 },
          { wort: "salir de casa", clickX: 50, clickY: 84, labelX: 50, labelY: 78, areaW: 27, areaH: 20 },
          { wort: "ir al trabajo", clickX: 83.3, clickY: 84, labelX: 75, labelY: 78, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 2",
        file: "tarde_v1.png",
        hotspots: [
          { wort: "la tarde", clickX: 50, clickY: 19.5, labelX: 58, labelY: 10, areaW: 86, areaH: 13 },
          { wort: "trabajar", clickX: 16.7, clickY: 38, labelX: 25, labelY: 32, areaW: 27, areaH: 20 },
          { wort: "almorzar", clickX: 50, clickY: 38, labelX: 50, labelY: 32, areaW: 27, areaH: 20 },
          { wort: "terminar de trabajar", clickX: 83.3, clickY: 38, labelX: 75, labelY: 32, areaW: 27, areaH: 20 },
          { wort: "volver a casa", clickX: 16.7, clickY: 61, labelX: 27, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "tomar un café", clickX: 50, clickY: 61, labelX: 50, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "dar un paseo", clickX: 83.3, clickY: 61, labelX: 75, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "hacer deporte", clickX: 16.7, clickY: 84, labelX: 25, labelY: 78, areaW: 27, areaH: 20 },
          { wort: "hacer la compra", clickX: 50, clickY: 84, labelX: 50, labelY: 78, areaW: 27, areaH: 20 },
          { wort: "recoger a los niños", clickX: 83.3, clickY: 84, labelX: 75, labelY: 78, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 3",
        file: "noche_v1.png",
        hotspots: [
          { wort: "la noche", clickX: 50, clickY: 19.5, labelX: 60, labelY: 9, areaW: 86, areaH: 13 },
          { wort: "preparar la cena", clickX: 16.7, clickY: 38, labelX: 25, labelY: 32, areaW: 27, areaH: 20 },
          { wort: "poner la mesa", clickX: 50, clickY: 38, labelX: 50, labelY: 32, areaW: 27, areaH: 20 },
          { wort: "cenar", clickX: 83.3, clickY: 38, labelX: 75, labelY: 32, areaW: 27, areaH: 20 },
          { wort: "ver la tele", clickX: 16.7, clickY: 61, labelX: 27, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "leer", clickX: 50, clickY: 61, labelX: 50, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "bañarse", clickX: 83.3, clickY: 61, labelX: 75, labelY: 55, areaW: 27, areaH: 20 },
          { wort: "ponerse el pijama", clickX: 16.7, clickY: 84, labelX: 25, labelY: 78, areaW: 27, areaH: 20 },
          { wort: "apagar la luz", clickX: 50, clickY: 84, labelX: 50, labelY: 78, areaW: 27, areaH: 20 },
          { wort: "acostarse", clickX: 83.3, clickY: 84, labelX: 75, labelY: 78, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 4",
        file: "finde_v1.png",
        hotspots: [
          { wort: "el fin de semana", clickX: 50, clickY: 19.5, labelX: 70, labelY: 9, areaW: 86, areaH: 13 },
          { wort: "levantarse tarde", clickX: 16.7, clickY: 37, labelX: 25, labelY: 31, areaW: 27, areaH: 20 },
          { wort: "desayunar tranquilamente", clickX: 50, clickY: 37, labelX: 50, labelY: 31, areaW: 27, areaH: 20 },
          { wort: "hacer una excursión", clickX: 83.3, clickY: 37, labelX: 75, labelY: 31, areaW: 27, areaH: 20 },
          { wort: "visitar a la familia", clickX: 16.7, clickY: 60, labelX: 27, labelY: 54, areaW: 27, areaH: 20 },
          { wort: "quedar con amigos", clickX: 50, clickY: 60, labelX: 50, labelY: 54, areaW: 27, areaH: 20 },
          { wort: "ir de compras", clickX: 83.3, clickY: 60, labelX: 75, labelY: 54, areaW: 27, areaH: 20 },
          { wort: "ver una película", clickX: 16.7, clickY: 86, labelX: 25, labelY: 80, areaW: 27, areaH: 20 },
          { wort: "salir a cenar", clickX: 50, clickY: 86, labelX: 50, labelY: 80, areaW: 27, areaH: 20 },
          { wort: "descansar", clickX: 83.3, clickY: 86, labelX: 75, labelY: 80, areaW: 27, areaH: 20 }
        ]
      },
      {
        title: "Rutina diaria – Bild 5",
        file: "rutina1.png",
        hotspots: [
          { wort: "despertar a los niños", clickX: 16.7, clickY: 20, labelX: 28, labelY: 13, areaW: 27, areaH: 22 },
          { wort: "preparar el desayuno", clickX: 50, clickY: 20, labelX: 50, labelY: 13, areaW: 27, areaH: 22 },
          { wort: "llevar a los niños al colegio", clickX: 83.3, clickY: 20, labelX: 72, labelY: 13, areaW: 27, areaH: 22 },
          { wort: "recoger a los niños", clickX: 16.7, clickY: 50, labelX: 28, labelY: 42, areaW: 27, areaH: 22 },
          { wort: "ayudar con los deberes", clickX: 50, clickY: 50, labelX: 50, labelY: 42, areaW: 27, areaH: 22 },
          { wort: "preparar la merienda", clickX: 83.3, clickY: 50, labelX: 72, labelY: 42, areaW: 27, areaH: 22 },
          { wort: "jugar juntos", clickX: 16.7, clickY: 78, labelX: 28, labelY: 70, areaW: 27, areaH: 22 },
          { wort: "leer un cuento", clickX: 50, clickY: 78, labelX: 50, labelY: 70, areaW: 27, areaH: 22 },
          { wort: "acostar a los niños", clickX: 83.3, clickY: 78, labelX: 72, labelY: 70, areaW: 27, areaH: 22 }
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
          { wort: "el piso", clickX: 11.5, clickY: 10.5, labelX: 14, labelY: 19, areaW: 20.5, areaH: 14.5, shape: "circle", zoomImage: "Haus3.png", zoomLabelX: 50, zoomLabelY: 8 },
          { wort: "el rascacielos", clickX: 34.5, clickY: 23.5, labelX: 34.5, labelY: 42, areaW: 26, areaH: 39 },
          { wort: "el bloque de pisos", clickX: 75.5, clickY: 23.5, labelX: 75.5, labelY: 42, areaW: 40, areaH: 38 },
          { wort: "las casas adosadas", clickX: 25.5, clickY: 53.2, labelX: 25.5, labelY: 66.5, areaW: 47, areaH: 25 },
          { wort: "la casa pareada", clickX: 75, clickY: 53, labelX: 75, labelY: 66.5, areaW: 41, areaH: 25 },
          { wort: "el chalet", clickX: 25.5, clickY: 84, labelX: 25.5, labelY: 96, areaW: 42, areaH: 24 },
          { wort: "la urbanización", clickX: 76.5, clickY: 84.5, labelX: 76.5, labelY: 96, areaW: 43, areaH: 24 }
        ]
      },
      {
        title: "La casa – Bild 2",
        file: "Haus4.png",
        hotspots: [
          { wort: "la chimenea", clickX: 63.9, clickY: 7.7, labelX: 67, labelY: 4.5 },
          { wort: "el tejado", clickX: 76.1, clickY: 16.0, labelX: 73, labelY: 11.5 },
          { wort: "el canalón", clickX: 92.0, clickY: 28.7, labelX: 84, labelY: 24.5 },
          { wort: "el balcón", clickX: 28.2, clickY: 39.6, labelX: 21, labelY: 31.5, areaW: 29, areaH: 18 },
          { wort: "la bajante", clickX: 51.3, clickY: 40.6, labelX: 58, labelY: 36.5 },
          { wort: "la fachada", clickX: 86.3, clickY: 44.6, labelX: 77, labelY: 39.5 },
          { wort: "la puerta", clickX: 30.7, clickY: 67.2, labelX: 31, labelY: 55.5, areaW: 10, areaH: 24 },
          { wort: "la ventana", clickX: 62.7, clickY: 66.1, labelX: 72, labelY: 53.3, areaW: 12, areaH: 16.5 },
          { wort: "las escaleras", clickX: 20.1, clickY: 89.6, labelX: 27, labelY: 88.8 },
          { wort: "la terraza", clickX: 84.3, clickY: 85.6, labelX: 82.5, labelY: 90.5, areaW: 30, areaH: 19 }
        ]
      },
      {
        title: "La casa – Bild 3",
        file: "Haus5.png",
        hotspots: [
          { wort: "el timbre", clickX: 10.9, clickY: 18.9, labelX: 18, labelY: 14.5, areaW: 8, areaH: 10 },
          { wort: "el buzón", clickX: 12.0, clickY: 29.4, labelX: 19, labelY: 25.5, areaW: 12, areaH: 13 },
          { wort: "la puerta", clickX: 26.0, clickY: 25.5, labelX: 35, labelY: 22.5, areaW: 15, areaH: 24 },
          { wort: "la persiana", clickX: 69.5, clickY: 19.0, labelX: 68, labelY: 14.5, areaW: 24, areaH: 18 },
          { wort: "la chimenea", clickX: 18.5, clickY: 62.5, labelX: 31, labelY: 62.5, areaW: 8, areaH: 10 },
          { wort: "la ventana de tejado", clickX: 46.8, clickY: 70.5, labelX: 63, labelY: 65.5, areaW: 22, areaH: 17 },
          { wort: "el canalón", clickX: 41.0, clickY: 82.0, labelX: 57.5, labelY: 77.5, areaW: 24, areaH: 8 },
          { wort: "la bajante", clickX: 20.5, clickY: 92.0, labelX: 37.5, labelY: 88.5, areaW: 12, areaH: 12 },
          { wort: "la barandilla del balcón", clickX: 77.5, clickY: 78.0, labelX: 68, labelY: 72.5, areaW: 31, areaH: 25 }
        ]
      },
      {
        title: "La casa – Bild 4",
        file: "Haus6.png",
        hotspots: [
          { wort: "el ático", clickX: 50.0, clickY: 16.5, labelX: 39, labelY: 11.5, areaW: 48, areaH: 18 },
          { wort: "el segundo piso", clickX: 34.5, clickY: 31.5, labelX: 31, labelY: 26.5, areaW: 31, areaH: 15 },
          { wort: "el primer piso", clickX: 34.5, clickY: 47.5, labelX: 31, labelY: 42.5, areaW: 31, areaH: 15 },
          { wort: "la planta baja", clickX: 34.5, clickY: 63.5, labelX: 31, labelY: 58.5, areaW: 31, areaH: 15 },
          { wort: "la escalera", clickX: 83.6, clickY: 52.0, labelX: 77.5, labelY: 50.5, areaW: 19, areaH: 43 },
          { wort: "el ascensor", clickX: 62.8, clickY: 49.5, labelX: 79, labelY: 45, areaW: 12, areaH: 35 },
          { wort: "el portal", clickX: 41.5, clickY: 84.0, labelX: 43, labelY: 79.5, areaW: 17, areaH: 18 },
          { wort: "los buzones", clickX: 21.0, clickY: 87.7, labelX: 27.5, labelY: 85, areaW: 13, areaH: 11 },
          { wort: "el garaje", clickX: 79.5, clickY: 87.8, labelX: 78, labelY: 84, areaW: 36, areaH: 18 }
        ]
      },
      {
        title: "La casa – Bild 5",
        file: "Haus7.png",
        hotspots: [
          { wort: "el porche", clickX: 50.0, clickY: 22.0, labelX: 40, labelY: 16.5, areaW: 37, areaH: 18 },
          { wort: "la entrada", clickX: 56.0, clickY: 30.5, labelX: 65, labelY: 25.5, areaW: 11, areaH: 14 },
          { wort: "el jardín", clickX: 18.5, clickY: 43.0, labelX: 27.5, labelY: 38, areaW: 24, areaH: 18 },
          { wort: "el césped", clickX: 73.0, clickY: 50.0, labelX: 82, labelY: 45, areaW: 28, areaH: 22 },
          { wort: "el camino", clickX: 52.0, clickY: 59.5, labelX: 63, labelY: 54.5, areaW: 20, areaH: 28 },
          { wort: "la valla", clickX: 17.5, clickY: 70.5, labelX: 27.5, labelY: 65.5, areaW: 26, areaH: 16 },
          { wort: "la verja", clickX: 50.0, clickY: 76.0, labelX: 40.5, labelY: 71, areaW: 18, areaH: 18 },
          { wort: "la acera", clickX: 74.0, clickY: 88.5, labelX: 83, labelY: 83.5, areaW: 34, areaH: 12 },
          { wort: "la calle", clickX: 32.0, clickY: 96.0, labelX: 22, labelY: 91, areaW: 56, areaH: 8 }
        ]
      },
      {
        title: "La casa – Bild 6",
        file: "Haus9.png",
        openLabel: { wort: "la habitación", labelX: 82, labelY: 9 },
        speakOpenLabel: true,
        hotspots: [
          { wort: "la puerta", clickX: 10.8, clickY: 49.5, labelX: 18, labelY: 37, areaW: 17, areaH: 56 },
          { wort: "el interruptor", clickX: 4.9, clickY: 46.5, labelX: 12.5, labelY: 42.5, areaW: 6, areaH: 12 },
          { wort: "el techo", clickX: 50.0, clickY: 13.5, labelX: 57, labelY: 8.5, areaW: 62, areaH: 22 },
          { wort: "la pared", clickX: 52.5, clickY: 43.5, labelX: 61, labelY: 38.5, areaW: 42, areaH: 30 },
          { wort: "la ventana", clickX: 88.0, clickY: 40.0, labelX: 79.5, labelY: 34.5, areaW: 17, areaH: 27 },
          { wort: "el alféizar", clickX: 86.0, clickY: 51.0, labelX: 79.5, labelY: 56.5, areaW: 18, areaH: 8 },
          { wort: "el enchufe", clickX: 26.0, clickY: 60.0, labelX: 18.5, labelY: 65, areaW: 7, areaH: 8 },
          { wort: "la esquina", clickX: 72.8, clickY: 61.5, labelX: 80, labelY: 66, areaW: 8, areaH: 8, shape: "circle" },
          { wort: "el suelo", clickX: 57.0, clickY: 80.5, labelX: 65.5, labelY: 74.5, areaW: 62, areaH: 38 }
        ]
      },
      {
        title: "La casa – Bild 7",
        file: "zimmer2.png",
        hotspots: [
          { wort: "el marco", clickX: 18.8, clickY: 17.1, labelX: 25.5, labelY: 11.5, areaW: 14, areaH: 14 },
          { wort: "la puerta", clickX: 36.8, clickY: 51.0, labelX: 23.5, labelY: 36.5, areaW: 24, areaH: 60 },
          { wort: "la pared", clickX: 83.3, clickY: 18.1, labelX: 88.5, labelY: 12.5, areaW: 22, areaH: 18 },
          { wort: "la bisagra", clickX: 56.4, clickY: 51.5, labelX: 66, labelY: 28, areaW: 8, areaH: 56 },
          { wort: "el interruptor", clickX: 9.4, clickY: 46.0, labelX: 13.5, labelY: 41.5, areaW: 9, areaH: 8 },
          { wort: "el enchufe", clickX: 9.5, clickY: 69.1, labelX: 14.5, labelY: 64.5, areaW: 9, areaH: 8 },
          { wort: "el umbral", clickX: 42.3, clickY: 86.2, labelX: 51, labelY: 81.5, areaW: 18, areaH: 10 },
          { wort: "la manilla", clickX: 78.2, clickY: 42.4, labelX: 86, labelY: 37.5, areaW: 14, areaH: 12 },
          { wort: "el ojo de la cerradura", clickX: 74.5, clickY: 51.8, labelX: 85.5, labelY: 48.5, areaW: 6, areaH: 7 },
          { wort: "la llave", clickX: 80.5, clickY: 61.1, labelX: 88.5, labelY: 57.5, areaW: 14, areaH: 11 }
        ]
      },
      {
        title: "La casa – Bild 8",
        file: "zimmer3.png",
        hotspots: [
          { wort: "la ventana", clickX: 34.0, clickY: 20.5, labelX: 24, labelY: 15, areaW: 57, areaH: 57 },
          { wort: "el marco", clickX: 76.0, clickY: 56.0, labelX: 83, labelY: 50, areaW: 16, areaH: 60 },
          { wort: "el cristal", clickX: 41.0, clickY: 44.0, labelX: 26.5, labelY: 37, areaW: 35, areaH: 33 },
          { wort: "la veneciana", clickX: 68.8, clickY: 28.7, labelX: 80, labelY: 22.5, areaW: 23, areaH: 13 },
          { wort: "la manilla", clickX: 28.6, clickY: 48.5, labelX: 15.5, labelY: 44.5, areaW: 6, areaH: 9 },
          { wort: "el alféizar", clickX: 22.8, clickY: 77.2, labelX: 25, labelY: 72.5, areaW: 43, areaH: 11 }
        ]
      },
      {
        title: "La casa – Bild 9",
        file: "haus10.png",
        hotspots: [
          { wort: "la casa", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el tejado", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la chimenea", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el canalón", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el bajante", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la ventana", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la puerta", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "la fachada", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "el balcón", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 10",
        file: "haus11.png",
        hotspots: [
          { wort: "la terraza", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la piscina", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la fachada", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la escalera", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el porche", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la barandilla", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la luz exterior", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "el toldo", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "la antena parabólica", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 11",
        file: "haus12.png",
        hotspots: [
          { wort: "el jardín", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el césped", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el camino", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la valla", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la verja", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el seto", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el árbol", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "las flores", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "la jardinera", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 12",
        file: "haus13.png",
        hotspots: [
          { wort: "la calle", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la acera", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la entrada para coches", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el aparcamiento", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el cubo de basura", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el garaje", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el carport", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "el buzón", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "el número de la casa", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 13",
        file: "haus14.png",
        hotspots: [
          { wort: "el portal", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el timbre", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el portero automático", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el umbral", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la manilla", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el pomo", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el ojo de la cerradura", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "la bisagra", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "el marco", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 14",
        file: "haus15.png",
        hotspots: [
          { wort: "la persiana", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "la veneciana", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "el cristal", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "las rejas", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la ventana de tejado", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "la claraboya", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "el alféizar", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "el postigo", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "la mosquitera", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
        ]
      },
      {
        title: "La casa – Bild 15",
        file: "Haus8.png",
        hotspots: [
          { wort: "el desván", clickX: 50, clickY: 18.5, labelX: 50, labelY: 12, areaW: 47, areaH: 20 },
          { wort: "el cuarto de los niños", clickX: 29.8, clickY: 35, labelX: 28, labelY: 38, areaW: 30, areaH: 17 },
          { wort: "el dormitorio", clickX: 69.2, clickY: 35, labelX: 69, labelY: 38, areaW: 30, areaH: 17 },
          { wort: "el salón", clickX: 28.7, clickY: 52.2, labelX: 22, labelY: 56, areaW: 25, areaH: 18 },
          { wort: "el comedor", clickX: 51.5, clickY: 52.5, labelX: 51, labelY: 51, areaW: 16, areaH: 18 },
          { wort: "la cocina", clickX: 73.9, clickY: 52.5, labelX: 76, labelY: 57, areaW: 18, areaH: 18 },
          { wort: "el baño", clickX: 27.2, clickY: 70, labelX: 16.5, labelY: 74, areaW: 17, areaH: 16 },
          { wort: "el pasillo", clickX: 43.8, clickY: 70, labelX: 44, labelY: 70, areaW: 14, areaH: 16 },
          { wort: "el despacho", clickX: 61.8, clickY: 70, labelX: 63.5, labelY: 75, areaW: 16, areaH: 16 },
          { wort: "el lavadero", clickX: 77.3, clickY: 70, labelX: 84, labelY: 74, areaW: 13, areaH: 16 },
          { wort: "el sótano", clickX: 28.0, clickY: 86.8, labelX: 18, labelY: 91, areaW: 26, areaH: 17 },
          { wort: "el trastero", clickX: 71.8, clickY: 86.8, labelX: 73, labelY: 91, areaW: 23, areaH: 17 }
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
          { wort: "el desván", clickX: 50, clickY: 18.5, labelX: 50, labelY: 12, areaW: 47, areaH: 20, openFolderKey: "desvan", openDelay: 900 },
          { wort: "el cuarto de los niños", clickX: 29.8, clickY: 35, labelX: 28, labelY: 38, areaW: 30, areaH: 17 },
          { wort: "el dormitorio", clickX: 69.2, clickY: 35, labelX: 69, labelY: 38, areaW: 30, areaH: 17 },
          { wort: "el salón", clickX: 28.7, clickY: 52.2, labelX: 22, labelY: 56, areaW: 25, areaH: 18, openFolderKey: "salon" },
          { wort: "el comedor", clickX: 51.5, clickY: 52.5, labelX: 51, labelY: 51, areaW: 16, areaH: 18 },
          { wort: "la cocina", clickX: 73.9, clickY: 52.5, labelX: 76, labelY: 57, areaW: 18, areaH: 18 },
          { wort: "el baño", clickX: 27.2, clickY: 70, labelX: 16.5, labelY: 74, areaW: 17, areaH: 16 },
          { wort: "el pasillo", clickX: 43.8, clickY: 70, labelX: 44, labelY: 70, areaW: 14, areaH: 16, openFolderKey: "pasillo", openDelay: 900 },
          { wort: "el despacho", clickX: 61.8, clickY: 70, labelX: 63.5, labelY: 75, areaW: 16, areaH: 16 },
          { wort: "el lavadero", clickX: 77.3, clickY: 70, labelX: 84, labelY: 74, areaW: 13, areaH: 16 },
          { wort: "el sótano", clickX: 28.0, clickY: 86.8, labelX: 18, labelY: 91, areaW: 26, areaH: 17 },
          { wort: "el trastero", clickX: 71.8, clickY: 86.8, labelX: 73, labelY: 91, areaW: 23, areaH: 17 }
        ]
      },
      {
        title: "Las habitaciones – Bild 2",
        file: "habitaciones3.png",
        hotspots: [
          { wort: "el desván", clickX: 50.0, clickY: 26.0, labelX: 63, labelY: 17, areaW: 92, areaH: 42 },
          { wort: "la buhardilla", clickX: 50.0, clickY: 75.0, labelX: 64, labelY: 65, areaW: 92, areaH: 40 }
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
        openLabel: { wort: "el salón", labelX: 50, labelY: 9 },
        hotspots: [
          { wort: "la ventana", clickX: 18.0, clickY: 30.5, labelX: 18, labelY: 21.5, areaW: 18, areaH: 26 },
          { wort: "la cortina", clickX: 28.2, clickY: 29.8, labelX: 33, labelY: 20.5, areaW: 16, areaH: 32 },
          { wort: "la lámpara", clickX: 44.3, clickY: 33.2, labelX: 51.5, labelY: 24.5, areaW: 16, areaH: 25 },
          { wort: "el televisor", clickX: 67.0, clickY: 42.8, labelX: 72, labelY: 35, areaW: 19, areaH: 18 },
          { wort: "la estantería", clickX: 85.5, clickY: 46.0, labelX: 80.5, labelY: 34.5, areaW: 13, areaH: 31 },
          { wort: "el sofá", clickX: 17.0, clickY: 52.5, labelX: 26, labelY: 45.5, areaW: 31, areaH: 18 },
          { wort: "el sillón", clickX: 15.3, clickY: 78.0, labelX: 24, labelY: 70.5, areaW: 20, areaH: 27 },
          { wort: "la mesa de centro", clickX: 52.0, clickY: 74.0, labelX: 55.5, labelY: 68.5, areaW: 22, areaH: 15 },
          { wort: "la alfombra", clickX: 65.0, clickY: 81.5, labelX: 71.5, labelY: 81.5, areaW: 40, areaH: 17 },
          { wort: "la puerta", clickX: 92.5, clickY: 64.0, labelX: 81.5, labelY: 70.5, areaW: 14, areaH: 44 }
        ]
      },
      {
        title: "El salón – Bild 2",
        file: "salon2.png",
        hotspots: [
          { wort: "el balcón", clickX: 15.5, clickY: 34.0, labelX: 23.5, labelY: 27.5, areaW: 18, areaH: 30 },
          { wort: "el cuadro", clickX: 43.0, clickY: 23.0, labelX: 49, labelY: 15.5, areaW: 16, areaH: 18 },
          { wort: "la planta", clickX: 68.5, clickY: 14.5, labelX: 77, labelY: 10.5, areaW: 15, areaH: 17 },
          { wort: "la balda", clickX: 87.5, clickY: 23.5, labelX: 79, labelY: 18, areaW: 23, areaH: 9 },
          { wort: "los libros", clickX: 82.8, clickY: 35.8, labelX: 89, labelY: 34, areaW: 20, areaH: 13 },
          { wort: "el cojín", clickX: 38.2, clickY: 45.0, labelX: 46, labelY: 39, areaW: 14, areaH: 14 },
          { wort: "el cajón", clickX: 84.5, clickY: 69.0, labelX: 91, labelY: 63, areaW: 16, areaH: 15 },
          { wort: "el mando a distancia", clickX: 61.8, clickY: 78.6, labelX: 69, labelY: 75.5, areaW: 7, areaH: 8 },
          { wort: "la taza", clickX: 72.8, clickY: 78.0, labelX: 80, labelY: 72.5, areaW: 10, areaH: 12 },
          { wort: "la manta", clickX: 20.5, clickY: 92.0, labelX: 28, labelY: 86.5, areaW: 19, areaH: 16 }
        ]
      },
      {
        title: "El salón – Bild 3",
        file: "salon3.png",
        hotspots: [
          { wort: "el sofá", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el sofá cama", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el sillón", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "la mecedora", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la mesa de centro", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "el mueble del televisor", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la estantería", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "la balda", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "la mesa auxiliar", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El salón – Bild 4",
        file: "salon4.png",
        hotspots: [
          { wort: "el aparador", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "la vitrina", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "la cómoda", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el taburete", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la alfombra", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "las cortinas", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la lámpara de techo", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "la lámpara de pie", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "el reloj", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El salón – Bild 5",
        file: "salon5.png",
        hotspots: [
          { wort: "el cojín", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "la manta", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el cuadro", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el marco de fotos", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "el libro", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "el periódico", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la revista", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "la planta", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "el jarrón", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El salón – Bild 6",
        file: "salon6.png",
        hotspots: [
          { wort: "el altavoz", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el proyector", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el mando a distancia", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "los auriculares", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "el equipo de música", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "el televisor", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "el aire acondicionado", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "el ventilador de techo", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "la consola", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El salón – Bild 7",
        file: "salon7.png",
        hotspots: [
          { wort: "ver la televisión", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "sentarse en el sofá", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "leer un libro", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 31, areaH: 31 },
          { wort: "encender la luz", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "abrir la ventana", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "escuchar música", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 31, areaH: 31 },
          { wort: "regar una planta", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "pasar la aspiradora", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 31, areaH: 31 },
          { wort: "correr las cortinas", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 31, areaH: 31 }
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
        openLabel: { wort: "el desván", labelX: 50, labelY: 9 },
        hotspots: [
          { wort: "las vigas de madera", clickX: 26.0, clickY: 10.0, labelX: 34, labelY: 7.8, areaW: 24, areaH: 8 },
          { wort: "la telaraña", clickX: 16.0, clickY: 24.5, labelX: 28, labelY: 23, areaW: 16, areaH: 14 },
          { wort: "la lámpara", clickX: 46.8, clickY: 27.2, labelX: 55, labelY: 21.8, areaW: 14, areaH: 13 },
          { wort: "la ventana de tejado", clickX: 79.5, clickY: 20.0, labelX: 73.0, labelY: 14, areaW: 21, areaH: 17 },
          { wort: "la caja de ropa vieja", clickX: 18.0, clickY: 60.5, labelX: 26.0, labelY: 56.0, areaW: 17, areaH: 14 },
          { wort: "la silla plegable", clickX: 86.8, clickY: 60.5, labelX: 78.5, labelY: 55.5, areaW: 15, areaH: 14 },
          { wort: "el baúl", clickX: 50.0, clickY: 74.8, labelX: 51, labelY: 73.8, areaW: 24, areaH: 16 },
          { wort: "la escalera", clickX: 14.5, clickY: 82.5, labelX: 17, labelY: 88, areaW: 22, areaH: 34 },
          { wort: "la maleta", clickX: 74.3, clickY: 82.8, labelX: 82, labelY: 77.2, areaW: 18, areaH: 15 }
        ]
      },
      {
        title: "El desván – Bild 2",
        file: "desvan2.png",
        hotspots: [
          { wort: "la caja de libros", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el baúl", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "la maleta", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "la lámpara", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la escalera", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la telaraña", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la araña", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "la ventana de tejado", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "las vigas de madera", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El desván – Bild 3",
        file: "desvan3.png",
        hotspots: [
          { wort: "la linterna", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el polvo", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "los juguetes antiguos", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "los adornos de Navidad", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "el armario", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "las herramientas", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la ropa vieja", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "la manta", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "el fantasma", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
        ]
      },
      {
        title: "El desván – Bild 4",
        file: "desvan4.png",
        hotspots: [
          { wort: "la silla plegable", clickX: 16.8, clickY: 18.3, labelX: 16.8, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el sofá", clickX: 50.0, clickY: 18.3, labelX: 50.0, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "los cuadros", clickX: 83.2, clickY: 18.3, labelX: 83.2, labelY: 10.8, areaW: 30, areaH: 31 },
          { wort: "el gramófono", clickX: 16.8, clickY: 50.0, labelX: 16.8, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "los álbumes de fotos", clickX: 50.0, clickY: 50.0, labelX: 50.0, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "las cartas", clickX: 83.2, clickY: 50.0, labelX: 83.2, labelY: 42.5, areaW: 30, areaH: 31 },
          { wort: "la máquina de escribir", clickX: 16.8, clickY: 81.7, labelX: 16.8, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "el reloj de bolsillo", clickX: 50.0, clickY: 81.7, labelX: 50.0, labelY: 74.2, areaW: 30, areaH: 31 },
          { wort: "el espejo", clickX: 83.2, clickY: 81.7, labelX: 83.2, labelY: 74.2, areaW: 30, areaH: 31 }
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
        openLabel: { wort: "el pasillo", labelX: 50, labelY: 9 },
        hotspots: [
          { wort: "el espejo", clickX: 11.5, clickY: 35.5, labelX: 19.5, labelY: 28, areaW: 16, areaH: 28 },
          { wort: "la puerta", clickX: 49.0, clickY: 39.5, labelX: 57, labelY: 24.5, areaW: 18, areaH: 34 },
          { wort: "la lámpara", clickX: 51.5, clickY: 14.5, labelX: 60, labelY: 10.5, areaW: 11, areaH: 9 },
          { wort: "el perchero", clickX: 72.8, clickY: 36.0, labelX: 81, labelY: 16, areaW: 13, areaH: 36 },
          { wort: "el cuelgallaves", clickX: 92.5, clickY: 32.8, labelX: 84, labelY: 28.5, areaW: 14, areaH: 14 },
          { wort: "la pared", clickX: 17.5, clickY: 67.5, labelX: 25, labelY: 62.5, areaW: 34, areaH: 16 },
          { wort: "la planta", clickX: 88.0, clickY: 55.0, labelX: 81, labelY: 46.5, areaW: 13, areaH: 18 },
          { wort: "el suelo", clickX: 22.5, clickY: 85.5, labelX: 16, labelY: 77, areaW: 11, areaH: 15 },
          { wort: "la alfombra", clickX: 58.0, clickY: 85.0, labelX: 66, labelY: 80.5, areaW: 32, areaH: 22 },
          { wort: "la cómoda", clickX: 87.0, clickY: 79.0, labelX: 78, labelY: 74, areaW: 20, areaH: 18 }
        ]
      }
    ]
  }
};
