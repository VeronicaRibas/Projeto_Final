const Pharmacist = require('../models/pharmacistModel')

module.exports = {
    async allPharmacist(req, res) {
        try {
            const pharmacists = await Pharmacist.findAll();
            res.status(200).json(pharmacists);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async onePharmacist(req, res) {
        try {
            const id = req.params.id
            const  pharmacist = await Pharmacist.findOne({where:{id}});

            if(!pharmacist){
                return res.status(400).json("Pharmacist not found!")
             }
    
            res.status(200).json(pharmacist);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    

    async createPharmacist(req, res) {
        try {
            await Pharmacist.create(req.body);
            res.status(200).json("Pharmacist inserted successfully");
        } catch (error) {
            res.status(400).send(error);
        }
    },

}