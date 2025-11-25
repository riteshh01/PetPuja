import mongoose  from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required:true},
    image: {type:String, required: true},
    category: {type:String, required: true}
});



const foodModel = mongoose.models.food || mongoose.model("food", foodSchema); // Mongoose me agar tum same model 2 baar define kar doge, to error aata hai, to handle this we are going to use it.

export default foodModel;