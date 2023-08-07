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
const Board = mongoose.model('Board', userSchema);

module.exports = Board;
