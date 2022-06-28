const express = require ("express");
const ProductController = require("../controller/ProductController");
const router = express.Router();


// Routes the of Product
router.route("/").get(ProductController.allProduct).post(ProductController.createProduct);
router.route("/:id").get(ProductController.oneProduct).put(ProductController.UpdateProduct)

module.exports = router;
