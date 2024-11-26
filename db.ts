import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const mongoURI = process.env.MONGO_URL as string; 

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    
  }
};
