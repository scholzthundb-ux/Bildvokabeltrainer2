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
          { wort: "el sol", clickX: 67.97, clickY: 25.13, labelX: 74, labelY: 22 },
          { wort: "la palmera", clickX: 14.36, clickY: 40.76, labelX: 22, labelY: 31 },
          { wort: "el mar", clickX: 36.33, clickY: 47.46, labelX: 42, labelY: 44 },
          { wort: "el barco", clickX: 53.03, clickY: 45.38, labelX: 56, labelY: 48 },
          { wort: "la ola", clickX: 76.95, clickY: 58.01, labelX: 72, labelY: 58 },
          { wort: "la tabla de surf", clickX: 46.58, clickY: 58.59, labelX: 61, labelY: 63 },
          { wort: "el bañador", clickX: 38.28, clickY: 70.77, labelX: 56, labelY: 68 },
          { wort: "la sombrilla", clickX: 10.25, clickY: 64.19, labelX: 12, labelY: 69 },
          { wort: "la toalla", clickX: 12.21, clickY: 85.87, labelX: 18, labelY: 90 },
          { wort: "las gafas de sol", clickX: 36.52, clickY: 90.30, labelX: 41, labelY: 92 },
          { wort: "la crema solar", clickX: 59.86, clickY: 86.98, labelX: 66, labelY: 89 },
          { wort: "la concha", clickX: 91.70, clickY: 90.30, labelX: 86, labelY: 90 },
          { wort: "el chiringuito", clickX: 93.07, clickY: 52.60, labelX: 79, labelY: 66 }
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
          { wort: "la camiseta", clickX: 14, clickY: 13, labelX: 20, labelY: 10 },
          { wort: "la camisa", clickX: 39, clickY: 13, labelX: 46, labelY: 10 },
          { wort: "los pantalones", clickX: 64, clickY: 13, labelX: 67, labelY: 9 },
          { wort: "los vaqueros", clickX: 87, clickY: 13, labelX: 81, labelY: 9 },
          { wort: "la falda", clickX: 14, clickY: 31, labelX: 19, labelY: 27 },
          { wort: "el vestido", clickX: 42, clickY: 31, labelX: 49, labelY: 27 },
          { wort: "el jersey", clickX: 76, clickY: 31, labelX: 77, labelY: 27 },
          { wort: "el abrigo", clickX: 13, clickY: 57, labelX: 22, labelY: 53 },
          { wort: "los zapatos", clickX: 45, clickY: 48, labelX: 50, labelY: 44 },
          { wort: "la chaqueta", clickX: 84, clickY: 50, labelX: 80, labelY: 45 },
          { wort: "las medias", clickX: 49, clickY: 63, labelX: 57, labelY: 59 },
          { wort: "las sandalias", clickX: 86, clickY: 65, labelX: 77, labelY: 61 },
          { wort: "el sombrero", clickX: 47, clickY: 79, labelX: 51, labelY: 75 },
          { wort: "el cinturón", clickX: 66, clickY: 79, labelX: 67, labelY: 75 },
          { wort: "los calcetines", clickX: 87, clickY: 79, labelX: 80, labelY: 75 },
          { wort: "el chaleco", clickX: 14, clickY: 93, labelX: 22, labelY: 88 },
          { wort: "las botas", clickX: 49, clickY: 93, labelX: 56, labelY: 88 },
          { wort: "el chándal", clickX: 84, clickY: 93, labelX: 76, labelY: 88 }
        ]
      },
      {
        title: "La ropa – Bild 2",
        file: "ropa3.png",
        hotspots: [
          { wort: "las orejeras", clickX: 16.7, clickY: 16.7, labelX: 23.5, labelY: 10 },
          { wort: "el plumífero", clickX: 50, clickY: 16.7, labelX: 50, labelY: 10 },
          { wort: "el anorak", clickX: 83.3, clickY: 16.7, labelX: 76.5, labelY: 10 },
          { wort: "la bufanda", clickX: 16.7, clickY: 42, labelX: 23, labelY: 36 },
          { wort: "el gorro", clickX: 50, clickY: 42, labelX: 50, labelY: 36 },
          { wort: "los guantes", clickX: 83.3, clickY: 42, labelX: 76.5, labelY: 36 },
          { wort: "las botas de invierno", clickX: 16.7, clickY: 63.5, labelX: 25.5, labelY: 58 },
          { wort: "los calcetines gruesos", clickX: 50, clickY: 63.5, labelX: 50, labelY: 58 },
          { wort: "el impermeable", clickX: 83.3, clickY: 63.5, labelX: 75, labelY: 58 },
          { wort: "las manoplas", clickX: 16.7, clickY: 88, labelX: 23.5, labelY: 82.5 },
          { wort: "la ropa térmica", clickX: 50, clickY: 88, labelX: 50, labelY: 82.5 },
          { wort: "las botas de lluvia", clickX: 83.3, clickY: 90, labelX: 75, labelY: 84 }
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
          { wort: "la mañana", clickX: 50.57, clickY: 20.59, labelX: 58, labelY: 10 },
          { wort: "despertarse", clickX: 16.7, clickY: 37, labelX: 25, labelY: 31 },
          { wort: "levantarse", clickX: 50, clickY: 37, labelX: 50, labelY: 31 },
          { wort: "abrir la ventana", clickX: 83.3, clickY: 37, labelX: 75, labelY: 31 },
          { wort: "ducharse", clickX: 16.7, clickY: 61, labelX: 27, labelY: 55 },
          { wort: "lavarse los dientes", clickX: 50, clickY: 61, labelX: 50, labelY: 55 },
          { wort: "vestirse", clickX: 83.3, clickY: 61, labelX: 75, labelY: 55 },
          { wort: "desayunar", clickX: 16.7, clickY: 84, labelX: 25, labelY: 78 },
          { wort: "salir de casa", clickX: 50, clickY: 84, labelX: 50, labelY: 78 },
          { wort: "ir al trabajo", clickX: 83.3, clickY: 84, labelX: 75, labelY: 78 }
        ]
      },
      {
        title: "Rutina diaria – Bild 2",
        file: "tarde_v1.png",
        hotspots: [
          { wort: "la tarde", clickX: 50.47, clickY: 21.13, labelX: 58, labelY: 10 },
          { wort: "trabajar", clickX: 16.7, clickY: 38, labelX: 25, labelY: 32 },
          { wort: "almorzar", clickX: 50, clickY: 38, labelX: 50, labelY: 32 },
          { wort: "terminar de trabajar", clickX: 83.3, clickY: 38, labelX: 75, labelY: 32 },
          { wort: "volver a casa", clickX: 16.7, clickY: 61, labelX: 27, labelY: 55 },
          { wort: "tomar un café", clickX: 50, clickY: 61, labelX: 50, labelY: 55 },
          { wort: "dar un paseo", clickX: 83.3, clickY: 61, labelX: 75, labelY: 55 },
          { wort: "hacer deporte", clickX: 16.7, clickY: 84, labelX: 25, labelY: 78 },
          { wort: "hacer la compra", clickX: 50, clickY: 84, labelX: 50, labelY: 78 },
          { wort: "recoger a los niños", clickX: 83.3, clickY: 84, labelX: 75, labelY: 78 }
        ]
      },
      {
        title: "Rutina diaria – Bild 3",
        file: "noche_v1.png",
        hotspots: [
          { wort: "la noche", clickX: 55.45, clickY: 19.52, labelX: 60, labelY: 9 },
          { wort: "preparar la cena", clickX: 16.7, clickY: 38, labelX: 25, labelY: 32 },
          { wort: "poner la mesa", clickX: 50, clickY: 38, labelX: 50, labelY: 32 },
          { wort: "cenar", clickX: 83.3, clickY: 38, labelX: 75, labelY: 32 },
          { wort: "ver la tele", clickX: 16.7, clickY: 61, labelX: 27, labelY: 55 },
          { wort: "leer", clickX: 50, clickY: 61, labelX: 50, labelY: 55 },
          { wort: "bañarse", clickX: 83.3, clickY: 61, labelX: 75, labelY: 55 },
          { wort: "ponerse el pijama", clickX: 16.7, clickY: 84, labelX: 25, labelY: 78 },
          { wort: "apagar la luz", clickX: 50, clickY: 84, labelX: 50, labelY: 78 },
          { wort: "acostarse", clickX: 83.3, clickY: 84, labelX: 75, labelY: 78 }
        ]
      },
      {
        title: "Rutina diaria – Bild 4",
        file: "finde_v1.png",
        hotspots: [
          { wort: "el fin de semana", clickX: 73.05, clickY: 16.60, labelX: 70, labelY: 9 },
          { wort: "levantarse tarde", clickX: 16.7, clickY: 37, labelX: 25, labelY: 31 },
          { wort: "desayunar tranquilamente", clickX: 50, clickY: 37, labelX: 50, labelY: 31 },
          { wort: "hacer una excursión", clickX: 83.3, clickY: 37, labelX: 75, labelY: 31 },
          { wort: "visitar a la familia", clickX: 16.7, clickY: 60, labelX: 27, labelY: 54 },
          { wort: "quedar con amigos", clickX: 50, clickY: 60, labelX: 50, labelY: 54 },
          { wort: "ir de compras", clickX: 83.3, clickY: 60, labelX: 75, labelY: 54 },
          { wort: "ver una película", clickX: 16.7, clickY: 86, labelX: 25, labelY: 80 },
          { wort: "salir a cenar", clickX: 50, clickY: 86, labelX: 50, labelY: 80 },
          { wort: "descansar", clickX: 83.3, clickY: 86, labelX: 75, labelY: 80 }
        ]
      },
      {
        title: "Rutina diaria – Bild 5",
        file: "rutina1.png",
        hotspots: [
          { wort: "despertar a los niños", clickX: 16.7, clickY: 20, labelX: 28, labelY: 13 },
          { wort: "preparar el desayuno", clickX: 50, clickY: 20, labelX: 50, labelY: 13 },
          { wort: "llevar a los niños al colegio", clickX: 83.3, clickY: 20, labelX: 72, labelY: 13 },
          { wort: "recoger a los niños", clickX: 16.7, clickY: 50, labelX: 28, labelY: 42 },
          { wort: "ayudar con los deberes", clickX: 50, clickY: 50, labelX: 50, labelY: 42 },
          { wort: "preparar la merienda", clickX: 83.3, clickY: 50, labelX: 72, labelY: 42 },
          { wort: "jugar juntos", clickX: 16.7, clickY: 78, labelX: 28, labelY: 70 },
          { wort: "leer un cuento", clickX: 50, clickY: 78, labelX: 50, labelY: 70 },
          { wort: "acostar a los niños", clickX: 83.3, clickY: 78, labelX: 72, labelY: 70 }
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
          { wort: "el ático", clickX: 46.58, clickY: 16.76, labelX: 50, labelY: 12 },
          { wort: "el cuarto de los niños", clickX: 30.27, clickY: 32.37, labelX: 28, labelY: 38 },
          { wort: "el dormitorio", clickX: 69.35, clickY: 33.78, labelX: 69, labelY: 38 },
          { wort: "el salón", clickX: 28.94, clickY: 51.81, labelX: 22, labelY: 56 },
          { wort: "el comedor", clickX: 51.52, clickY: 56.84, labelX: 51, labelY: 51 },
          { wort: "la cocina", clickX: 76.09, clickY: 52.28, labelX: 76, labelY: 57 },
          { wort: "el baño", clickX: 25.62, clickY: 69.97, labelX: 16.5, labelY: 74 },
          { wort: "el pasillo", clickX: 43.83, clickY: 75.67, labelX: 44, labelY: 70 },
          { wort: "el despacho", clickX: 64.23, clickY: 72.79, labelX: 63.5, labelY: 75 },
          { wort: "el lavadero", clickX: 77.13, clickY: 70.98, labelX: 84, labelY: 74 },
          { wort: "el sótano", clickX: 25.71, clickY: 86.86, labelX: 18, labelY: 91 },
          { wort: "el trastero", clickX: 76.47, clickY: 86.93, labelX: 73, labelY: 91 }
        ]
      }
    ]
  }
};
