import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
            )
            console.log(`Database connected!! DB Host: ${connectionInstance.connection.host}`
        )
        console.log("Database connected successfully");
    } catch (error) {
        console.log("DB ERROR: ", error);
        process.exit(1); 
    }
}

export default connectDB;