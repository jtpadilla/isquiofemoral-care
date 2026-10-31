// Derivado de spec.md: cámbialo allí primero.
export const GYM_GENERAL_TIPS = [
  {
    "title": "Respiración",
    "text": "Coge aire antes de bajar la carga y suéltalo del todo al hacer el esfuerzo, sin bloquear la respiración."
  },
  {
    "title": "Costillas y pelvis",
    "text": "Mantén las costillas cerradas y la pelvis estable para no arquear la zona lumbar."
  },
  {
    "title": "Ritmo",
    "text": "Baja la carga en unos 2 o 3 segundos y sube de forma controlada, sin rebotes."
  },
  {
    "title": "Rango de movimiento",
    "text": "Usa el mayor recorrido que no moleste. Si el ejercicio reproduce los síntomas, reduce primero el recorrido y después la carga."
  },
  {
    "title": "Los dos lados",
    "text": "Empieza por el lado con más molestias y haz en el otro las mismas repeticiones."
  }
];

export const GYM_TECHNIQUE: Record<string, {
  general: string[];
  hip: string[];
  phases: string[];
  errors: { title: string; text: string }[];
  ranges: { title: string; min: number; max: number; unit: string }[];
}> = {
  "Tracción lateral en cuadrupedia con goma": {
    "general": [
      "Coloca la goma en la raíz del muslo y aléjate del anclaje hasta notar tensión constante."
    ],
    "hip": [
      "Debe sentirse como una apertura, sin dolor. Mantén la rodilla bajo la cadera, sin cruzar el muslo hacia dentro."
    ],
    "phases": [],
    "errors": [],
    "ranges": []
  },
  "90/90 con corcho": {
    "general": [
      "Túmbate con caderas y rodillas a 90° y los pies en la pared. Sujeta un corcho entre las rodillas.",
      "Empuja con los talones sin despegar la pelvis del suelo."
    ],
    "hip": [
      "Sirve para preparar la cadera sin extenderla. Si notas pinzamiento, separa un poco los pies de la pared."
    ],
    "phases": [
      "Caderas y rodillas a 90°, con los pies en la pared",
      "Exhala, presiona el corcho y bascula la pelvis sin despegarla"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "Se pierde la basculación de la pelvis y el esfuerzo pasa a la espalda. Exhala del todo y acerca las costillas a la pelvis."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 85,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Prensa de piernas": {
    "general": [
      "Apoya toda la espalda y la pelvis, con los pies a la anchura de los hombros y las rodillas en la línea de los pies.",
      "Baja despacio y empuja con todo el pie, sin bloquear las rodillas arriba."
    ],
    "hip": [
      "Es el sustituto de las zancadas porque no lleva la pierna atrás. Prueba alturas de pies hasta encontrar la que no moleste.",
      "Detente antes de que la pelvis se despegue del respaldo. Evita que las rodillas se junten, porque acerca la cadera a la aducción."
    ],
    "phases": [
      "Pies a la anchura de los hombros y espalda apoyada",
      "Baja despacio sin llegar al tope",
      "Empuja con todo el pie sin bloquear las rodillas"
    ],
    "errors": [
      {
        "title": "Las rodillas se juntan",
        "text": "Lleva la cadera hacia la aducción, la posición que estrecha el espacio. Reduce la carga y empuja en la línea de los pies."
      },
      {
        "title": "Bajar hasta el tope",
        "text": "Al final del recorrido la pelvis tiende a despegarse y la zona lumbar se redondea. Detente antes."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Sentadilla a cajón alto con mancuerna al pecho": {
    "general": [
      "Coloca los pies a la anchura de los hombros y sujeta la mancuerna contra el pecho.",
      "Lleva la cadera atrás, toca el cajón sin dejarte caer y sube empujando el suelo."
    ],
    "hip": [
      "Elige un cajón con el que puedas bajar sin molestias, y súbelo si notas pinzamiento. Mantén las rodillas abiertas."
    ],
    "phases": [
      "De pie, con la mancuerna al pecho",
      "Lleva la cadera atrás hasta tocar el cajón",
      "Sube empujando el suelo con todo el pie"
    ],
    "errors": [
      {
        "title": "Las rodillas caen hacia dentro",
        "text": "Aumenta la aducción de cadera. Baja la carga y empuja las rodillas hacia fuera."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 95,
        "unit": "°"
      }
    ]
  },
  "Femoral sentado": {
    "general": [
      "Ajusta la máquina para alinear la rodilla con su eje y sujeta bien el muslo.",
      "Flexiona la rodilla sin despegar la pelvis del asiento y vuelve despacio."
    ],
    "hip": [
      "El isquiotibial se inserta cerca de la zona irritada. Si molesta en la tuberosidad isquiática, reduce recorrido y carga, y coméntalo con tu profesional."
    ],
    "phases": [
      "Pierna casi estirada, pelvis apoyada",
      "Flexiona la rodilla en unos 2 segundos",
      "Vuelve despacio sin perder el apoyo"
    ],
    "errors": [
      {
        "title": "La pelvis se despega",
        "text": "Traslada la tensión a la inserción de los isquiotibiales y a la zona lumbar. Baja la carga y mantén la pelvis basculada."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 95,
        "unit": "°"
      }
    ]
  },
  "Abductores en máquina": {
    "general": [
      "Siéntate con la pelvis atrás y el tronco quieto.",
      "Abre las piernas sin impulso, mantén un segundo y vuelve despacio."
    ],
    "hip": [
      "Fortalece el glúteo medio, importante para que la pelvis no caiga al caminar. Evita abrir hasta notar molestia en la nalga profunda."
    ],
    "phases": [
      "Sentado, piernas casi juntas",
      "Abre sin balancear el tronco",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Balancear el tronco",
        "text": "El impulso resta trabajo al glúteo. Reduce la carga y mantén la espalda apoyada."
      }
    ],
    "ranges": [
      {
        "title": "Abducción",
        "min": 5,
        "max": 35,
        "unit": "°"
      }
    ]
  },
  "Puente de glúteo con pies en pared": {
    "general": [
      "Túmbate con los pies apoyados y empuja con todo el pie.",
      "Sube hasta alinear rodillas, caderas y hombros, y baja despacio. La figura lo muestra con apoyo en el suelo; en la pared el gesto es el mismo."
    ],
    "hip": [
      "No subas más de la línea recta: extender de más es la posición que debes evitar. Mantén las rodillas separadas."
    ],
    "phases": [
      "Tumbado, con los pies apoyados",
      "Sube hasta alinear rodillas, caderas y hombros",
      "Baja despacio sin perder la retroversión"
    ],
    "errors": [
      {
        "title": "Subir de más",
        "text": "Lleva la cadera a la extensión y arquea la zona lumbar. Detente en la línea recta."
      }
    ],
    "ranges": [
      {
        "title": "Cadera (0° = en línea)",
        "min": -5,
        "max": 60,
        "unit": "°"
      }
    ]
  },
  "Extensión de rodilla en máquina": {
    "general": [
      "Alinea la rodilla con el eje de la máquina y apoya toda la espalda.",
      "Extiende sin golpear arriba y baja despacio."
    ],
    "hip": [
      "La cadera no tiene que moverse, por lo que suele tolerarse bien. Si molesta la rodilla, reduce recorrido o carga."
    ],
    "phases": [
      "Rodilla flexionada, espalda apoyada",
      "Extiende de forma controlada",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Despegar la pelvis",
        "text": "Empujar con el cuerpo resta trabajo al muslo. Baja la carga y agárrate a las asas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 10,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Pallof isométrico": {
    "general": [
      "Colócate de lado a la polea, con los pies paralelos a la anchura de los hombros.",
      "Lleva las manos al frente, aguanta sin dejar que el tronco gire y vuelve."
    ],
    "hip": [
      "Los pies paralelos evitan llevar una pierna atrás. Mantén el peso repartido en las dos piernas."
    ],
    "phases": [
      "De lado a la polea, con las manos en el pecho",
      "Lleva las manos al frente",
      "Aguanta sin que el tronco gire",
      "Vuelve al pecho"
    ],
    "errors": [
      {
        "title": "El tronco gira",
        "text": "Se pierde el trabajo antirrotación y la pelvis tiende a moverse. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Giro del tronco",
        "min": -3,
        "max": 3,
        "unit": "°"
      }
    ]
  },
  "Remo sentado en máquina sin apoyar el pecho": {
    "general": [
      "Siéntate erguido, con los pies apoyados, y deja que el brazo se alargue delante.",
      "Tira llevando los codos atrás, sin balancear el tronco."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.",
      "Abrir el pecho sin forzar ayuda a no encorvarte para compensar la molestia de cadera."
    ],
    "phases": [
      "Brazos alargados, tronco erguido",
      "Tira llevando los codos atrás",
      "Vuelve alargando el brazo"
    ],
    "errors": [
      {
        "title": "Balancear el tronco",
        "text": "Convierte el remo en un impulso de espalda y pelvis. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 5,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Respiración diafragmática": {
    "general": [
      "Túmbate con caderas y rodillas a 90° y las piernas apoyadas.",
      "Inhala expandiendo costillas y abdomen, y exhala del todo acercando las costillas a la pelvis."
    ],
    "hip": [
      "Esta posición evita la extensión de cadera. La guía la recomienda para no sobrecargar los pectorales altos y las escápulas al respirar."
    ],
    "phases": [
      "Inhala expandiendo las costillas",
      "Exhala del todo y cierra las costillas"
    ],
    "errors": [],
    "ranges": []
  },
  "Estiramiento dorsal": {
    "general": [
      "Agárrate a un apoyo, lleva la cadera atrás y deja caer el pecho sin forzar.",
      "Expande las costillas al inhalar y suelta el aire despacio."
    ],
    "hip": [
      "Mantén las piernas con las rodillas algo flexionadas, para no estirar el isquiotibial, y los pies a la anchura de las caderas."
    ],
    "phases": [
      "Cadera atrás y brazos alargados",
      "Expande las costillas al inhalar",
      "Exhala despacio"
    ],
    "errors": [
      {
        "title": "Estirar las piernas",
        "text": "Tensa el isquiotibial y el nervio ciático, justo lo que la guía pide evitar. Mantén las rodillas flexionadas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 40,
        "unit": "°"
      }
    ]
  },
  "Press de banca inclinado a 30º con pies arriba": {
    "general": [
      "Apoya la espalda en el banco a 30º con los pies elevados en un apoyo.",
      "Baja las mancuernas con los codos abiertos unos 45° y empuja sin arquear."
    ],
    "hip": [
      "Los pies arriba evitan el arco lumbar y la extensión de cadera. Si la flexión molesta, baja el apoyo de los pies."
    ],
    "phases": [
      "Mancuernas arriba, espalda apoyada",
      "Baja controlando, con los codos a unos 45°",
      "Empuja mientras exhalas"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "Empuja desde la espalda y puede mover la pelvis. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 5,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Press landmine": {
    "general": [
      "Colócate frente a la barra, con los pies paralelos, y sujeta el extremo a la altura del hombro.",
      "Empuja hacia delante y arriba, y baja cerrando las costillas."
    ],
    "hip": [
      "Se hace con los pies paralelos, sin dar un paso atrás, para no extender la cadera. Mantén el peso en las dos piernas."
    ],
    "phases": [
      "Mano a la altura del hombro, pies paralelos",
      "Empuja hacia delante y arriba",
      "Baja cerrando las costillas"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se va hacia delante y se acerca a la extensión de cadera. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 5,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Jalón unilateral o pulldown en máquina": {
    "general": [
      "Siéntate con los muslos sujetos y alarga el brazo arriba.",
      "Tira llevando el codo hacia la costilla, y cierra las costillas al bajar."
    ],
    "hip": [
      "El asiento mantiene la cadera flexionada. Ajústalo para que los pies apoyen y la rodilla no quede por encima de la cadera."
    ],
    "phases": [
      "Brazo alargado arriba",
      "Lleva el codo hacia la costilla",
      "Sube alargando el brazo"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco atrás",
        "text": "Arquea la zona lumbar y resta trabajo a la espalda. Mantén el tronco estable."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de hombro",
        "min": 45,
        "max": 170,
        "unit": "°"
      }
    ]
  },
  "Elevaciones laterales en polea a la altura de la rodilla": {
    "general": [
      "Coloca la polea a la altura de la rodilla, en el lado contrario al brazo que trabaja.",
      "Sube el brazo hasta la altura del hombro y baja despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y sin balancear la pelvis. No te dejes caer sobre una pierna."
    ],
    "phases": [
      "Brazo abajo, pies paralelos",
      "Sube hasta la altura del hombro",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco",
        "text": "Traslada la carga a la cadera de un lado. Reduce el peso."
      }
    ],
    "ranges": [
      {
        "title": "Abducción del hombro",
        "min": 10,
        "max": 85,
        "unit": "°"
      }
    ]
  },
  "Bíceps Scott en banco con polea": {
    "general": [
      "Apoya los brazos en el banco, con el pecho estable.",
      "Flexiona los codos sin despegar los brazos y baja despacio."
    ],
    "hip": [
      "Comprueba que el asiento no quede tan bajo que las rodillas superen las caderas. Pon los pies bien apoyados."
    ],
    "phases": [
      "Brazos apoyados, codos casi estirados",
      "Flexiona los codos",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Arquear la espalda",
        "text": "Ayuda con el cuerpo y arquea la zona lumbar. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 20,
        "max": 130,
        "unit": "°"
      }
    ]
  },
  "Tríceps en polea de espaldas": {
    "general": [
      "Colócate de espaldas a la polea alta, con los pies paralelos o sentado.",
      "Extiende el codo sin mover el brazo y vuelve despacio."
    ],
    "hip": [
      "Evita la posición de zancada larga: lleva la pierna atrás y se acerca a la extensión de cadera."
    ],
    "phases": [
      "Codo flexionado, brazo quieto",
      "Extiende el codo",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 5,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Bicho muerto alterno": {
    "general": [
      "Túmbate con caderas y rodillas a 90° y los brazos arriba.",
      "Alarga una pierna y el brazo contrario sin despegar la zona lumbar, y cambia de lado."
    ],
    "hip": [
      "Baja la pierna solo hasta donde mantengas la zona lumbar en el suelo, sin llegar a la extensión de cadera."
    ],
    "phases": [
      "Caderas y rodillas a 90°, brazos arriba",
      "Alarga una pierna y el brazo contrario",
      "Vuelve al centro",
      "Cambia de lado",
      "Vuelve al centro"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis bascula y la cadera se extiende de más. Alarga menos la pierna."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 25,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "90/90 femoral con corcho": {
    "general": [
      "Túmbate con caderas y rodillas a 90° y los talones en la pared, con un corcho entre las rodillas.",
      "Empuja con los talones hacia abajo hasta notar la parte posterior del muslo y despega la pelvis solo un poco."
    ],
    "hip": [
      "Prepara la cadera sin extenderla. Si notas pinzamiento, separa un poco los pies de la pared."
    ],
    "phases": [
      "Caderas y rodillas a 90°, con los talones en la pared",
      "Exhala del todo y empuja con los talones hacia abajo"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "Si el esfuerzo pasa a la espalda, deja de trabajar el muslo. Acerca las costillas a la pelvis."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 85,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "90/90 con basculación pélvica": {
    "general": [
      "Túmbate con caderas y rodillas a 90° y los pies en la pared.",
      "Al exhalar, bascula la pelvis y acerca la zona lumbar al suelo."
    ],
    "hip": [
      "Trabaja el control de la pelvis lejos de la extensión de cadera."
    ],
    "phases": [
      "Caderas y rodillas a 90°, con los pies en la pared",
      "Exhala y bascula la pelvis"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "Se pierde la basculación. Exhala del todo antes de repetir."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 85,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Hookling en step": {
    "general": [
      "Túmbate con las pantorrillas apoyadas en un step, con caderas y rodillas a 90°.",
      "Inhala expandiendo las costillas y exhala del todo sin tensar el cuello."
    ],
    "hip": [
      "La posición descarga la cadera y evita la extensión."
    ],
    "phases": [
      "Inhala expandiendo las costillas",
      "Exhala del todo y cierra las costillas"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La respiración sube al pecho y se pierde el apoyo lumbar. Suelta más aire."
      }
    ],
    "ranges": []
  },
  "Open book bilateral": {
    "general": [
      "Túmbate de lado con las rodillas flexionadas y los brazos delante.",
      "Abre el brazo de arriba hacia atrás siguiéndolo con la mirada, y repite en el otro lado."
    ],
    "hip": [
      "Mantén las rodillas juntas y la pelvis apilada, para que el giro sea del tórax y no de la cadera."
    ],
    "phases": [
      "De lado, con los brazos delante",
      "Abre el brazo y gira el tórax mientras exhalas",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "La pelvis se va con el giro",
        "text": "El giro pasa a la zona lumbar y a la cadera. Abre menos y deja las rodillas juntas."
      }
    ],
    "ranges": [
      {
        "title": "Giro del tronco",
        "min": 0,
        "max": 45,
        "unit": "°"
      }
    ]
  },
  "Estiramiento dorsal sentado": {
    "general": [
      "Siéntate y agárrate a un apoyo delante de ti, con los brazos alargados.",
      "Deja caer el pecho sin forzar y expande las costillas al inhalar."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Sentado, con los brazos alargados",
      "Deja caer el pecho e inhala expandiendo las costillas",
      "Exhala y relaja"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "El estiramiento se va a la espalda baja. Cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de hombro",
        "min": 145,
        "max": 170,
        "unit": "°"
      }
    ]
  },
  "Bretzel dinámico con churro": {
    "general": [
      "Túmbate de lado con la pierna de arriba flexionada sobre un churro y la de abajo doblada hacia atrás.",
      "Gira el tórax poco a poco mientras exhalas, con la cabeza bien apoyada."
    ],
    "hip": [
      "Incluye rotación y la pierna de abajo va hacia atrás: no fuerces el rango y reduce si reproduce los síntomas."
    ],
    "phases": [
      "De lado, con la cabeza apoyada",
      "Gira el tórax mientras exhalas",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Forzar el giro",
        "text": "La pelvis se va con el tronco y se carga la cadera. Gira solo hasta donde sea cómodo."
      }
    ],
    "ranges": [
      {
        "title": "Giro del tronco",
        "min": 0,
        "max": 45,
        "unit": "°"
      }
    ]
  },
  "Estiramiento piramidal": {
    "general": [
      "Túmbate boca arriba y apoya el tobillo sobre la rodilla contraria.",
      "Acerca la pierna de apoyo al pecho hasta notar el estiramiento en la nalga, sin dolor."
    ],
    "hip": [
      "Combina flexión y rotación externa: detente si reproduce los síntomas."
    ],
    "phases": [
      "Tobillo sobre la rodilla contraria",
      "Acerca la pierna al pecho mientras exhalas",
      "Suelta despacio"
    ],
    "errors": [
      {
        "title": "Despegar la pelvis",
        "text": "Se pierde el apoyo y se fuerza la zona. Acerca menos la pierna."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de la pierna de apoyo",
        "min": 40,
        "max": 85,
        "unit": "°"
      }
    ]
  },
  "Inflar globo en cuclillas contra pared": {
    "general": [
      "Apoya la espalda en la pared, en cuclillas, y sujeta un globo.",
      "Inhala por la nariz y sopla sin ruido hasta soltar todo el aire, con el abdomen activo."
    ],
    "hip": [
      "Es una flexión profunda: ajusta la altura y súbete si notas pinzamiento."
    ],
    "phases": [
      "Inhala expandiendo las costillas",
      "Sopla hasta soltar todo el aire"
    ],
    "errors": [
      {
        "title": "Bajar demasiado",
        "text": "Lleva la cadera a una flexión profunda que puede molestar. Quédate más arriba."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 80,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Camello a cobra": {
    "general": [
      "En cuatro apoyos, redondea la espalda de forma progresiva.",
      "Pasa por la posición neutra y lleva el pecho adelante, sin hundir la zona lumbar."
    ],
    "hip": [
      "La extensión debe repartirse por la espalda alta, sin llevarla a la zona lumbar. Mantén las rodillas bajo las caderas."
    ],
    "phases": [
      "Redondea la espalda mientras exhalas",
      "Vuelve a la posición neutra",
      "Lleva el pecho adelante mientras inhalas",
      "Vuelve a la posición neutra"
    ],
    "errors": [
      {
        "title": "Hundir la zona lumbar",
        "text": "Concentra la extensión abajo y mueve la pelvis. Reduce el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Curva de la espalda",
        "min": -16,
        "max": 16,
        "unit": "°"
      }
    ]
  },
  "Alargar pierna con la otra rodilla flexionada": {
    "general": [
      "Túmbate boca arriba con una rodilla acercada al pecho.",
      "Alarga la otra pierna deslizando el talón, sin que la zona lumbar se despegue."
    ],
    "hip": [
      "No pierdas la retroversión: baja la pierna solo hasta donde controles la pelvis."
    ],
    "phases": [
      "Una rodilla al pecho y la otra flexionada",
      "Alarga la pierna deslizando el talón",
      "Vuelve flexionando la rodilla"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis bascula y la cadera se extiende de más. Alarga menos."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 5,
        "max": 50,
        "unit": "°"
      }
    ]
  },
  "Sliding de pierna": {
    "general": [
      "De pie, con un pie sobre un deslizador, lleva esa pierna atrás mientras flexionas la de apoyo.",
      "Vuelve empujando con todo el pie de apoyo."
    ],
    "hip": [
      "Evita llevar la pierna a extensión con aducción: desliza poco y en línea recta."
    ],
    "phases": [
      "De pie, con los pies juntos",
      "Desliza la pierna atrás, un poco",
      "Vuelve empujando con el pie de apoyo"
    ],
    "errors": [
      {
        "title": "Deslizar demasiado y cruzar",
        "text": "Suma extensión y aducción, la combinación que estrecha el espacio. Reduce el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 25,
        "unit": "°"
      }
    ]
  },
  "Sliding pull back en cuadrupedia": {
    "general": [
      "En cuatro apoyos, con las manos sobre deslizadores.",
      "Lleva la pelvis atrás sin que se mueva la espalda y vuelve a la posición inicial."
    ],
    "hip": [
      "Sin extender la cadera más allá de la zona cómoda. Si la flexión molesta, reduce el recorrido."
    ],
    "phases": [
      "En cuatro apoyos",
      "Lleva la pelvis atrás mientras exhalas",
      "Vuelve sin arquear"
    ],
    "errors": [
      {
        "title": "Hundir la zona lumbar",
        "text": "Se pierde el control del tronco. Cierra las costillas antes de moverte."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 80,
        "max": 110,
        "unit": "°"
      }
    ]
  },
  "Cross connect": {
    "general": [
      "Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.",
      "Boca arriba con las piernas a 90°, acerca el codo a la rodilla contraria mientras exhalas."
    ],
    "hip": [
      "Se mantiene en flexión de cadera, lejos de la extensión. Reduce el recorrido si molesta."
    ],
    "phases": [
      "Piernas a 90° y manos junto a la cabeza",
      "Acerca el codo a la rodilla contraria",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "El esfuerzo sale del abdomen. Mantén la espalda baja en el suelo."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 85,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Delfín tocando pie alterno": {
    "general": [
      "Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.",
      "Apóyate sobre las manos o antebrazos con la pelvis alta y las rodillas algo flexionadas, y lleva una mano hacia el pie contrario."
    ],
    "hip": [
      "Mantén las rodillas flexionadas para no estirar el isquiotibial y el nervio ciático."
    ],
    "phases": [
      "Pelvis alta y rodillas algo flexionadas",
      "Lleva una mano hacia el pie contrario",
      "Vuelve y cambia de lado"
    ],
    "errors": [
      {
        "title": "Estirar las piernas",
        "text": "Tensa el isquiotibial y el nervio ciático. Mantén las rodillas flexionadas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 10,
        "max": 30,
        "unit": "°"
      }
    ]
  },
  "Extensión de rodilla unilateral en máquina": {
    "general": [
      "Alinea la rodilla con el eje de la máquina y apoya toda la espalda.",
      "Extiende una pierna sin golpear arriba y baja despacio."
    ],
    "hip": [
      "La cadera no tiene que moverse, por lo que suele tolerarse bien. Si molesta la rodilla, reduce recorrido o carga."
    ],
    "phases": [
      "Rodilla flexionada, espalda apoyada",
      "Extiende de forma controlada",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Despegar la pelvis",
        "text": "Empujar con el cuerpo resta trabajo al muslo. Baja la carga y agárrate a las asas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 10,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Sentadilla con cuña": {
    "general": [
      "Coloca los talones sobre una cuña y sujeta la mancuerna al pecho.",
      "Baja lo más vertical posible, aguanta unos segundos respirando y sube."
    ],
    "hip": [
      "Ajusta la profundidad: baja solo hasta donde no notes pinzamiento y mantén las rodillas en la línea de los pies."
    ],
    "phases": [
      "De pie, con los talones en la cuña",
      "Baja lo más vertical posible",
      "Aguanta unos segundos respirando",
      "Sube empujando el suelo"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco",
        "text": "La carga se va a la cadera y a la espalda. Baja menos y mantente vertical."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 0,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Sentadilla Zecher": {
    "general": [
      "Sujeta la barra en el pliegue de los codos, pegada al cuerpo.",
      "Lleva la cadera atrás, baja con el pecho alto y sube empujando el suelo."
    ],
    "hip": [
      "Sin bajar a un rango profundo. Mantén las rodillas abiertas."
    ],
    "phases": [
      "De pie, con la barra en los codos",
      "Baja controlando, sin llegar al rango profundo",
      "Sube empujando el suelo"
    ],
    "errors": [
      {
        "title": "Bajar demasiado",
        "text": "La flexión profunda puede reproducir el pinzamiento y redondea la espalda. Detente antes."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Sentadilla isométrica en polea": {
    "general": [
      "Colócate frente a la polea, con el agarre al pecho.",
      "Baja hasta una altura sin molestias y aguanta respirando, con el peso en todo el pie."
    ],
    "hip": [
      "Busca la altura sin molestias y mantén las rodillas abiertas."
    ],
    "phases": [
      "De pie, frente a la polea",
      "Baja hasta una altura cómoda",
      "Aguanta respirando",
      "Sube despacio"
    ],
    "errors": [
      {
        "title": "Las rodillas caen hacia dentro",
        "text": "Aumenta la aducción de cadera. Empuja las rodillas hacia fuera."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 5,
        "max": 80,
        "unit": "°"
      }
    ]
  },
  "Media sentadilla en pared con codo al frente": {
    "general": [
      "Apoya la espalda en la pared, con los pies adelantados y un rodillo justo por encima de las rodillas.",
      "Baja a media sentadilla con los codos al frente y respira sin arquear."
    ],
    "hip": [
      "Es un rango corto que evita la extensión. Mantén las rodillas en la línea de los pies."
    ],
    "phases": [
      "Espalda en la pared y codos al frente",
      "Baja a media sentadilla",
      "Sube sin despegar la espalda"
    ],
    "errors": [
      {
        "title": "Las rodillas caen hacia dentro",
        "text": "Aumenta la aducción de cadera. Presiona el rodillo sin juntarlas de más."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 80,
        "unit": "°"
      }
    ]
  },
  "Femoral isométrico en step": {
    "general": [
      "Túmbate con los talones en un step y las rodillas algo flexionadas.",
      "Empuja con los talones, eleva un poco la pelvis y aguanta respirando."
    ],
    "hip": [
      "Mantén la pelvis basculada. Si molesta en la tuberosidad isquiática, reduce la altura."
    ],
    "phases": [
      "Talones en el step y pelvis apoyada",
      "Empuja y eleva un poco la pelvis",
      "Aguanta respirando"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "El esfuerzo pasa a la espalda. Cierra las costillas y sube menos."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 45,
        "max": 120,
        "unit": "°"
      }
    ]
  },
  "Femoral con churro o fitball": {
    "general": [
      "Túmbate con los talones sobre el churro o el fitball y eleva un poco la pelvis.",
      "Acerca los talones rodando sin que la espalda se arquee, y vuelve a estirar."
    ],
    "hip": [
      "Mantén la retroversión. Si molesta cerca de la tuberosidad isquiática, reduce el recorrido."
    ],
    "phases": [
      "Piernas alargadas sobre el apoyo",
      "Acerca los talones rodando",
      "Estira despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis pierde la retroversión. Sube menos y controla el rodaje."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 15,
        "max": 130,
        "unit": "°"
      }
    ]
  },
  "Puente con step y rodilla al pecho": {
    "general": [
      "Túmbate con un pie en el step y la otra rodilla acercada al pecho.",
      "Empuja con el pie y sube sin que la pelvis caiga de un lado."
    ],
    "hip": [
      "Es trabajo a una pierna: vigila que la pelvis no caiga y no subas más de la línea recta."
    ],
    "phases": [
      "Un pie en el step y la otra rodilla al pecho",
      "Sube empujando con el pie",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "La pelvis cae de un lado",
        "text": "Se pierde el control del glúteo. Sube menos y mantén la pelvis horizontal."
      }
    ],
    "ranges": [
      {
        "title": "Cadera (0° = en línea)",
        "min": -30,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Puente unilateral con rodilla al pecho": {
    "general": [
      "Túmbate con un pie apoyado y la otra rodilla acercada al pecho.",
      "Empuja con todo el pie y sube sin que la pelvis caiga."
    ],
    "hip": [
      "Es trabajo a una pierna: vigila que la pelvis no caiga y no subas más de la línea recta."
    ],
    "phases": [
      "Un pie apoyado y la otra rodilla al pecho",
      "Sube empujando con el pie",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "La pelvis cae de un lado",
        "text": "Se pierde el control del glúteo. Sube menos y mantén la pelvis horizontal."
      }
    ],
    "ranges": [
      {
        "title": "Cadera (0° = en línea)",
        "min": -30,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Almeja de pie en pared": {
    "general": [
      "De pie junto a la pared, apoya en ella la rodilla de la pierna elevada con un corcho.",
      "Abre y cierra la pelvis sobre la pierna de apoyo, apretando el glúteo."
    ],
    "hip": [
      "Trabajo a una pierna: vigila que la pelvis no caiga y evita abrir hasta notar molestia en la nalga profunda."
    ],
    "phases": [
      "Rodilla contra la pared, peso en la otra pierna",
      "Abre apretando el glúteo de apoyo",
      "Cierra despacio"
    ],
    "errors": [
      {
        "title": "La pelvis cae",
        "text": "El glúteo medio deja de sostenerla. Reduce el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Giro de la pelvis",
        "min": -18,
        "max": 2,
        "unit": "°"
      }
    ]
  },
  "Step up con mancuernas": {
    "general": [
      "Apoya todo un pie en el cajón, con una mancuerna en cada mano.",
      "Sube haciendo la fuerza con el pie de arriba, sin impulso del de abajo, y baja controlando."
    ],
    "hip": [
      "Trabajo a una pierna: vigila que la pelvis no caiga y elige una altura sin molestias."
    ],
    "phases": [
      "Un pie en el cajón",
      "Sube empujando con el pie de arriba",
      "Baja controlando con la pierna de arriba"
    ],
    "errors": [
      {
        "title": "La rodilla cae hacia dentro",
        "text": "Aumenta la aducción de cadera. Baja la carga o el cajón."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 0,
        "max": 105,
        "unit": "°"
      }
    ]
  },
  "Step up con mancuerna contralateral": {
    "general": [
      "Apoya todo un pie en el cajón y sujeta la mancuerna en la mano contraria.",
      "Sube sin inclinarte hacia la mancuerna y baja controlando."
    ],
    "hip": [
      "La carga en un lado exige más al glúteo medio: vigila que la pelvis no caiga."
    ],
    "phases": [
      "Un pie en el cajón",
      "Sube empujando con el pie de arriba",
      "Baja controlando con la pierna de arriba"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco",
        "text": "La pelvis cae y se pierde el trabajo lateral. Reduce el peso."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 0,
        "max": 105,
        "unit": "°"
      }
    ]
  },
  "Step down en cajón": {
    "general": [
      "De pie sobre el cajón, baja la otra pierna muy despacio hasta casi tocar el suelo.",
      "La rodilla de apoyo no debe adelantarse más de la punta del pie: lleva la cadera atrás y vuelve a subir."
    ],
    "hip": [
      "Trabajo a una pierna: empieza con poca altura, baja poco y vigila que la pelvis no caiga."
    ],
    "phases": [
      "De pie sobre el cajón",
      "Baja muy despacio llevando la cadera atrás",
      "Sube empujando con todo el pie"
    ],
    "errors": [
      {
        "title": "La rodilla se adelanta",
        "text": "La carga se va a la rodilla y se pierde el control. Baja menos y lleva la cadera atrás."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 0,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Sentadilla stagg con mancuerna": {
    "general": [
      "Adelanta un pie y deja el otro detrás con el talón elevado, sujetando la mancuerna al pecho.",
      "Baja en vertical con el peso en la pierna de delante y sube."
    ],
    "hip": [
      "Posición escalonada: pie trasero sin extensión forzada. Reduce la separación si notas pinzamiento."
    ],
    "phases": [
      "Pies escalonados, mancuerna al pecho",
      "Baja en vertical",
      "Sube empujando con el pie de delante"
    ],
    "errors": [
      {
        "title": "Atrasar demasiado el pie",
        "text": "Lleva la cadera trasera a la extensión. Acerca el pie."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 0,
        "max": 105,
        "unit": "°"
      }
    ]
  },
  "Peso muerto rumano base stagg": {
    "general": [
      "Retrasa un poco un pie, con el peso en la pierna de delante y las mancuernas abajo.",
      "Lleva la cadera atrás con la espalda neutra y sube apretando el glúteo."
    ],
    "hip": [
      "Bisagra con carga: la guía desaconseja el peso muerto pesado. Usa poca carga y no fuerces el estiramiento."
    ],
    "phases": [
      "Peso en el pie de delante",
      "Lleva la cadera atrás con la espalda neutra",
      "Sube apretando el glúteo"
    ],
    "errors": [
      {
        "title": "Redondear la espalda",
        "text": "Bajas doblando la columna en lugar de la cadera. Reduce el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Peso muerto rumano asimétrico con manos en pelvis": {
    "general": [
      "Retrasa un pelín un pie y coloca las manos en la pelvis para notar si se mueve.",
      "Baja llevando la cadera atrás, sin doblar mucho las rodillas, y sube."
    ],
    "hip": [
      "Es la versión sin carga para aprender el gesto. Mantén la pelvis horizontal y no fuerces el estiramiento."
    ],
    "phases": [
      "Manos en la pelvis, un pie retrasado",
      "Lleva la cadera atrás",
      "Sube apretando el glúteo"
    ],
    "errors": [
      {
        "title": "Redondear la espalda",
        "text": "Bajas doblando la columna en lugar de la cadera. Reduce el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Peso muerto rumano asimétrico con mancuernas": {
    "general": [
      "Retrasa un pelín un pie, con una mancuerna en cada mano.",
      "Baja llevando la cadera atrás, sin doblar mucho las rodillas, y sube."
    ],
    "hip": [
      "Bisagra con carga: la guía desaconseja el peso muerto pesado. Usa poca carga."
    ],
    "phases": [
      "Mancuernas abajo, un pie retrasado",
      "Lleva la cadera atrás",
      "Sube apretando el glúteo"
    ],
    "errors": [
      {
        "title": "Redondear la espalda",
        "text": "Bajas doblando la columna en lugar de la cadera. Reduce el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Rack pull": {
    "general": [
      "Coloca la barra en los soportes, a la altura de las rodillas.",
      "Sube empujando el suelo con la espalda neutra y termina erguido, sin echarte atrás."
    ],
    "hip": [
      "Bisagra con carga alta. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Barra a la altura de las rodillas",
      "Sube empujando el suelo",
      "Baja controlando"
    ],
    "errors": [
      {
        "title": "Echarse atrás al terminar",
        "text": "Lleva la cadera a la hiperextensión y arquea la zona lumbar. Termina en línea recta."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 75,
        "unit": "°"
      }
    ]
  },
  "Bisagra de rodilla con goma": {
    "general": [
      "De rodillas, con la goma sujeta al pecho y el tronco erguido.",
      "Lleva la cadera atrás hacia los talones y vuelve apretando el glúteo, sin carga alta."
    ],
    "hip": [
      "Sin carga alta. No termines echando la cadera adelante de más: detente en la línea recta."
    ],
    "phases": [
      "De rodillas, con el tronco erguido",
      "Lleva la cadera atrás",
      "Vuelve apretando el glúteo"
    ],
    "errors": [
      {
        "title": "Redondear la espalda",
        "text": "Se pierde el gesto de bisagra. Baja menos."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 0,
        "max": 65,
        "unit": "°"
      }
    ]
  },
  "Máquina de aductores": {
    "general": [
      "Siéntate con la espalda apoyada y las piernas abiertas sobre las almohadillas.",
      "Cierra las piernas despacio y vuelve controlando."
    ],
    "hip": [
      "La guía pide evitarla por completo. Se muestra solo como referencia: en el plan se sustituye por los abductores."
    ],
    "phases": [
      "Sentado, con las piernas abiertas",
      "Cierra las piernas despacio",
      "Vuelve controlando"
    ],
    "errors": [
      {
        "title": "Balancear el tronco",
        "text": "El impulso aumenta la carga en la cadera. No es un gesto que debas practicar ahora."
      }
    ],
    "ranges": [
      {
        "title": "Abducción",
        "min": 2,
        "max": 35,
        "unit": "°"
      }
    ]
  },
  "Zancada de glúteo": {
    "general": [
      "Apóyate en una barra, con el tronco inclinado desde el inicio y sin terminar nunca recto.",
      "Baja cogiendo aire, presiona con todo el pie de delante y sube; la rodilla no se va adelante ni atrás."
    ],
    "hip": [
      "Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Tronco inclinado, pierna de delante apoyada",
      "Baja cogiendo aire",
      "Sube presionando con el pie"
    ],
    "errors": [
      {
        "title": "Dar un paso demasiado largo",
        "text": "Aumenta la extensión de la cadera trasera. Es lo que se quiere evitar."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Zancada en polea con step": {
    "general": [
      "Apoya el pie de delante en un step, con el agarre de la polea y el cuerpo vertical.",
      "Baja controlando, sin que la rodilla supere la punta del pie, y sube."
    ],
    "hip": [
      "Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Pie en el step, cuerpo vertical",
      "Baja controlando",
      "Sube llevando la rodilla un poco atrás"
    ],
    "errors": [
      {
        "title": "La rodilla se adelanta",
        "text": "La carga se va a la rodilla y se pierde el control. Baja menos."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Zancada en polea con pie elevado": {
    "general": [
      "Eleva el pie de atrás y sujeta la polea delante.",
      "Baja en vertical con el peso en la pierna de delante y sube."
    ],
    "hip": [
      "Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Pie de atrás elevado",
      "Baja en vertical",
      "Sube empujando con el pie de delante"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 110,
        "unit": "°"
      }
    ]
  },
  "Zancada Conor": {
    "general": [
      "Da una zancada con una mancuerna en cada mano y baja en vertical.",
      "Sube empujando con el pie de delante. El movimiento exacto está pendiente de confirmar con un vídeo específico."
    ],
    "hip": [
      "Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Pies en zancada, mancuernas abajo",
      "Baja en vertical",
      "Sube empujando con el pie de delante"
    ],
    "errors": [
      {
        "title": "La rodilla cae hacia dentro",
        "text": "Aumenta la aducción de cadera, que estrecha el espacio."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Zancada con alcance bajo en polea": {
    "general": [
      "En zancada, inclina el tronco y alarga la mano contraria hacia una polea baja.",
      "Vuelve erguido empujando con el pie de delante."
    ],
    "hip": [
      "Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Zancada, tronco casi erguido",
      "Baja y alcanza la polea",
      "Vuelve empujando con el pie"
    ],
    "errors": [
      {
        "title": "Redondear la espalda",
        "text": "El alcance debe salir de la cadera, no de la columna."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Zancada con taco en pared": {
    "general": [
      "En zancada frente a la pared, presiona un taco con la rodilla de delante.",
      "Baja y sube sin perder la presión."
    ],
    "hip": [
      "Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Zancada, taco contra la pared",
      "Baja manteniendo la presión",
      "Sube despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 10,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Zancada Sissy": {
    "general": [
      "En zancada, deja que la rodilla de delante avance con el talón elevado y el tronco atrás.",
      "Baja poco y sube controlando. El movimiento exacto está pendiente de confirmar con un vídeo específico."
    ],
    "hip": [
      "Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Zancada, talón de delante algo elevado",
      "Baja llevando la rodilla adelante",
      "Sube controlando"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 20,
        "max": 110,
        "unit": "°"
      }
    ]
  },
  "Puente de glúteo bilateral en máquina": {
    "general": [
      "Apoya la espalda alta en la almohadilla y los pies en el suelo, con el rodillo sobre la pelvis.",
      "Sube hasta alinear rodillas, caderas y hombros, y baja despacio."
    ],
    "hip": [
      "Sin hiperextender al final: es la posición que debes evitar. Mantén las rodillas separadas."
    ],
    "phases": [
      "Espalda apoyada, pelvis abajo",
      "Sube hasta la línea recta",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Subir de más",
        "text": "Lleva la cadera a la extensión y arquea la zona lumbar. Detente en la línea recta."
      }
    ],
    "ranges": [
      {
        "title": "Cadera (0° = en línea)",
        "min": -12,
        "max": 40,
        "unit": "°"
      }
    ]
  },
  "Press alterno en banco inclinado": {
    "general": [
      "Apoya la espalda en el banco con las mancuernas arriba.",
      "Baja una mientras la otra se queda arriba, con el codo a unos 45°, y cambia."
    ],
    "hip": [
      "Sin relación directa con la cadera. Mantén la pelvis quieta y sin arquear."
    ],
    "phases": [
      "Mancuernas arriba",
      "Baja una mano y sube",
      "Las dos arriba de nuevo",
      "Baja la otra mano y sube"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Floor press": {
    "general": [
      "Túmbate con las rodillas flexionadas y las mancuernas arriba, con los pies apoyados para quitar el hueco lumbar.",
      "Baja hasta tocar el suelo con los codos, con la muñeca sobre el codo, y empuja."
    ],
    "hip": [
      "Sin relación directa con la cadera. Mantén la zona lumbar cerca del suelo."
    ],
    "phases": [
      "Mancuernas arriba, rodillas flexionadas",
      "Baja hasta apoyar los codos",
      "Empuja mientras exhalas"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Floor press unilateral": {
    "general": [
      "Túmbate con las rodillas flexionadas y una mancuerna arriba, sin alternar.",
      "Baja hasta apoyar el codo, con la muñeca sobre él, y empuja sin girar el tronco."
    ],
    "hip": [
      "Sin relación directa con la cadera. No dejes que la pelvis gire con la carga."
    ],
    "phases": [
      "Mancuerna arriba, rodillas flexionadas",
      "Baja hasta apoyar el codo",
      "Empuja mientras exhalas"
    ],
    "errors": [
      {
        "title": "El tronco gira",
        "text": "Se pierde la estabilidad y la pelvis se mueve. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Floor press alterno con pies en banco": {
    "general": [
      "Túmbate con los pies en un banco, para quitar el hueco lumbar, y las mancuernas arriba.",
      "Baja una mientras la otra sigue arriba, sube y cambia."
    ],
    "hip": [
      "Con los pies en alto se evita el arco lumbar y la extensión de cadera."
    ],
    "phases": [
      "Mancuernas arriba, pies en el banco",
      "Baja una mano y sube",
      "Las dos arriba de nuevo",
      "Baja la otra mano y sube"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 90,
        "unit": "°"
      }
    ]
  },
  "Press de hombro con mancuernas en banco a 60º": {
    "general": [
      "Apoya la espalda en el banco a 60º, con las mancuernas a la altura de los hombros.",
      "Empuja hacia arriba sin arquear y baja despacio."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Mancuernas a la altura de los hombros",
      "Empuja hacia arriba mientras exhalas",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Press de hombro con mancuerna, pies en pared": {
    "general": [
      "Siéntate con los pies empujando la pared y una mancuerna a la altura del hombro.",
      "Empuja hacia arriba manteniendo la presión de los pies, y baja despacio."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Pies en la pared, mancuerna al hombro",
      "Empuja hacia arriba",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Inclinar y arquear el tronco",
        "text": "Compensa con la espalda. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Press en polea unilateral": {
    "general": [
      "De espaldas a la polea, con los pies paralelos y la mano a la altura del pecho.",
      "Empuja hacia delante sin girar el tronco y vuelve despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Mano a la altura del pecho",
      "Empuja hacia delante",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Contractora de pecho": {
    "general": [
      "Siéntate con la espalda apoyada y los brazos abiertos.",
      "Junta los brazos delante sin encoger los hombros y vuelve despacio."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Brazos abiertos",
      "Junta los brazos delante",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Abducción del hombro",
        "min": 0,
        "max": 85,
        "unit": "°"
      }
    ]
  },
  "Flexiones con taco en la mano": {
    "general": [
      "Apoya una mano sobre un taco y el cuerpo en línea.",
      "Baja controlando y empuja sin que la pelvis se hunda."
    ],
    "hip": [
      "Mantén la pelvis alineada, sin hundirla, porque acerca la cadera a la extensión."
    ],
    "phases": [
      "Brazos estirados y cuerpo en línea",
      "Baja controlando",
      "Empuja mientras exhalas"
    ],
    "errors": [
      {
        "title": "La pelvis se hunde",
        "text": "Arquea la zona lumbar y extiende la cadera. Apoya las rodillas si lo necesitas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Flexiones tocando la mano": {
    "general": [
      "Desde la flexión, sube y toca una mano con la otra.",
      "Mantén la pelvis quieta mientras una mano está en el aire."
    ],
    "hip": [
      "Mantén la pelvis estable: si rota, reduce la exigencia apoyando las rodillas."
    ],
    "phases": [
      "Brazos estirados y cuerpo en línea",
      "Baja y sube",
      "Vuelve a la posición alta",
      "Toca una mano con la otra"
    ],
    "errors": [
      {
        "title": "La pelvis rota",
        "text": "Se pierde la estabilidad. Separa más los pies o apoya las rodillas."
      }
    ],
    "ranges": [
      {
        "title": "Giro de la pelvis",
        "min": -7,
        "max": 3,
        "unit": "°"
      }
    ]
  },
  "Plancha de cuatro puntos con serrato en declinado": {
    "general": [
      "Apoya las manos en el suelo y los pies elevados, con el cuerpo en línea.",
      "Empuja el suelo separando las escápulas, sin mover los codos."
    ],
    "hip": [
      "Mantén la flexión de cadera cómoda y no dejes que la pelvis se hunda."
    ],
    "phases": [
      "Manos en el suelo, pies elevados",
      "Empuja el suelo separando las escápulas",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "La pelvis se hunde",
        "text": "Arquea la zona lumbar. Baja la altura de los pies."
      }
    ],
    "ranges": [
      {
        "title": "Curva de la espalda",
        "min": -2,
        "max": 10,
        "unit": "°"
      }
    ]
  },
  "Serrato en pared en caballero unilateral": {
    "general": [
      "De rodillas sobre una pierna, frente a la pared, con la mano apoyada.",
      "Desliza la mano hacia arriba empujando la pared, con la escápula adelante."
    ],
    "hip": [
      "Sin extensión forzada de la pierna de atrás: si molesta, acorta la posición o ponte de pie."
    ],
    "phases": [
      "En caballero, con la mano en la pared",
      "Desliza la mano hacia arriba empujando",
      "Vuelve sin dejar de empujar"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de hombro",
        "min": 75,
        "max": 135,
        "unit": "°"
      }
    ]
  },
  "Arquero en pared": {
    "general": [
      "Apoya las dos manos en la pared, con el cuerpo inclinado.",
      "Flexiona un codo mientras el otro brazo sigue estirado, sin arquear."
    ],
    "hip": [
      "Sin arquear la zona lumbar. Mantén los pies a la anchura de las caderas."
    ],
    "phases": [
      "Manos en la pared, brazos estirados",
      "Flexiona un codo y acércate",
      "Vuelve empujando"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 110,
        "unit": "°"
      }
    ]
  },
  "Remo en máquina alterno": {
    "general": [
      "Siéntate con el tronco erguido y los brazos alargados.",
      "Tira de un agarre y luego del otro, sin girar el tronco."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Brazos alargados",
      "Tira con un brazo",
      "Alarga de nuevo",
      "Tira con el otro brazo"
    ],
    "errors": [
      {
        "title": "El tronco gira",
        "text": "Se pierde el trabajo de espalda y se mueve la pelvis. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Remo unilateral en polea o máquina": {
    "general": [
      "Siéntate erguido y deja que el brazo se alargue delante.",
      "Tira llevando el codo atrás, sin girar el tronco."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Brazo alargado",
      "Tira llevando el codo atrás",
      "Vuelve alargando el brazo"
    ],
    "errors": [
      {
        "title": "El tronco gira",
        "text": "Se pierde el trabajo de espalda y se mueve la pelvis. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Remo sentado en polea de lado": {
    "general": [
      "Siéntate de lado a la polea, algo girado hasta estar cómodo, con la polea algo por encima del hombro.",
      "Deja que se estire todo el lado al alargar el brazo y tira sin inclinar el cuerpo."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Brazo alargado hacia la polea",
      "Tira sin inclinar el cuerpo",
      "Alarga dejando que se estire el lado"
    ],
    "errors": [
      {
        "title": "Inclinar el cuerpo",
        "text": "Comprime un lado del tronco. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 110,
        "unit": "°"
      }
    ]
  },
  "Remo lateral con empuje de mano en banco": {
    "general": [
      "De lado a la polea, apoya la otra mano en el banco y empuja como si quisieras separarte de él.",
      "Tira con el brazo abierto, sin perder el empuje, y vuelve despacio."
    ],
    "hip": [
      "Mantén la pelvis estable y las rodillas algo flexionadas."
    ],
    "phases": [
      "Mano empujando el banco, brazo alargado",
      "Tira sin dejar de empujar",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "El tronco gira",
        "text": "Se pierde el empuje y se mueve la pelvis. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 105,
        "unit": "°"
      }
    ]
  },
  "Remo A unilateral en polea": {
    "general": [
      "De pie, con las rodillas algo flexionadas y el tronco un poco inclinado.",
      "Tira llevando el codo atrás sin girar el tronco. El movimiento exacto está pendiente de confirmar con un vídeo específico."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Brazo alargado",
      "Tira llevando el codo atrás",
      "Vuelve alargando"
    ],
    "errors": [
      {
        "title": "El tronco gira",
        "text": "Se pierde el trabajo de espalda y se mueve la pelvis. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 105,
        "unit": "°"
      }
    ]
  },
  "Pull remo unilateral": {
    "general": [
      "Siéntate y alarga el brazo arriba y delante.",
      "Tira en diagonal hacia la costilla. El movimiento exacto está pendiente de confirmar con un vídeo específico."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Brazo alargado arriba",
      "Tira hacia la costilla",
      "Vuelve alargando"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Remo alterno en prono": {
    "general": [
      "Apoya el pecho en un banco inclinado, con los pies en el suelo y las mancuernas abajo.",
      "Tira de una y luego de la otra, sin despegar el pecho."
    ],
    "hip": [
      "En prono, sin extender la cadera. La inclinación del banco la mantiene flexionada."
    ],
    "phases": [
      "Pecho apoyado, mancuernas abajo",
      "Tira con un brazo",
      "Baja",
      "Tira con el otro brazo"
    ],
    "errors": [
      {
        "title": "Levantar el pecho",
        "text": "Arquea la espalda. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Monkey row alterno": {
    "general": [
      "Con los pies separados, lleva la cadera atrás y sujeta las mancuernas a la altura de las rodillas.",
      "Cuando una sube, la otra baja, sin girar el tronco."
    ],
    "hip": [
      "No pierdas la alineación lumbar. Mantén las rodillas abiertas y no bajes más de lo que controles."
    ],
    "phases": [
      "Cadera atrás, mancuernas abajo",
      "Sube una mancuerna",
      "Las dos abajo",
      "Sube la otra mancuerna"
    ],
    "errors": [
      {
        "title": "Redondear y girar el tronco",
        "text": "Se pierde la alineación lumbar. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 100,
        "unit": "°"
      }
    ]
  },
  "Pull down en caballero unilateral": {
    "general": [
      "De rodillas sobre una pierna, alarga el brazo hacia la polea alta.",
      "Tira llevando el codo hacia la costilla, sin arquear."
    ],
    "hip": [
      "Sin extensión forzada de la pierna de atrás: si molesta, hazlo sentado."
    ],
    "phases": [
      "En caballero, brazo alargado",
      "Tira con el codo a la costilla",
      "Sube alargando"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de hombro",
        "min": 40,
        "max": 155,
        "unit": "°"
      }
    ]
  },
  "Jalón para bíceps": {
    "general": [
      "Siéntate con los muslos sujetos y agarra la barra con las palmas hacia ti.",
      "Tira flexionando bien los codos, sin echarte atrás, y sube despacio."
    ],
    "hip": [
      "Sin arquear la zona lumbar. Ajusta el asiento para que los pies apoyen."
    ],
    "phases": [
      "Brazos arriba",
      "Tira flexionando los codos",
      "Sube despacio"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco atrás",
        "text": "Arquea la zona lumbar. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 130,
        "unit": "°"
      }
    ]
  },
  "Pull over": {
    "general": [
      "Túmbate en el banco con la mancuerna sobre el pecho y los codos algo flexionados.",
      "Llévala hacia atrás sin perder las costillas cerradas y vuelve."
    ],
    "hip": [
      "Cierra las costillas: si se abren, arquea la zona lumbar y la pelvis se mueve."
    ],
    "phases": [
      "Mancuerna sobre el pecho",
      "Llévala atrás cerrando las costillas",
      "Vuelve mientras exhalas"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "El recorrido sale de la espalda. Baja menos los brazos."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de hombro",
        "min": 85,
        "max": 170,
        "unit": "°"
      }
    ]
  },
  "Pull efer": {
    "general": [
      "Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.",
      "De pie frente a una polea, tira hacia la cara abriendo los codos, sin arquear."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Brazos alargados",
      "Tira hacia la cara abriendo los codos",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Elevaciones laterales unilaterales": {
    "general": [
      "De pie, con una mancuerna y los pies paralelos.",
      "Sube el brazo hasta la altura del hombro y baja despacio, sin subir el hombro."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Brazo abajo",
      "Sube hasta la altura del hombro",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco",
        "text": "Traslada la carga a la cadera de un lado. Reduce el peso."
      }
    ],
    "ranges": [
      {
        "title": "Abducción del hombro",
        "min": 5,
        "max": 85,
        "unit": "°"
      }
    ]
  },
  "Elevaciones en polea por detrás": {
    "general": [
      "Coloca la polea baja detrás del cuerpo, con los pies paralelos.",
      "Sube el brazo hasta la altura del hombro y baja despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Brazo abajo, cable por detrás",
      "Sube hasta la altura del hombro",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco",
        "text": "Traslada la carga a la cadera de un lado. Reduce el peso."
      }
    ],
    "ranges": [
      {
        "title": "Abducción del hombro",
        "min": 5,
        "max": 85,
        "unit": "°"
      }
    ]
  },
  "Bíceps bayesian": {
    "general": [
      "De espaldas a la polea baja, con los pies paralelos y el brazo algo por detrás del cuerpo.",
      "Flexiona el codo sin adelantar el brazo y baja despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Brazo atrás, codo estirado",
      "Flexiona el codo",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Adelantar el brazo",
        "text": "Se pierde el estiramiento y se ayuda con el tronco. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Bíceps a 90º en banco": {
    "general": [
      "Siéntate con el brazo a 90° delante y el cable al frente.",
      "Flexiona el codo sin bajar el brazo y estira despacio."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Brazo a 90°, codo estirado",
      "Flexiona el codo",
      "Estira despacio"
    ],
    "errors": [
      {
        "title": "Bajar el brazo",
        "text": "Se pierde la posición y se ayuda con el cuerpo. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Bíceps concentrado en banco": {
    "general": [
      "Siéntate con el tronco algo inclinado y el codo cerca del muslo.",
      "Flexiona el codo sin moverlo y baja despacio."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática. Sin abrir de más las piernas."
    ],
    "phases": [
      "Codo cerca del muslo",
      "Flexiona el codo",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Levantar el tronco",
        "text": "Ayudas con la espalda. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 130,
        "unit": "°"
      }
    ]
  },
  "Bíceps en anteversión": {
    "general": [
      "De pie, con el brazo algo adelantado y los pies paralelos.",
      "Flexiona el codo sin mover el brazo y baja despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Brazo adelantado, codo estirado",
      "Flexiona el codo",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 130,
        "unit": "°"
      }
    ]
  },
  "Bíceps squat": {
    "general": [
      "Baja a una sentadilla cómoda y aguanta.",
      "Flexiona los codos sin cambiar la altura de la cadera y baja despacio."
    ],
    "hip": [
      "Combina sentadilla: ajusta la profundidad y mantén las rodillas abiertas."
    ],
    "phases": [
      "En sentadilla, brazos estirados",
      "Flexiona los codos",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Bajar demasiado",
        "text": "La flexión profunda puede reproducir el pinzamiento. Súbete."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 130,
        "unit": "°"
      }
    ]
  },
  "Curl de bíceps sentado con respiración abajo": {
    "general": [
      "Siéntate con la espalda apoyada y las mancuernas abajo.",
      "Haz el curl sin mover los codos y, abajo, respira soltando todo el aire antes de la siguiente."
    ],
    "hip": [
      "Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática."
    ],
    "phases": [
      "Brazos abajo, respira",
      "Flexiona los codos",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 125,
        "unit": "°"
      }
    ]
  },
  "Tríceps en polea alta desde detrás": {
    "general": [
      "De espaldas a la polea alta, con el brazo arriba y el tronco algo inclinado.",
      "Extiende el codo sin moverlo y vuelve despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Brazo arriba, codo flexionado",
      "Extiende el codo",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 120,
        "unit": "°"
      }
    ]
  },
  "Tríceps de lado": {
    "general": [
      "De lado a la polea alta, con los pies paralelos.",
      "Extiende el codo sin separar el brazo del cuerpo y vuelve despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Codo flexionado",
      "Extiende el codo",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Inclinar el tronco",
        "text": "Traslada la carga a la cadera de un lado. Reduce el peso."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 120,
        "unit": "°"
      }
    ]
  },
  "Tríceps plano en cuatro puntos unilateral": {
    "general": [
      "En cuatro apoyos, con un brazo fuera del suelo y el codo fijo.",
      "Extiende el codo sin que se mueva el hombro, con la espalda algo redondeada."
    ],
    "hip": [
      "La posición mantiene la cadera flexionada. Mantén las rodillas bajo las caderas."
    ],
    "phases": [
      "En cuatro apoyos, codo flexionado",
      "Extiende el codo",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Mover el codo",
        "text": "El hombro hace el trabajo. Mantén el codo fijo."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Pata de tríceps en polea": {
    "general": [
      "Inclina el tronco apoyando una mano en el banco, con el brazo pegado al cuerpo.",
      "Extiende el codo hacia atrás sin mover el brazo y vuelve despacio."
    ],
    "hip": [
      "Mantén los pies paralelos y las rodillas algo flexionadas. Sin dar un paso atrás."
    ],
    "phases": [
      "Brazo pegado, codo flexionado",
      "Extiende el codo hacia atrás",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Mover el brazo",
        "text": "Se pierde el trabajo del tríceps. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 105,
        "unit": "°"
      }
    ]
  },
  "Francés en cuatro puntos con polea": {
    "general": [
      "En cuatro apoyos, con la espalda algo redondeada y el codo fijo cerca de la oreja.",
      "Extiende el codo sin moverlo y exhala al terminar."
    ],
    "hip": [
      "La posición mantiene la cadera flexionada. La rodilla apoyada debe quedar cómoda: usa una almohadilla si lo necesitas."
    ],
    "phases": [
      "Codo cerca de la oreja, flexionado",
      "Extiende el codo",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Bajar el codo",
        "text": "Se pierde la posición y se arquea la espalda. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de codo",
        "min": 0,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Pallof de pie": {
    "general": [
      "De lado a la polea, con los pies paralelos y las manos en el pecho.",
      "Lleva las manos al frente sin dejar que el tronco gire y vuelve."
    ],
    "hip": [
      "Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis."
    ],
    "phases": [
      "Manos en el pecho",
      "Lleva las manos al frente",
      "Vuelve al pecho"
    ],
    "errors": [
      {
        "title": "El tronco gira",
        "text": "Se pierde el trabajo antirrotación. Reduce la carga."
      }
    ],
    "ranges": [
      {
        "title": "Giro del tronco",
        "min": -3,
        "max": 3,
        "unit": "°"
      }
    ]
  },
  "Bicho muerto rana con fitball": {
    "general": [
      "Túmbate con los pies juntos y las rodillas abiertas, y las manos contra un fitball.",
      "Alarga las piernas sin que la zona lumbar se despegue y vuelve."
    ],
    "hip": [
      "La rotación externa en rana puede molestar: abre menos o cambia al bicho muerto alterno."
    ],
    "phases": [
      "Pies juntos, rodillas abiertas",
      "Alarga las piernas",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis bascula y la cadera se extiende de más. Alarga menos."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de cadera",
        "min": 38,
        "max": 85,
        "unit": "°"
      }
    ]
  },
  "Crunch 90/90 rodando churro": {
    "general": [
      "Túmbate con las piernas a 90° y las manos sobre un churro apoyado en los muslos.",
      "Exhala y sube poco, rodando el churro, cerrando las costillas."
    ],
    "hip": [
      "Se mantiene en flexión de cadera. Lo importante es cerrar las costillas, no subir mucho."
    ],
    "phases": [
      "Piernas a 90°, manos en el churro",
      "Sube poco mientras exhalas",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Tirar del cuello",
        "text": "El esfuerzo se va al cuello. Sube menos y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión del tronco",
        "min": 0,
        "max": 24,
        "unit": "°"
      }
    ]
  },
  "Crunch con goma y piernas estiradas": {
    "general": [
      "Túmbate con las piernas estiradas y la goma en las manos, anclada por detrás.",
      "Exhala y sube poco manteniendo la zona lumbar en el suelo."
    ],
    "hip": [
      "Mantén la retroversión: con las piernas estiradas la zona lumbar tiende a arquearse. Flexiona las rodillas si ocurre."
    ],
    "phases": [
      "Piernas estiradas, goma en las manos",
      "Sube poco mientras exhalas",
      "Baja despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "Se pierde la retroversión. Flexiona un poco las rodillas."
      }
    ],
    "ranges": [
      {
        "title": "Flexión del tronco",
        "min": 0,
        "max": 24,
        "unit": "°"
      }
    ]
  },
  "Plancha lateral con arco lumbar": {
    "general": [
      "Apoya el antebrazo bajo el hombro y los pies, y eleva la pelvis.",
      "Arriba, respira y da intensidad con la exhalación, sin hundirte."
    ],
    "hip": [
      "Carga en el lado de apoyo: vigila la molestia. Si aparece, flexiona las rodillas."
    ],
    "phases": [
      "Antebrazo bajo el hombro",
      "Eleva la pelvis",
      "Aguanta respirando",
      "Baja con control"
    ],
    "errors": [
      {
        "title": "La pelvis se hunde",
        "text": "El tronco deja de sostenerse. Empuja el suelo y sube."
      }
    ],
    "ranges": [
      {
        "title": "Caída de la cadera",
        "min": -8,
        "max": 2,
        "unit": "°"
      }
    ]
  },
  "Plancha de cuatro puntos tocando hombro": {
    "general": [
      "En cuatro apoyos, despega las rodillas unos centímetros.",
      "Toca un hombro con la mano contraria sin que la pelvis se mueva, y cambia."
    ],
    "hip": [
      "Las rodillas bajo las caderas mantienen la flexión. Vuelve a apoyarlas si la pelvis rota."
    ],
    "phases": [
      "Rodillas despegadas",
      "Toca un hombro",
      "Vuelve a apoyar",
      "Toca el otro hombro"
    ],
    "errors": [
      {
        "title": "La pelvis rota",
        "text": "Se pierde la estabilidad. Apoya las rodillas o ve más lento."
      }
    ],
    "ranges": [
      {
        "title": "Giro de la pelvis",
        "min": -3,
        "max": 3,
        "unit": "°"
      }
    ]
  },
  "Plancha de cuatro puntos con estiramiento de isquios": {
    "general": [
      "Desde cuatro apoyos con las rodillas despegadas, sube la pelvis y estira las piernas.",
      "Vuelve a la posición inicial controlando."
    ],
    "hip": [
      "La guía desaconseja estirar los isquiotibiales de forma agresiva. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta."
    ],
    "phases": [
      "Rodillas despegadas",
      "Sube la pelvis estirando las piernas",
      "Vuelve controlando"
    ],
    "errors": [
      {
        "title": "Bloquear las rodillas",
        "text": "Tensa el isquiotibial y el nervio ciático, justo lo que la guía pide evitar."
      }
    ],
    "ranges": [
      {
        "title": "Flexión de rodilla",
        "min": 5,
        "max": 115,
        "unit": "°"
      }
    ]
  },
  "Chop hacia abajo": {
    "general": [
      "De lado a la polea alta, con los pies paralelos.",
      "Baja los brazos en diagonal, con el giro en el tórax y la pelvis quieta."
    ],
    "hip": [
      "Sin girar la pelvis: la rotación de cadera puede reproducir las molestias."
    ],
    "phases": [
      "Brazos arriba, hacia la polea",
      "Baja en diagonal",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "La pelvis gira",
        "text": "La rotación pasa a la cadera. Reduce la carga y el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Giro de la pelvis",
        "min": -3,
        "max": 3,
        "unit": "°"
      }
    ]
  },
  "Lift bombero": {
    "general": [
      "Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.",
      "De rodillas sobre una pierna, de lado a una polea baja, sube los brazos en diagonal sin girar la pelvis."
    ],
    "hip": [
      "Sin extensión forzada de la pierna de atrás: si molesta, hazlo de pie con los pies paralelos."
    ],
    "phases": [
      "Brazos abajo, hacia la polea",
      "Sube en diagonal",
      "Vuelve despacio"
    ],
    "errors": [
      {
        "title": "Arquear la zona lumbar",
        "text": "La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas."
      }
    ],
    "ranges": [
      {
        "title": "Giro del tronco",
        "min": -12,
        "max": 12,
        "unit": "°"
      }
    ]
  },
  "Rotación inversa con fitball y mancuerna": {
    "general": [
      "Túmbate con las piernas a 90° sobre un fitball y una mancuerna arriba.",
      "Lleva las piernas a un lado y al otro, sin despegar la espalda alta."
    ],
    "hip": [
      "Controla la rotación de cadera: mueve poco y evita el lado que reproduzca los síntomas."
    ],
    "phases": [
      "Piernas al centro",
      "Lleva las piernas a un lado",
      "Vuelve al centro",
      "Lleva las piernas al otro lado"
    ],
    "errors": [
      {
        "title": "Forzar la rotación",
        "text": "La pelvis se levanta y se carga la cadera. Reduce el recorrido."
      }
    ],
    "ranges": [
      {
        "title": "Giro de las piernas",
        "min": -20,
        "max": 20,
        "unit": "°"
      }
    ]
  }
};
