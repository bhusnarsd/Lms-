const Joi = require('joi');
const { password, objectId } = require('./custom.validation');


const createClass = {
    body: Joi.object().keys({
      className: Joi.string().required(),
    }),
  };

  const getClass = {
    params: Joi.object().keys({
      classId: Joi.string().custom(objectId),
    }),
  };

  const getAllClass = {
    query: Joi.object().keys({
        className: Joi.string(),
      sortBy: Joi.string(),
      limit: Joi.number().integer(),
      page: Joi.number().integer(),
    }),
  };

  const updateClassById = {
    params: Joi.object().keys({
      classId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
      .keys({
        className: Joi.string().required(),
      })
      .min(1),
  };
  const deleteClassById = {
    params: Joi.object().keys({
      classId: Joi.string().custom(objectId),
    }),
  };
  

  module.exports = {
    createClass,
    getClass,
    getAllClass,
    updateClassById,
    deleteClassById
  };