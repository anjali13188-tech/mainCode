import express from "express"
import "dotenv/config"
import connectDB from"./config/db.js"
import testroutes from "./route/testroute.js"
import chalk from "chalk"
const app= express()
//PORT
const port= process.env.PORT
//  database connection
connectDB()
// Middle  ware//
app.use(express.json())
 app.use(express.static("upload"))
 
//http://localhost:7890/api/v2/node5/testroute
 app.use("/api/v2/node5",testroutes)
//http://localhost:7890/api/v2/node5/profile

 app.listen (port,()=>{
 console.log(chalk.bgMagentaBright(`server is running at PORT:http://localhost:${port}`))
 })
 export default connectDB



