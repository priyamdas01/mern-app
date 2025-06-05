import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connetDB;
