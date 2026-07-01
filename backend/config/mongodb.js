import mongoose from "mongoose";
const connectdb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    console.log('DB connected');
  } catch (error) {
    console.log('MongoDB connection failed:', error.message);
    throw error;
  }
};

export default connectdb;
connectdb;