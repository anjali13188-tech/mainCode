// // creating a server
//  const http = require("http")
// http.createServer((response,request)=>{
// request.write("welcome to nodejs practice")
// request.end()
// })  .listen(6500,()=>{
//     console.log("practice is practicing!!!!")
// })


// when we use module in package.json then we have to use import not require
// when we use commonjs in package.json then we have to use require not import

// creating a server
//   import chalk from "chalk"
// import http from "http"
//   http.createServer((request,response)=>{
//     response.write("heyyyyyyyy")
//     response.end()
//   }).listen(1234,()=>{
//       console.log( chalk.blueBright("welcom to node js practice"))
//   })


///////////////////file handling//////////////////////
import fs from "fs"
fs.writeFileSync("anjali.txt","you can do it !!!!!!!")

// fs= file system