import express from "express"
import { addFood, listFood } from "../controllers/foodController.js" // image upload hone ke baad data ko mogodb me save krne ke liye use hoga
import multer from "multer" // ye file uploading ke liye use hota hai


const foodRouter = express.Router(); // yaha pe hum express ka router bana rahe hai, which means ham apne routes (URL's) ko alag-2 file me organize kar rahe hai taki code clean rahe


// Image storage engine

// diskStorage ye batata hai ki hame files ko disk me hi storage karna hai
const storage = multer.diskStorage({
    destination:"uploads", // ye btata hai ki jo bhi user upload karega wo uploads naam ke folder me jayega
    filename: (req, file, cb)=>{ // Ye function decide karta hai ki saved file ka naam kya hoga.
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage: storage}); // multer ko initialize kiya aur usme upar banayi gayi storage configuration pass kar di. Ab upload variable ke paas power hai files ko us specific tareeke se save karne ki.


foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood)


export default foodRouter;


// ⁡⁢⁣⁣Jab koi /add par request bhejega, toh sabse pehle Multer uski image ko ek unique naam dekar "uploads" folder me save karega. Uske baad addFood function chalega jo baaki data (jaise food name, price) ko database me daal dega.⁡