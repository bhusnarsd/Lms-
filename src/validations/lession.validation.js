const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createLession = {
    body: Joi.object().keys({
        boardId:Joi.string().custom(objectId),
        mediumId:Joi.string().custom(objectId),
        classId:Joi.string().custom(objectId),
        subjectId:Joi.string().custom(objectId),
        bookId:Joi.string().custom(objectId),
        chapterId:Joi.string().custom(objectId),
        name: Joi.string().required(),
        path: Joi.string().required()
    }),
};

const getLessions = {
    query: Joi.object().keys({
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getLession = {
    params: Joi.object().keys({
        lessionId: Joi.string().custom(objectId),
    }),
};

const updateLession = {
    params: Joi.object().keys({
        lessionId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string().required(),
        })
        .min(1),
};

const deleteLession = {
    params: Joi.object().keys({
        lessionId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createLession,
    getLessions,
    getLession,
    updateLession,
    deleteLession,
};
