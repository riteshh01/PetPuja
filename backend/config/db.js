import mongoose from "mongoose";

export const connectDB = async () => {
    
    try {
        const uri = process.env.MONGO_URI;

        if(!uri){
            console.log("MONGO_URI is not found in .env file 🔴");
            return;
        }
        await mongoose.connect(uri);
        console.log("Database is Connected Successfully 🟢");
    } catch (error) {
        console.error("Mongo Db Connection Error 🔴")
        console.error(error); // ye actual error object ko print karta hai
        process.exit(1); // it means Node.js application turant band kar do and 1 = something went wrong
    }
};