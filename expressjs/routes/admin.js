const express= require('express')

const router = express.Router()

router.get("/add-product",(req,res,next)=>{
    res.send(
      "  <form action='/product' method='post'><inout type=text><button type='submit'></form>"
    )
})
router.post("/product",(req,res,next)=>{
    console.log("into the product catalog")
    res.redirect('/')
})
module.exports = router;
