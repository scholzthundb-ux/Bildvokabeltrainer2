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
          { wort: "el sol", clickX: 28.03, clickY: 17.97, labelX: 33, labelY: 15 },
          { wort: "la gaviota", clickX: 68.95, clickY: 18.03, labelX: 67, labelY: 13 },
          { wort: "el socorrista", clickX: 71.48, clickY: 42.71, labelX: 80, labelY: 35 },
          { wort: "el salvavidas", clickX: 57.52, clickY: 57.03, labelX: 51, labelY: 52 },
          { wort: "la sombrilla", clickX: 17.58, clickY: 51.50, labelX: 27, labelY: 47 },
          { wort: "la tumbona", clickX: 17.97, clickY: 75.00, labelX: 26, labelY: 72 },
          { wort: "el sombrero de sol", clickX: 30.76, clickY: 77.86, labelX: 36, labelY: 73 },
          { wort: "el castillo de arena", clickX: 48.34, clickY: 86.00, labelX: 57, labelY: 81 },
          { wort: "la niña", clickX: 83.79, clickY: 74.74, labelX: 88, labelY: 69 },
          { wort: "la pala", clickX: 61.23, clickY: 94.14, labelX: 65, labelY: 90 },
          { wort: "la pelota", clickX: 76.95, clickY: 92.90, labelX: 83, labelY: 89 },
          { wort: "el flotador", clickX: 89.16, clickY: 62.17, labelX: 82, labelY: 55 }
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
          { wort: "la camiseta sin mangas", clickX: 16.7, clickY: 15, labelX: 26, labelY: 9.5 },
          { wort: "el top", clickX: 50, clickY: 15, labelX: 50, labelY: 9.5 },
          { wort: "el bikini", clickX: 83.3, clickY: 20, labelX: 76, labelY: 14 },
          { wort: "la gorra de béisbol", clickX: 16.7, clickY: 35, labelX: 26, labelY: 29.5 },
          { wort: "los pantalones cortos", clickX: 50, clickY: 35, labelX: 50, labelY: 29.5 },
          { wort: "el bañador", clickX: 18, clickY: 46, labelX: 29.5, labelY: 40 },
          { wort: "el pareo", clickX: 16, clickY: 63, labelX: 28, labelY: 57 },
          { wort: "las bermudas", clickX: 50, clickY: 57, labelX: 50, labelY: 51 },
          { wort: "el vestido de playa", clickX: 83.3, clickY: 52, labelX: 73.5, labelY: 46 },
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
        file: "Haus1.png",
        hotspots: [
          { wort: "el ático", clickX: 50, clickY: 18.5, labelX: 50, labelY: 12, areaW: 47, areaH: 20 },
          { wort: "el cuarto de los niños", clickX: 29.8, clickY: 35, labelX: 28, labelY: 38, areaW: 30, areaH: 17 },
          { wort: "el dormitorio", clickX: 69.2, clickY: 35, labelX: 69, labelY: 38, areaW: 30, areaH: 17 },
          { wort: "el salón", clickX: 28.7, clickY: 52.2, labelX: 22, labelY: 56, areaW: 25, areaH: 18 },
          { wort: "el comedor", clickX: 51.5, clickY: 52.5, labelX: 51, labelY: 51, areaW: 16, areaH: 18 },
          { wort: "la cocina", clickX: 75.8, clickY: 52.5, labelX: 76, labelY: 57, areaW: 18, areaH: 18 },
          { wort: "el baño", clickX: 25.4, clickY: 70, labelX: 16.5, labelY: 74, areaW: 17, areaH: 16 },
          { wort: "el pasillo", clickX: 43.8, clickY: 70, labelX: 44, labelY: 70, areaW: 14, areaH: 16 },
          { wort: "el despacho", clickX: 61.8, clickY: 70, labelX: 63.5, labelY: 75, areaW: 16, areaH: 16 },
          { wort: "el lavadero", clickX: 77.3, clickY: 70, labelX: 84, labelY: 74, areaW: 13, areaH: 16 },
          { wort: "el sótano", clickX: 25.7, clickY: 86.8, labelX: 18, labelY: 91, areaW: 18, areaH: 15 },
          { wort: "el trastero", clickX: 73.8, clickY: 86.8, labelX: 73, labelY: 91, areaW: 21, areaH: 15 }
        ]
      }
    ]
  }
};
