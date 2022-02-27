const {model, Schema} = require('mongoose');



const schema = new Schema({

    name: String,


    balls:[{ type: Schema.Types.ObjectId,

      ref: 'Ball'
}]

  },


  
  );


const Brand = model('Brand', schema);

module.exports = Brand;