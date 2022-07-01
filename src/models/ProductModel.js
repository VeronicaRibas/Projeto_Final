const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/dbcontext");

class Product extends Model {}

Product.init({
    name: {
        type: DataTypes.STRING,
    },
    cnpj: {
        type: DataTypes.DECIMAL,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    value: {
        type: DataTypes.DECIMAL,
    },
    blackBand: {
        type: DataTypes.INTEGER,
    },
    redBand : {
        type: DataTypes.INTEGER,
    },
    yellowBand : {
        type: DataTypes.INTEGER,
        
    },
}, {
    sequelize,
    modelName: "product",
    timestamps: false
});

module.exports = Product