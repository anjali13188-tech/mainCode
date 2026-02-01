import mongoose from "mongoose";
const testSCHEMA = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: { enum: ["punjab", "haryana", "kashmir", "telangana"] },
    created_at: {
        type: Date,
        default: Date.now()
    },
    email:{
        type:String,
        unique:true
    },
     age:{
        type:Number
     }
})
const testmodel = mongoose.model("test", testSCHEMA)
export default testmodel
