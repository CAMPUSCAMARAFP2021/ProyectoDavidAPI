const {model, Schema} = require('mongoose');

const schema = new Schema({

    //sacado del modulo
    // players: {

    //   type: Schema.Types.ObjectId,

    //   ref: 'Player'

    // },

    // matches:{

    //     type: Schema.Types.ObjectId,

    //     ref: 'Match'

    // },

    name:  String

  },

  );

const Brand = model('Brand', schema);

module.exports = Brand;