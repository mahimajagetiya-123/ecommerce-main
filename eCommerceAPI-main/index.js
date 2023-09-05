//requiring express and port
const express = require('express');
const port = 8000;
const app = express();


//importing library body parser for authentication
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//Importing mongoose databaase
const db = require('./config/mongoose');

//Use express static to access assets
app.use(express.static('./assets'));

//Use library express-ejs-layouts
const expresslayouts = require('express-ejs-layouts');
const { start } = require('repl');
app.use(expresslayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//setting view engine using ejs template
app.set('view engine', 'ejs');
app.set('views', './views');

//requiring routes
app.use('/', require('./routes'));


//starting server with app.listen on $port
app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the port', err);
    };

    console.log('Express server is runnig on port:', port);
});