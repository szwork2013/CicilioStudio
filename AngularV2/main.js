/**
 * Created by Lance on 10/19/2015.
 */
http = require('http');
path = require("path");
url = require("url");
fs = require("fs");

const PORT = 80;

function handleRequest(request, response){
    var my_path = url.parse(request.url).pathname;
    var full_path = path.join(process.cwd(), my_path);

    path.access(full_path, fs.F_OK, function (err){
        if (err){
            response.writeHeader(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
        }else{
            fs.readFile(full_path, "binary", function(err, file){
                if (err){
                    response.writeHeader(500, {"Content-Type": "text/plain"});
                    response.write("err" + "\n");
                    response.end();
                }else{
                    response.writeHeader(200);
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
}

// Creating a server
var server = http.createServer(handleRequest);

// Starting the Server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});