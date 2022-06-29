const Supplier = require("../models/SupplierModel");

module.exports = {
    async createSupplier(request, response) {
        try {
            await Supplier.create(request.body);
            response.status(200).json("Supplier successfully inserted");
        } catch (error) {
            response.status(400).send(error);
        }
    }

}