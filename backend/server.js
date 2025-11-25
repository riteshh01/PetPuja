import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv";
import foodRouter from "./routes/foodRoute.js";
dotenv.config(); // it is going to search the .env file in the project root folder


// app cofig 
const app = express()
const PORT = process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();


// api end points
app.use("/api/food", foodRouter)



app.get("/", (req, res)=>{
    res.send("API Working")
})


app.listen(PORT, ()=>{
    console.log(`SERVER STARTED ON http://localhost:${PORT}`);
})
