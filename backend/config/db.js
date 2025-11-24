import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://sidhhi:sidhhil123@ac-yfurffj-shard-00-00.gty0skt.mongodb.net:27017,ac-yfurffj-shard-00-01.gty0skt.mongodb.net:27017,ac-yfurffj-shard-00-02.gty0skt.mongodb.net:27017/?replicaSet=atlas-13tq3i-shard-0&ssl=true&authSource=admin').then(()=>console.log("DB is Connected"))
}