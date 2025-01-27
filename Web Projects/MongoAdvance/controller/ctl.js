const Product = require("../model/product");

module.exports.getProducts = async (req, res) => {
  try {
    // Simple pagination, filtering, and sorting
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const category = req.query.category || "";
    const maxPrice = req.query.price || 0;

    const filter = {
      ...(category && { category }), // If category is provided, filter by category
      ...(maxPrice && { price: { $lte: maxPrice } }), // If price is provided, filter by price
    };

    // Get products from DB
    const products = await Product.find(filter)
      .sort({ price: 1 }) // Sort by price (ascending)
      .skip((page - 1) * limit) // Pagination
      .limit(limit); // Limit products per page

    // Get total number of products for pagination calculation
    const total = await Product.countDocuments(filter);

    // Render the product page with data
    res.render("products", { products, total, page, limit });
  } catch (err) {
    res.status(500).send("Error fetching products");
  }
};
module.exports.addProduct = async (req, res) => {
  const { name, price, category } = req.body;

  try {
    const newProduct = new Product({ name, price, category });
    await newProduct.save();
    res.redirect("/products"); // Redirect to product listing page
  } catch (err) {
    res.status(500).send("Error adding product");
  }
};

// 3. Get Product Stats (Aggregation)
module.exports.getProductStats = async (req, res) => {
  try {
    const stats = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$price" },
          count: { $sum: 1 },
        },
      },
      { $sort: { total: -1 } }, // Sort by total price descending
    ]);
    res.send(stats); // Send the aggregated stats
  } catch (err) {
    res.status(500).send("Error fetching stats");
  }
};
