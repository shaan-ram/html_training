const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let errorHandler = require("./utils").errorHandler
const config = require("./config.json");


let app =  express()
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let port = process.env.PORT || config.port;

let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    title : String,
    firstname : String,
    lastname : String
}));
let string_mongo =`mongodb+srv://${config.username}:${config.password}@cluster0.ijqvhi3.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(string_mongo)
.then((res)=> console.log("connected"))
.catch((err)=> console.log("Error",err))

app.use(express.json());
app.use(express.static(__dirname+"/public"));

//READ
app.get("/data",(req,res)=>{
    Hero.find().then(dbRes=> res.json(dbRes))
});

// CREATE
app.post("/data", (req, res)=>{
    let hero = new Hero(req.body);
    console.log(req.body);
    hero.save()
    .then(dbres=>{
        res.send({ message : "hero added to list"})
        console.log("db updated")
    })
    .catch(err=>errorHandler);
});

//UPDATE
app.post("./update/:hid",(req,res)=>{
Hero.findByIdAndUpdate({__id : req.params.hid})
.then (dbRes=>{
    console.log(dbRes);
    dbRes.title = req.body.title;
    dbRes.firstname = req.body.firstname;
    dbRes.lastname = req.body.lastname;
    dbRes.save().then(updateRes => console.log("hero info updated"))
})
.catch(error => errorHandler)
})

//READ UPDATE
app.get("/edit/:heroid",(req,res)=>{
    Hero.findById({_id: req.params.heroid})
    .then(dbres =>{
        res.send(dbres)
    })
})

//DELETE
app.delete("/delete/:hid",(req,res)=>{
    
})

app.delete("/delete")
app.listen(port,config.host,errorHandler);
console.log(`server is now ready on ${config.host}:${port}`)