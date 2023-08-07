const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
     name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },    
    board: {
      type: String,      
      trim: true,
    },
     class: {
      type: String,      
      trim: true,
    },
    subject: {
      type: String,      
      trim: true,
    },
    book: {
      type: String,      
      trim: true,
    },
    chapter: {
      type: String,      
      trim: true,
    },
    videoid: {
      type: String,      
      trim: true,
    },
    status: {
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
const Planvideo = mongoose.model('Planvideo', userSchema);

module.exports = Planvideo;
