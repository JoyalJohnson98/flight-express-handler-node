const sequelize = require('./db');
const { DataTypes } = require('sequelize');


const flightSignup = sequelize.define('flightSignup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    firstname: {
        type: DataTypes.STRING(15),
        allowNull: false

    },
    lastname: {
        type: DataTypes.STRING(16),
        allowNull: false

    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false

    },
    mobile: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true

    },
    email: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true

    },
    Password: {
        type: DataTypes.STRING(20),
        allowNull: false


    },


});

module.exports = flightSignup;