const Joi = require('joi');

const createSubject = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    classId: Joi.string().required(),
    order: Joi.number().required(),
  }),
};

const getAllSubject = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string(),
  }),
};

const updateSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      classId: Joi.string(),
      order: Joi.number(),
    })
    .min(1),
};

const deleteSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string(),
  }),
};

module.exports = {
  createSubject,
  getSubject,
  updateSubject,
  deleteSubject,
  getAllSubject,
};
