//In this code we will learn how to route the traffic to various modules in the nodejs

const http  = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const url =  req.url;
    const method = req.method;
    if (url=== '/'){
            res.write("<html>");
            res.write("<head>");
            res.write("welcome to the message page");
            res.write("</head>");
            res.write("<body>");
            res.write("<form action='/done' method='POST'><label for='texti'>enter a message</label> <input type='text' name='texti'  id='texti'> <button type='submit'> </form>");
            res.write("</body>");
            res.write("</html>");
            return res.end();
    }
    if(url==='/done' && method ==='POST'){
        console,log("we are inside the code")
        fs.writeFileSync('msg.txt','done with the everything')
        res.statusCode=202;
        res.setHeader('Location','/');
       return res.end();
    }

     
})
server.listen(4000);