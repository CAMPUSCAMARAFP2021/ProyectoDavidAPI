var express = require('express');

var router = express.Router();

var ballController = require('../controllers/ball')

router.post('/',async(req, res) => {

    const {ball} = req.body;
    const result =  await ballController.createBall(ball);
    res.json(result);

});

router.delete('/:ballId', async(req,res) => {

    const {ballId} = req.params;
    const result = await ballController.deleteBall(ballId);
    res.json(result);

});

router.get('/', async function(req, res) {

    const balls = req.player ? await ballController.getBallsbyPlayer(req.player) : await ballController.getBall();

    res.json(balls);

});

module.exports = router;

