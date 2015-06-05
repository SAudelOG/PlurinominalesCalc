var partidos = [
	{
		"idPartido":1,
		"Nombre":"Partido Revolucionar institucional",
		"Prefijo": "PRI"
	},
	{
		"idPartido":2,
		"Nombre":"Partido Accion Nacional",
		"Prefijo": "PAN"
	},
	{
		"idPartido":3,
		"Nombre":"Partiod de LA Revolucion Democratica",
		"Prefijo": "PRD"
	},
]

exports.obtenerPartidos = function(){
	return partidos;
}