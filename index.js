'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()



app.use('/', express.static('public'));
app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Pra poder funcionar o socket 
var server = app.listen(app.get('port'), function() {
    console.log("logado olha o log !! aquiiiiiiiiiiiiii  TO ONLINEEEE", app.get('port'));
});




// ROUTES

app.get('/teste', function(req, res) {
	res.send("Ola Server  ")
	console.log("testando rota")
});

