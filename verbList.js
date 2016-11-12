var verbList = ["abandonar",
"abordar",
"abortar",
"abrazar",
"abrir",
"aburrir",
"aburrirse",
"abusar",
"acabar",
"acampar",
"aceptar",
"acercar",
"acercarse",
"acompañar",
"aconsejar",
"acontecer",
"acordar",
"acordarse",
"acortar",
"acostar",
"acostarse",
"acostumbrar",
"acostumbrarse",
"actuar",
"adivinar",
"admirar",
"admitir",
"adorar",
"adornar",
"advertir",
"afeitar",
"afeitarse",
"afirmar",
"afligir",
"agorar",
"agradar",
"agradecer",
"aguantar",
"ahorcar",
"ahorrar",
"alcanzar",
"alegrar",
"alegrarse",
"alentar",
"aliviar",
"almorzar",
"alquilar",
"amanecer",
"amar",
"amenazar",
"andar",
"anhelar",
"anunciar",
"añadir",
"apagar",
"aparecer",
"aplaudir",
"aplicar",
"apostar",
"apoyar",
"apreciar",
"aprender",
"apretar",
"aprobar",
"argüir",
"arreglar",
"arrepentirse",
"arrojar",
"asistir",
"asociar",
"aspirar",
"asustar",
"asustarse",
"atacar",
"atender",
"atraer",
"atravesar",
"atreverse",
"aumentar",
"avanzar",
"averiguar",
"avisar",
"ayudar",
"bailar",
"bajar",
"bañar",
"bañarse",
"barrer",
"batir",
"bautizar",
"beber",
"bendecir",
"besar",
"bordar",
"borrar",
"brillar",
"brindar",
"broncearse",
"bucear",
"burlar",
"burlarse",
"buscar",
"caber",
"caer",
"calcular",
"calentar",
"calentarse",
"callar",
"callarse",
"calmar",
"calmarse",
"cambiar",
"caminar",
"cancelar",
"cansar",
"cansarse",
"cantar",
"caracterizar",
"cargar",
"casar",
"casarse",
"castigar",
"causar",
"cazar",
"celebrar",
"cenar",
"censurar",
"cepillar",
"cerrar",
"cesar",
"charlar",
"chismear",
"chocar",
"civilizar",
"clarificar",
"clasificar",
"cobrar",
"cocinar",
"coger",
"colgar",
"colocar",
"colonizar",
"combatir",
"comenzar",
"comer",
"competir",
"componer",
"comprar",
"comprender",
"comunicar",
"comunicarse",
"condenar",
"conducir",
"confesar",
"confiar",
"confirmar",
"compartir",
"confiscar",
"conjugar",
"conocer",
"conquistar",
"conseguir",
"consentir",
"conservar",
"consistir",
"constituir",
"construir",
"consumir",
"contaminar",
"contar",
"contener",
"contestar",
"continuar",
"contribuir",
"controlar",
"convencer",
"convenir",
"conversar",
"convertir",
"convidar",
"copiar",
"corregir",
"correr",
"cortar",
"coser",
"costar",
"crear",
"crecer",
"creer",
"criar",
"criarse",
"criticar",
"crucificar",
"cruzar",
"cubrir",
"cuidar",
"culpar",
"cultivar",
"cumplir",
"curar",
"dar",
"deber",
"decidir",
"decidirse",
"decir",
"declarar",
"decorar",
"dedicar",
"dedicarse",
"defender",
"dejar",
"demostrar",
"depender",
"depositar",
"deprimir",
"derretir",
"desagradar",
"desagradecer",
"desaparecer",
"desayunar",
"descansar",
"descender",
"describir",
"descubrir",
"desarrollar",
"desarrollarse",
"desear",
"deshacer",
"despedir",
"despertar",
"despertarse",
"destruir",
"detener",
"detenerse",
"detestar",
"devolver",
"devorar",
"dibujar",
"dirigir",
"discutir",
"diseñar",
"disfrutar",
"disgustar",
"disminuir",
"distinguir",
"distribuir",
"divertir",
"divertirse",
"divorciar",
"divorciarse",
"doblar",
"doler",
"dormir",
"dormirse",
"duchar",
"ducharse",
"dudar",
"durar",
"echar",
"echarse",
"educar",
"efectuar",
"ejercer",
"elegir",
"eliminar",
"emborrachar",
"emborracharse",
"emigrar",
"empezar",
"emplear",
"enamorar",
"enamorarse",
"encantar",
"encender",
"encontrar",
"enfadar",
"enfadarse",
"enfermar",
"enfermarse",
"enflaquecer",
"enflaquecerse",
"engañar",
"enojar",
"enojarse",
"enriquecer",
"enriquecerse",
"enseñar",
"ensuciar",
"entender",
"enterarse",
"entrar",
"entregar",
"entretener",
"entrevistar",
"entusiasmar",
"entusiasmarse",
"envejecer",
"envejecerse",
"enviar",
"equivocar",
"equivocarse",
"errar",
"escoger",
"esconder",
"esconderse",
"escribir",
"escuchar",
"esperar",
"esquiar",
"establecer",
"estar",
"estimar",
"estudiar",
"evacuar",
"evitar",
"exhibir",
"exigir",
"explicar",
"explorar",
"explotar",
"exponer",
"exportar",
"expresar",
"extender",
"extinguir",
"fabricar",
"faltar",
"fascinar",
"felicitar",
"fijar",
"fingir",
"firmar",
"florecer",
"formar",
"fortalecer",
"fregar",
"freír",
"fumar",
"funcionar",
"ganar",
"gastar",
"generalizar",
"glorificar",
"gobernar",
"graduar",
"graduarse",
"gritar",
"gruñir",
"guardar",
"guiar",
"gustar",
"haber (auxiliar)",
"haber (impersonal)",
"hablar",
"hacer",
"hallar",
"hallarse",
"helar",
"heredar",
"herir",
"hervir",
"huir",
"hundir",
"hundirse",
"ilustrar",
"importar",
"imprimir",
"incluir",
"indicar",
"inducir",
"influir",
"informar",
"iniciar",
"inmigrar",
"insistir",
"instalar",
"insultar",
"intentar",
"interesar",
"interpretar",
"introducir",
"invadir",
"inventar",
"invertir",
"investigar",
"invitar",
"invocar",
"ir",
"irse",
"jactarse",
"jugar",
"juntar",
"juntarse",
"jurar",
"ladrar",
"lamentar",
"lanzar",
"lastimar",
"lavar",
"lavarse",
"leer",
"legalizar",
"levantar",
"levantarse",
"limpiar",
"llamar",
"llamarse",
"llegar",
"llenar",
"llevar",
"llorar",
"llover",
"lograr",
"luchar",
"madurar",
"mandar",
"manejar",
"mantener",
"maquillar",
"maquillarse",
"marcar",
"masticar",
"matar",
"matricular",
"matricularse",
"medir",
"mentir",
"merecer",
"merendar",
"meter",
"mezclar",
"mirar",
"modificar",
"molestar",
"montar",
"morir",
"mostrar",
"mover",
"moverse",
"mudar",
"mudarse",
"nacer",
"nadar",
"navegar",
"necesitar",
"negar",
"negarse",
"negociar",
"nevar",
"notar",
"obedecer",
"obligar",
"obtener",
"ocurrir",
"odiar",
"ofender",
"ofrecer",
"oír",
"oler",
"olvidar",
"olvidarse",
"oponer",
"oponerse",
"organizar",
"padecer",
"pagar",
"parar",
"parecer",
"participar",
"partir",
"pasar",
"patinar",
"pedir",
"pegar",
"peinar",
"peinarse",
"pelear",
"pensar",
"perder",
"perdonar",
"permanecer",
"permitir",
"perseguir",
"pertenecer",
"pesar",
"pescar",
"picar",
"pintar",
"platicar",
"planchar",
"plantar",
"poder",
"poner",
"ponerse",
"practicar",
"predecir",
"preferir",
"preguntar",
"preguntarse",
"preparar",
"prepararse",
"presentar",
"presentir",
"preservar",
"prever",
"probar",
"producir",
"prohibir",
"prometer",
"proponer",
"proseguir",
"proteger",
"protestar",
"provocar",
"publicar",
"purificar",
"quebrar",
"quebrarse",
"quedar",
"quedarse",
"quejarse",
"quemar",
"quemarse",
"querer",
"quitar",
"quitarse",
"realizar",
"rechazar",
"recibir",
"reciclar",
"recoger",
"recomendar",
"reconocer",
"recordar",
"redargüir",
"reducir",
"regalar",
"regar",
"regatear",
"regir",
"registrar",
"registrarse",
"regresar",
"regular",
"rehusar",
"rehusarse",
"reinar",
"reír",
"renacer",
"renovar",
"renunciar",
"reñir",
"reparar",
"repasar",
"repetir",
"replicar",
"reportar",
"requerir",
"reservar",
"resolver",
"respetar",
"respirar",
"responder",
"resultar",
"revelar",
"rezar",
"robar",
"rogar",
"romper",
"saber",
"sacar",
"sacrificar",
"sacudir",
"salir",
"saltar",
"saludar",
"salvar",
"satisfacer",
"satirizar",
"secar",
"secarse",
"seguir",
"sentar",
"sentarse",
"sentir",
"sentirse",
"señalar",
"ser",
"servir",
"significar",
"simbolizar",
"situar",
"sobrevivir",
"soler",
"sonar",
"soñar",
"sonreír",
"soportar",
"sorprender",
"subir",
"suceder",
"sufrir",
"sugerir",
"suponer",
"surgir",
"suspirar",
"sustituir",
"tañer",
"tapar",
"tardar",
"temer",
"tener",
"teñir",
"terminar",
"tirar",
"tocar",
"tomar",
"torcer",
"toser",
"trabajar",
"traducir",
"traer",
"tragar",
"tratar",
"triunfar",
"tropezar",
"ubicar",
"unir",
"untar",
"usar",
"utilizar",
"vaciar",
"valer",
"variar",
"vencer",
"vender",
"venir",
"ver",
"verificar",
"vestir",
"vestirse",
"viajar",
"violar",
"visitar",
"vivir",
"volar",
"volver",
"vomitar",
"votar",
"yacer",
"zambullirse"];
