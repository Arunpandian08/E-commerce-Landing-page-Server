import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./Router/product.router.js";
import connectDB from "./Database/dbConfig.js";
dotenv.config();

const app = express();
app.use(cors({
  origin: "https://e-commerce-landing-page-arun-fsd.netlify.app",
}));
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/product", productRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
