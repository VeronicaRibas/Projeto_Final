const express = require ("express");
const ProductController = require("../controller/ProductController");
const router = express.Router();

router.route("/").get(ProductController.allProduct).post(ProductController.createProduct);


module.exports = router;