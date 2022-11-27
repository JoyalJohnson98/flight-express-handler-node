const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Flight_Details = sequelize.define('flight', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false

    },
    color: {
        type: DataTypes.STRING(16),
        allowNull: false
    },

    flightno: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true

    },
    flightsize: {
        type: DataTypes.STRING(20),
        allowNull: false
        


    },
    


});

module.exports = Flight_Details;