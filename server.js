var http = require('http');
var url = require('url');

function start(route, handle){

http.createServer(function(request,response){
var pathname = url.parse(request.url).pathname;
console.log("Request recieved for path:"+pathname);
route(pathname,handle,response,request);


}).listen(8887);

console.log("Server Started");

}

exports.start = start;
