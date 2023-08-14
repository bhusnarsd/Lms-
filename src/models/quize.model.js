const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const quizeSchema = mongoose.Schema(
  {
     
    queName: {
      type: String,      
    }, 
    option1:{
        type : String
    }, 
    option2: { 
        type: String
    }, 
    option3: {
        type: String
    }, 
    option4: {
        type: String
    }, 
    explain: {
        type: String,
    },
    hint : {
        type: String
    },
    isVerified: {
        type:Boolean,
        default:false
    },
    marks: {
        type: Number
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
      bookId: {
        type: String,      
      },
      subjectId: {
        type: String,      
      },
      chapterId: {
        type: String,      
      },
      lessonId: {
        type: String
      },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
quizeSchema.plugin(toJSON);
quizeSchema.plugin(paginate);


const Quize = mongoose.model('quize', quizeSchema);

module.exports = Quize;
