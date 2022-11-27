const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("flight_mvc_express_handlers", "root", "joyaljohnson", {
    host: "localhost",
    dialect: "mysql"

});

module.exports = sequelize;