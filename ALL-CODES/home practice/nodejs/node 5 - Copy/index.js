import express from "express"
import "dotenv/config"
import chalk from "chalk"
import connectDB from "./config/db.js"
import authroutes from "./routes/authroute.js"
const app = express()
//PORT 
 const port =  process.env.PORT || 8080
 // data base conection
  connectDB()
  //Middleware
  app.use(express.json())
  //http://localhost:8080/api/v1/practice/register
  app.use("/api/v1/practice",authroutes)


  app.listen(port,()=>{
    console.log(chalk.bgBlue(`server is runing ${port}!!!! `))
  })
  export default  connectDB


 
