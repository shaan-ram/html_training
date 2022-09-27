var path = require("path")
var list = ["users, guest, admin"];
var files = ["index.html ,profile.html, details.html "]
console.log(path.join(list[Math.floor(Math.random() * list.length)], files[Math.floor(Math.random() * files.length)]))