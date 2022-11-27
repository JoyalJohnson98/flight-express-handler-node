const Flight = require('../models/driver');



module.exports.index = (req, res, next) => {
    Flight.findAll().then(driver => {
        res.render('driver-index', {
            data: driver,
            // identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('driver-create');
}

module.exports.createPost = (req, res, next) => {

    Flight.create({
        Name: req.body.name,
        Email: req.body.email,
        Mobile: req.body.mobile,
        Address: req.body.address,
        DOB: req.body.dob,
        Experience: req.body.exp,
        DL: req.body.dl,
        Exp_DL: req.body.exp_dl

    })
        .then(driverFromDb => {
            res.redirect("/driverdetail")
        })

}

module.exports.update = async (req, res, next) => {
    Flight.findByPk(req.params.id)
        .then(driverFromDB => {
            res.render('driver-update', {
                data: driverFromDB
            });
        });

}
module.exports.updatePost = async (req, res, next) => {

    await Flight.update(
        {
            Name: req.body.name,
            Email: req.body.email,
            Mobile: req.body.mobile,
            Address: req.body.address,
            DOB: req.body.dob,
            Experience: req.body.exp,
            DL: req.body.dl,
            Exp_DL: req.body.exp_dl
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/driverdetail");

}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let driverFromDB = await Flight.findByPk(id);
    if (driverFromDB != null) {
        await Flight.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/driverdetail");
    }
}