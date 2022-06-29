const express = require ("express");
const ProductController = require("../controller/ProductController");
const pharmacistController = require("../controller/pharmacistController")
const router = express.Router();


// Routes of Product
router.route("/").get(ProductController.allProduct).post(ProductController.createProduct);
router.route("/:id").get(ProductController.oneProduct).put(ProductController.UpdateProduct).delete(ProductController.deleteProduct)

// Routs of Pharmacist
router.route("/").get(pharmacistController.allPharmacist).post(pharmacistController.createPharmacist);

module.exports = router;
