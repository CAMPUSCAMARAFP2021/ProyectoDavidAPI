var express = require('express');

var router = express.Router();

var meetController = require('../controllers/meet')

router.get('/', async function(req, res) {

    const meets = await meetController.getMeet();

    res.json(meets);

});



router.post('/',async(req, res) => {

    const {meet} = req.body;

    const result =  await meetController.createMeet(meet);

    res.json(result);

});


router.delete('/:meetId', async(req,res) => {

    const {meetId} = req.params;
    const result = await meetController.deleteMeet(meetId);
    res.json(result);

});


module.exports = router;

