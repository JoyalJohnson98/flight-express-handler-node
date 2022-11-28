const Flight = require('../models/flightSignup');

module.exports.login = (req, res, next) => {
    res.render('flightsignin');
}
module.exports.loginPost = async (req, res, next) => {
    const { email, Password } = req.body;
    const userFromDb = await Flight.findOne({
        where: { email: email, password: Password }
    });

    if (userFromDb == null) {
        return res.render('home', { message: 'No user with this email or password was found.' })
        
    }
    // signup-create
    // req.session.userid = userFromDb.id;
    // res.redirect('/booking');
}

module.exports.register = (req, res, next) => {
    res.render('signup-create');
}

module.exports.registerPost = async (req, res, next) => {
    const { firstname, lastname, dob, mobile, email, Password } = req.body;

    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.render('flightsignin', { message: 'Already registered.' });
    }
    await User.create({
        firstName: firstname,
        lastName: lastname,
        Date_of_Birth: dob,
        Mobile: mobile,
        email: email,
        password: Password,
        // cpassword: cPassword

    });

    res.redirect('/flightsignin');
}