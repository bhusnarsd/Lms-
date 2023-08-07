const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
     
    board: {
      type: String,      
      trim: true,
    }, 
    classname: {
      type: String,      
      trim: true,
    },    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);


/**
 * @typedef Video
 */
const Classes = mongoose.model('Classes', userSchema);

module.exports = Classes;
