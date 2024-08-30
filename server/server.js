import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routers/userRouters.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Server Issue: ${error}`);
    process.exit(1);
  }
};

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
