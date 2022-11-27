const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Driver_Details = sequelize.define('driver', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    Name: {
        type: DataTypes.STRING(15),
        allowNull: false

    },
    Email: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true

    },
    Mobile: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true


    },
    Address: {
        type: DataTypes.STRING(12),
        allowNull: false
        
    },
    DOB: {
        type: DataTypes.DATE,
        allowNull: false
        

    },
    Experience: {
        type: DataTypes.STRING(20),
        allowNull: false


    },
    DL: {
        type: DataTypes.STRING(20),
        allowNull: false
        

    },
    Exp_DL: {
        type: DataTypes.STRING(20),
        allowNull: false
        

    },


});

module.exports = Driver_Details;