
const Flight = require('../models/flightBook');



module.exports.index = (req, res, next) => {
    Flight.findAll().then(flightBook => {
        res.render('booking-index', {
            data: flightBook,
            //identity: req.identity.user
        });
    })
}

module.exports.booking = (req, res, next) => {
    res.render('booking-create');
}

module.exports.bookingPost = (req, res, next) => {

    Flight.create({
        pickup: req.body.pickup,
        destination: req.body.destination,
        dot: req.body.dot,
        passenger: req.body.passenger,
        mobile: req.body.mobile
    })
        .then(FlightBookFromDb => {
            res.redirect("/bookingdetail")
        })

}

module.exports.bookingUpdate = async (req, res, next) => {
    Flight.findByPk(req.params.id)
        .then(FlightBookFromDb => {
            res.render('booking-update', {
                data: FlightBookFromDb
            });
        });

}
module.exports.bookingUpdatePost = async (req, res, next) => {

    await Flight.update(
        {
            pickup: req.body.pickup,
            destination: req.body.destination,
            dot: req.body.dot,
            passenger: req.body.passenger,
            mobile: req.body.mobile
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/bookingdetail");

}

module.exports.bookingDelete = async (req, res, next) => {
    let id = req.params.id;
    let FlightBookFromDb = await Flight.findByPk(id);
    if (FlightBookFromDb != null) {
        await Flight.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/bookingdetail");
    }
}