const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  eContentType: { type: String, required: true },
  eTitle: { type: String, required: true },
  ePreNum : {type : Boolean,default:"false"},
  eActNum : {type : Boolean,default:"false"}
});

module.exports = mongoose.model('Post', postSchema);