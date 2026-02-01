 import express from "express"
 import "dotenv/config"
 import chalk from "chalk"
 import testRoutes from"./routes/testRoute.js"
 import connectDB from "./config/connectDB.js"
 import cors  from "cors"


  //instacnce of an express//

  const app=express()
   //PORT//
   const port = process.env.PORT || 6789

   //CORS//
   app.use(cors())
   
  //  database
   connectDB()


   ////////////MIDDLE WARE/////////////////
   app.use(express.json())
   //http://localhost:6789/api/v1/nodejs
    app.use("/api/v1/nodejs",testRoutes)


  app.listen(port,()=>
    console.log(chalk.bgBlue(`server is running http://localhost:${port}`)))