const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const subjectSchema = mongoose.Schema(
  {
     
    name: {
      type: String,      
      trim: true,
    },  
    classId: {
        type: String,      
      },     
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
