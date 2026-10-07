const A = p => (document.body.dataset.root || "") + p;
/* =====================================================================
   SITIO ESTÁTICO (GitHub): cada sección es una página propia
   ===================================================================== */
const STATIC = document.body.dataset.static === "1";
const ROOT = document.body.dataset.root || "";
const SITE_URL = document.body.dataset.site || "";
function $id(id){
  const el = document.getElementById(id); if (el) return el;
  return document.createElement(/Video$/.test(id) ? "video" : id === "quoteForm" ? "form" : "div");
}
function isView(v){ const el = document.querySelector(`[data-view="${v}"]`); return !!el && !el.hidden; }
const ROUTE_PATH = { "trabajemos-juntos":"contacto" };
function pathFor(r){
  const [view, ...rest] = r.split("/");
  const p = [ROUTE_PATH[view] || view, ...rest].filter(Boolean).join("/");
  return ROOT + (p ? p + "/" : "");
}
function fixLinks(){
  if (!STATIC) return;
  document.querySelectorAll('a[href^="#/"]').forEach(a => a.setAttribute("href", pathFor(a.getAttribute("href").slice(2))));
}
if (STATIC && location.hash.startsWith("#/")) location.replace(pathFor(location.hash.slice(2)));

/* =====================================================================
   DATOS DEL SITIO — se edita SOLO aquí y se actualiza en todas partes
   (slider, grillas, fichas, premios y equipo).
   ===================================================================== */
/* Video del Hub 1000: pega aquí el archivo cuando esté listo (mp4 sin audio) */
const HUB_VIDEO = A("hub.mp4");
const HUB_POSTER = A("assets/poster-hub.jpg");

/* Espacios del Hub 1000: x / y en píxeles sobre el plano (1586 × 992) */
const HUB_SPACES = [
  { id:"entrada", x:150, y:770, here:true, name:{es:"Entrada",en:"Entrance"},
    text:{es:"Acceso al terreno. Desde aquí comienza el recorrido por el hub.", en:"Access to the grounds, where the tour of the hub begins."} },
  { id:"estacionamiento", x:390, y:800, name:{es:"Estacionamiento",en:"Parking"},
    text:{es:"Estacionamiento del hub, junto a la entrada.", en:"The hub's parking area, next to the entrance."} },
  { id:"sector-1", x:540, y:235, name:{es:"Sector 1",en:"Sector 1"},
    text:{es:"Primer sector de producción del terreno.", en:"The first production sector of the grounds."} },
  { id:"sector-2", x:930, y:300, name:{es:"Sector 2",en:"Sector 2"},
    text:{es:"Segundo sector de producción del terreno.", en:"The second production sector of the grounds."} },
  { id:"casona", x:790, y:655, name:{es:"Container / Casona",en:"Containers / Main house"},
    text:{es:"Containers y casona, al centro del terreno.", en:"Containers and the main house, at the center of the grounds."} },
  { id:"juegos", x:1230, y:580, name:{es:"Sector juegos",en:"Games sector"},
    text:{es:"Sector destinado a los juegos y pruebas de los formatos.", en:"Area for the formats' games and challenges."} }
];

const ICON_PAUSE = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="3" y="2" width="3.5" height="12" fill="currentColor"/><rect x="9.5" y="2" width="3.5" height="12" fill="currentColor"/></svg>';
const ICON_PLAY = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 2l10 6-10 6z" fill="currentColor"/></svg>';
/* Videos: portadas y carpeta (en la vista publicada no se incluyen los archivos de video) */
const VIDEO_POSTERS = {"actitud-re-1":A("assets/videos/actitud-re-1.jpg"),"actitud-re-2":A("assets/videos/actitud-re-2.jpg"),"almacen":A("assets/videos/almacen.jpg"),"aqui-somos-todos-100":A("assets/videos/aqui-somos-todos-100.jpg"),"bilz-y-pap-cocina":A("assets/videos/bilz-y-pap-cocina.jpg"),"bilz-y-pap-rocket-league":A("assets/videos/bilz-y-pap-rocket-league.jpg"),"bilz-y-pap-volcan":A("assets/videos/bilz-y-pap-volcan.jpg"),"carozzi-making-of-2021":A("assets/videos/carozzi-making-of-2021.jpg"),"conexion-unica":A("assets/videos/conexion-unica.jpg"),"copa-culinaria-promo-cap2":A("assets/videos/copa-culinaria-promo-cap2.jpg"),"copa-culinaria":A("assets/videos/copa-culinaria.jpg"),"descubre-chile":A("assets/videos/descubre-chile.jpg"),"digitalizados":A("assets/videos/digitalizados.jpg"),"ident-neon":A("assets/videos/ident-neon.jpg"),"in-situ":A("assets/videos/in-situ.jpg"),"juan-valdez":A("assets/videos/juan-valdez.jpg"),"juego-contra-fuego":A("assets/videos/juego-contra-fuego.jpg"),"miller-music":A("assets/videos/miller-music.jpg"),"musicalismo":A("assets/videos/musicalismo.jpg"),"pan-comido":A("assets/videos/pan-comido.jpg"),"planvital":A("assets/videos/planvital.jpg"),"rapidos-y-sabrosos":A("assets/videos/rapidos-y-sabrosos.jpg"),"reel-cm":A("assets/videos/reel-cm.jpg"),"reset":A("assets/videos/reset.jpg"),"san-jose-1":A("assets/videos/san-jose-1.jpg"),"san-jose-2":A("assets/videos/san-jose-2.jpg"),"taller-cnc":A("assets/videos/taller-cnc.jpg"),"vecinos-al-limite":A("assets/videos/vecinos-al-limite.jpg")};
const VIDEO_BASE = A("videos/");
const THUMB = { aqui: A("assets/th_aqui.jpg"), sabados: A("assets/th_sabados.jpg") };
const IMG = { tierra: A("assets/tierra.jpg"), ganar: A("assets/ganar.jpg"), mundos: A("assets/mundos.jpg") };

const SHOWS = [
  { slug:"mundos-opuestos", title:"Mundos Opuestos", channel:"Canal 13", ch:"c13", country:"Chile", type:"reality", featured:true, img:IMG.mundos, pos:"center 40%",
    short:{es:"Nueva versión del clásico formato de convivencia.", en:"A new take on the classic cohabitation format."},
    body:{es:"La nueva versión del clásico formato de convivencia de la televisión chilena, producida por CookingMedia para Canal 13.", en:"The new version of Chilean television's classic cohabitation format, produced by CookingMedia for Canal 13."},
    highlight:{es:"Mejor Reality de Competencia en los Rose d'Or Latinos 2026.", en:"Best Competition Reality at the Rose d'Or Latinos 2026."},
    award:"rose-dor-2026",
    link:{ url:"https://matildabotto.github.io/MO4/", label:{es:"Ver micrositio de Mundos Opuestos", en:"Visit the Mundos Opuestos microsite"} } },
  { slug:"tierra-brava", title:"Tierra Brava", channel:"Canal 13", ch:"c13", country:"Chile", type:"reality", featured:true, img:IMG.tierra, pos:"center 28%",
    short:{es:"Convivencia extrema entre el lujo y la precariedad.", en:"Extreme cohabitation between luxury and hardship."},
    body:{es:"Una convivencia extrema en una casa dividida entre el lujo y la precariedad, donde las competencias físicas definían quién accedía a los privilegios.", en:"Extreme cohabitation in a house split between luxury and hardship, where physical challenges decided who earned the privileges."},
    highlight:{es:"Seis meses de liderazgo en su franja.", en:"Six months leading its time slot."},
    extra:{es:"Coproducido junto a Latina Televisión. Su alcance digital superó los 17,1 millones en Instagram, 2,2 millones en Facebook y 1,8 millones en TikTok.", en:"Co-produced with Latina Televisión. Its digital reach exceeded 17.1 million on Instagram, 2.2 million on Facebook and 1.8 million on TikTok."} },
  { slug:"ganar-o-servir", title:"¿Ganar o Servir?", channel:"Canal 13", ch:"c13", country:"Chile", type:"reality", featured:true, img:IMG.ganar, pos:"center 28%",
    short:{es:"Dieciséis participantes viviendo como hace 200 años.", en:"Sixteen contestants living as they did 200 years ago."},
    body:{es:"Dieciséis participantes vivieron como hace 200 años, divididos entre señores y sirvientes, enfrentándose en pruebas por privilegios y poder.", en:"Sixteen contestants lived as people did 200 years ago, split between masters and servants, facing challenges for privilege and power."},
    highlight:{es:"Líder del prime chileno desde su debut.", en:"Leader of Chilean prime time since its debut."} },
  { slug:"aqui-somos-todos", title:"Aquí Somos Todos", channel:"Canal 13", ch:"c13", country:"Chile", type:"vivo", thumb:THUMB.aqui,
    videos:[{ f:"aqui-somos-todos-100", t:{es:"Capítulo 100", en:"Episode 100"} }],
    short:{es:"Las urgencias del Chile real, resueltas en vivo.", en:"Real Chile's urgent needs, solved live."},
    body:{es:"Un programa social que visibilizó las urgencias del Chile real y movilizó una red ciudadana para entregar soluciones concretas en vivo.", en:"A social program that brought real Chile's urgent needs to light and mobilized a citizen network to deliver concrete solutions live."},
    highlight:{es:"Al aire todos los días desde 2020.", en:"On air every day since 2020."} },
  { slug:"sabados-en-familia", title:"Sábados en Familia", channel:"Latina Televisión", ch:"pe", country:"Perú", type:"game", seasons:2, thumb:THUMB.sabados,
    highlight:{es:"Estrenado en agosto de 2022 y conducido por Mathías Brivio.", en:"Premiered in August 2022, hosted by Mathías Brivio."},
    short:{es:"Dos familias completas compiten por un gran premio.", en:"Two whole families compete for a big prize."},
    body:{es:"Dos familias completas se enfrentaban en entretenidas pruebas físicas, mentales y de resistencia para conquistar un gran premio.", en:"Two whole families faced off in fun physical, mental and endurance challenges to win a big prize."} },
  { slug:"palabra-de-honor", title:"Palabra de Honor", channel:"Canal 13", ch:"c13", country:"Chile", type:"reality",
    short:{es:"Reality de lealtad y traición.", en:"A reality of loyalty and betrayal."},
    body:{es:"Reality de lealtad y traición producido junto a Latina Televisión.", en:"A reality of loyalty and betrayal produced with Latina Televisión."} },
  { slug:"vecinos-al-limite", title:"Vecinos al Límite", img:VIDEO_POSTERS["vecinos-al-limite"], pos:"center 32%", thumb:VIDEO_POSTERS["vecinos-al-limite"], channel:"Canal 13", ch:"c13", country:"Chile", type:"reality",
    short:{es:"Cuatro casas, cuatro equipos, un mismo barrio.", en:"Four houses, four teams, one neighborhood."},
    body:{es:"Cuatro casas, cuatro equipos y un mismo barrio, producido en un nuevo hub en Calera de Tango.", en:"Four houses, four teams and one neighborhood, produced at a new hub in Calera de Tango."} },
  { slug:"la-granja-vip", title:"La Granja VIP", channel:"Panamericana TV", ch:"pe", country:"Perú", type:"reality",
    short:{es:"Supervivencia con famosos en una granja real.", en:"Celebrities surviving on a real farm."},
    body:{es:"Reality de supervivencia con famosos en una granja real, producido para Panamericana TV.", en:"A survival reality with celebrities on a real farm, produced for Panamericana TV."} },
  { slug:"bilz-y-pap", title:"Bilz y Pap", type:"branded", thumb:VIDEO_POSTERS["bilz-y-pap-cocina"],
    short:{es:"Cocina en familia y gaming para la marca.", en:"Family cooking and gaming for the brand."},
    body:{es:"Contenidos de marca para Bilz y Pap: cocina en familia con los más chicos, experimentos y transmisiones de gaming.", en:"Branded content for Bilz y Pap: family cooking with kids, experiments and gaming streams."},
    videos:[{ f:"bilz-y-pap-cocina", t:{es:"Cocina en familia, capítulo 4", en:"Family cooking, episode 4"} }, { f:"bilz-y-pap-rocket-league", t:{es:"Rocket League", en:"Rocket League"} }, { f:"bilz-y-pap-volcan", t:{es:"Volcán de espuma", en:"Foam volcano"} }] },
  { slug:"miller-music", title:"Miller Music", type:"branded", thumb:VIDEO_POSTERS["miller-music"],
    short:{es:"Concurso musical con grabación en estudio profesional.", en:"Music contest with professional studio recording."},
    body:{es:"Concurso musical de Miller que invitó a nuevos talentos a grabar en un estudio profesional.", en:"A Miller music contest that invited new talent to record in a professional studio."},
    videos:[{ f:"miller-music", t:{es:"Miller Music", en:"Miller Music"} }] },
  { slug:"descubre-chile", title:"Descubre Chile", channel:"13C", ch:"c13", country:"Chile", type:"vivo", thumb:VIDEO_POSTERS["descubre-chile"],
    short:{es:"Un recorrido por las rutas de Chile.", en:"A journey along Chile's roads."},
    body:{es:"Un recorrido en auto por las rutas de Chile para descubrir sus paisajes.", en:"A road trip along Chile's routes to discover its landscapes."},
    videos:[{ f:"descubre-chile", t:{es:"Opening", en:"Opening"} }] },
  { slug:"digitalizados", title:"Digitalizados", channel:"Chilevisión", ch:"mega", country:"Chile", type:"vivo", seasons:3, thumb:VIDEO_POSTERS["digitalizados"],
    short:{es:"Negocios que crecen con tecnología.", en:"Businesses growing with technology."},
    body:{es:"Programa sobre negocios que se potencian con tecnología, ya en su tercera temporada.", en:"A show about businesses empowered by technology, now in its third season."},
    videos:[{ f:"digitalizados", t:{es:"Opening", en:"Opening"} }] },
  { slug:"conexion-unica", title:"Conexión Única", type:"branded", thumb:VIDEO_POSTERS["conexion-unica"],
    short:{es:"Conversaciones a distancia con las mascotas como protagonistas.", en:"Remote conversations starring pets."},
    body:{es:"Conversaciones a distancia que tienen a las mascotas como protagonistas.", en:"Remote conversations where pets are the stars."},
    videos:[{ f:"conexion-unica", t:{es:"Conexión Única", en:"Conexión Única"} }] },
  { slug:"in-situ", title:"In Situ", channel:"Base Pública", type:"vivo", thumb:VIDEO_POSTERS["in-situ"],
    short:{es:"Entrevistas en terreno para Base Pública.", en:"On-location interviews for Base Pública."},
    body:{es:"Serie de entrevistas en terreno producida para Base Pública.", en:"A series of on-location interviews produced for Base Pública."},
    videos:[{ f:"in-situ", t:{es:"Promo de temporada", en:"Season promo"} }] },
  { slug:"reset", title:"Reset", type:"vivo", thumb:VIDEO_POSTERS["reset"],
    short:{es:"Promoción de temporada.", en:"Season promo."},
    body:{es:"Promoción de la temporada de Reset, producida por Cooking Media.", en:"Season promo for Reset, produced by Cooking Media."},
    videos:[{ f:"reset", t:{es:"Promo de temporada", en:"Season promo"} }] },
  { slug:"actitud-re", title:"#Actitud RE", type:"branded", thumb:VIDEO_POSTERS["actitud-re-1"],
    short:{es:"Campaña de contenido sobre reciclaje.", en:"Content campaign about recycling."},
    body:{es:"Campaña de contenido que invita a reciclar y reutilizar.", en:"A content campaign encouraging people to recycle and reuse."},
    videos:[{ f:"actitud-re-1", t:{es:"#Actitud RE", en:"#Actitud RE"} }, { f:"actitud-re-2", t:{es:"#Actitud RE, segunda pieza", en:"#Actitud RE, second spot"} }] },
  { slug:"pan-comido", title:"Pan Comido", channel:"Mega", ch:"mega", country:"Chile", type:"vivo", thumb:VIDEO_POSTERS["pan-comido"],
    short:{es:"Programa culinario de Mega.", en:"A Mega cooking show."},
    body:{es:"Programa culinario de Mega que recorre cocinas, sabores y a quienes los preparan.", en:"A Mega cooking show exploring kitchens, flavors and the people behind them."},
    videos:[{ f:"pan-comido", t:{es:"Opening", en:"Opening"} }] },
  { slug:"rapidos-y-sabrosos", title:"Rápidos y Sabrosos", channel:"Mega", ch:"mega", country:"Chile", type:"vivo", thumb:VIDEO_POSTERS["rapidos-y-sabrosos"],
    short:{es:"Programa de cocina de Mega.", en:"A Mega cooking show."},
    body:{es:"Programa de cocina de Mega con recetas rápidas y sabrosas.", en:"A Mega cooking show with quick and tasty recipes."},
    videos:[{ f:"rapidos-y-sabrosos", t:{es:"Opening", en:"Opening"} }] },
  { slug:"san-jose", title:"San José", type:"branded", thumb:VIDEO_POSTERS["san-jose-2"],
    short:{es:"Recetas paso a paso para la marca.", en:"Step-by-step recipes for the brand."},
    body:{es:"Recetas paso a paso protagonizadas por los productos San José.", en:"Step-by-step recipes starring San José products."},
    videos:[{ f:"san-jose-1", t:{es:"Sándwich", en:"Sandwich"} }, { f:"san-jose-2", t:{es:"Pasta con salsa", en:"Pasta with sauce"} }] },
  { slug:"juan-valdez", title:"Juan Valdez", type:"branded", thumb:VIDEO_POSTERS["juan-valdez"],
    short:{es:"Spot navideño solidario.", en:"Charity Christmas spot."},
    body:{es:"Spot de Navidad: comprando productos Juan Valdez entre el 3 y el 25 de diciembre, los clientes ayudaban a una fundación.", en:"Christmas spot: buying Juan Valdez products between December 3 and 25 helped support a foundation."},
    videos:[{ f:"juan-valdez", t:{es:"Spot de Navidad", en:"Christmas spot"} }] },
  { slug:"planvital", title:"PlanVital", type:"branded", thumb:VIDEO_POSTERS["planvital"],
    short:{es:"Spot del Día de la Madre.", en:"Mother's Day spot."},
    body:{es:"Spot del Día de la Madre que cuenta la historia de la mamá de un árbitro de fútbol.", en:"A Mother's Day spot telling the story of a football referee's mother."},
    videos:[{ f:"planvital", t:{es:"Día de la Madre", en:"Mother's Day"} }] },
  { slug:"musicalismo", title:"Musicalismo", brand:"Caja Los Andes", type:"musical", country:"Chile", img:VIDEO_POSTERS["musicalismo"], pos:"center 35%", thumb:VIDEO_POSTERS["musicalismo"],
    link:{ url:"https://cookingmediacl.github.io/MUSICALISMO/", label:{es:"Ver sitio de Musicalismo", en:"Visit the Musicalismo site"} },
    link2:{ url:"https://open.spotify.com/album/2NtdI41amYHLM0gPs9Kpbt", label:{es:"Escuchar el disco en Spotify", en:"Listen to the album on Spotify"} },
    short:{es:"Sergio Lagos en vivo, junto a Caja Los Andes.", en:"Sergio Lagos live, with Caja Los Andes."},
    body:{es:"Espectáculo en vivo de Sergio Lagos con las canciones que amamos cantar, presentado como una experiencia junto a Caja Los Andes.", en:"Sergio Lagos' live show of the songs we love to sing, presented as an experience with Caja Los Andes."},
    highlight:{es:"Disco 2026 de 12 canciones, de “Dilo calladito” a “Y volveré”.", en:"A 12-song 2026 album, from “Dilo calladito” to “Y volveré”."},
    extra:{es:"En el video final la marca abre y cierra el espectáculo, y durante las canciones aparece solo como un sello pequeño: el show manda, la marca firma.", en:"In the final video the brand opens and closes the show and appears only as a small seal during the songs: the show leads, the brand signs."} },
  { slug:"almacen", title:"Almacén", channel:"Mega", ch:"mega", country:"Chile", type:"reality", seasons:3, thumb:VIDEO_POSTERS["almacen"],
    extra:{es:"Conducción de Mariana Derderián y producción ejecutiva de Rodrigo Bustos.", en:"Hosted by Mariana Derderián, executive produced by Rodrigo Bustos."},
    videos:[{ f:"almacen", t:{es:"Almacén", en:"Almacén"} }],
    short:{es:"Reality en su tercera temporada al aire.", en:"A reality now in its third season."},
    body:{es:"Reality en su tercera temporada al aire por Mega.", en:"A reality in its third season on Mega."} },
  { slug:"copa-culinaria-carozzi", title:"Copa Culinaria Carozzi", channel:"Mega", ch:"mega", country:"Chile", type:"branded", seasons:2, thumb:VIDEO_POSTERS["copa-culinaria"],
    videos:[{ f:"copa-culinaria", t:{es:"Copa Culinaria", en:"Copa Culinaria"} }, { f:"carozzi-making-of-2021", t:{es:"Making of Carozzi 2021", en:"Carozzi making-of 2021"} }, { f:"copa-culinaria-promo-cap2", t:{es:"Promo capítulo 2", en:"Episode 2 promo"} }],
    short:{es:"Branded content culinario junto a Carozzi.", en:"Culinary branded content with Carozzi."},
    body:{es:"Branded content culinario desarrollado junto a Carozzi, ya en su segunda temporada.", en:"Culinary branded content developed with Carozzi, now in its second season."} },
  { slug:"juego-contra-fuego", title:"Juego Contra Fuego", channel:"Canal 13", ch:"c13", country:"Chile", type:"branded", thumb:VIDEO_POSTERS["juego-contra-fuego"],
    videos:[{ f:"juego-contra-fuego", t:{es:"Juego Contra Fuego", en:"Juego Contra Fuego"} }],
    short:{es:"Competencia bajo presión con foco culinario.", en:"A high-pressure culinary competition."},
    body:{es:"Formato de competencia bajo presión con foco culinario.", en:"A competition format under pressure with a culinary focus."} },
];

const TYPES = { reality:{es:"Reality show",en:"Reality show"}, game:{es:"Game show",en:"Game show"}, vivo:{es:"Programa de TV",en:"TV show"}, musical:{es:"Espectáculo musical",en:"Music show"}, branded:{es:"Branded content",en:"Branded content"} };

const AWARDS = [
  { id:"rose-dor-2026", date:{es:"Enero 2026",en:"January 2026"}, show:"mundos-opuestos",
    title:{es:"Rose d'Or Latinos: Mejor Reality de Competencia", en:"Rose d'Or Latinos: Best Competition Reality"},
    text:{es:"Mundos Opuestos ganó en la tercera edición de los Rose d'Or Latinos, entregados en Miami durante Content Americas. Fue la única estatuilla para Chile esa noche.", en:"Mundos Opuestos won at the third Rose d'Or Latinos, presented in Miami during Content Americas. It was Chile's only award that night."} }
];


const TEAM_GROUPS = [ { id:"cm", name:"Cooking Media" }, { id:"trim", name:"Trim Post", logo:A("assets/trim.png") } ];
const TEAM = [
  { group:"cm", name:"Rodrigo Bustos", photo:A("assets/p_rodrigo.jpg"), role:{es:"CEO Cooking Media", en:"CEO, Cooking Media"},
    bio:{es:"Productor y Magíster en Innovación por la Universidad de Salamanca. Tras 11 años liderando negocios multiplataforma en Canal 13, fundó Cooking Media en 2017 con el foco puesto en innovación, contenidos y nuevas formas de conectar con las audiencias.", en:"Producer with a Master's in Innovation from the University of Salamanca. After 11 years leading multiplatform business at Canal 13, he founded Cooking Media in 2017 with a focus on innovation, content and new ways to connect with audiences."} },
  { group:"cm", name:"Camilo Chávez", photo:A("assets/p_camilo.jpg"), role:{es:"Productor General", en:"General Producer"},
    bio:{es:"Comunicador Audiovisual y Magíster en Marketing PUC, con más de 15 años de experiencia en televisión. Desde 2018 forma parte de Cooking Media, liderando producciones de realities y branded content para grandes audiencias.", en:"Audiovisual communicator with a Master's in Marketing from PUC and over 15 years in television. At Cooking Media since 2018, leading reality and branded content productions for large audiences."} },
  { group:"cm", name:"Rodrigo Méndez", role:{es:"Director Financiero", en:"Chief Financial Officer"},
    bio:{es:"Ingeniero en Administración con formación ejecutiva en la Universidad de Chile. Lidera la estrategia financiera del grupo, la evaluación de inversiones y presupuestos, además del desarrollo de nuevos modelos de negocio y operaciones.", en:"Business engineer with executive training at the University of Chile. He leads the group's financial strategy, investment and budget evaluation, and the development of new business models and operations."} },
  { group:"cm", name:"Mauricio Muñoz Zanocco", role:{es:"Jefe de Finanzas, RR.HH. e Impuestos", en:"Head of Finance, HR and Tax"},
    bio:{es:"Contador Auditor de la Universidad de Santiago con 30 años de experiencia. Desde 2019 lidera en Cooking Media las áreas financiera, contable, tributaria y de RR.HH., acompañando la gestión de sus distintas producciones.", en:"Certified public accountant from the University of Santiago with 30 years of experience. Since 2019 he has led Cooking Media's finance, accounting, tax and HR areas, supporting the management of its productions."} },
  { group:"cm", name:"Geraldine Núñez", photo:A("assets/p_geraldine.jpg"), role:{es:"Periodista de Contenidos", en:"Content Journalist"},
    bio:{es:"Responsable del desarrollo editorial y la construcción de contenidos, transformando los atributos de cada proyecto en relatos claros, cercanos y de valor.", en:"Leads editorial development, turning each project's strengths into clear, relatable and valuable stories."} },
  { group:"trim", name:"Paulina Zúñiga", role:{es:"Directora de Postproducción", en:"Post-production Director"},
    bio:{es:"Directora de Postproducción con más de 20 años de experiencia en televisión. En Cooking Media lidera la estrategia y operación de postproducción, coordinando equipos creativos y técnicos para proyectos de distintos formatos.", en:"Post-production director with over 20 years in television. At Cooking Media she leads post-production strategy and operations, coordinating creative and technical teams across formats."} }
];

const CLIENT_LOGOS = {"achs":A("assets/clientes/achs.png"),"agrosuper":A("assets/clientes/agrosuper.png"),"base-publica":A("assets/clientes/base-publica.png"),"bilz-y-pap":A("assets/clientes/bilz-y-pap.png"),"canal-13":A("assets/clientes/canal-13.png"),"carozzi":A("assets/clientes/carozzi.png"),"coca-cola":A("assets/clientes/coca-cola.png"),"consalud":A("assets/clientes/consalud.png"),"entel":A("assets/clientes/entel.png"),"hites":A("assets/clientes/hites.png"),"iansa":A("assets/clientes/iansa.png"),"juan-valdez":A("assets/clientes/juan-valdez.png"),"mega":A("assets/clientes/mega.png"),"miller":A("assets/clientes/miller.png"),"nestle":A("assets/clientes/nestle.png"),"nike":A("assets/clientes/nike.png"),"planvital":A("assets/clientes/planvital.png"),"red-bull":A("assets/clientes/red-bull.png"),"san-jose":A("assets/clientes/san-jose.png"),"sodimac":A("assets/clientes/sodimac.png"),"soprole":A("assets/clientes/soprole.png"),"tottus":A("assets/clientes/tottus.png"),"warner-media":A("assets/clientes/warner-media.png"),"wom":A("assets/clientes/wom.png")};
/* Trabajos por marca (los demás clientes se muestran sin botón hasta tener material) */
const BRAND_WORKS = {
  "carozzi": () => ["copa-culinaria-carozzi"],
  "bilz-y-pap": () => ["bilz-y-pap"],
  "miller": () => ["miller-music"],
  "planvital": () => ["planvital"],
  "base-publica": () => ["in-situ"],
  "juan-valdez": () => ["juan-valdez"],
  "san-jose": () => ["san-jose"],
  "caja-los-andes": () => ["musicalismo"],
  "canal-13": () => SHOWS.filter(s => s.ch === "c13" && /13/.test(s.channel || "")).map(s => s.slug),
  "mega": () => SHOWS.filter(s => s.channel === "Mega").map(s => s.slug)
};
const SMALL_LOGOS = ["nike","red-bull","juan-valdez","san-jose"];
const CLIENTS = [["sodimac","Sodimac"],["hites","Hites"],["nestle","Nestlé"],["carozzi","Carozzi"],["bilz-y-pap","Bilz y Pap"],["achs","ACHS"],["miller","Miller"],["canal-13","Canal 13"],
  ["mega","Mega"],["warner-media","Warner Media"],["coca-cola","Coca-Cola"],["entel","Entel"],["tottus","Tottus"],["iansa","Iansa"],["planvital","PlanVital"],["soprole","Soprole"],
  ["agrosuper","Agrosuper"],["wom","WOM"],["base-publica","Base Pública"],["consalud","Consalud"],["nike","Nike"],["red-bull","Red Bull"],["juan-valdez","Juan Valdez"],["san-jose","San José"],["caja-los-andes","Caja Los Andes"]];


/* =====================================================================
   IDIOMA
   ===================================================================== */
let lang = "es";
try { lang = localStorage.getItem("cm-lang") || "es"; } catch(e){}
const t = o => (o && typeof o === "object") ? (o[lang] || o.es) : o;
const L = (es,en) => lang === "en" ? en : es;

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en]").forEach(el => {
    if (!el.dataset.es) el.dataset.es = el.innerHTML;
    el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.es;
  });
  $id("langBtn").textContent = lang === "en" ? "ES" : "EN";
  $id("langBtn").setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
}

/* =====================================================================
   COMPONENTES
   ===================================================================== */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function card(s){
  const pic = s.thumb || s.img;
  const visual = pic ? `<div class="pcard-img" style="background-image:url('${pic}');background-position:${s.pos || "center"}"></div>`
                     : `<div class="pcard-img"><div class="poster" aria-hidden="true"><span>${esc(s.title)}</span></div></div>`;
  const genre = [t(TYPES[s.type]), s.channel || s.brand].filter(Boolean).join(" / ");
  return `<a class="pcard" href="#/programa/${s.slug}">${visual}<div class="pcard-body">
    <h3>${esc(s.title)}</h3><span class="pcard-genre">${esc(genre)}</span><p>${esc(t(s.body))}</p>
    <span class="pcard-more">${L("Ver ficha","View details")}</span></div></a>`;
}

function newsRow(n){
  return `<article class="news-item"><time>${esc(t(n.date))}</time><div>
    <h3><a href="${n.link}" style="text-decoration:none">${esc(t(n.title))}</a></h3><p>${esc(t(n.text))}</p></div></article>`;
}

/* Índice editorial de programas (versión editorial) con vista previa al pasar el mouse */
function renderIndex(){
  const el = $id("showIndex"); if (!el) return;
  el.innerHTML = SHOWS.map((s,i) => `<a class="ix-row" href="#/programa/${s.slug}" data-i="${i}">
      <span class="ix-n">${String(i+1).padStart(2,"0")}</span><span class="ix-name">${esc(s.title)}</span>
      <span class="ix-meta">${esc(s.channel)} / ${esc(t(TYPES[s.type]))}</span></a>`).join("")
    + `<div class="ix-preview" id="ixPrev" aria-hidden="true"></div>`;
}
if (matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mouseover", e => {
    const row = e.target.closest(".ix-row"), prev = $id("ixPrev"); if (!prev) return;
    if (!row){ prev.classList.remove("on"); return; }
    const s = SHOWS[+row.dataset.i];
    prev.style.backgroundImage = s.img ? `url('${s.img}')` : "none";
    prev.textContent = s.img ? "" : s.title;
    prev.classList.add("on");
  });
  document.addEventListener("mousemove", e => {
    const prev = $id("ixPrev"); if (!prev || !prev.classList.contains("on")) return;
    const box = prev.parentElement.getBoundingClientRect();
    prev.style.transform = `translate(${e.clientX - box.left + 24}px, ${e.clientY - box.top - 90}px) rotate(-3deg)`;
  });
}

/* =====================================================================
   VISTAS
   ===================================================================== */
let filter = "todos";

function renderStatic(){
  const hg = $id("homeGrid"); if (hg) hg.innerHTML = SHOWS.filter(s => !WORKS.includes(s.slug) && s.slug !== "mundos-opuestos").slice(0,6).map(card).join("");
  document.querySelectorAll("[data-show]").forEach(el => { const sh = SHOWS.find(s => s.slug === el.dataset.show);
    if (sh && sh.img) el.style.backgroundImage = `url('${sh.img}')`; });
  renderIndex();
  $id("clients").innerHTML = CLIENTS.map(([k,n]) => { const inner = CLIENT_LOGOS[k] ? `<img${SMALL_LOGOS.includes(k) ? ' class="sm"' : ""} src="${CLIENT_LOGOS[k]}" alt="${esc(n)}" loading="lazy">` : `<span class="client-name">${esc(n)}</span>`;
    return BRAND_WORKS[k] ? `<button class="client-cell" type="button" data-brand="${k}" aria-label="${L("Ver trabajos con","See work with")} ${esc(n)}">${inner}<span class="cc-more">${L("Ver trabajos","See work")}</span></button>` : `<div class="client-cell">${inner}</div>`; }).join("");
  $id("awardsList").innerHTML = AWARDS.map(a => {
    const s = SHOWS.find(x => x.slug === a.show);
    return `<article class="news-item"><time>${esc(t(a.date))}</time><div><h3>${esc(t(a.title))}</h3>
      <p>${esc(t(a.text))}</p>${s ? `<p style="margin-top:14px"><a href="#/programa/${s.slug}">${L("Ver","See")} ${esc(s.title)}</a></p>` : ""}</div></article>`;
  }).join("");
  const person = p => `<article class="person">
      ${p.photo ? `<div class="face"><img src="${p.photo}" alt="${esc(p.name)}" loading="lazy" width="520" height="520"></div>`
                : `<div class="face initials" aria-hidden="true">${p.name.split(" ").filter(w => w.length > 2).slice(0,2).map(w => w[0]).join("")}</div>`}
      <h3>${esc(p.name)}</h3><p class="role">${esc(t(p.role))}</p><p class="muted bio">${esc(t(p.bio))}</p></article>`;
  $id("team").innerHTML = TEAM_GROUPS.map(g => `<div class="team-group">
    <div class="team-group-head">${g.logo ? `<img src="${g.logo}" alt="${esc(g.name)}">` : `<h2>${esc(g.name)}</h2>`}</div>
    <div class="team">${TEAM.filter(p => p.group === g.id).map(person).join("")}</div></div>`).join("");
  const tt = $id("trimTeam");
  if (tt) tt.innerHTML = `<div class="team">${TEAM.filter(p => p.group === "trim").map(person).join("")}</div>`;
  renderFilters(); renderGrid(); renderStage(); renderWorks(); renderVband(); fixLinks();
  const tv = document.getElementById("tallerVid");
  if (tv) tv.innerHTML = `<button class="vid${HAS_VIDEO() ? "" : " novideo"}" data-video="taller-cnc" aria-label="${L("Reproducir video del taller","Play workshop video")}">
    <img src="${VIDEO_POSTERS["taller-cnc"]}" alt="" loading="lazy"><span class="vid-play">${ICON_PLAY}</span><span class="vid-t">${L("Cooking Lab: router CNC","Cooking Lab: CNC router")}</span>
    ${HAS_VIDEO() ? "" : `<span class="vid-note">${L("Video disponible en el sitio publicado","Video available on the live site")}</span>`}</button>`;
  const si = document.getElementById("showSearch"); if (si) si.placeholder = L("Buscar programa, canal o marca","Search show, channel or brand");
}

function renderFilters(){
  const opts = [["todos",{es:"Todos",en:"All"}], ...Object.entries(TYPES)];
  $id("filters").innerHTML = opts.map(([k,v]) =>
    `<button class="chip" data-f="${k}" aria-pressed="${filter===k}">${esc(t(v))}</button>`).join("");
}
let query = "";
const norm = t => (t || "").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function showText(s){
  const brands = Object.keys(BRAND_WORKS).filter(k => BRAND_WORKS[k]().includes(s.slug)).map(k => (CLIENTS.find(c => c[0] === k) || [,""])[1]);
  return norm([s.title, s.channel, s.country, t(TYPES[s.type]), TYPES[s.type] && TYPES[s.type].en, s.body && s.body.es, s.body && s.body.en, ...brands].join(" "));
}
function renderGrid(){
  const q = norm(query).trim();
  const list = SHOWS.filter(s => (filter === "todos" || s.type === filter) && (!q || q.split(/\s+/).every(w => showText(s).includes(w))));
  $id("allGrid").innerHTML = list.length ? list.map(card).join("") : `<p class="no-results">${L("No encontramos programas con","No shows found for")} “${esc(query)}”.</p>`;
  const sc = document.getElementById("searchCount");
  if (sc) sc.textContent = q || filter !== "todos" ? `${list.length} ${L(list.length === 1 ? "programa" : "programas", list.length === 1 ? "show" : "shows")}` : "";
  fixLinks();
}
(function(){
  const inp = document.getElementById("showSearch"); if (!inp) return;
  inp.addEventListener("input", () => { query = inp.value; renderGrid(); });
})();
$id("filters").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  filter = b.dataset.f; renderFilters(); renderGrid();
});

function renderShow(slug){
  const s = SHOWS.find(x => x.slug === slug);
  const el = $id("showPage");
  if (!s){
    el.innerHTML = `<div class="wrap page-head"><h1>${L("Programa no encontrado","Show not found")}</h1>
      <p>${L("Revisa el enlace o vuelve al listado.","Check the link or go back to the list.")}</p><a class="btn btn-ghost" href="#/programas">${L("Ver programas","See shows")}</a></div>`;
    return "";
  }
  const award = s.award && AWARDS.find(a => a.id === s.award);
  const others = SHOWS.filter(x => x.slug !== s.slug && (x.type === s.type || x.ch === s.ch)).slice(0,3);
  el.innerHTML = `
    <div class="show-hero" style="${s.img ? `background-image:url('${s.img}');background-position:${s.pos}` : ""}">
      ${s.img ? "" : `<div class="poster" aria-hidden="true" style="z-index:0"><span style="font-size:clamp(3rem,9vw,7rem)">${esc(s.title)}</span></div>`}
      <div class="wrap">
        <a class="back" href="#/programas">‹ ${L("Todos los programas","All shows")}</a>
        <div>${s.channel ? `<span class="tag ${s.ch}">${esc(s.channel)}</span>` : `<span class="tag">${esc(s.brand || t(TYPES[s.type]))}</span>`}</div>
        <h1 class="bracket" style="margin-top:18px">${esc(s.title)}</h1>
      </div>
    </div>
    <div class="section"><div class="wrap show-body">
      <div>
        ${!s.img && s.thumb ? `<img class="show-thumb" src="${s.thumb}" alt="${esc(s.title)}">` : ""}
        <p class="lead">${esc(t(s.body))}</p>
        ${s.extra ? `<p class="story-extra">${esc(t(s.extra))}</p>` : ""}
        ${s.highlight ? `<p class="highlight">${esc(t(s.highlight))}</p>` : ""}
        ${s.link ? `<p style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-primary" href="${s.link.url}" target="_blank" rel="noopener">${esc(t(s.link.label))}</a>${s.link2 ? `<a class="btn btn-ghost" href="${s.link2.url}" target="_blank" rel="noopener">${esc(t(s.link2.label))}</a>` : ""}</p>` : ""}
        ${award ? `<div class="award-badge"><b>${esc(t(award.date))}</b><span>${esc(t(award.title))}</span></div>` : ""}
      </div>
      <dl class="spec">
        ${s.channel ? `<div><dt>${L("Canal","Channel")}</dt><dd>${esc(s.channel)}</dd></div>` : ""}
        ${s.brand ? `<div><dt>${L("Marca","Brand")}</dt><dd>${esc(s.brand)}</dd></div>` : ""}
        ${s.country ? `<div><dt>${L("País","Country")}</dt><dd>${esc(lang==="en" && s.country==="Perú" ? "Peru" : s.country)}</dd></div>` : ""}
        <div><dt>${L("Género","Genre")}</dt><dd>${esc(t(TYPES[s.type]))}</dd></div>
        ${s.seasons ? `<div><dt>${L("Temporadas","Seasons")}</dt><dd>${s.seasons}</dd></div>` : ""}
        <div><dt>${L("Producción","Production")}</dt><dd>CookingMedia</dd></div>
      </dl>
    </div></div>
    ${s.videos ? `<div class="section"><div class="wrap"><h2 class="h2-mid" style="margin-bottom:24px">Videos</h2><div class="vid-grid">${s.videos.map(v => `
      <button class="vid${VIDEO_BASE && !VIDEO_BASE.startsWith("__") ? "" : " novideo"}" data-video="${v.f}" aria-label="${L("Reproducir","Play")}: ${esc(t(v.t))}">
        <img src="${VIDEO_POSTERS[v.f]}" alt="" loading="lazy"><span class="vid-play">${ICON_PLAY}</span>
        <span class="vid-t">${esc(t(v.t))}</span>${VIDEO_BASE && !VIDEO_BASE.startsWith("__") ? "" : `<span class="vid-note">${L("Video disponible en el sitio publicado","Video available on the live site")}</span>`}</button>`).join("")}</div></div></div>` : ""}
    ${others.length ? `<div class="section"><div class="wrap"><h2 style="margin-bottom:28px">${L("Otros programas","More shows")}</h2><div class="grid">${others.map(card).join("")}</div></div></div>` : ""}`;
  return s.title;
}

/* =====================================================================
   ENRUTADOR: cada página tiene su propio link (#/programa/tierra-brava)
   ===================================================================== */
const TITLES = { programas:["Programas","Shows"], nosotros:["Nosotros","About"], equipo:["Equipo","Team"], premios:["Premios","Awards"],
  "trabajemos-juntos":["Trabajemos juntos","Work with us"], hub1000:["Hub 1000","Hub 1000"], privacidad:["Privacidad","Privacy"], trim:["Trim Post","Trim Post"] };

function route(){
  const parts = ((STATIC ? document.body.dataset.route : location.hash.replace(/^#\/?/, "")) || "inicio").split("/");
  let view = parts[0] || "inicio";
  if (!document.querySelector(`[data-view="${view}"]`)) view = "inicio";
  let title = "";
  if (view === "programa") title = renderShow(parts[1]);
  document.querySelectorAll(".view").forEach(v => v.hidden = v.dataset.view !== view);
  document.querySelectorAll(".nav a, .topnav a").forEach(a => {
    const raw = a.dataset.route || a.getAttribute("href").slice(2);
    if (STATIC && !a.dataset.route) a.dataset.route = raw;
    const target = raw;
    const on = target === view || (target === "" && view === "inicio") || (view === "programa" && target === "programas");
    on ? a.setAttribute("aria-current","page") : a.removeAttribute("aria-current");
  });
  $id("ctaBand").hidden = view === "trabajemos-juntos";
  const name = title || (TITLES[view] ? TITLES[view][lang==="en"?1:0] : "");
  const md = document.querySelector('meta[name="description"]');
  if (md){ if (!md.dataset.base) md.dataset.base = md.content;
    const sh = view === "programa" && SHOWS.find(x => x.slug === parts[1]);
    const PAGE_DESC = {
      hub1000: L("Hub 1000: el hub de producción más grande de Latam, construido junto a Canal 13. Infraestructura, tecnología y equipos especializados.","Hub 1000: the largest production hub in Latin America, built with Canal 13."),
      trim: L("Trim Post, la postproducción de Cooking Media: montaje, corrección de color, diseño sonoro, motion graphics y finalización.","Trim Post, Cooking Media's post-production: editing, color, sound design, motion graphics and finishing."),
      programas: L("Realities, game shows, programas de TV y branded content producidos por Cooking Media: Tierra Brava, Mundos Opuestos, ¿Ganar o Servir? y más.","Realities, game shows, TV shows and branded content produced by Cooking Media."),
      nosotros: L("Cooking Media, productora audiovisual especializada en contenidos non script y branded content.","Cooking Media, an audiovisual production company specialized in non-script and branded content."),
      equipo: L("El equipo de Cooking Media y Trim Post: Rodrigo Bustos, Camilo Chávez, Paulina Zúñiga y más.","The Cooking Media and Trim Post team."),
      premios: L("Mundos Opuestos, Mejor Reality de Competencia en los Rose d'Or Latinos 2026.","Mundos Opuestos, Best Competition Reality at the Rose d'Or Latinos 2026."),
      "trabajemos-juntos": L("Cuéntanos tu proyecto de branded content, formato de TV o coproducción. info@cookingmedia.cl","Tell us about your branded content, TV format or co-production project.")
    };
    md.content = sh ? t(sh.body) : (PAGE_DESC[view] || md.dataset.base); }
  document.title = name ? `${name} | Cooking Media` : L("Cooking Media — Productora audiovisual non script y branded content","Cooking Media — Non-script and branded content production company");
  closeMenu();
  window.scrollTo(0,0);
  if (parts[1] && view !== "programa"){ const sub = $id(parts[1]); if (sub) setTimeout(() => sub.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }), 60); }
  document.body.classList.toggle("home", view === "inicio"); headState();
  [...document.body.classList].filter(c => c.startsWith("view-")).forEach(c => document.body.classList.remove(c)); document.body.classList.add("view-" + view);
  fixLinks();
  if (!firstRoute && POT_VIEWS.includes(view)) potOverlay("cm-pot-" + parts.join("/"), view);
  firstRoute = false;
}
if (!STATIC) window.addEventListener("hashchange", route);

/* Menú a pantalla completa */
const menu = $id("menu"), menuBtn = $id("menuBtn");
function openMenu(){
  menu.hidden = false; document.body.classList.add("menu-open");
  menuBtn.setAttribute("aria-expanded","true"); menuBtn.setAttribute("aria-label", L("Cerrar menú","Close menu"));
  (menu.querySelector('[aria-current="page"]') || menu.querySelector("a")).focus();
}
function closeMenu(){
  if (menu.hidden) return;
  menu.hidden = true; document.body.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded","false"); menuBtn.setAttribute("aria-label", L("Abrir menú","Open menu"));
}
menuBtn.addEventListener("click", () => menu.hidden ? openMenu() : (closeMenu(), menuBtn.focus()));
menu.addEventListener("click", e => { if (e.target.closest(".nav a")) closeMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape"){ closeMenu(); closePlayer(); } });

/* Header: transparente sobre la portada, sólido al bajar */
const siteHead = $id("siteHead");
function headState(){ const w = $id("works"); const end = w ? w.offsetTop + w.offsetHeight - 90 : innerHeight*0.6;
  siteHead.classList.toggle("solid", !document.body.classList.contains("home") || scrollY > end); }
addEventListener("scroll", headState, { passive:true });

$id("langBtn").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("cm-lang", lang); } catch(e){}
  applyLang(); renderStatic(); route(); syncReel(); syncHub(); renderMap(); buildBands();
});

/* =====================================================================
   PORTADA: lista grande (Ver reel + programas destacados)
   ===================================================================== */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const STAGE_SHOWS = ["mundos-opuestos","tierra-brava","ganar-o-servir","aqui-somos-todos"];
let cur = 0;
const HAS_STAGE = !!document.getElementById("stage");
function stageItems(){
  return [{ reel:true, title:L("Ver Reel","Watch Reel"), meta:L("Lo que hacemos, en un minuto","What we do, in a minute") },
    ...STAGE_SHOWS.map(slug => SHOWS.find(s => s.slug === slug)).filter(Boolean)
      .map(s => ({ slug:s.slug, title:s.title, img:s.img, pos:s.pos, meta:s.channel }))];
}
function renderStage(){
  if (!HAS_STAGE) return;
  const items = stageItems();
  const bg = $id("stageBg");
  bg.querySelectorAll(".bg").forEach(n => n.remove());
  items.forEach((it,i) => { if (!it.reel){ const d = document.createElement("div"); d.className = "bg"; d.dataset.i = i;
    if (it.img){ d.style.backgroundImage = `url('${it.img}')`; d.style.backgroundPosition = it.pos || "center"; } else d.style.background = "#1c1813";
    bg.appendChild(d); } });
  $id("stageList").innerHTML = items.map((it,i) => `<li>${
    it.reel ? `<button class="stage-item" data-i="${i}">${esc(it.title)}<sup>${String(i+1).padStart(2,"0")}</sup></button>`
            : `<a class="stage-item" data-i="${i}" href="#/programa/${it.slug}">${esc(it.title)}<sup>${String(i+1).padStart(2,"0")}</sup></a>`
  }</li>`).join("");
  go(cur, true);
}
function go(i, instant){
  if (!HAS_STAGE) return;
  const items = stageItems(), n = items.length;
  cur = Math.max(0, Math.min(n-1, i));
  const list = $id("stageList"), lis = [...list.children];
  lis.forEach((li,k) => {
    const el = li.firstElementChild, on = k === cur;
    el.setAttribute("aria-current", on); const hide = k < cur || k > cur+1; li.classList.toggle("far", hide); el.tabIndex = hide ? -1 : 0;
    const old = li.querySelector(".stage-meta"); if (old) old.remove();
    if (on){ const m = document.createElement("span"); m.className = "stage-meta"; m.textContent = items[k].meta; li.appendChild(m); }
  });
  const target = lis[cur];
  list.style.transition = instant ? "none" : "";
  list.style.transform = `translateY(${-(target.offsetTop + target.firstElementChild.offsetHeight/2)}px)`;
  document.querySelectorAll("#stageBg .bg").forEach(b => b.classList.toggle("on", +b.dataset.i === cur));
  $id("reelVideo").classList.toggle("on", items[cur].reel === true);
  $id("prev").disabled = cur === 0;
  $id("next").disabled = cur === n-1;
}
if (HAS_STAGE){
$id("prev").onclick = () => go(cur-1);
$id("next").onclick = () => go(cur+1);
$id("stageList").addEventListener("click", e => {
  const el = e.target.closest(".stage-item"); if (!el) return;
  const i = +el.dataset.i;
  if (i !== cur){ e.preventDefault(); go(i); return; }
  if (stageItems()[i].reel){ e.preventDefault(); openPlayer(); }
});
document.addEventListener("keydown", e => {
  if (!document.body.classList.contains("home") || !menu.hidden || !$id("player").hidden) return;
  if (scrollY > innerHeight*0.5 || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
  if (e.key === "ArrowDown"){ e.preventDefault(); go(cur+1); }
  if (e.key === "ArrowUp"){ e.preventDefault(); go(cur-1); }
});
addEventListener("resize", () => go(cur, true));
if (document.fonts) document.fonts.ready.then(() => go(cur, true));
}
document.addEventListener("click", e => { if (e.target.closest("[data-open-reel]")){ e.preventDefault(); openPlayer(); } });
document.addEventListener("click", e => {
  const b = e.target.closest(".vid[data-video]"); if (!b || b.classList.contains("novideo")) return;
  openPlayer(new URL(VIDEO_BASE + b.dataset.video + ".mp4", location.href).href);
});

/* Reproductor del reel (pantalla completa, con controles y sonido si lo tiene) */
const player = $id("player"), playerVideo = $id("playerVideo");
function openPlayer(srcOverride){
  const full = !srcOverride && VIDEO_BASE && !VIDEO_BASE.startsWith("__") ? new URL(VIDEO_BASE + "reel-cm.mp4", location.href).href : null;
  const src = srcOverride || full || $id("reelVideo").currentSrc || document.querySelector("#reelVideo source").src;
  if (playerVideo.src !== src) playerVideo.src = src;
  playerVideo.muted = !(srcOverride || full);
  player.hidden = false; document.body.classList.add("menu-open");
  playerVideo.currentTime = 0; playerVideo.play().catch(() => {});
  $id("playerClose").focus();
}
function closePlayer(){
  if (player.hidden) return;
  playerVideo.pause(); player.hidden = true; document.body.classList.remove("menu-open");
}
$id("playerClose").onclick = closePlayer;
player.addEventListener("click", e => { if (e.target === player) closePlayer(); });

/* =====================================================================
   BRASAS: el concepto "cooking" sobre el banner
   ===================================================================== */
(function(){
  if (reduce || !document.getElementById("ember")) return;
  const c = document.getElementById("ember"), x = c.getContext("2d");
  let W, H, P = [];
  const cols = ["226,72,26","255,106,46","242,169,59"];
  function size(){ const r = window.devicePixelRatio || 1; W = c.offsetWidth; H = c.offsetHeight; c.width = W*r; c.height = H*r; x.setTransform(r,0,0,r,0,0); }
  function spawn(){ return { x:Math.random()*W, y:H+10, r:Math.random()*2.2+.6, vy:Math.random()*.9+.35, vx:(Math.random()-.5)*.4, a:Math.random()*.6+.35, c:cols[Math.random()*3|0], w:Math.random()*6.28 }; }
  size(); addEventListener("resize", size);
  for (let i=0;i<70;i++){ const p = spawn(); p.y = Math.random()*H; P.push(p); }
  (function tick(){
    if (isView("inicio")){
      x.clearRect(0,0,W,H);
      P.forEach((p,i) => {
        p.y -= p.vy; p.w += .03; p.x += p.vx + Math.sin(p.w)*.3; p.a -= .0016;
        if (p.y < -10 || p.a <= 0) P[i] = spawn();
        x.beginPath(); x.arc(p.x,p.y,p.r,0,6.28); x.fillStyle = `rgba(${p.c},${Math.max(p.a,0)})`; x.fill();
      });
    }
    requestAnimationFrame(tick);
  })();
})();

/* =====================================================================
   FORMULARIOS (abren el correo con los datos listos)
   ===================================================================== */
function validate(form){
  let ok = true;
  form.querySelectorAll("[required]").forEach(inp => {
    const err = inp.parentElement.querySelector(".err");
    let msg = "";
    if (!inp.value.trim()) msg = L("Completa este campo.","Fill in this field.");
    else if (inp.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value)) msg = L("Escribe un correo válido, por ejemplo nombre@correo.cl.","Enter a valid email, e.g. name@mail.com.");
    else if (inp.type === "number" && +inp.value < 18) msg = L("Debes ser mayor de 18 años para postular.","You must be 18 or older to apply.");
    if (err) err.textContent = msg;
    inp.setAttribute("aria-invalid", !!msg);
    if (msg && ok){ inp.focus(); ok = false; }
  });
  return ok;
}
document.querySelectorAll(".form").forEach(f => f.addEventListener("input", e => {
  const err = e.target.parentElement.querySelector(".err"); if (err) err.textContent = ""; e.target.removeAttribute("aria-invalid");
}));
const v = id => $id(id).value.trim();
$id("quoteForm").addEventListener("submit", async e => {
  e.preventDefault(); if (!validate(e.target)) return;
  if ($id("qHoney").value) return;
  const st = $id("formStatus"), btn = e.target.querySelector('button[type="submit"]');
  const data = { nombre:v("qName"), empresa:v("qCo"), correo:v("qMail"), telefono:v("qPhone"), tipo:v("qType"), mensaje:v("qMsg"),
                 _subject:"Proyecto: " + v("qCo"), _template:"table", _captcha:"false" };
  const body = `Nombre: ${data.nombre}\nEmpresa: ${data.empresa}\nCorreo: ${data.correo}\nTeléfono: ${data.telefono}\nTipo: ${data.tipo}\n\n${data.mensaje}`;
  const mailto = "mailto:info@cookingmedia.cl?subject=" + encodeURIComponent(data._subject) + "&body=" + encodeURIComponent(body);
  btn.disabled = true; st.className = "form-status"; st.textContent = L("Enviando…","Sending…");
  try {
    const r = await fetch("https://formsubmit.co/ajax/info@cookingmedia.cl", { method:"POST", headers:{ "Content-Type":"application/json", "Accept":"application/json" }, body: JSON.stringify(data) });
    if (!r.ok) throw new Error(r.status);
    st.className = "form-status ok"; st.textContent = L("¡Gracias! Recibimos tu proyecto y te escribiremos pronto.","Thanks! We received your project and will write back soon.");
    e.target.reset();
  } catch(err) {
    st.className = "form-status err";
    st.innerHTML = L(`No pudimos enviarlo desde aquí. <a href="${mailto}">Envíalo por correo</a> o escribe a info@cookingmedia.cl.`,
                     `We couldn't send it from here. <a href="${mailto}">Send it by email</a> or write to info@cookingmedia.cl.`);
  } finally { btn.disabled = false; }
});

/* =====================================================================
   VIDEO REEL DEL INICIO
   Para cambiarlo: reemplaza el archivo del video (mp4, sin audio).
   ===================================================================== */
const reelVideo = $id("reelVideo"), reelToggle = $id("reelToggle");
let reelPaused = false;
function syncReel(){
  const onHome = isView("inicio");
  if (onHome && !reelPaused) reelVideo.play().catch(() => {}); else reelVideo.pause();
  reelToggle.innerHTML = reelPaused ? ICON_PLAY : ICON_PAUSE;
  reelToggle.setAttribute("aria-label", reelPaused ? L("Reproducir video","Play video") : L("Pausar video","Pause video"));
}
reelToggle.addEventListener("click", () => { reelPaused = !reelPaused; syncReel(); });
window.addEventListener("hashchange", syncReel);

/* Video del Hub */
const hubVideo = $id("hubVideo"), hubToggle = $id("hubToggle");
let hubPaused = reduce;
if (HUB_VIDEO && !HUB_VIDEO.startsWith("__")){
  hubVideo.poster = HUB_POSTER; hubVideo.preload = "metadata"; hubVideo.src = HUB_VIDEO; $id("hubReel").classList.add("has-video"); hubToggle.hidden = false;
} else hubVideo.remove();
function syncHub(){
  if (!hubVideo.isConnected) return;
  const on = isView("hub1000");
  if (on && !hubPaused) hubVideo.play().catch(() => {}); else hubVideo.pause();
  hubToggle.innerHTML = hubPaused ? ICON_PLAY : ICON_PAUSE;
  hubToggle.setAttribute("aria-label", hubPaused ? L("Reproducir video","Play video") : L("Pausar video","Pause video"));
}
hubToggle.addEventListener("click", () => { hubPaused = !hubPaused; syncHub(); });
window.addEventListener("hashchange", syncHub);

/* Plano interactivo del hub */
let spaceSel = HUB_SPACES[0].id;
function renderMap(){
  const canvas = $id("mapCanvas");
  canvas.querySelectorAll(".pin").forEach(p => p.remove());
  HUB_SPACES.forEach((sp,i) => {
    const b = document.createElement("button");
    b.className = "pin" + (sp.here ? " here" : ""); b.textContent = i+1; b.dataset.id = sp.id;
    b.style.left = (sp.x/1586*100) + "%"; b.style.top = (sp.y/992*100) + "%";
    b.setAttribute("aria-label", `${i+1}. ${t(sp.name)}`);
    canvas.appendChild(b);
  });
  $id("mapList").innerHTML = HUB_SPACES.map((sp,i) =>
    `<li><button data-id="${sp.id}"><b>${i+1}</b>${esc(t(sp.name))}</button></li>`).join("");
  selectSpace(spaceSel, false);
}
function selectSpace(id, scroll){
  spaceSel = id;
  const i = HUB_SPACES.findIndex(s => s.id === id), sp = HUB_SPACES[i];
  document.querySelectorAll(".pin, .map-list button").forEach(el => el.setAttribute("aria-pressed", el.dataset.id === id));
  $id("mapDetail").innerHTML = `${sp.here ? `<span class="here-tag">${L("Usted está aquí","You are here")}</span><br>` : ""}
    <span class="num">${i+1}</span><h3>${esc(t(sp.name))}</h3><p>${esc(t(sp.text))}</p>`;
  if (scroll){
    const m = $id("hubMap");
    if (m.classList.contains("zoomed")){
      const pin = document.querySelector(`.pin[data-id="${id}"]`);
      m.scrollTo({ left: pin.offsetLeft - m.clientWidth/2, top: pin.offsetTop - m.clientHeight/2, behavior: reduce ? "auto" : "smooth" });
    }
  }
}
$id("mapCanvas").addEventListener("click", e => { const p = e.target.closest(".pin"); if (p) selectSpace(p.dataset.id, false); });
$id("mapList").addEventListener("click", e => { const b = e.target.closest("button"); if (b) selectSpace(b.dataset.id, true); });
renderMap();

/* Plano del hub: ampliar / reducir */
$id("mapZoom").addEventListener("click", e => {
  const m = $id("hubMap"), on = m.classList.toggle("zoomed");
  e.currentTarget.setAttribute("aria-pressed", on);
  e.currentTarget.textContent = on ? L("Reducir plano","Zoom out") : L("Ampliar plano","Zoom in");
  if (on) m.scrollLeft = (m.scrollWidth - m.clientWidth) / 2;
});

/* Franjas de título: repite el texto para el movimiento continuo */
function buildBands(){
  document.querySelectorAll(".band").forEach(band => {
    const src = band.querySelector(":scope > span"); if (!src) return;
    const old = band.querySelector(".band-track"); if (old) old.remove();
    const txt = esc(src.textContent.trim());
    const half = Array.from({length:4}, () => `<b>${txt}</b><i></i>`).join("");
    const track = document.createElement("div"); track.className = "band-track"; track.setAttribute("aria-hidden","true");
    track.innerHTML = half + half; band.appendChild(track);
  });
}

/* Portada: trabajos destacados a pantalla completa (referencia McCann) */
const WORKS = [];
const ART_HAS_TITLE = ["mundos-opuestos","tierra-brava","ganar-o-servir"];
function renderWorks(){
  const box = $id("works"); if (!box) return;
  box.querySelectorAll(".work.dyn").forEach(n => n.remove());
  const total = WORKS.length + 1;
  box.querySelectorAll(".work-total").forEach(n => n.textContent = String(total).padStart(2,"0"));
  WORKS.forEach((key,i) => {
    const sec = document.createElement("section"); sec.className = "work dyn";
    const n = String(i+2).padStart(2,"0") + " / " + String(total).padStart(2,"0");
    if (key === "hub"){
      const vid = HUB_VIDEO && !HUB_VIDEO.startsWith("__") ? `<video muted loop playsinline preload="none" poster="${HUB_POSTER}" src="${HUB_VIDEO}" aria-hidden="true"></video>` : `<div class="work-img" style="background-image:url('${HUB_POSTER}')"></div>`;
      sec.innerHTML = `<div class="work-media">${vid}</div><div class="wrap work-info">
        <p class="work-kicker">Hub 1000</p><h2 class="work-title">${L("El hub de producción más grande de Latam","The largest production hub in Latin America")}</h2>
        <p class="work-sub">${L("Infraestructura / Tecnología / Equipos especializados","Infrastructure / Technology / Specialized teams")}</p>
        <a class="work-link" href="#/hub1000">${L("Conoce el hub&nbsp;<i class=arr></i>","Discover the hub&nbsp;<i class=arr></i>")}</a></div><div class="work-count">${n}</div>`;
    } else {
      const s = SHOWS.find(x => x.slug === key); if (!s) return;
      sec.innerHTML = `<div class="work-media"><div class="work-img" style="background-image:url('${s.img}');background-position:${s.pos||"center"}"></div></div>
        <div class="wrap work-info"><p class="work-kicker">${esc(s.channel || "Cooking Media")}</p><h2 class="work-title${ART_HAS_TITLE.includes(s.slug) ? " on-art" : ""}">${esc(s.title)}</h2>
        <p class="work-sub">${esc(t(TYPES[s.type]))}${s.award ? " / " + L("Rose d'Or Latinos 2026","Rose d'Or Latinos 2026") : ""}</p>
        <a class="work-link" href="#/programa/${s.slug}">${L("Ver ficha&nbsp;<i class=arr></i>","View details&nbsp;<i class=arr></i>")}</a></div><div class="work-count">${n}</div>`;
    }
    box.appendChild(sec);
  });
  box.querySelectorAll(".work.dyn video").forEach(v => workObserver && workObserver.observe(v.closest(".work")));
}
const workObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(e => { const v = e.target.querySelector("video"); if (!v || v.id === "reelVideo") return;
    const onHome = document.body.classList.contains("home");
    if (e.isIntersecting && onHome && !reduce) v.play().catch(() => {}); else v.pause(); });
}, { threshold: 0.4 }) : null;

/* Olla al entrar por primera vez a programas, fichas, quiénes somos o equipo (vista de una sola página) */
const POT_VIEWS = ["programas","programa","nosotros","equipo"];
function potOverlay(key, view){
  if (STATIC || reduce) return;
  try { if (sessionStorage.getItem(key) === "1") return; sessionStorage.setItem(key,"1"); } catch(e){}
  const logo = (document.querySelector(".logo-link img") || {}).src || "";
  const o = document.createElement("div"); o.className = "loader"; o.setAttribute("role","status");
  o.innerHTML = `<div class="loader-logo" aria-hidden="true"><img class="ll-base" src="${logo}" alt=""><div class="ll-fill"><img src="${logo}" alt=""></div></div>
    <div class="loader-num">0<small>%</small></div><div class="loader-bar"><i></i></div>`;
  document.body.appendChild(o);
  const num = o.querySelector(".loader-num").firstChild, bar = o.querySelector(".loader-bar i"), t0 = performance.now(), D = 1100;
  (function step(now){ const k = Math.min(1,(now-t0)/D), v = Math.round(100*(1-Math.pow(1-k,2)));
    num.nodeValue = v; bar.style.width = v + "%"; o.querySelector(".ll-fill").style.clipPath = `inset(0 ${100 - v}% 0 0)`;
    if (k < 1) requestAnimationFrame(step); else { o.classList.add("done"); setTimeout(() => o.remove(), 600); } })(t0);
}
let firstRoute = true;

/* Ident de neón (Quiénes somos) */
(function(){
  const v = document.getElementById("identVideo"); if (!v) return;
  v.poster = VIDEO_POSTERS["ident-neon"];
  if (VIDEO_BASE && !VIDEO_BASE.startsWith("__")){ v.src = VIDEO_BASE + "ident-neon.mp4"; if (!reduce) v.play().catch(() => {}); }
})();

/* Banda de videos de programas (inicio) */
const HAS_VIDEO = () => VIDEO_BASE && !VIDEO_BASE.startsWith("__");
function renderVband(){
  const el = document.getElementById("vband"); if (!el) return;
  /* Primero los realities (con video o imagen), luego el resto de los trabajos con video */
  const hasMedia = s => (s.videos && s.videos.length) || s.img || s.thumb;
  const items = [...SHOWS.filter(s => s.type === "reality" && hasMedia(s)), ...SHOWS.filter(s => s.type !== "reality" && s.videos && s.videos.length)];
  el.innerHTML = items.map(s => { const v = s.videos && s.videos[0];
    const cap = `<div class="vb-cap"><h3>${esc(s.title)}</h3><span>${esc([t(TYPES[s.type]), s.channel || s.brand].filter(Boolean).join(" / "))}</span><a href="#/programa/${s.slug}">${L("Ver ficha","Details")}</a></div>`;
    if (!v) return `<article class="vb-item"><a class="vid vb-vid vb-still" href="#/programa/${s.slug}" aria-label="${esc(s.title)}">
        <img src="${s.thumb || s.img}" alt="" loading="lazy" style="object-position:${s.pos || "center"}"></a>${cap}</article>`;
    return `<article class="vb-item">
      <button class="vid vb-vid${HAS_VIDEO() ? "" : " novideo"}" data-video="${v.f}" aria-label="${L("Reproducir","Play")}: ${esc(s.title)}">
        <img src="${VIDEO_POSTERS[v.f]}" alt="" loading="lazy"><span class="vid-play">${ICON_PLAY}</span>
        ${HAS_VIDEO() ? "" : `<span class="vid-note">${L("Video disponible en el sitio publicado","Video available on the live site")}</span>`}</button>${cap}</article>`; }).join("");
  fixLinks();
}
(function(){
  const el = document.getElementById("vband"); if (!el) return;
  const step = () => (el.querySelector(".vb-item")?.offsetWidth || 400) + 18;
  $id("vbPrev").addEventListener("click", () => el.scrollBy({ left: -step(), behavior: reduce ? "auto" : "smooth" }));
  $id("vbNext").addEventListener("click", () => el.scrollBy({ left: step(), behavior: reduce ? "auto" : "smooth" }));
  el.addEventListener("keydown", e => { if (e.key === "ArrowRight") el.scrollBy({ left: step() }); if (e.key === "ArrowLeft") el.scrollBy({ left: -step() }); });
})();

/* Síguenos: redes y compartir */
(function(){
  const btn = $id("followBtn"), links = $id("followLinks"), toast = $id("followToast");
  const toggle = open => { links.hidden = !open; btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", () => toggle(links.hidden));
  document.addEventListener("click", e => { if (!e.target.closest("#follow")) toggle(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") toggle(false); });
  $id("shareBtn").addEventListener("click", async () => {
    const data = { title: document.title, url: location.href };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(location.href);
      toast.textContent = L("Enlace copiado","Link copied");
    } catch(e) { if (e && e.name === "AbortError") return; toast.textContent = location.href; }
    toast.classList.add("on"); setTimeout(() => toast.classList.remove("on"), 2200);
  });
})();

/* Cursor que sigue al mouse, crece sobre enlaces y hace un destello al hacer clic */
(function(){
  if (!matchMedia("(pointer:fine)").matches || reduce) return;
  const ring = document.getElementById("cursorRing"), dot = document.getElementById("cursorDot"); if (!ring) return;
  let x = innerWidth/2, y = innerHeight/2, rx = x, ry = y;
  addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; document.body.classList.add("cursor-on");
    dot.style.transform = `translate(${x}px,${y}px)`;
    document.body.classList.toggle("cursor-hover", !!e.target.closest("a,button,.vid,.pin,input,select,textarea,label")); });
  document.addEventListener("mouseleave", () => document.body.classList.remove("cursor-on"));
  addEventListener("mousedown", () => document.body.classList.add("cursor-down"));
  addEventListener("mouseup", e => {
    document.body.classList.remove("cursor-down");
    const f = document.createElement("div"); f.className = "cursor-flash"; document.body.appendChild(f); setTimeout(() => f.remove(), 320);
    for (let i = 0; i < 10; i++){
      const p = document.createElement("span"), a = (Math.PI * 2 * i) / 10 + Math.random() * .4, d = 30 + Math.random() * 34;
      p.className = "cursor-spark"; p.style.left = e.clientX + "px"; p.style.top = e.clientY + "px";
      p.style.setProperty("--dx", Math.cos(a) * d + "px"); p.style.setProperty("--dy", Math.sin(a) * d + "px");
      if (i % 3 === 0) p.style.background = "#f2a93b";
      document.body.appendChild(p); setTimeout(() => p.remove(), 650);
    }
  });
  (function loop(){ rx += (x - rx) * .18; ry += (y - ry) * .18; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
})();

/* Ventana con los trabajos de cada marca */
(function(){
  const modal = $id("brandModal"), body = $id("bmBody"); let last = null;
  function open(k){
    const c = CLIENTS.find(x => x[0] === k); if (!c) return;
    const works = BRAND_WORKS[k]().map(sl => SHOWS.find(s => s.slug === sl)).filter(Boolean);
    body.innerHTML = `<div class="bm-head">${CLIENT_LOGOS[k] ? `<img src="${CLIENT_LOGOS[k]}" alt="">` : ""}
      <h2 id="bmTitle"><small>${L("Trabajos con","Work with")}</small>${esc(c[1])}</h2></div>
      <div class="bm-grid">${works.map(card).join("")}</div>`;
    fixLinks(); last = document.activeElement; modal.hidden = false; document.body.classList.add("menu-open"); $id("bmClose").focus();
  }
  function close(){ if (modal.hidden) return; modal.hidden = true; document.body.classList.remove("menu-open"); if (last) last.focus(); }
  document.addEventListener("click", e => {
    const b = e.target.closest("button.client-cell[data-brand]"); if (b){ open(b.dataset.brand); return; }
    if (e.target === modal || e.target.closest("#bmClose")) close();
    if (e.target.closest("#bmBody a")) close();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();

/* Fondo de Quiénes somos: negro con brasas que suben, como una cocina encendida */
(function(){
  const c = document.getElementById("voidCanvas"); if (!c) return;
  const x = c.getContext("2d"); let W, H, R;
  const COLS = ["255,106,46","226,72,26","242,169,59","255,150,70"];
  const N = 18, P = [];
  function spawn(init){
    return { x: Math.random() * W, y: init ? Math.random() * H : H + 10, r: Math.random() * 2.2 + .5,
      vy: Math.random() * .7 + .25, vx: (Math.random() - .5) * .25, w: Math.random() * 6.28, ws: Math.random() * .03 + .01,
      life: Math.random() * .6 + .4, c: COLS[Math.random() * COLS.length | 0], f: Math.random() * 6.28 };
  }
  function size(){ R = Math.min(devicePixelRatio || 1, 2); W = c.offsetWidth; H = c.offsetHeight; c.width = W*R; c.height = H*R; x.setTransform(R,0,0,R,0,0); }
  size(); addEventListener("resize", size);
  for (let i = 0; i < N; i++) P.push(spawn(true));
  function frame(){
    if (document.body.classList.contains("view-nosotros")){
      x.globalCompositeOperation = "source-over";
      x.fillStyle = "#070505"; x.fillRect(0,0,W,H);
      x.globalCompositeOperation = "lighter";
      P.forEach((p,i) => {
        p.y -= p.vy; p.w += p.ws; p.x += p.vx + Math.sin(p.w) * .35; p.f += .15;
        const k = p.y / H;                              // más intensas abajo, se apagan al subir
        const a = Math.max(0, Math.min(1, k * 1.3)) * p.life * (.75 + Math.sin(p.f) * .25);
        if (p.y < -10 || a <= .01){ P[i] = spawn(false); return; }
        const g = x.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `rgba(${p.c},${a})`); g.addColorStop(.35, `rgba(${p.c},${a * .35})`); g.addColorStop(1, `rgba(${p.c},0)`);
        x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, p.r * 5, 0, 6.283); x.fill();
      });
    }
    if (!reduce) requestAnimationFrame(frame);
  }
  frame();
  if (reduce) addEventListener("hashchange", () => setTimeout(frame, 30));
})();

/* Todos los videos se reproducen solos (sin sonido) cuando están a la vista */
const vidIO = "IntersectionObserver" in window ? new IntersectionObserver(entries => entries.forEach(e => {
  const v = e.target;
  if (e.isIntersecting){ if (!v.src) v.src = v.dataset.src; v.play().then(() => v.classList.add("on")).catch(() => {}); }
  else v.pause();
}), { threshold: .35 }) : null;
function attachPreviews(){
  if (!HAS_VIDEO() || !vidIO || reduce) return;
  document.querySelectorAll(".vid[data-video]:not(.novideo)").forEach(b => {
    if (b.querySelector("video.pv")) return;
    const v = document.createElement("video"); v.className = "pv"; v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute("muted",""); v.setAttribute("playsinline",""); v.preload = "none"; v.setAttribute("aria-hidden","true");
    v.dataset.src = VIDEO_BASE + b.dataset.video + ".mp4"; b.prepend(v); vidIO.observe(v);
  });
}

/* La página aparece a medida que se hace scroll */
document.documentElement.classList.add("js-reveal");
const REVEAL_SEL = ".page-intro > *, .section > .wrap > *, .vband-head, .vb-item, .e2e-band h2, .e2e-card, .pcard, .person, .client-cell, .ed-award > *, .duo-card, .service, .cta-big .wrap > *, .map-layout, .hub-cols > *, .show-body > *, .vid-grid > .vid, .team-group-head, .search-row, .filters";
const revIO = "IntersectionObserver" in window ? new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add("in"); revIO.unobserve(e.target); }
}), { threshold: .12, rootMargin: "0px 0px -6% 0px" }) : null;
function observeReveal(){
  if (!revIO){ document.documentElement.classList.remove("js-reveal"); return; }
  document.querySelectorAll(REVEAL_SEL).forEach(el => {
    if (el.classList.contains("reveal")) return;
    el.classList.add("reveal");
    const sib = [...el.parentElement.children].indexOf(el);
    el.style.setProperty("--d", Math.min(sib, 6) * 0.08 + "s");
    revIO.observe(el);
  });
}
new MutationObserver(() => { observeReveal(); attachPreviews(); }).observe(document.getElementById("main") || document.body, { childList:true, subtree:true });

/* Arranque */
applyLang(); buildBands(); renderStatic(); route(); syncReel(); syncHub();
observeReveal(); attachPreviews();
