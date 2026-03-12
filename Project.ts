import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
 name: String,
 description: String,
 ownerId: String,
 status: {
  type: String,
  default: "active"
 }
})

export default mongoose.model("Project", projectSchema)
