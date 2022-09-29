const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const { stringify } = require("querystring");

let app = express();

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let url = "mongodb+srv://admin:lJZcuuF2ce8idvpP@cluster0.ijqvhi3.mongodb.net/valtechdb?retryWrites=true&w=majority"

let hero = mongoose.model("hero", Schema({
    id : ObjectId,
    title : String,
    firstname: String,
    lastname: String
}));

mongoose.connect(url)
.then(()=>{
    console.log("Connected")
})

.catch(()=>{
    console.log("Error",err)
})

app.get("/",function(req,res){
    hero.find().then(dbres=>{
        res.json(dbres);
    })
})

app.listen(8080,"localhost", function(){

})