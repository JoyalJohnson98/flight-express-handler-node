const flightSignup = require('./flightSignup');
const FlightBook = require('./flightBook');
const Driver_Details = require('./driver');
const Flight_Details = require('./flight');
flightSignup.sync({ alter: true });
FlightBook.sync({ alter: true });
Driver_Details.sync({ alter: true });
Flight_Details.sync({alter: true});
