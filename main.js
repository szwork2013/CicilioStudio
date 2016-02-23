/**
 * Created by Lance on 10/19/2015.
 */

var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var favicon = require('serve-favicon');

//var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
//var certificate = fs.readFileSync('sslcert/server.csr', 'utf8');
//var credentials = {key: privateKey, cert: certificate};

var app = express();

var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

//Redefine where views are located
//app.set('views',`${__dirname}/webapp/*`);

//app.set('view engine', 'html');
//Hosts the static files in public under /assets
app.use(express.static(`${__dirname}/target`));
app.use('/dependencies', express.static(`${__dirname}/node_modules`));
app.use(favicon(__dirname + '/target/assets/images/projects/ciciliostudio/favicon.png'));

var cs_ports = {http: 80, https: 443 };

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/target/index.html');
});

httpServer.listen(cs_ports.http, function () {
    //var host = server.address().address;
    console.log('App Listening on port %s', cs_ports.http);
});

//httpsServer.listen(cs_ports.https, function () {
    //console.log('App Listening on port %s', cs_ports.https);
//});

