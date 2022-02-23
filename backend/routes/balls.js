var express = require('express');

var router = express.Router();

var ballController = require('../controllers/ball')

router.get('/', async function(req, res) {

    const balls = await ballController.getBall();

    res.json(balls);

});



router.post('/',async(req, res) => {

    const {ball} = req.body;

    const result =  await ballController.createBall(ball);

    res.json(result);

});


//para eliminar

// router.delete('/:ballId', async(req,res) => {

//     const {ballId} = req.params;

//     const result = await ballController.deleteTask(ballId);

//     res.json(result);

// });



module.exports = router;

