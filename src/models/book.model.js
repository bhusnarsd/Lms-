const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
<<<<<<< HEAD
  {
    name: {
      type: String,
      trim: true,
=======
    {
        name: {
            type: String,
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
>>>>>>> onkar-lms
    },
    boardId: {
      type: String,
    },
    mediumId: {
      type: String,
    },
    classId: {
      type: String,
    },
    subjectId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
bookSchema.plugin(toJSON);
bookSchema.plugin(paginate);

const Book = mongoose.model('book', bookSchema);
module.exports = Book;
