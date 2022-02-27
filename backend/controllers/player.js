
const Player = require('../models/player');

const createPlayer = async(player) => {
    return await Player.create(player);
}

const deletePlayer = async (playerId) => {     
    const team = await Player.findByIdAndDelete(playerId);
    return false;

}

const getPlayerbyMeet = async(meet) =>{    return await Ball.find({meet}).populate("meets")}


const getPlayer = async () => {     
    return await Player.find()}


    const getPlayers = async (playerId) => {     
        return await Player.findById(playerId)}
module.exports = { 
     createPlayer,    
     getPlayer,
     getPlayers,
    deletePlayer,
    getPlayerbyMeet
    }

