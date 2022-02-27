
const Ball = require('../models/ball');

const createBall = async(ball) => {
    return await Ball.create(ball);
}

const deleteBall = async (ballId) => {     
    const team = await Ball.findByIdAndDelete(ballId);
    return false;

}


const getBallsbyPlayer = async(player) =>{    return await Ball.find({player}).populate("players")}



const getBall = async () => {     
    return await Ball.find()}


module.exports = { 
     createBall,    
     getBall,
    deleteBall,
    getBallsbyPlayer
    }

