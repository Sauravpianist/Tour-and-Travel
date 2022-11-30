const mongoose = require('mongoose');
const { Schema } = mongoose;
const DetailSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    number:{
        type: Number
    },
    subject:{
        type: String,
        require: true,
    
    },
    message:{
        type: String,
        require: true,
    
    },
   
  });
  const Detail = mongoose.model('detail', DetailSchema);
  Detail.createIndexes();

  module.exports = Detail;