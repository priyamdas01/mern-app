import express from "express";
import connectDB from "./config/db.js";

const app = express();

app.listen(3000, () => {
  connectDB();
  console.log("Server started on http://localhost:3000");
});
console.log(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("server is ready");
});
