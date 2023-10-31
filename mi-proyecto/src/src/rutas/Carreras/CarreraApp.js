import ImagenesApp from "../../assets/ImagenesApp";

const servicios = [
  {
    idCar: 101,
    imgSrc: ImagenesApp.imgMedicina,
    titulo: "Medicina",
    duracion: '(5 años)',
    descripcion:
      "Se encargan de prevenir, diagnosticar y tratar enfermedades. Asimismo buscan la promoción en salud y el bienestar",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      
       "Empresas de tecnología",
       "Empresas de servicios financieros",
       "Empresas de salud",
       "Organizaciones gubernamentales",
       "Empresas de desarrollo de videojuegos",
    ],
    materias: [
      "Programación avanzada",
      "Diseño de algoritmos",
      "Arquitectura de software",
      "Pruebas de software",
      "Pruebas de software",
      "Pruebas de software",
    ],
    universidades: [
      {
         nombre: "Univalle", 
         enlace: "enlace3" 
      },
      {
        nombre: 'UPAL',
        enlace: 'enlace2',
      },
    ],
  },
  {
    idCar: 102,
    imgSrc: ImagenesApp.imgOdontologia,
    titulo: "Odontologia",
    descripcion:
      "Se encarga del diagnóstico, tratamiento y prevención de enfermedades del aparato estomatognático (boca, dientes, mandíbulas, la faringe y estructuras relacionadas que intervienen en los fenómenos de la masticación, deglución y el habla",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      "Empresas de tecnología",
      "Empresas de servicios financieros",
      "Empresas de salud",
      "Organizaciones gubernamentales",
      "Empresas de desarrollo de videojuegos",
    ],
    areasDeTrabajo: [
      "Desarrollo de aplicaciones web",
      "Desarrollo de aplicaciones móviles",
      "Seguridad informática",
      "Inteligencia artificial",
      "Desarrollo de software embebido",
    ],
    materias: [
      "Programación avanzada",
      "Diseño de algoritmos",
      "Base de datos",
      "Arquitectura de software",
      "Pruebas de software",
    ],
    universidades: [
      "Universidad ABC",
      "Universidad XYZ",
      "Universidad 123",
      "Universidad ABCD",
      "Universidad XYZA",
    ],
  },
  {
    idCar: 103,
    imgSrc: ImagenesApp.imgEnfermeria,
    titulo: "Enfermeria",
    descripcion:
      "Se encarga de intervenir de forma reflexiva y científica en los problemas de salud, para mejorar la calidad de vida de las personas, familia y comunidad.",
    area: "ÁREA DE SALUD",
  },
  {
    idCar: 104,
    imgSrc: ImagenesApp.imgFisioterapia,
    titulo: "Fisioterapia y Kinesiología",
    descripcion:
      "Se orienta al movimiento humano en contexto, caracterizado como expresión e instrumento del ser humano que garantiza su supervivencia y adaptación inteligente y creativa en un contexto dado",
    area: "ÁREA DE SALUD",
  },
  {
    idCar: 105,
    imgSrc: ImagenesApp.imgBioquimica,
    titulo: "Bioquímica y Farmacia",
    descripcion:
      "Se encarga de la composición de los seres vivos, sus procesos de transformación química, las repercusiones en su funcionamiento fisiológico y los medicamentos desde el punto de vista de sus acciones, interacciones y reacciones adversas en el ser vivo",
    area: "ÁREA DE SALUD",
  },
  {
    idCar: 106,
    imgSrc: ImagenesApp.imgNutricion,
    titulo: "Nutrición y Dietética",
    descripcion:
      "Diagnóstica la situación nutricional del paciente, e interviene por medio de planes y actividades en favor del bienestar. Realizan prevención y promoción de la salud nutricional",
    area: "ÁREA DE SALUD",
  },
  {
    idCar: 107,
    imgSrc: ImagenesApp.imgSistemas,
    titulo: "Ingenieria de Sistemas",
    descripcion:
      "Maneja recursos de tecnología informática y administración de los mismos. Sus actividades están relacionadas con la organización de equipos desarrollo de software, aplicaciones, sistemas operativos, administración de centros de cómputo.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 108,
    imgSrc: ImagenesApp.imgElectromecanica,
    titulo: "Ingenieria Electromecánica",
    descripcion:
      "Se encarga del diseño, construcción y mantenimiento de sistemas e instalaciones industriales. Además, del desarrollo de dispositivos y mecanismos de áreas como la automatización, robótica y supervisión de equipos.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 109,
    imgSrc: ImagenesApp.imgCivil,
    titulo: "Ingeniería Civil",
    descripcion:
      "Se encarga de analizar y diseñar obras civiles, teniendo en cuenta los parámetros de seguridad, funcionalidad y economía. Construye, supervisa y administra obras civiles, organizando etapas técnicas, administrativas, financieras legales en una obra.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 110,
    imgSrc: ImagenesApp.imgElectronica,
    titulo: "Ingeniería Electrónica",
    descripcion:
      "Se encargan del diseño, operación, evaluación y mantenimiento de sistemas electrónicos y de telecomunicación.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 111,
    imgSrc: ImagenesApp.imgAlimentos,
    titulo: "Ingeniería de Alimentos",
    descripcion:
      "Tiene formación en ciencias físico-matemáticas y en tecnologías químicas y agroindustriales le permiten proyectar, organizar y administrar empresas alimentarias, supervisar y efectuar controles de calidad de empresas agroindustriales y de servicio, desarrollar nuevos productos alimenticios, desarrollar procesos y diseñar equipos adecuados para explotar racionalmente recursos agrícolas y pecuarios.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 112,
    imgSrc: ImagenesApp.imgIndustrial,
    titulo: "Ingeniería Industrial",
    descripcion:
      "Desarrollan y supervisan programas destinados a la optimización en el uso de equipos, recursos humanos, tecnología, materiales y procedimientos para incrementar la eficiencia y la productividad de una empresa u organización.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 113,
    imgSrc: ImagenesApp.imgElectrica,
    titulo: "Ingeniería Eléctrica",
    descripcion:
      "Desarrolla metodologías para el diseño, construcción, planificación, explotación e investigación de sistemas eléctricos de potencia.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 114,
    imgSrc: ImagenesApp.imgMecanica,
    titulo: "Ingeniería Mecánica",
    descripcion:
      "Se encarga del cálculo, diseño, construcción, selección, instalación, operación y mantenimiento de equipos o sistemas mecánicos.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 115,
    imgSrc:
      "https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg",
    titulo: "Ingeniería Informática",
    descripcion:
      "Desarrollan sistemas de información, empresariales y gerenciales. También desarrollan software de aplicación para plataformas digitales. Se encargan de la gestión e instalación de redes de computadoras, cableado estructurado, configuración de servidores, administración de centros de cómputo, soporte y asistencia técnica en equipos de computación.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 116,
    imgSrc: ImagenesApp.imgTelecomunicaciones,
    titulo: "Ingeniería Telecomunicaciones",
    descripcion:
      "Se encarga de diseñar y gestionar redes vinculadas a la comunicación, pudiendo adaptar e incorporar nuevas tecnologías a los procesos productivos, además de liderar y ejecutar proyectos de investigación científica.",
    area: "ÁREA TECNOLÓGICA",
  },
  {
    idCar: 117,
    imgSrc: ImagenesApp.imgContabilidad,
    titulo: "Contaduría Pública",
    descripcion:
      "Se dedica a aplicar, manejar e interpretar la contabilidad de una organización o persona, con la finalidad de producir informes para la gerencia y para terceros (de manera independiente o dependiente), que sirven para la toma de decisiones.",
    area: "ÁREA ECONÓMICA",
  },
  {
    idCar: 118,
    imgSrc: ImagenesApp.imgEconomia,
    titulo: "Economía",
    descripcion:
      "Se encarga del estudio sistemático de los fenómenos económicos locales e internacionales, incluyendo las dimensiones históricas y regionales, sin abandonar el aspecto social.",
    area: "ÁREA ECONÓMICA",
  },
  {
    idCar: 119,
    imgSrc: ImagenesApp.imgAdministracion,
    titulo: "Administración de Empresas",
    descripcion:
      "Se encarga de organizar, controlar y gestionar varios de los recursos con los que una empresa se mueve. Puede trabajar con un sector o área determinada o puede cumplir un rol de Administrador central de una entidad.",
    area: "ÁREA ECONÓMICA",
  },
  {
    idCar: 120,
    imgSrc: ImagenesApp.imgComercial,
    titulo: "Ingeniería Comercial",
    descripcion:
      "Está preparado para desempeñarse en: Investigación de mercados, consultoría en gestión comercial y de servicios, planeación y desarrollo de estrategias comerciales y de mercado en empresas comerciales e industriales.",
    area: "ÁREA ECONÓMICA",
  },
  {
    idCar: 121,
    imgSrc: ImagenesApp.imgFinanciera,
    titulo: "Contaduría Pública",
    descripcion:
      "Se encarga de administrar correctamente el dinero y decidir la mejor fuente de financiamiento para todas las actividades de la empresa. Evalúa los nuevos proyectos de inversión y los organiza para consolidarse en el mercado nacional y proyectarse a nivel internacional.",
    area: "ÁREA ECONÓMICA",
  },
  {
    idCar: 122,
    imgSrc: ImagenesApp.imgDerecho,
    titulo: "Derecho",
    descripcion:
      "Se encarga de desarrollar propuestas teóricas y prácticas para el funcionamiento óptimo de las instituciones públicas, privadas, organizaciones políticas nacionales e internacionales a nivel legal y jurídico. También se encarga de prestar servicio de asesorías en marketing político y campañas políticas.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  {
    idCar: 123,
    imgSrc: ImagenesApp.imgTrabajoSocial,
    titulo: "Comunicación Social",
    descripcion:
      "Se encarga de organizar, planificar y transmitir un mensaje de manera adecuada por diferentes medios y redes. También tiene la capacidad de informar, convencer por diferentes canales. Por último elaborar proyectos sociales con la finalidad de generar buena imagen e impacto de instituciones u organizaciones.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  {
    idCar: 124,
    imgSrc: ImagenesApp.imgPsicologia,
    titulo: "Psicología",
    descripcion:
      "Realiza un estudio, análisis de la conducta y los procesos mentales de las personas o grupos sociales. Elabora y planifica intervenciones con fines terapéuticos y hacia problemáticas individuales o sociales.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  {
    idCar: 125,
    imgSrc: ImagenesApp.imgCSEducacion,
    titulo: "Ciencias de la Educación",
    descripcion:
      "Realizan diseño, planificación, evaluación, análisis, desarrollo, dirección, coordinación y gestión de proyectos educativos.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  {
    idCar: 126,
    imgSrc: ImagenesApp.imgLinguistica,
    titulo: "Lingüística",
    descripcion:
      "Se encarga del estudio del lenguaje humano, sus procesos, reglas, normas y cómo se desarrolla la misma.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  {
    idCar: 127,
    imgSrc: ImagenesApp.imgTrabajoSocial,
    titulo: "Trabajo Social",
    descripcion:
      "Realiza un trabajo de intervención para mejorar las relaciones humanas. Promueve un cambio social con poblaciones vulnerables.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  {
    idCar: 128,
    imgSrc: ImagenesApp.imgSociologia,
    titulo: "Sociología",
    descripcion:
      "Se encarga del estudio de las relaciones sociales entre los grupos humanos y las leyes que las regulan en las sociedades.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  {
    idCar: 129,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Antropología",
    descripcion:
      "Se especializa en el estudio y comprensión de las diferentes sociedades y culturas humanas; busca explicar las causas y significados de la diferencia y aportar (con estudios y acciones concretas) para que las personas e instituciones sean sensibles ante esta diversidad.",
    area: "ÁREA SOCIALES HUMANAS ",
  },
  //Area de arquitectura
  {
    idCar: 130,
    imgSrc: ImagenesApp.imgArquitectura,
    titulo: "Arquitectura",
    descripcion:
      "Se encarga de diseñar proyectos arquitectónicos y urbanos, desarrollar planes y proyectos, de la dirección y supervisión de obras.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
  },
  {
    idCar: 131,
    imgSrc: ImagenesApp.imgDiseñoDeInteriores,
    titulo: "Diseño de Interiores",
    descripcion:
      "Se encarga de diseñar, gestionar proyectos de tratamiento del espacio, asi como de la remodelación y equipamiento de ambientes interiores y mobiliario.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
  },
  {
    idCar: 132,
    imgSrc: ImagenesApp.imgTurismo,
    titulo: "Turismo",
    descripcion:
      "Se encargan del diseño, planificación y gestión de recorridos, circuitos y promoción del turismo, asi mismo en la administración de agencias de viajes y empresas hoteleras.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
  },
  {
    idCar: 133,
    imgSrc: ImagenesApp.imgGastronomia,
    titulo: "Gastronomía",
    descripcion:
      "Se encarga de aplicar conocimientos teórico-científico-tecnológicos con creatividad e innovación en elaboraciones culinarias y preservación de alimentos",
    area: "ÁREA URBANISMO Y TERRITORIO ",
  },
  {
    idCar: 134,
    imgSrc: ImagenesApp.imgDiseñoGrafico,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
  },
  //ÁREA AGROPECUARIA
  {
    idCar: 135,
    imgSrc: ImagenesApp.imgVeterinaria,
    titulo: "Veterinaria y Zootecnia",
    descripcion:
      "Se encarga de la protección, recuperación  y fomento de la salud animal, por otra parte de la optimización de la producción animal  en un proceso de desarrollo sostenible.",
    area: "ÁREA AGROPECUARIA ",
  },
  {
    idCar: 136,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
  },
  {
    idCar: 137,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
  },
  {
    idCar: 138,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
  },
  {
    idCar: 139,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
  },
  {
    idCar: 140,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
  },
  {
    idCar: 141,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
  },
];

export default servicios;
