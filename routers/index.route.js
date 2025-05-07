const rout = require("express").Router();



rout.get("/",(req,res)=>{
    res.render("pages/home.ejs")
})

rout.get("/write",(req,res)=>{
    res.render("pages/write.ejs")
})


module.exports = rout;