const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lessionSchema = mongoose.Schema({
    boardId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'board',
        required: true,
    },
    mediumId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Medium',
        required: true,
    },
    classId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'class',
        required: true,
    },
    subjectId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'subjectId',
        required: true,
    },
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'bookId',
        required: true,
    },
    chapterId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'chapter',
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    path: {
        type: String,
        trim: true,
        required: true
    }
},
    { timestamps: true, }
);

// add plugin that converts mongoose to json
lessionSchema.plugin(toJSON);
lessionSchema.plugin(paginate);

const lession = mongoose.model('lession', lessionSchema);

module.exports = lession;
