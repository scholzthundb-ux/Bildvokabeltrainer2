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
          { wort: "el sol", clickX: 28.03, clickY: 17.97, labelX: 33, labelY: 15, areaW: 18, areaH: 18, shape: "circle" },
          { wort: "la gaviota", clickX: 68.95, clickY: 18.03, labelX: 67, labelY: 13 },
          { wort: "el socorrista", clickX: 73.2, clickY: 42.71, labelX: 80, labelY: 35, areaW: 14, areaH: 28 },
          { wort: "el salvavidas", clickX: 57.52, clickY: 57.03, labelX: 51, labelY: 52, areaW: 16, areaH: 16, shape: "circle" },
          { wort: "la sombrilla", clickX: 17.58, clickY: 51.50, labelX: 27, labelY: 47, areaW: 24, areaH: 23 },
          { wort: "la tumbona", clickX: 17.97, clickY: 75.00, labelX: 26, labelY: 72 },
          { wort: "el sombrero de sol", clickX: 30.76, clickY: 75.6, labelX: 36, labelY: 73, areaW: 11, areaH: 11 },
          { wort: "el castillo de arena", clickX: 48.34, clickY: 86.00, labelX: 57, labelY: 81, areaW: 18, areaH: 16 },
          { wort: "la niña", clickX: 83.79, clickY: 74.74, labelX: 88, labelY: 69 },
          { wort: "la pala", clickX: 63.0, clickY: 94.8, labelX: 65, labelY: 90, areaW: 12, areaH: 10 },
          { wort: "la pelota", clickX: 76.95, clickY: 92.90, labelX: 83, labelY: 89 },
          { wort: "el flotador", clickX: 86.9, clickY: 62.17, labelX: 82, labelY: 55, areaW: 17, areaH: 17, shape: "circle" }
        ]
      },
      {
        title: "La playa – Bild 3",
        file: "strand3.png",
        hotspots: [
          { wort: "tomar el sol", clickX: 16.7, clickY: 16.7, labelX: 24, labelY: 9.5 },
          { wort: "nadar", clickX: 50, clickY: 16.7, labelX: 50, labelY: 9.5 },
          { wort: "bucear", clickX: 83.3, clickY: 16.7, labelX: 76, labelY: 9.5 },
          { wort: "pasear por la playa", clickX: 16.7, clickY: 50, labelX: 28, labelY: 41.5 },
          { wort: "hacer castillos de arena", clickX: 50, clickY: 50, labelX: 50, labelY: 41.5 },
          { wort: "leer", clickX: 83.3, clickY: 50, labelX: 74, labelY: 41.5 },
          { wort: "recoger conchas", clickX: 16.7, clickY: 83.3, labelX: 25, labelY: 75 },
          { wort: "sacar fotos", clickX: 50, clickY: 83.3, labelX: 50, labelY: 75 },
          { wort: "surfear", clickX: 83.3, clickY: 83.3, labelX: 74, labelY: 75 }
        ]
      },
      {
        title: "La playa – Bild 4",
        file: "strand4.png",
        hotspots: [
          { wort: "hacer snorkel", clickX: 16.7, clickY: 16.7, labelX: 24, labelY: 9.5 },
          { wort: "jugar al voleibol playa", clickX: 50, clickY: 16.7, labelX: 50, labelY: 9.5 },
          { wort: "tumbarse en la toalla", clickX: 83.3, clickY: 16.7, labelX: 76, labelY: 9.5 },
          { wort: "tomar algo en\nun chiringuito", clickX: 16.7, clickY: 50, labelX: 28, labelY: 41.5 },
          { wort: "darse un baño", clickX: 50, clickY: 50, labelX: 50, labelY: 41.5 },
          { wort: "comer un helado", clickX: 83.3, clickY: 50, labelX: 74, labelY: 41.5 },
          { wort: "jugar con la pelota", clickX: 16.7, clickY: 83.3, labelX: 25, labelY: 75 },
          { wort: "mirar el mar", clickX: 50, clickY: 83.3, labelX: 50, labelY: 75 },
          { wort: "escuchar música", clickX: 83.3, clickY: 83.3, labelX: 74, labelY: 75 }
        ]
      }
    ]
  },

  ropa: {
    title: "La ropa",
    images: [
      {
        title: "La ropa – Bild 1",
        file: "ropa2.png",
        hotspots: [
          { wort: "la camiseta", clickX: 14, clickY: 13, labelX: 20, labelY: 10, areaW: 26, areaH: 18 },
          { wort: "la camisa", clickX: 39, clickY: 13, labelX: 46, labelY: 10, areaW: 26, areaH: 18 },
          { wort: "los pantalones", clickX: 64, clickY: 13, labelX: 67, labelY: 9, areaW: 22, areaH: 18 },
          { wort: "los vaqueros", clickX: 87, clickY: 13, labelX: 81, labelY: 9, areaW: 24, areaH: 18 },
          { wort: "la falda", clickX: 14, clickY: 31, labelX: 19, labelY: 27, areaW: 30, areaH: 22 },
          { wort: "el vestido", clickX: 42, clickY: 31, labelX: 49, labelY: 27, areaW: 28, areaH: 22 },
          { wort: "el jersey", clickX: 76, clickY: 31, labelX: 77, labelY: 27, areaW: 36, areaH: 22 },
          { wort: "el abrigo", clickX: 13, clickY: 57, labelX: 22, labelY: 53, areaW: 31, areaH: 43 },
          { wort: "los zapatos", clickX: 49, clickY: 48, labelX: 50, labelY: 44, areaW: 31, areaH: 14 },
          { wort: "la chaqueta", clickX: 84, clickY: 50, labelX: 80, labelY: 45, areaW: 30, areaH: 16 },
          { wort: "las medias", clickX: 49, clickY: 63, labelX: 57, labelY: 59, areaW: 31, areaH: 18 },
          { wort: "las sandalias", clickX: 84, clickY: 65, labelX: 77, labelY: 61, areaW: 30, areaH: 18 },
          { wort: "el sombrero", clickX: 47, clickY: 79, labelX: 51, labelY: 75, areaW: 22, areaH: 13 },
          { wort: "el cinturón", clickX: 66, clickY: 79, labelX: 67, labelY: 75, areaW: 22, areaH: 13 },
          { wort: "los calcetines", clickX: 87, clickY: 79, labelX: 80, labelY: 75, areaW: 20, areaH: 13 },
          { wort: "el chaleco", clickX: 14, clickY: 93, labelX: 22, labelY: 88, areaW: 31, areaH: 14 },
          { wort: "las botas", clickX: 49, clickY: 93, labelX: 56, labelY: 88, areaW: 31, areaH: 14 },
          { wort: "el chándal", clickX: 84, clickY: 93, labelX: 76, labelY: 88, areaW: 30, areaH: 14 }
        ]
      },
      {
        title: "La ropa – Bild 2",
        file: "ropa3.png",
        hotspots: [
          { wort: "las orejeras", clickX: 16.7, clickY: 16.7, labelX: 23.5, labelY: 10, areaW: 31, areaH: 31 },
          { wort: "el plumífero", clickX: 50, clickY: 16.7, labelX: 50, labelY: 10, areaW: 31, areaH: 31 },
          { wort: "el anorak", clickX: 83.3, clickY: 16.7, labelX: 76.5, labelY: 10, areaW: 31, areaH: 31 },
          { wort: "la bufanda", clickX: 16.7, clickY: 42, labelX: 23, labelY: 36, areaW: 31, areaH: 21 },
          { wort: "el gorro", clickX: 50, clickY: 42, labelX: 50, labelY: 36, areaW: 31, areaH: 21 },
          { wort: "los guantes", clickX: 83.3, clickY: 42, labelX: 76.5, labelY: 36, areaW: 31, areaH: 21 },
          { wort: "las botas de invierno", clickX: 16.7, clickY: 63.5, labelX: 25.5, labelY: 58, areaW: 31, areaH: 22 },
          { wort: "los calcetines gruesos", clickX: 50, clickY: 63.5, labelX: 50, labelY: 58, areaW: 31, areaH: 22 },
          { wort: "el impermeable", clickX: 83.3, clickY: 63.5, labelX: 75, labelY: 58, areaW: 31, areaH: 22 },
          { wort: "las manoplas", clickX: 16.7, clickY: 88, labelX: 23.5, labelY: 82.5, areaW: 31, areaH: 22 },
          { wort: "la ropa térmica", clickX: 50, clickY: 88, labelX: 50, labelY: 82.5, areaW: 31, areaH: 22 },
          { wort: "las botas de lluvia", clickX: 83.3, clickY: 88, labelX: 75, labelY: 84, areaW: 31, areaH: 22 }
        ]
      },
      {
        title: "La ropa – Bild 3",
        file: "ropa4.png",
        hotspots: [
          { wort: "la camiseta sin mangas", clickX: 16.7, clickY: 15, labelX: 26, labelY: 9.5, areaW: 24, areaH: 18 },
          { wort: "el top", clickX: 50, clickY: 15, labelX: 50, labelY: 9.5 },
          { wort: "el bikini", clickX: 83.3, clickY: 20, labelX: 76, labelY: 14, areaW: 24, areaH: 22 },
          { wort: "la gorra de béisbol", clickX: 16.7, clickY: 35, labelX: 26, labelY: 29.5 },
          { wort: "los pantalones cortos", clickX: 50, clickY: 33.5, labelX: 50, labelY: 29.5, areaW: 25, areaH: 18 },
          { wort: "el bañador", clickX: 18, clickY: 46, labelX: 29.5, labelY: 40 },
          { wort: "el pareo", clickX: 16, clickY: 63, labelX: 28, labelY: 57 },
          { wort: "las bermudas", clickX: 50, clickY: 57, labelX: 50, labelY: 51 },
          { wort: "el vestido de playa", clickX: 83.3, clickY: 52, labelX: 73.5, labelY: 46, areaW: 24, areaH: 26 },
          { wort: "las alpargatas", clickX: 16.7, clickY: 86, labelX: 28, labelY: 80 },
          { wort: "las chanclas", clickX: 50, clickY: 73, labelX: 50, labelY: 67 },
          { wort: "la minifalda", clickX: 83.3, clickY: 86, labelX: 75, labelY: 80 }
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
          { wort: "la claraboya", clickX: 46.8, clickY: 70.5, labelX: 63, labelY: 65.5, areaW: 22, areaH: 17 },
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
        file: "Haus9.png",
        hotspots: [
          { wort: "puerta", clickX: 10.8, clickY: 49.5, labelX: 18, labelY: 37, areaW: 17, areaH: 56 },
          { wort: "interruptor", clickX: 4.9, clickY: 46.5, labelX: 12.5, labelY: 42.5, areaW: 6, areaH: 12 },
          { wort: "techo", clickX: 50.0, clickY: 13.5, labelX: 57, labelY: 8.5, areaW: 62, areaH: 22 },
          { wort: "pared", clickX: 52.5, clickY: 43.5, labelX: 61, labelY: 38.5, areaW: 42, areaH: 30 },
          { wort: "ventana", clickX: 88.0, clickY: 40.0, labelX: 79.5, labelY: 34.5, areaW: 17, areaH: 27 },
          { wort: "alféizar", clickX: 86.0, clickY: 51.0, labelX: 79.5, labelY: 56.5, areaW: 18, areaH: 8 },
          { wort: "enchufe", clickX: 26.0, clickY: 60.0, labelX: 18.5, labelY: 65, areaW: 7, areaH: 8 },
          { wort: "esquina", clickX: 72.8, clickY: 61.5, labelX: 80, labelY: 66, areaW: 8, areaH: 8, shape: "circle" },
          { wort: "suelo", clickX: 57.0, clickY: 80.5, labelX: 65.5, labelY: 74.5, areaW: 62, areaH: 38 }
        ]
      },
      {
        title: "Las habitaciones – Bild 2",
        file: "Haus8.png",
        disableWordInLearnMode: true,
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
  }
};
