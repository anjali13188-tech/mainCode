import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,required:"true",unique:"true"},
    password:{ type:String,required:"true"},
    photo:{type:String},
    created_at:{type:Date ,default:Date.now}

})

const userModel =mongoose.model("User",userSchema)
 export default userModel