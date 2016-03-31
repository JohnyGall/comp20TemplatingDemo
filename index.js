/*
John Gallagher
Comp 20 Templating Demo
03/31/2016
*/

// Initialization
var express = require('express');
var bodyParser = require('body-parser');
// Why don't we need to require Jade? Because it is built into express!


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // Where I am storing my static content (pictures of heroes, stylesheets, and template files)

app.set('port', (5000));
app.set('view engine', 'jade'); // Tell express to use jade for templating




// Mongo initialization and connect to database
var mongoUri = "mongodb://localhost/heroes";
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	if(!error){
		db = databaseConnection;
                console.log("database connection estblished");
	}else{
		console.log("the databse connection didn't work")
	}
});


app.get('/', function(request, response) {
        var query = request.query.hero;

	// Error checking - if no query is submitted render an error message and return
	if(query == undefined){
                response.render('error',{message: "No query!"});
                response.end();
                return;
        }

        var heroCursor = db.collection('heroes').find({"name": query}).toArray(function(err, cursor){
                var hero = cursor[0];

                if(hero == undefined){ // make sure that the requested hero is actually in the database
                        response.render('error',{message: "That isn't a hero!"});
                        response.end();
                        return;
                }

                // render the 'card' template(card.jade) and insert the following variables
                response.render('card', { // format for providing data to template is templateVariable: nodeVariable
                        name: hero.name,
                        pic: hero.image,
                        health: hero.attack,
                        attack: hero.health,
                        text: hero.text
                });
                response.end();
                return;
        });
});

app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
});
