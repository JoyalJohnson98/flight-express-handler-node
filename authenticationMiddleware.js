const user = require('../models/flightSignup');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }

    if (req.url == "/login" || req.url == "/register") {
        return next();
    }

    let userId = req.session.userId;
    if (!userId || userId == null) {
        return res.redirect("/login");
    }

    let userFromDb = await user.findByPk(userId);
    if (userFromDb == null) {
        return res.redirect("/login");
    }
    req.identity.isAuthenticated = true;
    req.identity.user = {
        id: userFromDb.dataValues.id,
        Password: userFromDb.dataValues.Password,
        email: userFromDb.dataValues.email,
        role: 'user'
    }
    next();
}