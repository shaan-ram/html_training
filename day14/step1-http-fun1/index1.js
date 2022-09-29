const http = require("http");
const fs = require("fs");
let compname = "Valtech"
let server = http.createServer((req,res) =>{
    if(req.url === "/"){
        let htmlcontent = fs.readFileSync("./index.html","utf-8");
        res.writeHead(200,{
            "Content-Type" : "text/html"
        });
        res.write(htmlcontent.replace("{compname}",compname).replace("{compname}",compname));
        res.end();
    }else{
        fs.readFile("./"+req.url,"utf-8",function(error,data){
            if(error){
                res.writeHead(404,{"content-type" : "text/html"});
                res.end("<h1>Error 404 </h1>")
            }else{
                res.writeHead(200,{"content-type" : "text/html"})   
                res.write(data)
                res.end()
            }
        })
    }
});
server.listen(1010, "localhost", function(error){
    if(error){
        console.log("Error")
    }
})