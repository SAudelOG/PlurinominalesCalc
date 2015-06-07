var http = require('http'),
 	express = require('express')
 	partidos = require('./data/partidos.js');
 	
 var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars').create({
	defaultLayout:'main',
	helpers:{
		section: function(name, options){
			if (!this._sections) this._sections = {};
			this._sections[name] = options.fn(this);
			return null;
		}
	}
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.get('/obtenerPartidos', function(req, res){
	if(req.xhr || req.accepts('json.html') === 'json'){
		res.json(partidos.obtenerPartidos());
	}else res.json(partidos.obtenerPartidos());;
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
})

