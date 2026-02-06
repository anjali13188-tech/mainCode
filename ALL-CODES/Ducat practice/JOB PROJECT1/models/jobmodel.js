import { application } from "express"
import mongoose from "mongoose"
 const jOBSchema = new mongoose.Schema({
    title:{type:String , required:true},
    description:{type:String,required:true},
    requirement:[{type:String}],
    salary:{type:Number},
    location:{type:String,required:true},
    jobType:{type:String,required:true},
    position:{type:String,required:true},
    company:{type:mongoose.Schema.Types.ObjectId,ref:"Company",required:true},
    created_by:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    applications:[{type:mongoose.Schema.Types.ObjectId,ref:"Application",required:true}]
    
 },{timestamps:true})

 const jobModel = mongoose.model("job",jobSchema)
 export default jobModel