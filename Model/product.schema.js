import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  rate: {
    type: Number,
  },
  count: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
