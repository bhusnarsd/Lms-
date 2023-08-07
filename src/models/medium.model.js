const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const mediumSchema = mongoose.Schema({
        mediumname: {
            type: String,
            trim: true,
            required: true
        },
    },
    {timestamps: true,}
);

// add plugin that converts mongoose to json
mediumSchema.plugin(toJSON);
mediumSchema.plugin(paginate);

const medium = mongoose.model('medium', mediumSchema);

module.exports = medium;
