const express = require ("express");
const ProductController = require("../controller/ProductController");
const SupplierController = require("../controller/SupplierController")
const router = express.Router();

// Routes for the Product
router.route("/product").get(ProductController.allProduct).post(ProductController.createProduct);
router.route("/product/:id").get(ProductController.oneProduct).put(ProductController.UpdateProduct).delete(ProductController.deleteProduct)

//Routes for the Supplier
router.route("/supplier").post(SupplierController.createSupplier);

module.exports = router;