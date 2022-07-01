const express = require ("express");
const ProductController = require("../controller/ProductController");
const SupplierController = require("../controller/SupplierController")
const CategoryController = require("../controller/CategoryController");
const router = express.Router();

// Routes for the Product
router.route("/product").get(ProductController.allProduct).post(ProductController.createProduct);
router.route("/product/:id").get(ProductController.oneProduct).put(ProductController.UpdateProduct).delete(ProductController.deleteProduct)

// Routes the of Category
router.route("/category").get(CategoryController.allCategory).post(CategoryController.createCategory);
router.route("/category/:id").put(CategoryController.UpdateCategory)

//Routes for the Supplier
router.route("/supplier")
    .post(SupplierController.createSupplier)
    .get(SupplierController.getAllSuppliers);
    
router.route("/supplier/:id")
    .get(SupplierController.getSupplier)
    .put(SupplierController.updateSupplier)
    .delete(SupplierController.deleteSupplier);


module.exports = router;