const express = require("express");
const router = express.Router();

const productController = require("../controller/ctl");

// Route to get all products with pagination and filters
router.get("/", productController.getProducts);

// In your `routes/products.js`
router.post("/produts/add", productController.addProduct);  // This route handles adding a new product


// Route to get product statistics via aggregation
router.get("/stats", productController.getProductStats);

module.exports = router;
