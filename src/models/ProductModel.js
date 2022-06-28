const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/db");

class Product extends Model {}

Product.init({
    name: {
        type: DataTypes.STRING,
    },
    brand: {
        type: DataTypes.DECIMAL,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    value: {
        type: DataTypes.DECIMAL,
    },
    BlackBand: {
        type: DataTypes.INTEGER,
    },
    RedBand : {
        type: DataTypes.INTEGER,
    },
    YellowBand : {
        type: DataTypes.INTEGER,
        
    },
}, {
    sequelize,
    modelName: "product",
    timestamps: false
});

module.exports = Product