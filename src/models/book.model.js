const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
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
