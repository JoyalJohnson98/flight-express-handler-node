const Flight = require('../models/flightSignup');
module.exports.index = (req, res, next) => {
    Flight.findAll().then(flightSignup => {
        res.render('signup-index', {
            data: flightSignup,
            // identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('signup-create');
}

module.exports.createPost = (req, res, next) => {

    Flight.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        mobile: req.body.mobile,
        email: req.body.email,
        Password: req.body.Password
        
    })
        .then(flightSignup => {
            
            res.redirect("/userdetail")
        })

}

module.exports.update = async (req, res, next) => {
    Flight.findByPk(req.params.id)
        .then(flightSignupFromDB => {
            res.render('signup-update', {
                data: flightSignupFromDB
            });
        });

}
module.exports.updatePost = async (req, res, next) => {

    await Flight.update(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            mobile: req.body.mobile,
            email: req.body.email,
            Password: req.body.Password
            
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/userdetail");

}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let flightSignupFromDb = await Flight.findByPk(id);
    if (flightSignupFromDb != null) {
        await Flight.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/userdetail");
    }
}