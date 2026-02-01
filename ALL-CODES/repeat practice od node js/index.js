import express from "express"
import chalk from "chalk"
 const app=  express()



   app.use= (express.json())
  const port = process.env.PORT||4567
 app.listen(port,()=>{
    console.log(chalk.bgBlue(`server is running on ${port}!!!!!!!!!!`))
 })
    