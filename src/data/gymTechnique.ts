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
  }
};
