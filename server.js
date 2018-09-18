var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/restful_task_182', {useNewUrlParser: true});

require('./server/models/Task.js');
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(7700, function(){
    console.log('listening on port 7700');
})