const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const  classesController = require('../../controllers/classes.controller'); 

const router = express.Router();

router
  .route('/')
  .post(validate(classValidation.createClass), classesController.createClasses)
  .get(validate(classValidation.getAllClass), classesController.getClasses);

router
  .route('/:classId')
  .get(validate(classValidation.getClass), classesController.getSingleClass)
  .patch( validate(classValidation.updateClassById),  classesController.updateSingleClass)
  .delete( validate(classValidation.deleteClassById), classesController.deleteSingleClass);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: API endpoints for managing classes
 */

/**
 * @swagger
 * /classes:
 *   post:
 *     summary: Create a new class
 *     tags: [Classes]
 *     requestBody:
 *       description: Class object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassInput'
 *     responses:
 *       200:
 *         description: Class created successfully
 *   get:
 *     summary: Get list of classes
 *     tags: [Classes]
 *     responses:
 *       200:
 *         description: List of classes retrieved successfully
 * 
 * /classes/{classId}:
 *   get:
 *     summary: Get a single class by ID
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the class
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: "123"
 *               className: "Mathematics"
 *               teacher: "John Doe"
 *       404:
 *         description: Class not found
 *
 *   patch:
 *     summary: Update a single class by ID
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the class
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Class not found
 *
 *   delete:
 *     summary: Delete a single class by ID
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the class
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Class not found
 */
 

/**
 * @swagger
 * components:
 *   schemas:
 *     ClassInput:
 *       type: object
 *       properties:
 *         className:
 *           type: string
 *           description: Name of the class
 *       example:
 *         className: Math 101
 */