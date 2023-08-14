const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const chapterValidation = require('../../validations/chapter.validation');
const  chaterController = require('../../controllers/chapter.controller'); 
const router = express.Router();
router
  .route('/')
  .post(validate(chapterValidation.createChapter), chaterController.createChapter)
  .get(validate(chapterValidation.getAllChapter), chaterController.getChapter);

router
  .route('/:chapterId')
  .get(validate(chapterValidation.getChapter), chaterController.getSingleChapter)
  .patch( validate(chapterValidation.updateChapterById), chaterController.updateSingleClass)
  .delete( validate(chapterValidation.deleteChapterById), chaterController.deleteSingleChapter);

module.exports = router

/**
 * @swagger
 * /chapter:
 *   post:
 *     summary: Create a new chapter
 *     tags: [Chapters]
 *     requestBody:
 *       description: Chapter object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChapterInput'
 *     responses:
 *       200:
 *         description: Chapter created successfully
 *   get:
 *     summary: Get list of chapters
 *     tags: [Chapters]
 *     responses:
 *       200:
 *         description: List of chapters retrieved successfully
 * 
 * /chapter/{chapterId}:
 *   patch:
 *     summary: Update a single chapter by ID
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chapter
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChapterUpdateInput' # Define this schema
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Chapter not found
 *   delete:
 *     summary: Delete a single chapter by ID
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chapter
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Chapter not found
 *   get:
 *     summary: Get a single chapter by ID
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chapter
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Chapter not found
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     ChapterInput:
 *       type: object
 *       properties:
 *         boardId:
 *           type: string
 *           description: ID of the board
 *         mediumId:
 *           type: string
 *           description: ID of the medium
 *         classId:
 *           type: string
 *           description: ID of the class
 *         subjectId:
 *           type: string
 *           description: ID of the subject
 *         bookId:
 *           type: string
 *           description: ID of the book
 *         chapterName:
 *           type: string
 *           description: Name of the chapter
 *       example:
 *         boardId: 614a7e7d7f1d813bbf8e89a9
 *         mediumId: 614a7e7d7f1d813bbf8e89b0
 *         classId: 614a7e7d7f1d813bbf8e89b7
 *         subjectId: 614a7e7d7f1d813bbf8e89c2
 *         bookId: 614a7e7d7f1d813bbf8e89d0
 *         chapterName: Chapter 1
 *         order:  1
 */

