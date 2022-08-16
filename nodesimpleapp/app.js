//Import the http module to create the server
const http = require('http');


//local moduels
const route= require('./route')

const server =  http.createServer(route)

server.listen(3000)
