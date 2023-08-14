const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const subjectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
<<<<<<< HEAD
    },
    classId: {
      type: String,
    },
=======
      required: true,
    },  
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "class",
        required: true,      
      },
      order: {
        type: Number,
        trim: true,
        required: true,
      },     
>>>>>>> onkar-lms
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
subjectSchema.plugin(toJSON);
subjectSchema.plugin(paginate);

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
