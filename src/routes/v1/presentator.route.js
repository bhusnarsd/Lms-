const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const presentatorValidation = require('../../validations/presentator.validation');
const presentatorController = require('../../controllers/presentator.controller'); 
const router = express.Router();
router
  .route('/')
  .post(validate(presentatorValidation.createPresentator), presentatorController.createPresentator)
  .get(validate(presentatorValidation.getAllPresentator), presentatorController.getAllPresentator);

router
  .route('/:presentatorId')
  .get(validate(presentatorValidation.getPresentator), presentatorController.getPresentator)
  .patch( validate(presentatorValidation.updatePresentatorById), presentatorController.updatePresentator)
  .delete( validate(presentatorValidation.deletePresentatorById), presentatorController.deletePresentator);

module.exports = router

/**
 * @swagger
 * /presentator:
 *   post:
 *     summary: Create a new presentator
 *     tags: [Presentator]
 *     requestBody:
 *       description: Presentator object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PresentatorInput'
 *     responses:
 *       200:
 *         description: Presentator created successfully
 *   get:
 *     summary: Get list of Presentator
 *     tags: [Presentator]
 *     responses:
 *       200:
 *         description: List of Presentator retrieved successfully
 * 
 * /presentator/{presentatorId}:
 *   patch:
 *     summary: Update a single presentator by ID
 *     tags: [Presentator]
 *     parameters:
 *       - in: path
 *         name: presentatorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the presentator
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PresentatorupdateInput' # Define this schema
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: presentator not found
 *   delete:
 *     summary: Delete a single presentator by ID
 *     tags: [Presentator]
 *     parameters:
 *       - in: path
 *         name: presentatorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the presentatorId
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: presentatorId not found
 *   get:
 *     summary: Get a single presentatorId by ID
 *     tags: [Presentator]
 *     parameters:
 *       - in: path
 *         name: presentatorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the presentator
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Presentator not found
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     PresentatorInput:
 *       type: object
 *       properties:
 *         presentatorName:
 *           type: string
 *         qualification:
 *           type: string
 *         experience:
 *           type: string
 *         schoolName:
 *           type: string
 *       example:
 *         presentatorName: Anil Sharma
 *         qualification: Msc ,Bsc
 *         experience: 3 years
 *         schoolName: Shastri school lucknow
 */

