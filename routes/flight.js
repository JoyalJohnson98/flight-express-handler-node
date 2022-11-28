const express =require('express');
const cc = require('../controllers/flightController');


const router = express.Router()

router.get('/flightdetail', cc.index);
router.get('/flight', cc.create);
router.post('/flight', cc.createPost);
router.get('/flightUpdate/:id', cc.update);
router.post('/flightUpdate/:id', cc.updatePost);
router.get('/flightDelete/:id', cc.delete);


module.exports = router;