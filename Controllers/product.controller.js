import Product from "../Model/product.schema.js";

//get call
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        console.log('Failed to get products', error);
        res.status(500).json({ message: 'Error getting products', error: error.message });
    }
}
