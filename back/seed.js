const { Property, Categories, User } = require("./models");

let properties = [
  {
    name: "chalet con vista al mar",
    description:
      "La cala de santa cristina es unos de los más bellos parajes que ofrece la población de Blanes, pequeñas calas que hacen las delicias de cualquier amante del mar y la naturaleza, ofrece tranquilidad y bienestar. Ahora puedes disfrutar de la costa brava en todo su esplendor, sin duda unos de los lugares idílicos para vivir en plena costa brava.",
    price: 1200000,
    location: "Santa Cristina, Costa Brava, España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/130270/29064510/428684461.jpg?rule=web_1200x0_avif_50",
    categories: ["chalet", "vista al mar", "con pileta"],
  },
  {
    name: "departamento zona centrica",
    description:
      "Se trata de un piso de obra vista, una de las mejores fachadas gracias a la resitencia, consta de 2 habitaciones, las cuales dos son dobles y con salida a balcón y una de ellas en suite con bañera.",
    price: 150000,
    location: "Lloret de Mar,Costa Brava,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/90653/28841623/422051237.jpg?rule=web_1200x0_avif_50",
    categories: ["departamento", "2 habitaciones"],
  },
  {
    name: "Casa o chalet en venta en Carrer Mas Terrats, Centre",
    description:
      "Aquí lo tienes, precioso, exclusivo y ubicado privilegiadamente, donde tienes la vista de Blanes, su bahía, la inmensidad del mar con su horizonte y como no, la roca nuestra roca, Sa Palomera, que limita e indica el inicio de la Costa Brava. Espectacular y exclusivo chalé de 630 m2 de superficie útil, joven construcción del 2010 en una parcela de 800 m2., que te transportará a la tranquilidad y relajación, donde el sentir de la brisa del mar y la fragancia de la naturaleza verde te llenará de energía para afrontar con felicidad y optimismo el día, y donde te ofrecerá poder despejar la mente, ordenar las ideas, limpiar los pulmones y relajarte",
    price: 1630000,
    location: "Blanes,Costa Brava,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/130270/29064651/428686975.jpg?rule=web_1200x0_avif_50",
    categories: ["vista al mar", "chalet"],
  },
  {
    name: "Chalet en zona residencial",
    description:
      "Agradables rincones donde disfrutar todo el día: Piscina, barbacoa y una pérgola bajo una frondosa vegetación para refrescarse en los calurosos atardeceres del verano.",
    price: 750000,
    location: "Blanes,",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/107301/19883749/330282527.jpg?rule=web_1200x0_avif_50",
    categories: ["chalet", "con pileta", "urbanizacion"],
  },
  {
    name: "Departamento con licencia turistica",
    description:
      "Bonito y soleado apartamento en venta con licencia turística en venta situado en la segunda planta de edificio construido en año 2005 en municipio Lloret de mar.Este soleado piso con su buena ubicación a 250 metros de la playa en zona muy tranquila con piscina, ascensor y vídeo-vigilancia, centro medico cafeterías y tiendas de alimentación.",
    price: 164000,
    location: "LLoret de Mar,Costa Brava ,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/129042/28384136/407942185.jpg?rule=web_1200x0_avif_50",
    categories: ["departamento", "licencia turistica", "2 habitaciones"],
  },

  {
    name: "Casa o chalet en venta en Carrer Palmeres",
    description:
      "Chalet situado en la urbanización Mas Ros que se encuentra a pocos minutos del centro de Playa de Aro y playa. Ofrece la tranquilidad y entorno natural y a la vez fácil acceso a los servicios, ocio y restauración.La vivienda se distribuye en dos plantas, en planta baja se encuentra la cocina independiente, dos dormitorios dobles, dos baños y salón torreón y una salón-comedor con vistas panorámicas, en la planta uno se encuentra la habitación torreón con aseó abierto",
    price: 750000,
    location: "",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/87509/28911530/424180738.jpg?rule=web_1200x0_avif_50",
    categories: ["chalet", "licencia turistica", "con pileta"],
  },
  {
    name: "casa rustica en Golf",
    description:
      "La vivienda de una sola planta, con 4 dormitorios ( De los que uno es suite con vestidor ), 2 baños, 1 aseo, gran salón , porche con barbacoa, cocina office, gran garaje, piscina, vestidores exteriores, y gran jardín de mas de 2000 m2, con excelentes vistas al mar, y una iluminación natural excelente.Calefacción de gas-oil, ventanas y porticones de aluminio de alta calidad. Gran piscina, con sala de vestidor exterior, con baño y ducha.",
    price: 995000,
    location: "Santa Cristina,Costa Brava,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/117632/18112215/386006780.jpg?rule=web_1200x0_avif_50",
    categories: ["con pileta", "4 habitaciones", "urbanizacion"],
  },
  {
    name: "chalet en venta en Calle Sicilia, 15, Canyelles",
    description:
      "Preciosa casa con LICENCIA TURISTICA de dos plantas en la mejor zona de Lloret de Mar. Situada en la urbanización Urcasa de Cala Canyelles, tiene vistas preciosas y goza de tranquilidad y mucha paz. La casa tiene licencia turistica y es perfecta para alquilar, tiene su propia piscina y jardín, vistas despejadas, muy soleada con una terraza amplia, barbacoa, garaje. .Consta de 4 dormitorios, 2 baños y un aseo. Cocina americana totalmente equipada. Ideal para vivir tanto durante todo el año como los meses de verano. La superficie útil de casa es de unos 120m2 aproximadamente y de unos 1 100 m2 de solar.Índice de referencia de precios de alquiler:",
    price: 380000,
    location: "Lloret de mar, Costa Brava, España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/130193/28965506/426036412.jpg?rule=web_1200x0_avif_50",
    categories: [
      "licencia turistica",
      "urbanizacion",
      "con pileta",
      "4 habitaciones",
    ],
  },
  {
    name: "Piso en venta en Calle Avenir, Sant Gervasi- Galvany",
    description:
      "Excepcional piso señorial de 150m² en venta situado en una finca clásica en el corazón de Galvany, próximo al Turó Parc.Cuenta con amplio salón comedor con chimenea y zona de lectura, 4 habitaciones (3 dobles), cocina office de 15m², zona de aguas, 2 baños y 1 habitación de servicio.Situado en una cuarta planta de altura real, totalmente exterior, orientado a tres vientos. Dispone de suelos de madera natural, armarios empotrados, calefacción por radiadores y aire acondicionado por splits.Incluye plaza de parking. La finca tiene servicio de conserjería y cámaras de vigilancia 24 horas.Índice de referencia de precios de alquiler:",
    price: 845000,
    location: "Ciudad de Barcelona,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/130550/29216973/433630435.jpg?rule=web_1200x0_avif_50",
    categories: ["departamento", "4 habitaciones", "zona céntrica"],
  },
  {
    name: "Piso en venta en Calle Diputació, L'Antiga Esquerra de l'Eixample",
    description:
      "Exclusivo ático dúplex de diseño en venta de 149m² y dos espléndidas terrazas de 26m² y 7m² en el Eixample de Barcelona.Dispone de un amplio y luminoso salón comedor con cocina independiente, 1 espacioso recibidor, 2 habitaciones dobles suite (25m² y 14m² respectivamente), 2 baños completos y 1 aseo de cortesía.Excelentes acabados. Cuenta con suelos de mármol, aire acondicionado (frío - calor), calefacción a gas y carpintería exterior de aluminio. Exterior y soleado.",
    price: 1900000,
    location: "Ciudad de Barcelona,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/130550/29216915/433628708.jpg?rule=web_1200x0_avif_50",
    categories: ["atico", "2 habitaciones", "zona centrica"],
  },
  {
    name: "Piso en venta en Calle Industria, El Camp de l'Arpa del Clot",
    description:
      "FANTÁSTICO PISO DE 85 M2 TOTALMENTE REFORMADO A ESTRENAR Y CON ASCENSOR EN BARCELONA. ORIENTACIÓN SURESTE, MUY LUMINOSO Y TRANQUILO INTERIOR DE MANZANA. Entraremos en el comedor de 18 m2 con ventana orientada a sureste como todo el piso y sus vistas despejadas, justo al lado tenemos la cocina independiente minimalista de 8 m2 con todo nuevo a estrenar, lavadero de 4 m2, en la zona de dormitorios, tendremos un baño completo con ducha y nuevo a estrenar para dar servicio a las dos habitaciones exteriores (1 doble de 12 m2 y la individual grande de 8 m2), también dispondremos en la zona de paso o distribuidor de zona de noche un armario empotrado.",
    price: 350000,
    location: "Ciudad de Barcelona, España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/96827/28705257/417892586.jpg?rule=web_1200x0_avif_50",
    categories: ["departamento", "con ascensor", "3 habitaciones"],
  },
  {
    name: "Piso en venta en El Poblenou",
    description:
      "A solo 2 pasos de la Rambla Poble Nou se vende piso de a estrenar.Dispone de 2 habitaciones de las cuales 1 Suite con baño completo y la segunda habitación individual. El segundo baño también es completo con plato de ducha.Se encuentra en la primera planta sin ascensor de un edificio con una bonita fachada recién rehabilitada , orientado a patio interior.El barrio de Poblenou es el nuevo barrio de moda de Barcelona, bien comunicado por transporte, a 5 minutos andando de la playa.Ideal para disfrutar tanto del ambiente de una barrio cálido y acogedor como cosmopolita",
    price: 239000,
    location: "Ciudad de Barcelona,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/96686/27222920/372496784.jpg?rule=web_1200x0_avif_50",
    categories: ["2 habitaciones", "departamento", "zona centrica"],
  },
  {
    name: "Piso en venta en Comillas",
    description:
      "venta de inmueble exterior de 90m2 totalmente reformado, situado en una segunda planta con ascensor. Se ubica en el madrileño barrio de Comillas, distrito de Carabanchel.Consta de 3 habitaciones con armarios empotrados, 2 baños, salón-comedor, cocina abierta y 2 terrazas. En añadido, la vivienda cuenta también con calefacción, aire acondicionado y portero físico.",
    price: 345000,
    location: "Madrid,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/113541/29204682/433253788.jpg?rule=web_1200x0_avif_50",
    categories: ["3 habitaciones", "departamento", "con ascensor"],
  },
  {
    name: "Casa o chalet en venta en Mirasierra",
    description:
      "Gilmar Mirasierra & Puerta de Hierro, les ofrece magnífico Chalet Independiente en Mirasierra de 700 m2 construidos sobre parcela de 726 m2 con jardín de 500 m2 y piscina. La vivienda esta repartida en 3 alturas. Cuenta con 5 dormitorios, 4 baños, gran salón-comedor, extraordinarias vistas",
    price: 2850000,
    location: "Madrid,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/100207/28555418/413100178.jpg?rule=web_1200x0_avif_50",
    categories: ["chalet", "con pileta", "4 dormitorios"],
  },
  {
    name: "Casa adosada en venta en La Florida - El Plantío",
    description:
      "Locativo tiene el privilegio de vender en autopromoción este exclusivo chalet pareado de 262,67 m2 de parcela, 300,96 m2 de superficie construidos y 206,83 m2 de superficie útil.Planta baja con 2 plazas de garaje, armario, sala de instalaciones, distribuidor y escalera, además de patio, acceso al sótano y rampa de garaje.Primera planta con hall, escalera, distribuidor, salón comedor, cocina y 1 baño. En esa misma planta los exteriores cuentan con acceso a la vivienda, porche que da a la cocina, solado, terraza, jardín y piscina.",
    price: 865000,
    location: "Madrid,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/111687/29014036/432192257.jpg?rule=web_1200x0_avif_50",
    categories: ["con pileta", "3 habitaciones", "chalet", "urbanizacion"],
  },
  {
    name: "Casa o chalet en venta en Conde Orgaz - Piovera",
    description:
      "Planta principal: Hall de entrada, aseo de visitas, GRAN salón muy luminoso dividido en tres ambientes, uno de ellos con chimenea, ORIENTADO A jardín Y PORCHE. Comedor independiente. Cocina con zona office y salida A patio delantero. Tres dormitorios, uno de ellos con baño en suite, y otros dos comparten un amplio baño.Planta primera: MASTER SUITE dividida en tres ambientes: zona de descanso con amplio vestidor, cuarto de estar y zona despacho con chimenea y salida a dos terrazas. Cuarto de baño con vistas al jardín.Planta sótano: Gran garaje para 6 coches. Gimnasio, cuarto de juegos, home cinema, lavandería, cuarto de plancha, dormitorio de invitados con baño en suite. Dormitorio de servicio, Bodega, despensa y tres trasteros. Jardín de diseño con piscina climatizada.",
    price: 7000000,
    location: "Madrid,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/128184/27861391/384224400.jpg?rule=web_1200x0_avif_50",
    categories: ["chalet", "con pileta", "6 habitaciones"],
  },
  {
    name: "Casa o chalet en venta en Mirasierra 2",
    description:
      "Gilmar Mirasierra & Puerta de Hierro, le presenta este excepcional chalet independiente de 561m2 construidos ubicado en la Colonia de Mirasierra, zona residencial con todos sus atractivos y a escasos minutos del centro de la ciudad.De reciente construcción, con las más altas calidades y con la misión de crear un hogar confortable, en unión con la naturaleza que le rodea y regado de cada rayo de luz. Para este fin, la vivienda goza de grandes ventanales a través de los cuales puede disfrutar de bonitas e impecables vistas desde todas sus estancias. Las ventanas son semi blindadas con alto aislamiento tanto térmico como acústico. La amplitud de sus espacios es otra de las características esenciales de este bonito chalet.",
    price: 2700000,
    location: "Madrid,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/100207/28200871/406315954.jpg?rule=web_1200x0_avif_50",
    categories: ["chalet", "con pileta", "6 habitaciones"],
  },
  {
    name: "Casa adosada en venta en Arroyo del Fresno",
    description:
      "chalet adosado casi a estrenar ubicado en una urbanización cerrada con zona común verde y con piscina, en la nueva zona de Arroyo del Fresno.Su construcción es de 2020, con las máximas calidades y máxima eficiencia energética, con suelo radiante y refrigerante por aerotermia y ventilación mecánica. Tiene casi 300 m2 construidos sobre parcela de 212m2. Repartido en 4 plantas, cuenta con 6 dormitorios, 6 baños, 2 salones, 1 cocina, 2 plazas de garaje y trastero.Destaca por su maravillosa luminosidad, por su comodidad y por su tranquilidad y privacidad. Su orientación es sur y la vivienda está rodeada por grandes ventanales.",
    price: 1290000,
    location: "Madrid,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/100207/28627304/415526919.jpg?rule=web_1200x0_avif_50",
    categories: ["urbanizacion", "casa adosada", "con pileta"],
  },
  {
    name: "Casa adosada en venta en Peñagrande",
    description:
      "Singular chalet de 513 m² en una parcela de 322 m² con 6 dormitorios, 5 baños y 3 salones. Es perfecto para una gran familia, que quiera disfrutar tanto de amplios espacios individuales como espacios para compartir en familia. En la planta de entrada se encuentra un soleado salón orientado al sur, una gran cocina reformada con isla y almacenaje de gran capacidad Moretti, encimera Silestone®, y completa con todos los electrodomésticos de primeras líneas: placa Bosch de inducción, campana Gutmann de techo de gran formato, 2 hornos NEFF de inducción encastrados en columna, frigorífico Liebherr side-by-side, cafetera expresso Balay encastrada, lavavasos y lavaplatos integrado. Todo lo necesario para disfrutar juntos tanto en la cocina como en el porche con su salida directa",
    price: 990000,
    location: "Madrid,España",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/100207/27619359/379952715.jpg?rule=web_1200x0_avif_50",
    categories: ["casa adosada", "chalet", "6 habitaciones"],
  },
  {
    name: "Piso en venta en Castilla",
    description:
      "La vivienda cuenta con 131 m², distribuidos en 3 amplios dormitorios (antes 4), 2 cuartos de baño, salón y cocina.El estado de la vivienda es impecable y es muy luminoso.Una plaza de garaje incluida en el precio.",
    price: 575000,
    location: "",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/89526/28661565/416562643.jpg?rule=web_1200x0_avif_50",
    categories: ["3 habitaciones", "departamento", "ascensor"],
  },
];
let categories = [
  "3 habitaciones",
  "departamento",
  "ascensor",
  "chalet",
  "casa adosada",
  "6 habitaciones",
  "urbanizacion",
  "con pileta",
  "4 habitaciones",
  "vista al mar",
  "2 habitaciones",
  "licencia turistica",
  "zona centrica",
  "atico",
];

categories.forEach((category) => {
  Categories.create({ name: category });
});

properties.forEach(async (property) => {
  let { name, description, price, location, image, categories } = property;
  Property.findOrCreate({
    where: { name: property.name },
    defaults: {
      name,
      description,
      price,
      location,
      image,
    },
  })
    .then((prop) => {
      console.log("prop", prop);
      categories.forEach((cat) => {
        Categories.findOne({
          where: { name: cat },
        }).then((catego) => {
          console.log("magic method addCategory", prop[0].addCategory(catego));
        });
      });
    })
    .catch((e) => console.log(e));
});

User.create({
  name: "Sebastian Arias",
  email: "sebastian.arias4214@gmail.com",
  password: "1234",
  isAdmin: "SAdmin",
});
