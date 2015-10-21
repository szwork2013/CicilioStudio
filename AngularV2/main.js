/**
 * Created by Lance on 10/19/2015.
 */
var express = require('express');
var app = express();

const PORT = 80;

app.get('/', function(req, res){
    res.send('Hello World');
});

var server = app.listen(PORT, function () {
    //var host = server.address().address;

    console.log('App Listening on port %s', PORT);
});