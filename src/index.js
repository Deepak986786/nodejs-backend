import dotenv from "dotenv";
import connectDB from "./db/mongodb.js";
import app from "./app.js";

dotenv.config({
  path: "./",
});
connectDB()
  .then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is listening at ${process.env.PORT || 8000}`);
    })
  })
  .catch((err) => console.log("mongo db connection failed"));