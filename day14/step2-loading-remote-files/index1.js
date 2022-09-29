const axios = require("axios");
const fs = require("fs");

axios.get("https://www.valtech.com")
   .then(res => fs.writeFileSync("temp/temp.html",res.data,"utf-8"))
   .catch(error => console.log(error))
