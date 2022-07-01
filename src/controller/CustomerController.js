const Customer = require("../models/CustomerModel");

module.exports = {
    async createCustomer(request, response) {
        try {
            await Customer.create(request.body);
            response.status(200).json("Customer successfully inserted");
        } catch (error) {
            response.status(400).send(error);
        }
    }

}
