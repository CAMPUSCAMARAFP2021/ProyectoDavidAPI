
const Ball = require('../models/ball');

const createBall = async(ball) => {
return await Ball.create(ball);}

const getBall = async () => {     
    return await Ball.find()}


module.exports = { 
     createBall,    
     getBall}

