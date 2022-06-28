const Product = require("../models/ProductModel");

module.exports = {
    async allProduct(request, response) {
        try {
            const products = await Product.findAll();
            response.status(200).json(products);
        } catch (error) {
            response.status(400).send(error);
        }
    }
}