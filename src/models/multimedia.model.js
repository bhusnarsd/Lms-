const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const multimediaSchema = mongoose.Schema(
  {
    lessionName: {
      type: String,
      trim: true,
    },
    icon1: {
        type: String,
    },
    icon2: {
        type: String
    },
    path: {
        type: String
    },
    multimediaType: {
        type: String
    },
    chapterId: {
        type: String
    },
    lessoinId: {
        type: String
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
multimediaSchema.plugin(toJSON);
multimediaSchema.plugin(paginate);

const Multimedia = mongoose.model('Multimedia', multimediaSchema);

module.exports = Multimedia;
