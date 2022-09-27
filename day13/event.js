
// const EventEmitter = require("events").EventEmitter;
// let myEvent = new EventEmitter();
// myEvent.addListener("valtech", function(){
//     console.log("valtech event happened");
// });
// setTimeout(function(){
//     myEvent.emit("valtech");
// },3000)


var count = 1;
const EventEmitter = require("events").EventEmitter;
let myEvent = new EventEmitter();
let valtechHandler = function(){
    console.log("valtech event happened");};
myEvent.addListener("valtech",valtechHandler) 

 let si=setInterval(function(){
   var abc= myEvent.emit("valtech");
    count = count + 1;
    if(abc > 5){
        return valtechHandler;
        
    }
},1000)