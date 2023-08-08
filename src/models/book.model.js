const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        classId: {
            type: String,
          
        },
        subjectId: {
            type: String,
        },
        mediumId: {
            type: String,
        },
        boardId: {
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