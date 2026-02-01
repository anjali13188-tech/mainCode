// // const http = require("http")
// import http from "http"
// import chalk from "chalk"

// http.createServer((request,response)=>{
//     response.write("welcome to nodejs!!!!!!!!")
//     response.end()
// }).listen(4533,()=>{
//     console.log( chalk.blue("server is running....!!!!!"))
// })


// =========file handling==========

import fs from "fs"
// fs.writeFileSync("ducat.txt","welcome to file handling concept!")
//  let result = fs.readFileSync("ducat.txt")
 let result = fs.readFileSync("ducat.txt","utf-8")
 console.log(result)

