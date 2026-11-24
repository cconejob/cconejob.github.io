window.I18N = window.I18N || {};
window.I18N.es = {
  meta: { title: "Carlos Conejo Barceló · Automática, control y robótica" },
  ui: {
    nav: { inicio: "Inicio", docencia: "Docencia", investigacion: "Investigación", profesional: "Profesional", formacion: "Formación" },
    lang: "Idioma", close: "Cerrar", hover: "Pasa el cursor o toca los puntos.", all: "Todo",
    figure: "Figura", more: "Ver más", less: "Ver menos", footer: "Carlos Conejo Barceló · Departamento ESAII · Universitat Politècnica de Catalunya",
    areas: { docencia: "Docencia", investigacion: "Investigación", profesional: "Profesional", formacion: "Formación" },
    back: "Volver al inicio", explore: "Explorar"
  },

  media: {
    "renault-supervisor": "Supervisor de seguridad funcional con Behavior Trees en una prueba real con prototipos de Renault Group.",
    "renault-pedestrian": "Prueba en modo autónomo: LiDAR, trayectoria y corredor de seguridad durante un paso de peatones.",
    "renault-reach": "Control predictivo zonotópico (NZPC): conjuntos alcanzables del vehículo a lo largo del horizonte de predicción.",
    "epfl-loomo-rfo": "Asistente robótico basado en Segway Loomo siguiendo a un paciente con andador.",
    "epfl-skeleton-1": "Estimación de la postura del paciente durante la marcha con andador.",
    "epfl-skeleton-2": "Seguimiento del paciente a partir de su esqueleto estimado, en exteriores.",
    "epfl-loomo-obstacles": "Pruebas de seguimiento del Loomo con obstáculos.",
    "epfl-loomo-free": "Pruebas de seguimiento del Loomo sin obstáculos.",
    "epfl-loomos": "Robots Segway Loomo preparados para las pruebas (Lausana, 2020).",
    "pulsar-stand": "Stand de PULSAR HRI: actuadores, motores y ecosistema.",
    "cvc-egolf-pirineo": "Prototipo autónomo Volkswagen e-Golf del CVC en el Pirineo (2022).",
    "cvc-egolf-fornet": "El e-Golf autónomo del CVC junto al Refugi del Fornet, en el Pirineo.",
    "cvc-egolf-circuito": "El e-Golf preparado para las pruebas en circuito cerrado.",
    "cvc-egolf-night": "Pruebas nocturnas del e-Golf autónomo (2022).",
    "fs-driverless-2019": "Con el monoplaza Driverless UPC (BCN e-Motorsport) en Formula Student (2019).",
    "fs-driverless-run": "El monoplaza en pista durante la competición Formula Student (2019).",
    "ifac2026-backdrop": "En el 23.º IFAC World Congress (Busan, 2026).",
    "pulsar-booth-products": "Con los actuadores, motores y la electrónica de control de PULSAR HRI en el IFAC World Congress (Busan, 2026).",
    "pulsar-booth-visit-2": "Atendiendo a visitantes en el stand de PULSAR HRI (Busan, 2026).",
    "pulsar-booth-visit-1": "Explicando el ecosistema de actuadores de PULSAR HRI a un visitante (Busan, 2026).",
    "pulsar-booth-carlos": "En el stand de PULSAR HRI, en la exposición del IFAC World Congress (Busan, 2026).",
    "grado-proyecto-robot": "Proyecto I: mecanismo accionado por servomotores y controlado con Arduino.",
    "grado-loclock": "Proyecto II: primer montaje del Loclock con Arduino, reloj de tiempo real y pantalla LCD (2016).",
    "fs-montserrat": "El monoplaza en una sesión de pruebas con conos, con Montserrat al fondo.",
    "fs-sunset": "El monoplaza al atardecer, con el LiDAR en el morro.",
    "fs-team-track": "El equipo celebrando con el monoplaza en una competición.",
    "fs-team-studio": "Foto oficial del equipo Driverless UPC con el monoplaza.",
    "fs-team-montmelo": "El equipo en el Circuit de Barcelona-Catalunya, en la Formula Student Spain.",
    "grado-tfg": "TFG: dos robots circulando en convoy por el circuito del laboratorio.",
    "master-fs-vsv": "Formula Student: demostración del vehículo en modo autónomo, con la nube de puntos del LiDAR y los conos detectados.",
    "iv2026-poster": "Póster en el IEEE Intelligent Vehicles Symposium 2026 (Detroit).",
    "ifac2026-title": "Ponencia oral en el 23.º IFAC World Congress (Busan, 2026).",
    "ifac2026-talk": "Durante la presentación en el IFAC World Congress (Busan, 2026)."
  },

  /* ---------------- INICIO ---------------- */
  home: {
    eyebrow: "Doctor en Automática, Robótica y Visión",
    role: "Profesor Lector · Departamento de Ingeniería de Sistemas, Automática e Informática Industrial (ESAII) · Universitat Politècnica de Catalunya",
    tagline: "Control, seguridad funcional y robótica: de la teoría a los sistemas reales, y de los sistemas reales al aula.",
    bio: [
      "Soy ingeniero industrial especializado en robótica y doctor en Automática, Robótica y Visión por la UPC. Hice el doctorado industrial con Renault Group y el Institut de Robòtica i Informàtica Industrial (CSIC-UPC), y obtuve la calificación de Excelente Cum Laude con mención internacional e industrial.",
      "Desde septiembre de 2026 soy profesor lector en la ESEIAAT. Mi trabajo une tres ámbitos que se alimentan entre sí: la <strong>docencia</strong> en control y robótica, la <strong>investigación</strong> en seguridad de sistemas autónomos y la <strong>experiencia profesional</strong> llevando algoritmos a plataformas físicas reales."
    ],
    branchesTitle: "Cuatro ámbitos, un mismo hilo",
    branches: {
      docencia: { title: "Docencia", desc: "Control automático y robótica en la UPC desde 2022, con un enfoque experimental, participativo y basado en el feedback.", stats: [["4", "asignaturas"], ["5", "cursos académicos"], ["4,5–4,9", "valoración del alumnado (sobre 5)"]] },
      investigacion: { title: "Investigación", desc: "Seguridad funcional, diagnóstico de fallos, análisis de alcanzabilidad y control predictivo para sistemas autónomos.", stats: [["9", "publicaciones seleccionadas"], ["2", "patentes"], ["5", "proyectos"]] },
      profesional: { title: "Profesional", desc: "Más de cinco años de I+D en robótica y vehículos autónomos, en centros de investigación y en la industria.", stats: [["5+", "años de I+D"], ["5", "plataformas reales"], ["6", "centros y empresas"]] },
      formacion: { title: "Formación", desc: "Grado y máster en Ingeniería Industrial y doctorado en Automática, Robótica y Visión, siempre con proyectos sobre sistemas reales.", stats: [["3", "titulaciones"], ["2", "intercambios"], ["5", "proyectos"]] }
    },
    tlTitle: "Trayectoria",
    tlNote: "Filtra por ámbito:",
    tl: [
      { y: "2026–", b: ["docencia", "investigacion", "profesional"], t: "Profesor Lector", w: "UPC · ESEIAAT · Departamento ESAII" },
      { y: "2025–26", b: ["profesional", "investigacion"], t: "Robotics Researcher", w: "ARQUIMEA Research Center & PULSAR HRI · Tenerife" },
      { y: "2022–25", b: ["profesional", "investigacion"], t: "Robotics Researcher · doctorado industrial", w: "Renault Group & IRI (UPC-CSIC) · estancias en la TUM (Múnich y Heilbronn)" },
      { y: "2022–25", b: ["formacion"], t: "Doctorado en Automática, Robótica y Visión", w: "UPC-CSIC · Excelente Cum Laude · mención internacional e industrial" },
      { y: "2022–25", b: ["docencia", "profesional"], t: "Profesor asociado", w: "UPC · EEBE · Regulació Automàtica y Tècniques de Control" },
      { y: "2021–22", b: ["profesional", "investigacion"], t: "Motion Control Engineer", w: "Computer Vision Center (CVC-UAB) · Barcelona" },
      { y: "2020–21", b: ["profesional", "investigacion"], t: "Research Assistant · robótica móvil para rehabilitación", w: "EPFL-VITA & NeuroRestore (CHUV) · Lausana" },
      { y: "2018–21", b: ["formacion"], t: "Máster en Ingeniería Industrial · Automática y Robótica", w: "UPC-ETSEIB · intercambio en la EPFL (Lausana)" },
      { y: "2018–19", b: ["formacion", "profesional"], t: "Chief of Estimation & Control", w: "BCN e-Motorsport · Formula Student Driverless" },
      { y: "2013–18", b: ["formacion"], t: "Grado en Ingeniería en Tecnologías Industriales", w: "UPC-ETSEIB · intercambio en el KIT (Karlsruhe)" }
    ],
    galleryTitle: "En imágenes",
    galleryNote: "Pulsa cualquier foto o vídeo para ampliarlo.",
    contactTitle: "Contacto",
    contactP: "Para colaboraciones docentes, de investigación o de transferencia:"
  },

  /* ---------------- DOCENCIA ---------------- */
  teach: {
    eyebrow: "Portfolio docente · 2022 – 2026",
    title: "Docencia",
    lead: "Formar ingenieros capaces de comprender los fundamentos, cuestionar resultados y aplicar sus conocimientos con autonomía y criterio técnico.",
    stats: [["5", "cursos de docencia universitaria"], ["4", "asignaturas de grado"], ["2", "escuelas de la UPC (EEBE y ESEIAAT)"], ["+20", "estudiantes tutorizados en prácticas externas"]],
    s1: {
      short: "Trayectoria", title: "Presentación y trayectoria docente",
      p: [
        "Mi vocación docente nace de la pasión por la ingeniería de control, la automática y la robótica. Una de las cosas que más me satisfacen como profesor es ver cómo los estudiantes desarrollan su curiosidad, empiezan a hacer preguntas y descubren para qué sirven conocimientos que al principio les parecían abstractos.",
        "No busco solo que aprueben una asignatura. Quiero despertar su interés por la disciplina y darles herramientas para su futuro profesional. Me gustaría que algunos llegaran a profundizar tanto que superaran a quienes les hemos enseñado."
      ],
      card: { tag: "Docencia · investigación · industria", title: "Ejemplos reales en el aula", p: "Mi experiencia investigadora y profesional me ha enseñado que los estudiantes no solo deben aprender los fundamentos, sino también sus posibilidades, sus límites y sus aplicaciones actuales.", chips: ["Sistemas de control", "Robótica", "Vehículos autónomos"], note: "Mi intención es ir incorporando ejemplos de esta actividad, adaptados al nivel y a los objetivos de cada asignatura." },
      timeline: [
        { when: "Septiembre 2022 · EEBE", title: "Inicio como profesor asociado", p: "Empiezo a impartir prácticas de laboratorio en el Departamento ESAII." },
        { when: "2022/23 – 2025/26 · EEBE", title: "Docencia en la EEBE (hasta noviembre de 2025)", p: "Prácticas de <em>Regulació Automàtica</em> en el cuatrimestre de otoño durante 4 cursos y de <em>Tècniques de Control</em> en el de primavera durante 3, con grupos de unos 20 estudiantes. Gano experiencia en la enseñanza experimental del control, la evaluación de informes y el acompañamiento del alumnado." },
        { when: "Septiembre 2026 · ESEIAAT", title: "Profesor lector", p: "Paso de una docencia sobre todo experimental a diseñar también clases teóricas. Esto me lleva a pensar cómo fomentar la participación y conectar los fundamentos con sus aplicaciones." },
        { when: "Durante toda la trayectoria", title: "Acompañamiento académico", p: "Más de 20 estudiantes tutorizados en prácticas externas, más de 10 tribunales de trabajos finales y un TFG en codirección." }
      ],
      coursesTitle: "Asignaturas impartidas",
      courses: [
        { code: "REGA", name: "Regulació Automàtica", kind: "lab", tag: "Prácticas de laboratorio · EEBE", meta: ["<b>3.er curso</b> de grado", "<b>4</b> cursos · otoño", "<b>~20</b> estudiantes por grupo"], desc: "Grau en Enginyeria Electrònica Industrial i Automàtica y dobles grados (Mecánica, Química, Biomédica). Identificación de sistemas, ajuste de PID y control realimentado con MATLAB, Simulink y controladores industriales reales." },
        { code: "TCEIA", name: "Tècniques de Control", kind: "lab", tag: "Prácticas de laboratorio · EEBE", meta: ["<b>3.er curso</b> de grado", "<b>3</b> cursos · primavera", "<b>~20</b> estudiantes por grupo"], desc: "Mismo grado y dobles grados. Diseño y validación de técnicas de control en simulación y sobre hardware, con evaluación de informes técnicos." },
        { code: "CAIA", name: "Control i Automatització Industrial Avançada", kind: "lab", tag: "Prácticas de laboratorio · ESEIAAT", meta: ["<b>3.er curso</b> Grado en Ing. Eléctrica", "<b>~20</b> estudiantes", "<b>6</b> sesiones", "equipos de <b>2</b>"], desc: "Identificación y control P y PI de un motor y de una bomba con depósito." },
        { code: "IRA", name: "Introduction to Robotics and Automation", kind: "theory", tag: "Sesiones teóricas · ESEIAAT", meta: ["<b>4.º curso</b> de grado · optativa", "<b>10</b> estudiantes", "<b>8</b> Erasmus"], desc: "Fundamentos de robótica industrial y móvil con un grupo internacional de formaciones muy diversas." }
      ]
    },
    s2: {
      short: "Filosofía", title: "Filosofía docente",
      intro: "Los estudiantes aprenden de forma más significativa cuando entienden para qué sirve lo que aprenden y pueden aplicarlo a problemas reales. Es lo que eché en falta como estudiante: aprendía los procedimientos matemáticos, pero no siempre entendía por qué se estudiaban.",
      pillars: [
        { ic: "⚙️", title: "Aprender con un propósito", p: "Relaciono los contenidos con aplicaciones prácticas: qué problemas se pueden resolver con ellos y hasta dónde se puede llegar profundizando. En control y robótica, los conceptos abstractos se convierten en mejoras visibles sobre sistemas físicos." },
        { ic: "💬", title: "El estudiante como protagonista", p: "Las clases no son solo para transmitir información, sino para reflexionar, preguntar, debatir y construir el conocimiento. Los errores forman parte del proceso, y lo importante es poder corregirlos a tiempo (Freeman et al., 2014; Hattie y Timperley, 2007)." },
        { ic: "🎯", title: "Exigencia y acompañamiento", p: "Una enseñanza centrada en el estudiante no significa renunciar a la exigencia. Expectativas claras, responsabilidad y flexibilidad solo cuando hay circunstancias que realmente la justifican." }
      ],
      evoTitle: "Cómo ha evolucionado mi docencia",
      evoP: "Con la experiencia he entendido que explicar bien un concepto no garantiza que todos lo hayan entendido, y que hay que crear oportunidades para comprobarlo.",
      evoLabels: ["Primeros cursos (EEBE)", "Ahora"],
      evo: [
        ["Prioridad: transmitir correctamente los conocimientos", "Explicar procedimientos, resolver dudas en prácticas y corregir los informes entregados", "Una flexibilidad excesiva en algunas situaciones", "Docencia sobre todo experimental"],
        ["Prioridad: comprobar que los conocimientos se han entendido", "Feedback escrito y conversación breve en la sesión siguiente, para ver cómo se usan las correcciones", "Expectativas claras y exigencia, con acompañamiento", "Laboratorio y clases teóricas con participación activa y evaluación formativa"]
      ],
      goal: { b: "Mi objetivo.", p: "Formar ingenieros capaces de comprender los fundamentos de su disciplina, cuestionar resultados y aplicar sus conocimientos con autonomía y criterio técnico, despertando a la vez su interés por seguir aprendiendo." },
      lesson: { b: "Una lección aprendida.", p: "En mis primeros años tendía a ser demasiado flexible en algunas situaciones, y a veces eso hacía más difícil que se cumplieran las actividades previstas. Hoy combino un ambiente cercano y participativo con la responsabilidad y la autonomía que se esperan de un futuro profesional de la ingeniería." }
    },
    s3: {
      short: "Diseño", title: "Diseño y desarrollo de la enseñanza",
      intro: "Planifico siguiendo el <strong>alineamiento constructivo</strong> (Biggs y Tang, 2011): los resultados de aprendizaje, las actividades y la evaluación tienen que apuntar a lo mismo. En el laboratorio, el trabajo sigue además un ciclo de aprendizaje experiencial (Kolb, 1984): experimentar, observar, entender por qué y volver a probar.",
      caiaTitle: "Progresión en las prácticas de CAIA",
      caiaP: "Seis sesiones sobre dos plantas físicas, un motor y una bomba de agua con depósito. Pulsa cada fase:",
      phase: "FASE",
      steps: [
        { s: "Identificación", t: "Identificación del sistema · Pràctica 1: Identificació planta del laboratori", d: "Los estudiantes hacen experimentos para caracterizar el comportamiento dinámico del motor y del depósito y obtener modelos matemáticos aproximados, por ejemplo calculando la constante de tiempo a partir de la respuesta experimental." },
        { s: "Control P", t: "Control proporcional · Pràctica 2: Realimentació", d: "Implementan controladores P y analizan cómo la ganancia afecta al tiempo de establecimiento, a las oscilaciones y al error estacionario." },
        { s: "Control PI", t: "Control proporcional-integral · Pràctica 3: Disseny de controlador continu", d: "Añaden la acción integral y comparan las prestaciones del controlador PI con las estrategias anteriores sobre las mismas plantas." },
        { s: "Validación", t: "Diseño → simulación → planta real", d: "En cada fase diseñan a partir del modelo, comprueban en simulación que se cumplen las especificaciones y validan el resultado sobre la planta física. Como trabajan siempre con las mismas plantas, pueden comparar objetivamente los resultados de cada estrategia. Las diferencias entre simulación y realidad se convierten en material de aprendizaje." }
      ],
      idea: { b: "La idea de fondo:", p: "no quiero transmitir que una técnica más avanzada siempre da mejores resultados. Quiero que los estudiantes aprendan a elegir y ajustar el controlador según los requisitos de cada aplicación." },
      fig1: { cap: "<b>Figura 1.</b> Extracto del guion de prácticas: diseñar a partir del modelo, comprobar en simulación y validar sobre la planta física.", alt: "Extracto del guion de prácticas de CAIA" },
      simTitle: "Cuando la simulación no basta",
      simP: "En el control del depósito, los estudiantes diseñaron un controlador que cumplía las especificaciones en el modelo. Al probarlo en la planta aparecieron diferencias importantes, debidas entre otras cosas a la zona muerta de la bomba y a las no linealidades del depósito.",
      simToggle: ["Simulación", "Planta real"],
      fig2: { cap: "<b>Figura 2.</b> Simulación frente a respuesta experimental del depósito de agua.", alt: "Respuesta del depósito de agua" },
      simLesson: { b: "Lección:", p: "un controlador que cumple las especificaciones en simulación no garantiza que las cumpla en el sistema real. Comparar las dos respuestas permitió discutir los límites del modelo y la necesidad de validar experimentalmente." },
      iraTitle: "Participación activa en IRA",
      iraP: "Planteo preguntas de aplicación que los estudiantes discuten primero por parejas y después con todo el grupo, una dinámica relacionada con <em>Peer Instruction</em> (Mazur, 1997). Así conozco sus razonamientos, algo especialmente útil en un aula con formaciones tan distintas. Así los estudiantes participan en construir las conclusiones, en lugar de recibir directamente la solución.",
      flow: [{ b: "1 · Pregunta", s: "Una diapositiva con una situación práctica." }, { b: "2 · Parejas", s: "Unos minutos para pensar y debatir con un compañero." }, { b: "3 · Puesta en común", s: "Contrastamos respuestas y razonamientos." }, { b: "4 · Aclaración", s: "Resolvemos los errores conceptuales que aparecen." }],
      fig3: { cap: "<b>Figura 3.</b> ¿Qué robot elegirías para paletizar? Comparación de carga útil, alcance y precisión.", alt: "Actividad de selección de robot para paletización" },
      fig3p: "Participaron los diez estudiantes. En la discusión salió una dificultad para distinguir <strong>precisión</strong> y <strong>repetibilidad</strong>, y pude retomar los dos conceptos en ese momento.",
      fig4: { cap: "<b>Figura 4.</b> Diapositivas nuevas sobre robótica móvil, añadidas porque los estudiantes usaban ejemplos de robots móviles en sus respuestas.", alt: "Diapositiva sobre percepción y robótica móvil" },
      fig4p: "Las intervenciones del alumnado me sirven para detectar dificultades e intereses, y para adaptar las explicaciones y los materiales de la sesión siguiente."
    },
    s4: {
      short: "Evaluación", title: "Evaluación formativa y evidencias de aprendizaje",
      intro: "La evaluación tiene que comprobar los aprendizajes previstos y, a la vez, dar información útil para orientar la enseñanza.",
      tabs: ["Informes de CAIA", "Test de IRA", "Feedback en CAIA"],
      t1: { title: "Plantilla de evaluación por criterios", p: "Los informes técnicos se evalúan con criterios comunes:", chips: ["Corrección de los cálculos", "Cumplimiento de especificaciones", "Validación experimental", "Interpretación de discrepancias"], p2: "La plantilla permite aplicar los mismos criterios a todos los equipos y detectar dificultades concretas sobre las que dar retroalimentación.", fig: { cap: "<b>Figura 5a.</b> Extracto de la plantilla de corrección. Los nombres del alumnado están ocultos.", alt: "Plantilla de corrección con los nombres ocultos" } },
      t2: { title: "Comprensión y aplicación, no memoria", p1: "El examen tipo test plantea situaciones técnicas en las que hay que interpretar información y distinguir conceptos relacionados, como precisión y repetibilidad.", p2: "Antes de la evaluación final, las preguntas y discusiones en clase funcionan como <strong>evaluación formativa</strong>: me permiten detectar dificultades y ajustar las explicaciones.", fig: { cap: "<b>Figura 5b.</b> Pregunta del examen que exige distinguir precisión y repetibilidad.", alt: "Pregunta del examen de IRA" } },
      t3: {
        title: "Un ciclo de retroalimentación que se cierra",
        p: "El objetivo es que los estudiantes usen la información para revisar su trabajo y ganar autonomía, siguiendo los principios de evaluación formativa y autorregulación de Nicol y Macfarlane-Dick (2006).",
        cycle: [{ b: "1 · Entrega", s: "El equipo entrega el informe técnico." }, { b: "2 · Corrección escrita", s: "Señalo los errores y los aspectos que hay que mejorar." }, { b: "3 · Conversación", s: "Unos 5 minutos por equipo en la sesión siguiente." }, { b: "4 · Aplicación", s: "Las correcciones se usan en el informe siguiente." }],
        toggle: ["Antes del feedback", "Después"],
        fig6: { cap: "<b>Figura 6.</b> El mismo equipo incorporó las leyendas en el informe siguiente.", alt: "Gráficas antes y después del feedback" },
        fig7: { cap: "<b>Figura 7.</b> Varios equipos que tenían dificultades con la constante de tiempo la aplicaron después en ejercicios y simulaciones.", alt: "Cálculo de la constante de tiempo" }
      }
    },
    s5: {
      short: "Resultados", title: "Resultados y valoración del alumnado",
      surveyTitle: "Encuesta propia de las prácticas de CAIA",
      surveyNote: "Encuesta individual y anónima en la última sesión · 14 participantes",
      meters: [
        { label: "Consideran útil la retroalimentación recibida", val: "14 / 14", w: 100 },
        { label: "«¿Crees que podrías aplicar estos conocimientos para diseñar un controlador para otro sistema?» · <em>Sí</em>", val: "11 / 14", w: 78.6, p: "Los otros tres dicen que necesitan reforzar la teoría y que les costaría sin guion, aunque podrían apoyarse en la IA." },
        { label: "Opinan que las conversaciones restan tiempo de experimentación", val: "5 / 14", w: 35.7, warm: true, p: "Dos equipos propusieron hacerlas fuera del horario de laboratorio." }
      ],
      instTitle: "Encuestas institucionales de la UPC",
      instNote: "Indicador «El/la professor/a m'ajuda a aprendre» (escala de 1 a 5).",
      chartNote: "Valoraciones favorables durante todo el periodo. Hay que leerlas teniendo en cuenta la participación (30–44 %) y que cambian las asignaturas y los grupos. La bajada de 2025/26 se analizará con más detalle en próximas encuestas.",
      part: "Participación",
      quotesTitle: "Lo que dicen los estudiantes",
      quotesNote: "Comentarios abiertos de las encuestas institucionales, traducidos y con pequeñas correcciones de estilo. Destacan el interés por su aprendizaje, el trato cercano, la claridad y la combinación de exigencia y acompañamiento.",
      quoteCite: "Comentario abierto · encuestas institucionales UPC",
      quotes: [
        "Gran docente. Me encanta cuando nos cuenta sus experiencias con el coche autónomo, y nos ha ayudado muchísimo a aprender regulación a nivel práctico. Sus explicaciones son de calidad y se entienden muy bien. Se preocupa de que de verdad sepamos hacer lo que se nos pide en las prácticas, y eso dice mucho de él.",
        "El mejor profesor que he tenido. He aprendido mucho con él; lo que busca es que entendamos la asignatura. 10/10.",
        "De los mejores profesores de la universidad. Explicaciones claras, resuelve las dudas cuando el alumno lo necesita y tiene una excelente cercanía con el alumnado. Mi enhorabuena.",
        "Muy buen profesor. Exigente corrigiendo, pero ayuda a aprender.",
        "Es un profesor que ayuda mucho a entender las prácticas, da bastantes indicaciones para realizarlas y resuelve todas las dudas que van surgiendo. Además, contesta los correos rápido y con muchas explicaciones, y el trato que tiene con todos los alumnos es excelente.",
        "Muy buen profesor. Se nota que hace poco fue alumno; es muy empático y emocionalmente inteligente.",
        "Hace muy bien su trabajo. Es de las pocas asignaturas en las que, al salir de la práctica, sientes que has aprendido algo que en clase no acababas de entender.",
        "Muy buen profesor, atento y amable. Siempre te ayuda sin problemas y te motiva a hacer las cosas bien. Se preocupa de que entiendas las cosas de verdad.",
        "Uno de los mejores profesores de prácticas que hemos tenido. Explica con claridad y ayuda a motivar.",
        "Las prácticas son muy útiles e interesantes y ayudan a poner en práctica los conceptos teóricos de clase. El profesor lo explica muy bien.",
        "Un profesor que se interesa por que los alumnos aprendamos. Muy buen profesor.",
        "Profesor agradable y con trato humano; resuelve cualquier duda sin problemas y con buen ambiente.",
        "Me han gustado mucho las prácticas. La explicación previa es breve, directa y suficiente para plantear la práctica. Las dudas siempre quedan resueltas y nos anima a pensar. Me han servido mucho para entender mejor los contenidos de la asignatura."
      ]
    },
    s6: {
      short: "Formación", title: "Desarrollo profesional y formación docente",
      done: { tag: "Formación completada", title: "M2.1 · Disseny de l'Aprenentatge", meta: "Metodologies docents, planificació i gestió de l'aula · 50 h · ICE-UPC · con certificado", p: "A partir de este curso revisé la planificación de las prácticas de CAIA para que cada sesión aproveche lo aprendido en la anterior. Ahora entiendo la planificación no como una secuencia de contenidos, sino como una progresión de aprendizajes. También ha influido en las actividades participativas de las clases teóricas y en la coherencia entre objetivos, actividades y evaluación." },
      cur: { tag: "En curso", title: "Formación actual", p: "Responde a necesidades que he detectado en el aula: mejorar la planificación y la comunicación, fomentar la motivación y la participación, y usar las herramientas digitales para seguir mejor el aprendizaje. Mi objetivo es que cada curso se traduzca en mejoras concretas cuyos resultados pueda analizar.", chips: ["M1 · Introducció a la Docència", "Recursos Teatrals per a la Docència", "ATENEA: Nivell Mitjà", "ATENEA: Nivell Avançat", "Com Millorar la Motivació a l'Aula"] },
      tut: { tag: "Tutorización y acompañamiento académico", stats: [["+20", "estudiantes en prácticas externas"], ["+10", "tribunales de trabajos finales"], ["1", "TFG en codirección"]], p: "Estas experiencias me permiten ver cómo los estudiantes afrontan problemas de ingeniería con más autonomía y cómo aplican lo que han aprendido durante la carrera.", compTitle: "Competencias transversales que trabajo", chips: ["Comunicación técnica", "Planificación del trabajo", "Capacidad de análisis", "Justificación de decisiones"], next: { b: "Próximo paso:", p: "dirigir más trabajos finales de grado y máster sobre automática, robótica y sistemas autónomos." } }
    },
    s7: {
      short: "Reflexión y mejora", title: "Reflexión crítica y plan de mejora",
      strengths: { tag: "Fortalezas", items: ["Conexión entre teoría y experimentación", "Retroalimentación personalizada", "Adaptación de las explicaciones a partir de las intervenciones del alumnado"] },
      limits: { tag: "Limitaciones identificadas", items: ["El feedback individual en CAIA, bien valorado, resta tiempo de experimentación", "En IRA, la participación no garantiza la comprensión individual", "Ni los trabajos ni las encuestas, por sí solos, permiten atribuir las mejoras a una metodología concreta"] },
      planTitle: "Plan de mejora y seguimiento",
      h1: "Actuación", h2: "Evidencia de seguimiento",
      plan: [
        { n: "1", title: "Optimizar el feedback en CAIA", when: "Próxima edición de CAIA", p1: "Dedicar las conversaciones individuales a las dificultades conceptuales y dejar las cuestiones menores para los comentarios escritos.", p2: "Tiempo dedicado al feedback, errores corregidos en entregas posteriores y percepción del alumnado." },
        { n: "2", title: "Comprobar el aprendizaje en IRA", when: "Próxima edición de IRA", p1: "Incorporar preguntas individuales antes y después de algunas actividades participativas.", p2: "Comparación de las respuestas y de los errores conceptuales detectados." },
        { n: "3", title: "Fomentar la autonomía en CAIA", when: "Próxima edición de CAIA", p1: "Diseñar una actividad menos guiada en la que los estudiantes elijan los procedimientos y justifiquen sus decisiones.", p2: "Calidad de las justificaciones, dificultades encontradas y necesidad de apoyo docente." },
        { n: "4", title: "Reforzar la conexión entre teoría y realidad", when: "Línea continua", p1: "Seguir diseñando actividades que apliquen la teoría a problemas reales e ir incorporando ejemplos de mi actividad investigadora y profesional en control, robótica y vehículos autónomos.", p2: "Errores conceptuales en entregas sucesivas y capacidad de los estudiantes para justificar sus decisiones frente a los límites del modelo." },
        { n: "+", title: "Tecnología con propósito: simulación, robótica e IA", when: "En exploración", h1: "Propuesta", h2: "Objetivo", p1: "Usar herramientas de simulación, plataformas robóticas e IA solo cuando respondan a un objetivo pedagógico concreto, nunca por su novedad. Por ejemplo, que los estudiantes analicen una propuesta de controlador generada por IA, busquen posibles errores y contrasten los resultados con simulación o experimentación.", p2: "Usar la IA como apoyo al razonamiento técnico: verificar y justificar las soluciones en lugar de aceptarlas sin cuestionarlas." }
      ],
      follow: { tag: "Seguimiento de las mejoras", items: [{ t: "En el laboratorio", p: "Comparar los errores conceptuales en entregas sucesivas y ver si las actividades menos guiadas desarrollan más autonomía." }, { t: "En las clases teóricas", p: "Preguntas individuales antes y después de las actividades participativas, para ver si se corrigen las dificultades." }, { t: "Con el alumnado", p: "Encuestas breves sobre los cambios. Al final de cada experiencia decidiré si mantengo, modifico o descarto cada estrategia." }] },
      commit: { b: "Compromiso.", p: "Entiendo este portfolio como un punto de partida. Mi reto para los próximos cursos es comprobar de forma más sistemática los resultados de las metodologías que uso y conseguir que algunos estudiantes descubran en la automática y la robótica una pasión que les impulse a seguir aprendiendo." },
      refsTitle: "Referencias"
    }
  },

  /* ---------------- INVESTIGACIÓN ---------------- */
  research: {
    eyebrow: "Investigación",
    title: "Sistemas autónomos seguros y fiables",
    lead: "Mi investigación se centra en el control avanzado, el diagnóstico de fallos, el análisis de alcanzabilidad y la seguridad funcional para que los sistemas autónomos sean fiables también cuando algo falla.",
    stats: [["4", "artículos en revistas internacionales"], ["5", "comunicaciones en congresos IEEE e IFAC"], ["2", "patentes como inventor"], ["5", "proyectos de I+D"]],
    linesShort: "Líneas", linesTitle: "Líneas de investigación",
    lines: [
      { ic: "🌳", title: "Supervisión de seguridad funcional", p: "Supervisores en tiempo de ejecución basados en <em>Behavior Trees</em>, derivados de los análisis de seguridad de la ISO 26262 y respaldados por verificación formal.", tags: ["ISO 26262", "SOTIF", "Behavior Trees", "Verificación formal"] },
      { ic: "🔍", title: "Detección y aislamiento de fallos", p: "Métodos zonotópicos de detección y aislamiento de fallos (FDI) con estimación de estado LPV para identificar fallos de sensores en tiempo real.", tags: ["Zonotopos", "LPV-EKF", "FDI"] },
      { ic: "📈", title: "Control predictivo con garantías", p: "Integración del análisis de alcanzabilidad, el modelado basado en datos y las especificaciones temporales de seguridad en el control predictivo.", tags: ["MPC", "Alcanzabilidad", "Data-driven", "Signal Temporal Logic"] },
      { ic: "🧭", title: "Línea actual", p: "Consolidar una línea independiente que combine predicción adaptativa, control consciente de la incertidumbre y supervisión formal de la seguridad, con aplicaciones en robótica e infraestructuras críticas resilientes.", tags: ["Predicción adaptativa", "Incertidumbre", "Infraestructuras críticas"] }
    ],
    thesisShort: "Tesis",
    thesis: { tag: "Tesis doctoral · 2025", title: "Functional Safety for Highly Automated Vehicles", p: "Doctorado industrial realizado conjuntamente en la UPC, el Institut de Robòtica i Informàtica Industrial (IRI, CSIC-UPC) y Renault Group. Los métodos se implementaron y validaron sobre prototipos reales de vehículo autónomo y con datos experimentales.", chips: ["Excelente Cum Laude", "Mención internacional", "Mención industrial"], sup: "Directores: Vicenç Puig y Bernardo Morcego (UPC/IRI) · Supervisor industrial: Vicente Milanés (Renault Group)", stays: "Dos estancias de investigación en la Technische Universität München (Múnich y Heilbronn), en el Cyber-Physical Systems Group, trabajando en métodos formales para la seguridad en robótica." },
    pubsShort: "Publicaciones", pubsTitle: "Publicaciones seleccionadas",
    filters: { all: "Todas", j: "Revistas", c: "Actas de congreso" },
    typeLabel: { j: "Revista", c: "Actas" },
    confsShort: "Congresos", confsTitle: "Comunicaciones en congresos",
    fmt: { oral: "Presentación oral", poster: "Póster" }, chair: "Moderador de sesión",
    projShort: "Proyectos", projTitle: "Proyectos de investigación",
    projLabels: { ref: "Referencia", funder: "Financiación", budget: "Importe", pi: "IP / dirección", period: "Periodo", role: "Mi rol", ongoing: "En curso", done: "Finalizado", video: "Documental completo (3Cat)", trailer: "Tráiler del documental (3Cat)" },
    projects: {
      dacs: { role: "Investigador", contrib: "Investigación en control y supervisión basados en datos para sistemas críticos: diagnóstico de fallos, análisis de alcanzabilidad, predicción con incertidumbre y supervisión formal de la seguridad." },
      cdti: { role: "Senior Robotics Research Engineer (2025–2026)", contrib: "Desarrollo y validación de arquitecturas de control en lazo cerrado LQI/PI para la estabilización y el seguimiento de alta precisión de un sistema robótico, con validación experimental e informes técnicos." },
      phd: { role: "Doctorando industrial", contrib: "Desarrollo y validación experimental de metodologías de supervisión de seguridad funcional, diagnóstico de fallos y control predictivo sobre prototipos de Renault, con publicaciones, software y patentes." },
      sacoav: { role: "Investigador", contrib: "Metodologías de supervisión de seguridad, detección de fallos y control consciente de la incertidumbre para operar sistemas autónomos de forma segura en condiciones anómalas." },
      tda: { role: "Motion Control Engineer Lead", contrib: "Dirección del control de movimiento de un vehículo autónomo para transporte público en zonas rurales: planificación de trayectorias, estimación de estado con EKF y control predictivo dinámico sobre un prototipo Volkswagen e-Golf, integrado en el Pirineo." }
    },
    transferShort: "Transferencia", transferTitle: "Transferencia de tecnología",
    transfer: [
      { tag: "Patente publicada · 2026", title: "Système de gestion d'un véhicule autonome", meta: "FR 3168836 A1 · Titular: AMPERE SAS (Renault Group) · Solicitada en 2024", p: "Arquitectura modular de gestión de la seguridad que integra monitorización funcional, detección de anomalías e intervención de emergencia en vehículos autónomos." },
      { tag: "Solicitud de patente · 2025", title: "Dynamic Safety Corridor Generation for Collision Avoidance in Autonomous Vehicles", meta: "Solicitante: Renault Group", p: "Mecanismo predictivo que evalúa dinámicamente el riesgo de colisión a partir de las trayectorias, la capacidad de frenado y la percepción para activar la frenada de emergencia cuando es necesario." },
      { tag: "Software libre · 2024", title: "ft2bt: Fault Tree to Behavior Tree Converter", meta: "Autor y mantenedor · IRI (CSIC-UPC) · GNU GPLv3", p: "Convierte automáticamente análisis de árboles de fallos en arquitecturas ejecutables de Behavior Trees, para una supervisión en tiempo de ejecución reutilizable y reproducible.", link: "https://github.com/cconejob/ft2bt_converter", linkLabel: "Repositorio en GitHub" }
    ],
    scholar: "Lista completa en Google Scholar, incluidos el TFG y el TFM",
    actionShort: "En acción", actionTitle: "Investigación en acción", actionNote: "Resultados sobre plataformas reales. Pulsa para ampliar.",
    confPhotosNote: "Congresos en 2026: póster en el IEEE IV (Detroit), y ponencia oral y stand de PULSAR HRI en el IFAC World Congress (Busan).",
    serviceTitle: "Comunidad científica y ciencia abierta",
    service: ["Revisor de revistas y congresos de la IEEE y la IFAC", "Moderador de sesión en el IEEE Intelligent Vehicles Symposium 2026", "Publicaciones en acceso abierto, repositorios institucionales y software publicado"]
  },

  /* ---------------- PROFESIONAL ---------------- */
  study: {
    eyebrow: "Formación",
    title: "Aprender construyendo",
    lead: "Del grado al doctorado, cada etapa de mi formación ha girado en torno a proyectos en los que la teoría de control tenía que funcionar en un sistema real.",
    stats: [["3", "titulaciones en la UPC"], ["2", "intercambios internacionales (KIT y EPFL)"], ["5", "proyectos destacados de grado y máster"], ["Excelente", "calificación del TFG"]],
    degShort: "Titulaciones", degTitle: "Titulaciones",
    gradoShort: "Grado", gradoTitle: "Grado en Ingeniería en Tecnologías Industriales · ETSEIB",
    gradoIntro: "Tres proyectos que marcan una progresión: de una primera introducción a la electrónica a un sistema de control repartido entre varios robots.",
    masterShort: "Máster", masterTitle: "Máster en Ingeniería Industrial · ETSEIB y EPFL",
    masterIntro: "En el máster di el salto a los vehículos autónomos: primero en competición, con el Formula Student Driverless, y después en investigación, con el TFM en la EPFL.",
    phdShort: "Doctorado", phdTitle: "Doctorado en Automática, Robótica y Visión",
    phdP: "El doctorado industrial con Renault Group y el IRI (UPC-CSIC) cerró este recorrido: los métodos de control y seguridad se validaron sobre prototipos reales de vehículo autónomo. Excelente Cum Laude, con mención internacional e industrial.",
    phdLink: "Ver la tesis y las publicaciones en Investigación",
    labels: { director: "Dirección", team: "Equipo", grade: "Calificación", read: "Leer el documento", blog: "Blog del proyecto", memoria: "Memoria del Loclock (PDF)", video: "Ver vídeo en YouTube" },
    projects: {
      p1: { tag: "Proyecto I · 2.º curso", title: "Mecanismo con servomotores", p: "Primer contacto con la electrónica y la programación de microcontroladores: un mecanismo accionado por servomotores, construido y programado con Arduino.", bullets: ["Introducción a la electrónica mediante Arduino", "Montaje mecánico, cableado y programación del control de los servos"] },
      p2: { tag: "Proyecto II · 3.er curso", title: "Loclock: un reloj para residencias de mayores", p: "Prototipo de reloj para residentes de residencias de mayores: recuerda tareas diarias, como las comidas o la ducha, e incluye un botón de emergencia que avisa al personal de enfermería.", bullets: ["Arduino UNO, Bluetooth con una app Android, reloj de tiempo real, pantalla LCD y mensajes de voz", "Localización del residente por habitaciones con radiofrecuencia y ultrasonidos", "El equipo documentó también 16 proyectos guiados del Arduino Starter Kit en un blog"], team: "Júlia Bayascas, Sofía Cámara, Arnau Colom, Carlos Conejo y Aina Galofré", director: "Cecilio Angulo" },
      tfg: { tag: "Trabajo Final de Grado · 2017", title: "Adaptive Cruise Control, an scaled model: platooning using two-wheeled robots", p: "Recreación a escala de la circulación en convoy (platooning) de vehículos que comparten trayectoria, para estudiar el control de crucero adaptativo (ACC) y evitar colisiones.", bullets: ["Construcción de tres robots de dos ruedas más, hasta tener cuatro vehículos idénticos", "Caracterización de sensores y motores y unificación del código de control (STM32F4)", "Controlador PI de la distancia entre vehículos y red Wi-Fi (ESP8266) entre robots y ordenador", "Validación en circuito cerrado con pruebas de frenada y de circulación tras un vehículo líder"], director: "Arnau Dòria Cerezo y Víctor Repecho del Corral", grade: "9/10 · Excelente" },
      fs: { tag: "Formula Student Driverless · 2018–2019", title: "BCN e-Motorsport: Chief of Estimation & Control", p: "Dirigí el área de estimación y control del monoplaza eléctrico sin conductor del equipo, en su primera participación en la categoría Driverless.", bullets: ["Equipo multidisciplinar de 7 personas desarrollando sistemas basados en ROS", "Algoritmos de localización, seguimiento de trayectorias y control en condiciones de carrera", "El vídeo principal demuestra el vehículo funcionando en modo autónomo", "Una experiencia práctica y de organización de equipo que me preparó para mis trabajos posteriores"] },
      tfm: { tag: "Trabajo Final de Máster · EPFL · 2021", title: "Design and Implementation of a Pipeline for Fully Autonomous Driving Systems", p: "Pipeline modular y en tiempo real para robots móviles, desarrollado en el laboratorio VITA de la EPFL. Se organiza en cinco bloques (estimación de estado, percepción, predicción, planificación y control), cada uno con un algoritmo intercambiable.", bullets: ["ROS sobre un robot Segway Loomo, conectado por red inalámbrica a un ordenador externo", "Predicción de trayectorias de personas con TrajNet++, planificación RRT* que tiene en cuenta la predicción y control MPC", "Con una persona en movimiento constante, las colisiones bajaron del 45 % sin predictor al 5 % con TrajNet++", "Aplicación en neurociencia, recogida en un artículo con Yuejiang Liu, Mohammadhossein Bahari y Alexandre Alahi: el robot sigue las piernas de un paciente parapléjico (cadera, rodilla y tobillo, con OpenPifPaf) para alimentar el algoritmo de estimulación que le ayuda a caminar con andador", "Detección en un servidor con GPU a hasta 40 Hz y control PID de la cámara del robot para no perder al paciente, con pruebas en la EPFL"], grade: "10/10 · Excelente" }
    }
  },

  prof: {
    eyebrow: "Experiencia profesional",
    title: "De los algoritmos a las plataformas reales",
    lead: "Más de cinco años diseñando y desplegando algoritmos de control y autonomía en sistemas robóticos y vehículos autónomos reales, combinando métodos basados en modelos y en datos.",
    expShort: "Experiencia", expTitle: "Experiencia",
    platformsShort: "Plataformas", platformsTitle: "Plataformas en las que he trabajado", platformsNote: "Fotos y vídeos de los sistemas reales. Pulsa las miniaturas para cambiar y la imagen principal para ampliarla.",
    exp: [
      { k: "lector", role: "Profesor Lector", area: "Docencia e investigación", org: "UPC · ESEIAAT · Departamento ESAII", place: "Terrassa, España", period: "09/2026 – actualidad", platform: "", bullets: ["Docencia en Control i Automatització Industrial Avançada (prácticas) e Introduction to Robotics and Automation (teoría)", "Investigación en control y supervisión basados en datos para sistemas críticos (proyecto DACS)", "Consolidación de una línea propia en predicción adaptativa, control consciente de la incertidumbre y supervisión formal de la seguridad"] },
      { k: "arquimea", role: "Robotics Researcher", area: "Robótica", org: "ARQUIMEA Research Center & PULSAR HRI", place: "Tenerife, España", period: "12/2025 – 09/2026", platform: "Gimbal robótico de alta precisión", bullets: ["Diseño y validación de arquitecturas de control en lazo cerrado para un gimbal robótico de alta precisión", "Capas de control grueso y fino (LQI, PI) para estabilización y seguimiento de alta exactitud", "Informes técnicos para programas nacionales de I+D (CDTI), garantizando la trazabilidad y la robustez del diseño"] },
      { k: "renault", role: "Robotics Researcher (doctorado industrial)", area: "Vehículos autónomos", org: "Renault Group & IRI (UPC-CSIC)", place: "Barcelona, España", period: "09/2022 – 11/2025", platform: "Prototipo autónomo Renault Mégane", bullets: ["Algoritmos de detección de anomalías con filtros de Kalman zonotópicos para identificar fallos de sensores en tiempo real", "Arquitectura de software de seguridad funcional en ROS alineada con la ISO 26262", "Control predictivo basado en datos implementado en un prototipo autónomo Renault Mégane", "Metodología escalable de validación de la seguridad en tiempo de ejecución mediante análisis de alcanzabilidad", "Colaboración con los equipos de percepción, control e integración para desplegar los algoritmos en plataformas físicas"] },
      { k: "eebe", role: "Profesor asociado", area: "Control automático", org: "UPC · EEBE", place: "Barcelona, España", period: "09/2022 – 11/2025", platform: "", bullets: ["Prácticas de laboratorio de Regulació Automàtica y Tècniques de Control con MATLAB, Simulink y controladores industriales reales", "Supervisión y evaluación de trabajos sobre ajuste de PID, identificación de sistemas y control realimentado, en simulación y en hardware"] },
      { k: "cvc", role: "Motion Control Engineer", area: "Vehículos autónomos", org: "Computer Vision Center (CVC-UAB)", place: "Barcelona, España", period: "05/2021 – 09/2022", platform: "Prototipo autónomo Volkswagen e-Golf", bullets: ["Planificación de trayectorias en tiempo real y estimación de estado con EKF en ROS (Python)", "Controlador predictivo dinámico (MPC) para el seguimiento de trayectorias teniendo en cuenta obstáculos", "Despliegue y ajuste del control de movimiento en un prototipo autónomo Volkswagen e-Golf y en el simulador CARLA", "Integración con los equipos de percepción y localización en el vehículo, en el Pirineo"] },
      { k: "epfl", role: "Research Assistant", area: "Robótica móvil para rehabilitación", org: "EPFL-VITA & NeuroRestore (CHUV)", place: "Lausana, Suiza", period: "09/2020 – 05/2021", platform: "Asistente robótico basado en Segway Loomo", bullets: ["Algoritmos de control y seguimiento en tiempo real en ROS (C++/Python) para un asistente robótico basado en Segway Loomo", "Integración de módulos de percepción para seguir de forma autónoma a pacientes parapléjicos durante las sesiones de terapia", "Colaboración con neurocientíficos para adaptar las soluciones robóticas al flujo de trabajo de la rehabilitación"] },
      { k: "bcn", role: "Chief of Estimation & Control", area: "Vehículos autónomos", org: "BCN e-Motorsport (Formula Student Driverless)", place: "Barcelona, España", period: "09/2018 – 08/2019", platform: "Monoplaza eléctrico de competición sin conductor", bullets: ["Dirección del área de estimación y control de un monoplaza eléctrico sin conductor, en un equipo multidisciplinar de 7 personas", "Una experiencia práctica y de organización, cercana al funcionamiento de una empresa, que me fue muy útil en mis trabajos posteriores"], formLink: "Ver el proyecto completo en Formación" }
    ],
    videoLabel: "Ver vídeo de demostración",
    linkLabels: { doc: "Documental completo (3Cat)", trailer: "Tráiler del documental (3Cat)", yt: "Ver vídeo en YouTube" },
    eduShort: "Formación", eduTitle: "Formación académica",
    edu: [
      { y: "2022 – 2025", t: "Doctorado en Automática, Robótica y Visión", w: "UPC-CSIC, Barcelona", p: "Tesis: <em>Functional Safety for Highly Automated Vehicles</em>. Excelente Cum Laude, mención internacional e industrial. Estancias en la TUM (Múnich y Heilbronn)." },
      { y: "2018 – 2021", t: "Máster en Ingeniería Industrial · especialidad en Automática y Robótica", w: "UPC-ETSEIB, Barcelona", p: "Intercambio internacional en la EPFL (Lausana, Suiza)." },
      { y: "2013 – 2018", t: "Grado en Ingeniería en Tecnologías Industriales", w: "UPC-ETSEIB, Barcelona", p: "Intercambio internacional en el KIT (Karlsruhe, Alemania)." }
    ],
    skillsShort: "Competencias", skillsTitle: "Competencias técnicas",
    skills: [
      { g: "Programación y herramientas · nivel avanzado", items: ["Python", "MATLAB", "Simulink", "ROS / ROS 2"] },
      { g: "Programación y herramientas · nivel medio", items: ["C++", "Git", "Docker", "Gazebo", "CARLA"] },
      { g: "Sistemas autónomos", items: ["Supervisión de seguridad", "MPC", "EKF", "LPV", "Análisis de alcanzabilidad", "Control basado en datos", "Zonotopos", "ISO 26262", "SOTIF"] }
    ],
    langTitle: "Idiomas",
    langs: [["Castellano", "Nativo", 5], ["Catalán", "Nativo", 5], ["Inglés", "C1", 4], ["Alemán", "B1", 3], ["Francés", "A2", 2]]
  }
};
