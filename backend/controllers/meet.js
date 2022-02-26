
const Meet = require('../models/meet');

const createMeet = async(meet) => {
return await Meet.create(meet);}

const deleteMeet = async (meetId) => {     
    const team = await Meet.findByIdAndDelete(meetId);
    return false;

}

const getMeet= async () => {     
    return await Meet.find()}
    

module.exports = { 
     createMeet,    
     getMeet,
     deleteMeet
    }

