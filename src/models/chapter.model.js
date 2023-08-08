const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { toJSON, paginate } = require("./plugins");

const chapterSchema = mongoose.Schema(
  {
    boardId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "board",
      required: true,
    },
    mediumId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Medium",
      required: true,
    },
    classId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "class",
      required: true,
    },
    subjectId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "suject",
      required: true,
    },
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "book",
        required: true,
      },
    chapterName: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
chapterSchema.plugin(toJSON);
chapterSchema.plugin(paginate);

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
