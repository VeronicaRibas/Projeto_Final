const express = require ("express");
const ProductController = require("../controller/ProductController");
const router = express.Router();

router.route("/").get(ProductController.allProduct);


module.exports = router;