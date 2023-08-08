const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const classSchema = mongoose.Schema(
  { 
    className: {
      type: String,      
      trim: true,
    },    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
classSchema.plugin(toJSON);
classSchema.plugin(paginate);


/**
 * @typedef Video
 */
const Classes = mongoose.model('Classes', classSchema);

module.exports = Classes;
