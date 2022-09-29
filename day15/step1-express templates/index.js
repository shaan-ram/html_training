const express = require("express")
let app = express()
var port = process.env.PORT ;
console.log(port);

app.get("/",(req,res)=>{
    // res.sendFile(__dirname+"/index.html")
    res.render("index.",{
        compname : "Valtech"
    })
});
app.get("/about",(req,res)=>{
    // res.sendFile(__dirname+"/about.html")
    res.render("about.pug",{
        compname : "Valtech"
    })
});
app.get("/contact",(req,res)=>{
    // res.sendFile(__dirname+"/contact.html")
    res.render("contact.pug",{
        compname : "Valtech"
    })
});

app.listen(port,"localhost",function(error){
    if(error){
        console.log("ERROR", error)
    }else{
        console.log(`server is now live on localhost : ${port}`);
    }
})