import express from "express"
import chalk from "chalk"
import "dotenv/config"
import connectDB from "./config/config.js"
import userRoutes from "./routes/userRoute.js"
import cookieParser from "cookie-parser"

const app = express()
const port = process.env.PORT || 4040

connectDB()
//midlewares
app.use(express.json())
app.use(cookieParser())
//http://localhost:4040/api/v1/users
app.use("/api/v1/users", userRoutes)




app.listen(port, () =>
    console.log(chalk.bgMagenta(`server is running http://localhost:${port}`))
)