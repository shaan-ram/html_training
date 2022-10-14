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
mongoose.connect(string_mongo).then((res)=> console.log("connected"))
.catch((err)=> console.log("Error",err))
// app.get("/",(req,res)=>{
//     res.send("hello from express")
// })

//READ
app.get("/",(req,res)=>{
    Hero.find().then(dbRes=> res.json(dbRes))
})

//UPDATE
app.post("./update/:hid",(req,res)=>{
Hero.findByIdAndUpdate({__id : req.params.hid})
.then (dbRes=>{
    dbRes.title ="Joker";
    dbRes.save().then(updateRes => console.log("hero info updated"))
})
.catch(error => errorHandler)
})

app.listen(port,config,host,errorHandler);
console.log(`server is now ready on ${config.host}:${port}`)