import express from "express"
import chalk from "chalk"
import "dotenv/config"
import connectDB from "./config/config.js"
import userRoutes from "./routes/userRoute.js"
import companyRoutes from "./routes/companyRoute.js"
import cookieParser from "cookie-parser"
//INSTANCE OF EXPRESS
const app = express()
//PORT
const port = process.env.PORT || 4040
//DB SERVER
connectDB()
//MIDDLEWARES
app.use(express.json())
app.use(cookieParser())
//http://localhost:4040/api/v1/users
app.use("/api/v1/users", userRoutes)
//https:localhost:4040/api/v1/company
app.use("/api/v1/company", companyRoutes)

app.listen(port, () =>
    console.log(chalk.bgMagenta(`server is running http://localhost:${port}`))
)