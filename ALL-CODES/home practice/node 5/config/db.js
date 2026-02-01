import mongoose from "mongoose";
import "dotenv/config";
import chalk  from "chalk";

  const  connectDB = async()=>{
    try {
             await mongoose.connect(process.env.MONGO_URL)
             console.log(chalk.bgMagentaBright("DATABASE SERVER is running!!!!!"))
    } catch (error) {
        console.log("error")
    }
    
  }
   export default connectDB