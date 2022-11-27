const Flight = require('../models/flight');



module.exports.index = (req, res, next) => {
    Flight.findAll().then(flight => {
        res.render('flight-index', {
            data: flight,
            // identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('flight-create');
}

module.exports.createPost = (req, res, next) => {

    Flight.create({
        name: req.body.name,
        color: req.body.color,
        flightno: req.body.flightno,
        flightsize: req.body.flightsize

    })
        .then(flightFromDb => {
            res.redirect("/flightdetail")
        })

}

module.exports.update = async (req, res, next) => {
    Flight.findByPk(req.params.id)
        .then(flightFromDB => {
            res.render('flight-update', {
                data: flightFromDB
            });
        });

}
module.exports.updatePost = async (req, res, next) => {

    await Flight.update(
        {
            name: req.body.name,
            color: req.body.color,
            flightno: req.body.flightno,
            flightsize: req.body.flightsize
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/flightdetail");

}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let flightFromDB = await Flight.findByPk(id);
    if (flightFromDB != null) {
        await Flight.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/flightdetail");
    }
}