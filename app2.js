//this is with some advance part such as konwiong the requests and responses
//1. import the http module
//2.Create the server
//3.accept the reuest and send the response

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.headers,req.method,req.url);
    res.setHeader('content-type','text/html');
    res.write("<html><head>welcome page</head><body>Hi developers , small steps makes large forts</body></html>")
    res.end()
})
server.listen(3000);