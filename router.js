function route(pathname,handle,response,request){

console.log("About to route to request:"+pathname);
if(typeof handle[pathname]==='function'){

	handle[pathname](response,request);
}
else{
	response.writeHead(404,{"Content-Type":"text/plain"});
	response.write("404 Request handler not found");
	response.end();
}
}

exports.route = route;
