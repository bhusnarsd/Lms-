const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const planvideoSchema = mongoose.Schema(
  {
     title: {
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
    type: {
      type: String,
      required: true,
      trim: true,
    },  
    boardId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "board",
      required: true,
      trim: true,
    },
    mediumId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Medium",
      required: true,
      trim: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "class",
      required: true,
      trim: true,
    },
    subjectId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "suject",
      required: true,
      trim: true,
    },
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "book",
        required: true,
        trim: true,
      },
      chapterId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "chapter",  
        required: true,  
        trim: true,
      },
    lessonId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "lession",  
      required: true,  
      trim: true,
    },
    status: {
      type: String,      
      trim: true,
      default:"active",
    },     
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
planvideoSchema.plugin(toJSON);
planvideoSchema.plugin(paginate);


/**
 * @typedef Video
 */
const Planvideo = mongoose.model('Planvideo', planvideoSchema);

module.exports = Planvideo;
