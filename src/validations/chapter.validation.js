const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createChapter = {
    body: Joi.object().keys({
        boardId: Joi.string().required(),
        mediumId: Joi.string().required(),
        classId: Joi.string().required(),
        subjectId: Joi.string().required(),
        bookId: Joi.string().required(),
        chapterName: Joi.string().required(),
        order: Joi.number().required()
    }),
  };

const getChapter = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId),
  }),
};

const getAllChapter = {
  query: Joi.object().keys({
    chapterName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateChapterById = {
  params: Joi.object().keys({
    chapterId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      chapterName: Joi.string().required(),
    })
    .min(1),
};
const deleteChapterById = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createChapter,
  getChapter,
  getAllChapter,
  updateChapterById,
  deleteChapterById,
};
