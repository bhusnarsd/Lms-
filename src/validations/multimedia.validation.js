const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createMultimeda = {
  body: Joi.object().keys({
    lessionName: Joi.string(),
    icon1: Joi.string(),
    icon2: Joi.string(),
    path: Joi.string(),
    multimediaType: Joi.string(),
    order: Joi.number(),
    boardId: Joi.string().custom(objectId),
    mediumId: Joi.string().custom(objectId),
    classId: Joi.string().custom(objectId),
    subjectId: Joi.string().custom(objectId),
    bookId: Joi.string().custom(objectId),
    chapterId: Joi.string().custom(objectId),
  }),
};

const getAllMultimedia = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    lessionName: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMultimediaById = {
  params: Joi.object().keys({
    multimediaId: Joi.string().custom(objectId),
  }),
};

const getMultimediaByFilter = {
  params: Joi.object().keys({
    boardId: Joi.string().custom(objectId).required(),
    mediumId: Joi.string().custom(objectId).required(),
    classId: Joi.string().custom(objectId).required(),
    subjectId: Joi.string().custom(objectId).required(),
    bookId: Joi.string().custom(objectId).required(),
    chapterId: Joi.string().custom(objectId).required(),
  }),
};

const updateMultimedia = {
  params: Joi.object().keys({
    multimediaId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      lessionName: Joi.string(),
      icon1: Joi.string(),
      icon2: Joi.string(),
      path: Joi.number(),
      multimediaType: Joi.string(),
      order: Joi.string(),
      boardId: Joi.string().custom(objectId),
      mediumId: Joi.string().custom(objectId),
      classId: Joi.string().custom(objectId),
      subjectId: Joi.string().custom(objectId),
      bookId: Joi.string().custom(objectId),
      chapterId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteMultimedia = {
  params: Joi.object().keys({
    multimediaId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMultimeda,
  getAllMultimedia,
  getMultimediaById,
  getMultimediaByFilter,
  updateMultimedia,
  deleteMultimedia,
};
