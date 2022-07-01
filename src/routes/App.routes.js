const express = require ("express");
const ProductController = require("../controller/ProductController");
const pharmacistController = require("../controller/PharmacistController")
const router = express.Router();


// Routes of Product
router.route("/product").get(ProductController.allProduct).post(ProductController.createProduct);
router.route("/product/:id").get(ProductController.oneProduct).put(ProductController.UpdateProduct).delete(ProductController.deleteProduct)

// Routs of Pharmacist
router.route("/pharmacist").get(pharmacistController.allPharmacist).post(pharmacistController.createPharmacist);
router.route("/pharmacist/:id").get(pharmacistController.onePharmacist).put(pharmacistController.updatePharmacist).delete(pharmacistController.deletePharmacist);

module.exports = router;
