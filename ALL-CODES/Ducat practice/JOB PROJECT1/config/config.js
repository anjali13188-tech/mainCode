import mongoose from "mongoose"
import "dotenv/config"
import chalk from "chalk"


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        if (conn) {
            console.log(chalk.bgBlue(`CONNECTED TO DB SERVER!!`))
        }
        else {
            console.log("error in db connection!")
        }
    } catch (error) {
        console.log(error)

    }
}
export default connectDB;