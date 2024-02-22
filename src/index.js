import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB();



//2nd method
/*
import {express } from "express";
const app = express()

//effy
(async ()=>{
    try {
       await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`,
        )
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})()*/