import express from "express";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.route.js";

const app = express();
app.use(express.json());
app.use("/api/products", productRouter);

console.log(process.env.MONGO_URI);

app.listen(3000, () => {
  connectDB();
  console.log("Server started on http://localhost:3000");
});
