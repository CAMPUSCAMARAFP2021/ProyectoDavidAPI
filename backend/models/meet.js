const {model, Schema} = require('mongoose');

const schema = new Schema({
  
  date: String,


  players:[{ type: Schema.Types.ObjectId,

    ref: 'Player'
}]

  },

  );

const Meet = model('Meet', schema);

module.exports = Meet;