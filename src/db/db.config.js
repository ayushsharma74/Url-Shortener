import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`😍 MongoDB connected at port : ${connectionInstance.connection.port}`);
    } catch (error) {
        console.log(error);
        
    }
}