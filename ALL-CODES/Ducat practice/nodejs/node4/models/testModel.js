import mongoose from "mongoose";
const testSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  city: {
    type: String,
    enum: ["delhi", "kerala", "banaras"]
  },
  created_at: {
    type: Date,
    default: Date.now()
  }

})
const testModel = mongoose.model("test", testSchema)
export default testModel
