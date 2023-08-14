const Joi = require('joi');
const { password, objectId } = require('./custom.validation');


const createNewPlan = {
    body: Joi.object().keys({
        boardId: Joi.string().required(),
        mediumId: Joi.string().required(),
        classId: Joi.string().required(),
        subjectId: Joi.string().required(),
        bookId: Joi.string().required(),
        chapterId: Joi.string().required(),
        lessonId: Joi.string().required(),
        title: Joi.string().required(),
        date: Joi.string().required(),
        time: Joi.string().required(),
        type: Joi.string().required(),
        status: Joi.string().required(),

    }),
  };

  const getSinglePlan = {
    params: Joi.object().keys({
      planId: Joi.string().custom(objectId),
    }),
  };

  const getAllPlan = {
    query: Joi.object().keys({
        title: Joi.string(),
      sortBy: Joi.string(),
      limit: Joi.number().integer(),
      page: Joi.number().integer(),
    }),
  };

  const updatePlanById = {
    params: Joi.object().keys({
      planId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
      .keys({
        type: Joi.string().required(),
      })
      .min(1),
  };
  const deletePlanById = {
    params: Joi.object().keys({
      planId: Joi.string().custom(objectId),
    }),
  };
  
  

  module.exports = {
    createNewPlan,
    getSinglePlan,
    getAllPlan,
    updatePlanById,
    deletePlanById
  };