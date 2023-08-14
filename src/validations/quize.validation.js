const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createQuize = {
  body: Joi.object().keys({
    quizname: Joi.string(),
    option1: Joi.string(),
    option2: Joi.string(),
    option3: Joi.string(),
    option4: Joi.string(),
    explain: Joi.string(),
    hint: Joi.string(),
    types: Joi.string(),
    isVerified: Joi.boolean(),
    marks: Joi.number(),
    boardId: Joi.string(),
    mediumId: Joi.string(),
    classId: Joi.string(),
    bookId: Joi.string(),
    subjectId: Joi.string(),
    chapterId: Joi.string(),
    lessonId: Joi.string(),
  }),
};

const getQuizes = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getQuize = {
  params: Joi.object().keys({
    quizeId: Joi.string().custom(objectId),
  }),
};

const updateQuize = {
  params: Joi.object().keys({
    quizeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        quizname: Joi.string(),
        option1: Joi.string(),
        option2: Joi.string(),
        option3: Joi.string(),
        option4: Joi.string(),
        explain: Joi.string(),
        hint: Joi.string(),
        types: Joi.string(),
        isVerified: Joi.boolean(),
        marks: Joi.number(),
        boardId: Joi.string(),
        mediumId: Joi.string(),
        classId: Joi.string(),
        bookId: Joi.string(),
        subjectId: Joi.string(),
        chapterId: Joi.string(),
        lessonId: Joi.string(),
    })
    .min(1),
};

const deleteQuize = {
  params: Joi.object().keys({
    quizeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
    createQuize,
    getQuizes,
    getQuize,
    updateQuize,
    deleteQuize,
};
