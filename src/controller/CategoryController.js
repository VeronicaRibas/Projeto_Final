const Category = require("../models/CategoryModel");

module.exports = {
    
    async createCategory(request, response) {
        try {
            await Category.create(request.body);
            response.status(200).json("Insert Category with Successfully");
        } catch (error) {
            response.status(400).send(error);
        }
    }
}