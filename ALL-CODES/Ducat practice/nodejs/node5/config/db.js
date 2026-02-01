import mongoose from "mongoose"
import "dotenv/config"
  import chalk from "chalk"
 const connectDB = async()=>{
 try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log( chalk.bgBlue("db connected!"))
 } catch (error) {
    console.log("error")
    
 }
 }
  export default connectDB