import mongoose from "mongoose";
import "dotenv/config"
import chalk from "chalk";

const connectDb = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URL)
        if (res) {
            console.log(chalk.bgYellowBright(`connected to DB Server!!!!`))
        }

    } catch (error) {
        console.log(error)
    }

}

export default connectDb