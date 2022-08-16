//core modules
const http = require('http')
//third party 
const express = require('express')
const bodyParser = require('body-parser')

//local modules
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


const app = express()

app.use(shopRoutes)
app.use(adminRoutes)


app.use((req,res,next)=>{
    res.status(404).send("<h1>Error 404</h1>");
})
//app.use(bodyParser.urlencoded({extended:false}));







//server creation
// const server = http.createServer(app)
// //listening on the port
// server.listen(4000)

app.listen(4000)