const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
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