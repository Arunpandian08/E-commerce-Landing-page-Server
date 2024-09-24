import express from "express";
import { getProducts } from "../Controllers/product.controller.js";

const router = express.Router();

router.get("/get", getProducts);

export default router;
