const {model, Schema} = require('mongoose');



const schema = new Schema({

    kind:   String,


    players:[{ type: Schema.Types.ObjectId,

      ref: 'Player'
}]

  },


  
  );


const Ball = model('Ball', schema);

module.exports = Ball;