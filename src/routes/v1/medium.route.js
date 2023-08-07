const express = require('express');
const validate = require('../../middlewares/validate');
const mediumController = require('../../controllers/medium.controller');
const mediumValidation = require('../../validations/medium.validation');

const router = express.Router();

router
    .route('/')
    .post(validate(mediumValidation.createMedium), mediumController.createMedium)
    .get(validate(mediumValidation.getMediums), mediumController.getMediums);

router
    .route('/:mediumId')
    .get(validate(mediumValidation.getMedium), mediumController.getMedium)
    .patch(validate(mediumValidation.updateMedium), mediumController.updateMedium)
    .delete(validate(mediumValidation.deleteMedium), mediumController.deleteMedium);

module.exports = router;