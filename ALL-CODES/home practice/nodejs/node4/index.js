import express from "express"
import "dotenv/config"
import chalk from "chalk"
import  testRoutes from "./routes/testRoute.js"
import connectDb from "./config/connectDB.js"

//instance of an express//

const app = express()
//PORT//
const port = process.env.PORT || 3333

//DATABASE//
connectDb()

//middleware//
// https://localhost:3333/api/v1/node4
app.use("/api/v1/node4",testRoutes)

app.listen(port, () =>
    console.log(chalk.magenta(`node js server is runing http://localhost:${port}`)))
