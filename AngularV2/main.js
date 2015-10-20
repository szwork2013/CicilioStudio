/**
 * Created by Lance on 10/19/2015.
 */
var http = require('http');

const PORT = 80;

function handleRequest(request, response){
    response.end('Success, Hit Path: ' + request.url);
}

// Creating a server
var server = http.createServer(handleRequest);

// Starting the Server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});