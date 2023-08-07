const Joi = require('joi');
const { objectId } = require('./custom.validation');
const createMedium = {
    body: Joi.object().keys({
        mediumname: Joi.string().required(),
    }),
};

const getMediums = {
    query: Joi.object().keys({
        mediumname: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getMedium = {
    params: Joi.object().keys({
        mediumId: Joi.string().custom(objectId),
    }),
};

const updateMedium = {
    params: Joi.object().keys({
        mediumId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            mediumname: Joi.string(),
        })
        .min(1),
};

const deleteMedium = {
    params: Joi.object().keys({
        mediumId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createMedium,
    getMediums,
    getMedium,
    updateMedium,
    deleteMedium,
};
