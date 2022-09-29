const express = require("express")
let app = express()
app.use(express.urlencoded({extended: True}))

let heroes = ["Anmol","Thor","IronMan","Hulk"]

app.get("/",(req,res)=>{
    res.render("home.ejs",{
        avengers : heroes,
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