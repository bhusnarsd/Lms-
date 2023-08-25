const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const classSchema = mongoose.Schema(
  {
    mediumId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'medium',
      required: true,
      trim: true,
    },
    className: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
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
