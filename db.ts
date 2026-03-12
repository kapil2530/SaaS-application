import mongoose from "mongoose"

export const connectDB = async () => {
 await mongoose.connect("mongodb://mongo:27017/saas")
 console.log("MongoDB connected")
}
