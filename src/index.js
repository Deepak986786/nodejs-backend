import dotenv from 'dotenv';
import connectDB from "./db/mongodb.js";

dotenv.config({
    path:'./'
})
connectDB();