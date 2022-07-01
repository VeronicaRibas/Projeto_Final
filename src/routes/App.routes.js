const express = require ("express");
const ProductController = require("../controller/ProductController");
const CustomerController = require("../controller/CustomerController")
const router = express.Router();


// Routes the of Product
router.route("/").get(ProductController.allProduct).post(ProductController.createProduct);
router.route("/:id").get(ProductController.oneProduct).put(ProductController.UpdateProduct).delete(ProductController.deleteProduct)

// Routes of Customer
router.route("/Customer").post(CustomerController.createCustomer).get(CustomerController.getAllCustomer);
router.route("/Customer/:id").get(CustomerController.getCustomer).put(CustomerController.updateCustomer).delete(CustomerController.deleteCustomer);


module.exports = router;
