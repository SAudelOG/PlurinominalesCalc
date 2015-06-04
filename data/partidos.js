var partidos = [
	{
		"idPartido":1,
		"Nombre":"Partido Revolucionario Institucional",
		"Prefijo": "PRI",
		"PaginaWeb": "http://pri.org.mx",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/5/5f/PRI_Party_%28Mexico%29.svg",
	},
	{
		"idPartido":2,
		"Nombre":"Partido Acción Nacional",
		"Prefijo": "PAN",
		"PaginaWeb": "http://pan.org.mx/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/1/14/PAN_%28Mexico%29.svg",
	},
	{
		"idPartido":3,
		"Nombre":"Partido de la Revolución Democrática",
		"Prefijo": "PRD",
		"PaginaWeb": "http://www.prd.org.mx/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/8/8f/PRD_logo_%28Mexico%29.svg",
	},
	{
		"idPartido":4,
		"Nombre":"Partido del Trabajo",
		"Prefijo": "PT",
		"PaginaWeb": "http://www.partidodeltrabajo.org.mx/2011/index.php",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/3/3d/PT_Party_%28Mexico%29.svg",
	},
	{
		"idPartido":5,
		"Nombre":"Partido Verde Ecologista de México",
		"Prefijo": "PVEM",
		"PaginaWeb": "http://pvem-df.org.mx/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/9/96/PVE_Party_%28Mexico%29.svg",
	},
	{
		"idPartido":6,
		"Nombre":"Movimiento Ciudadano",
		"Prefijo": "MC",
		"PaginaWeb": "http://www.movimientociudadano.org.mx/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/2/26/PMC_Party_%28Mexico%29.svg",
	},
	{
		"idPartido":7,
		"Nombre":"Nueva Alianza",
		"Prefijo": "PANAL",
		"PaginaWeb": "https://nueva-alianza.org.mx/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/4/4f/PNA_Party_%28Mexico%29.svg",
	},
	{
		"idPartido":8,
		"Nombre":"MORENA",
		"Prefijo": "MORENA",
		"PaginaWeb": "http://www.morena.si/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/3/3e/Morena_Party_%28Mexico%29.png",
	},
	{
		"idPartido":9,
		"Nombre":"Partido Encuentro Social",
		"Prefijo": "PES",
		"PaginaWeb": "http://encuentro.social/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/a/ab/Encuentro_Social_Party_%28Mexico%29.png",
	},
	{
		"idPartido":10,
		"Nombre":"Partido Humanista",
		"Prefijo": "PH",
		"PaginaWeb": "http://soyhumanista.mx/site/index.php/en/",
		"Urllogo":"http://upload.wikimedia.org/wikipedia/commons/e/e1/Humanista_Party_%28Mexico%29.png",
	},

]

exports.obtenerPartidos = function(){
	return partidos;
}