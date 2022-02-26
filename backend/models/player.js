const {model, Schema} = require('mongoose');

const schema = new Schema({

    name: String,
  
  },

  );


const Player = model('Player', schema);

module.exports = Player;