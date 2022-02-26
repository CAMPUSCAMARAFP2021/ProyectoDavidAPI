const {model, Schema} = require('mongoose');



const schema = new Schema({

    kind:   String,

  },

  );


const Ball = model('Ball', schema);

module.exports = Ball;