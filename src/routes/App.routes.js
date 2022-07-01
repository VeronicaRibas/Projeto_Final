const express = require ("express");
const ProductController = require("../controller/ProductController");
const CategoryController = require("../controller/CategoryController");
const router = express.Router();


// Routes the of Product
// router.route("/").get(ProductController.allProduct).post(ProductController.createProduct);
// router.route("/:id").get(ProductController.oneProduct).put(ProductController.UpdateProduct).delete(ProductController.deleteProduct)

// Routes the of Category
router.route("/").get(CategoryController.allCategory).post(CategoryController.createCategory);
router.route("/:id").get(CategoryController.oneCategory).put(CategoryController.UpdateCategory).delete(CategoryController.deleteCategory)

module.exports = router;
