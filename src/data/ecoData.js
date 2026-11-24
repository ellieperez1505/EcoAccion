// Datos estructurados del proyecto EcoAcción

export const TACHOS_INFO = [
  {
    id: 'verde',
    color: '#16a34a',
    bgLight: '#f0fdf4',
    border: '#22c55e',
    bullet: '🟢',
    name: 'Tacho Verde: Aprovechables Secos',
    ubicacion: 'Graderías, canchas deportivas y salida del kiosco escolar.',
    items: ['Botellas plásticas vacías', 'Tapas plásticas', 'Vasos limpios', 'Cartulina y cartón seco', 'Periódicos y hojas limpias'],
    destino: 'Taller de Macetas, Ecoladrillos y Libretas',
    icon: '♻️'
  },
  {
    id: 'marron',
    color: '#a16207',
    bgLight: '#fefce8',
    border: '#ca8a04',
    bullet: '🟤',
    name: 'Tacho Marrón: Orgánico & Papel Sucio',
    ubicacion: 'Bancas bajo los árboles, zonas de loncheras y patio central.',
    items: ['Servilletas usadas de lonchera', 'Papeles con restos de comida (sin tintas)', 'Cáscaras de plátano, manzana y cítricos', 'Hojas secas caídas en el patio'],
    destino: 'Compostera Escolar para el Suelo',
    icon: '🍂'
  },
  {
    id: 'negro',
    color: '#334155',
    bgLight: '#f1f5f9',
    border: '#64748b',
    bullet: '⚫',
    name: 'Tacho Negro: Residuos Comunes / Rechazo',
    ubicacion: 'Pasillos exteriores y accesos principales a pabellones.',
    items: ['Empaques metalizados de snacks', 'Envolturas plastificadas sucias', 'Mascarillas y apósitos', 'Chicles y colillas'],
    destino: 'Relleno Sanitario Autorizado',
    icon: '🗑️'
  }
];

export const GAME_ITEMS = [
  { name: 'Botella de agua de plástico vacía', category: 'verde', icon: '🍾', hint: 'Plástico PET limpio y seco' },
  { name: 'Servilleta con restos de mayonesa', category: 'marron', icon: '🧻', hint: 'Papel sucio rico en carbono para el compost' },
  { name: 'Bolsa metalizada de papas fritas', category: 'negro', icon: '🍟', hint: 'Empaque multicapa no aprovechable' },
  { name: 'Cáscara de plátano del refrigerio', category: 'marron', icon: '🍌', hint: 'Materia orgánica húmeda (nitrógeno)' },
  { name: 'Tapas plásticas de gaseosa', category: 'verde', icon: '🔴', hint: 'Plástico duro reciclable' },
  { name: 'Chicle usado masticado', category: 'negro', icon: '🫧', hint: 'Residuo común que no se composta ni recicla' },
  { name: 'Hojas de examen impresas por un lado', category: 'verde', icon: '📄', hint: 'Papel seco ideal para libretas de 2do uso' },
  { name: 'Caja de jugo tetrapak vacía y seca', category: 'verde', icon: '🧃', hint: 'Material reciclable limpio' },
  { name: 'Corazón de manzana', category: 'marron', icon: '🍎', hint: 'Resto de fruta excelente para las lombrices' },
  { name: 'Envoltorio plástico de galleta con chocolate', category: 'negro', icon: '🍫', hint: 'Si no es ecoladrillo limpio, va a rechazo' }
];

export const ACCIONES = [
  {
    id: 'macetas',
    name: 'Macetas Autorregantes y Colgantes',
    category: 'plastico',
    catLabel: 'Botellas PET',
    emoji: '🪴',
    difficulty: 'Fácil',
    time: '25 min',
    videoTitle: 'Tutorial: Maceta autorregable con botella de plástico',
    videoUrl: 'https://www.youtube.com/results?search_query=como+hacer+maceta+autorregable+con+botella+de+plastico',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/F03r6p4q61c',
    videoDuration: '4:20 min',
    summary: 'Transformamos las botellas de bebidas recolectadas en el patio escolar en macetas con sistema de mecha por capilaridad para reverdecer los muros y jardines verticales sin desperdiciar agua.',
    materials: ['Botella PET de 1.5L o 2L', 'Tijeras escolares o cúter con supervisión', 'Tira de tela de algodón o mecha (15 cm)', 'Tierra de chacra con compost escolar', 'Semillas o esqueje de planta'],
    steps: [
      {
        title: 'Corte y Preparación',
        desc: 'Lavar la botella y cortarla por la mitad. El tercio superior servirá de maceta embudo y la base como reservorio de agua.'
      },
      {
        title: 'Perforación de la Tapa',
        desc: 'Con ayuda de un docente o punzón caliente, hacer un orificio central en la tapa de la botella para pasar la mecha.'
      },
      {
        title: 'Instalación de la Mecha',
        desc: 'Pasar la tira de algodón por el orificio de la tapa dejando 7 cm colgando hacia el agua y 8 cm dentro del embudo.'
      },
      {
        title: 'Sustrato y Siembra',
        desc: 'Llenar el embudo con mezcla de tierra y compost, plantar la semilla y colocar agua en la base inferior. ¡El agua subirá sola!'
      }
    ]
  },
  {
    id: 'ecoladrillos',
    name: 'Ecoladrillos Escolares de Alta Densidad',
    category: 'plastico',
    catLabel: 'Botellas PET & Envolturas',
    emoji: '🧱',
    difficulty: 'Intermedio',
    time: '45 min',
    videoTitle: 'Tutorial: Cómo hacer un ecoladrillo correctamente paso a paso',
    videoUrl: 'https://www.youtube.com/results?search_query=como+hacer+un+ecoladrillo+paso+a+paso',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/F0L-2iRk6qg',
    videoDuration: '5:15 min',
    summary: 'Aprovechamos las botellas PET compactándolas con envoltorios plásticos flexibles de galletas y snacks recogidos en el patio, creando bloques constructivos resistentes para jardineras y bancas.',
    materials: ['Botella PET limpia y 100% seca', 'Envoltorios plásticos flexibles secos (snacks, bolsas)', 'Vara de madera o palo cilíndrico para compactar', 'Balanza escolar (meta: mínimo 450g por botella de 1.5L)'],
    steps: [
      {
        title: 'Limpieza y Secado',
        desc: 'Asegurarse de que tanto la botella como los envoltorios estén totalmente secos para evitar proliferación de bacterias.'
      },
      {
        title: 'Corte Inicial',
        desc: 'Cortar los envoltorios más rígidos en trozos medianos para que no dejen espacios de aire al introducirlos.'
      },
      {
        title: 'Compactación Continua',
        desc: 'Introducir plástico poco a poco y presionar fuertemente con la vara hacia el fondo. No deben quedar burbujas de aire.'
      },
      {
        title: 'Control de Peso y Tapado',
        desc: 'Pesar la botella. Al presionar con los dedos la botella debe sentirse tan dura como una piedra. Cerrar herméticamente.'
      }
    ]
  },
  {
    id: 'manualidades_botellas',
    name: 'Manualidades Utilitarias de Aula',
    category: 'plastico',
    catLabel: 'Botellas PET',
    emoji: '✂️',
    difficulty: 'Fácil',
    time: '30 min',
    videoTitle: 'Tutorial: Portalápices y organizadores con botellas recicladas',
    videoUrl: 'https://www.youtube.com/results?search_query=portalapices+con+botellas+recicladas+facil',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/QyXqgXp6qQ8',
    videoDuration: '3:45 min',
    summary: 'Elaboración de portalápices modulares, paletas para mezclas de témpera, semilleros y organizadores de mesa para el trabajo diario de los estudiantes en sus aulas.',
    materials: ['Bases de botellas PET', 'Lija suave para plástico o cinta decorativa', 'Pinturas acrílicas / témperas', 'Pinceles y marcadores permanentes'],
    steps: [
      {
        title: 'Corte de la Base',
        desc: 'Cortar la base de la botella a unos 8-10 cm de altura, diseñando siluetas divertidas como orejitas de animales.'
      },
      {
        title: 'Lijado de Bordes',
        desc: 'Lijar suavemente el borde cortado para evitar asperezas o cubrirlo con cinta adhesiva de color.'
      },
      {
        title: 'Pintura y Personalización',
        desc: 'Pintar una capa base con pintura acrílica y añadir detalles como ojos, bigotes o patrones geométricos.'
      },
      {
        title: 'Organización en Aula',
        desc: 'Unir varios botes con pegamento o silicona fría para crear un organizador modular de colores, tijeras y borradores.'
      }
    ]
  },
  {
    id: 'compost_papel',
    name: 'Compostaje Escolar con Papel Sucio y Servilletas',
    category: 'organico',
    catLabel: 'Suelo & Compost',
    emoji: '🪱',
    difficulty: 'Avanzado',
    time: '6 a 8 sem',
    videoTitle: 'Tutorial: Compostaje escolar con servilletas, papel y materia orgánica',
    videoUrl: 'https://www.youtube.com/results?search_query=como+hacer+compost+con+papel+y+servilletas',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/r_s9s88e8w4',
    videoDuration: '6:30 min',
    summary: 'Las servilletas manchadas de comida y papeles sin tintas plásticas aportan carbono seco que neutraliza la humedad de las cáscaras de fruta, generando abono fértil que devuelve nutrientes al suelo del patio.',
    materials: ['Cajón de madera o compostera plástica con orificios', 'Servilletas de lonchera y papel de estraza', 'Restos de frutas del recreo', 'Tierra de jardín o compost maduro iniciador', 'Regadera pequeña con agua'],
    steps: [
      {
        title: 'Triturado del Papel',
        desc: 'Rasgar manualmente las servilletas y papeles usados en tiras pequeñas de 3 cm para facilitar el ataque microbiano.'
      },
      {
        title: 'Estratificación en Capas',
        desc: 'Colocar una base de ramas o papel seco, luego una capa de fruta picada (1 parte) y cubrir con dos partes de papel (2 partes).'
      },
      {
        title: 'Control de Humedad',
        desc: 'La mezcla debe sentirse como una esponja escurrida: húmeda pero sin gotear al apretarla con un guante.'
      },
      {
        title: 'Aireación y Cosecha',
        desc: 'Remover la pila cada semana con una pala para oxigenar. En 6-8 semanas obtendrás tierra negra con aroma a bosque.'
      }
    ]
  },
  {
    id: 'papel_mache',
    name: 'Papel Maché, Maquetas y Relieves',
    category: 'papel',
    catLabel: 'Periódicos & Revistas',
    emoji: '🎭',
    difficulty: 'Intermedio',
    time: '40 min',
    videoTitle: 'Tutorial: Cómo hacer papel maché casero fácil y rápido',
    videoUrl: 'https://www.youtube.com/results?search_query=como+hacer+papel+mache+con+periodico+facil',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/7h2Y6h8-k9w',
    videoDuration: '4:50 min',
    summary: 'Reutilización de periódicos viejos y revistas en desuso para elaborar pasta moldeable con engrudo ecológico, empleada en maquetas sobre las capas de la tierra y proyectos didácticos.',
    materials: ['Periódicos viejos o papeles de cuaderno', 'Agua tibia', 'Harina y agua para engrudo cocido (o goma blanca)', 'Base de cartón reciclado', 'Pinturas al agua'],
    steps: [
      {
        title: 'Troceado y Remojo',
        desc: 'Cortar el papel en trozos pequeños y dejarlo en remojo en agua tibia durante 24 horas.'
      },
      {
        title: 'Molienda o Desmenuzado',
        desc: 'Amasar con las manos o licuar la pulpa empapada hasta obtener una consistencia homogénea y exprimir el exceso de agua.'
      },
      {
        title: 'Mezcla de la Pasta',
        desc: 'Integrar el engrudo casero poco a poco hasta lograr una masa elástica similar a la plastilina.'
      },
      {
        title: 'Modelado y Pintura',
        desc: 'Esculpir relieves geográficos, volcanes o maquetas escolares sobre cartón y dejar secar al sol antes de pintar.'
      }
    ]
  },
  {
    id: 'murales_revistas',
    name: 'Murales Comunitarios de Sensibilización',
    category: 'papel',
    catLabel: 'Revistas & Cartulinas',
    emoji: '🎨',
    difficulty: 'Fácil',
    time: '1 hora',
    videoTitle: 'Tutorial: Técnica de collage y mosaico con revistas recicladas',
    videoUrl: 'https://www.youtube.com/results?search_query=mosaico+con+revistas+recicladas+tutorial',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/E-bW4V4fE_A',
    videoDuration: '5:00 min',
    summary: 'Técnica de mosaico y collage sobre paredes desgastadas del patio, utilizando recortes clasificados de revistas de colores y cartulinas usadas para transmitir mensajes de cuidado ambiental.',
    materials: ['Revistas viejas de colores y folletos escolares', 'Cartulinas usadas', 'Pegamento blanco diluido con brocha', 'Tijeras escolares', 'Pared o soporte de madera recuperada'],
    steps: [
      {
        title: 'Diseño del Boceto',
        desc: 'Trazar el contorno del mural ecológico con tiza en la pared o soporte (árboles, el patio limpio, el sol).'
      },
      {
        title: 'Clasificación Cromática',
        desc: 'Recortar las revistas separando trozos por tonalidades: verdes, celestes, amarillos y marrones.'
      },
      {
        title: 'Aplicación en Mosaico',
        desc: 'Pegar los recortes a modo de teselas de mosaico rellenando las áreas de color.'
      },
      {
        title: 'Barniz Protector Ecológico',
        desc: 'Aplicar una capa final de cola diluida para sellar el papel y protegerlo del sol y el viento del patio.'
      }
    ]
  },
  {
    id: 'libretas_artesanales',
    name: 'Libretas Artesanales de Segundo Uso',
    category: 'papel',
    catLabel: 'Cartulinas & Papel Bond',
    emoji: '📒',
    difficulty: 'Intermedio',
    time: '35 min',
    videoTitle: 'Tutorial: Encuadernación con costura japonesa y papel reciclado',
    videoUrl: 'https://www.youtube.com/results?search_query=encuadernacion+japonesa+paso+a+paso+papel+reciclado',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/kYJz7n_K_nE',
    videoDuration: '6:10 min',
    summary: 'Rescate de hojas impresas por una sola cara en oficinas y aulas escolares, encuadernadas con tapas de cartulina gruesa reutilizada mediante costura japonesa artesanal para tomar apuntes.',
    materials: ['Hojas bond impresas por un lado (20 a 30 hojas)', 'Cartulina reciclada o tapas de cajas para portadas', 'Aguja gruesa punta roma e hilo de algodón o cáñamo', 'Perforador o punzón escolar', 'Regla y tijeras'],
    steps: [
      {
        title: 'Corte y Alineación',
        desc: 'Doblar o cortar las hojas tamaño A4 por la mitad con la cara en blanco orientada hacia arriba y emparejarlas.'
      },
      {
        title: 'Diseño de Portadas',
        desc: 'Cortar dos tapas de cartulina 5 mm más grandes que el bloque de papel y decorar la portada con motivos botánicos.'
      },
      {
        title: 'Perforación de Guías',
        desc: 'Marcar 4 orificios a 1.5 cm del borde del lomo con una separación simétrica y perforar con cuidado.'
      },
      {
        title: 'Costura Japonesa',
        desc: 'Pasar el hilo envolviendo el lomo en cada orificio creando el patrón tradicional japonés de encuadernación.'
      }
    ]
  },
  {
    id: 'cajas_segundo_uso',
    name: 'Cajas Ecológicas de Segundo Uso',
    category: 'papel',
    catLabel: 'Cartulina & Cartón',
    emoji: '📦',
    difficulty: 'Fácil',
    time: '20 min',
    videoTitle: 'Tutorial: Cómo hacer cajas de regalo con cartulina (Origami Masu)',
    videoUrl: 'https://www.youtube.com/results?search_query=como+hacer+cajas+con+cartulina+origami+masu',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/5Vz1yF-0x4s',
    videoDuration: '3:30 min',
    summary: 'Confección de cajas resistentes con técnica de origami a partir de cartulinas y calendarios viejos, reemplazando bolsas plásticas y empaques desechables en ferias y eventos escolares.',
    materials: ['Cartulinas gruesas cuadradas (calendarios viejos, pósteres)', 'Regla y plegadera de plástico o lápiz', 'Tijeras (opcional)', 'Cintas o sellos para decoración'],
    steps: [
      {
        title: 'Preparación Cuadrada',
        desc: 'Cortar dos cuadrados perfectos de cartulina: uno de 20x20 cm para la base y otro de 20.5x20.5 cm para la tapa.'
      },
      {
        title: 'Trazado de Diagonales',
        desc: 'Plegar el papel por ambas diagonales y llevar las cuatro puntas hacia el centro geométrico.'
      },
      {
        title: 'Plegado de Paredes (Caja Masu)',
        desc: 'Doblar los lados opuestos hacia la línea media, desdoblar y levantar las paredes laterales de la caja.'
      },
      {
        title: 'Cierre y Ensamblado',
        desc: 'Encajar las solapas triangulares dentro del fondo para fijar la estructura sin necesidad de pegamento.'
      }
    ]
  }
];
