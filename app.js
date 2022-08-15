//Developed By: Ganesh Sonawane
//Date:15thAug2022
//Create a nodejs server
//core modeules: http https fs path os these are the core modules into the nodejs


// http: used for the creating the server and sending the request
// this is used to import the module ,inside the reuire we need to mention the path which we need to import where as in this we are refering tho the core module so we dont need to menitioned the path
// const http = require('http')
// //so by default the rlistener takes two input as argument one is request and response
// const server= http.createServer(rlistener);  
// //so whatever traffic is coming to the our server will be sent to the rlistener
// function rlistener(req,res){

// }
//second way to write the same code is

const server = http.createServer((req,res)=>{
    console.log(req)
});

server.listen() // so this will keep the server alive 