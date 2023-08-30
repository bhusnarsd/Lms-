const express = require('express');
const validate = require('../../middlewares/validate');
const chapterValidation = require('../../validations/chapter.validation');
const chaterController = require('../../controllers/chapter.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(chapterValidation.createChapter), chaterController.createChapter)
  .get(validate(chapterValidation.getAllChapter), chaterController.getChapter);

router
  .route('/getChaptersByBookid/:bookId')
  .get(validate(chapterValidation.getChaptersByBookId), chaterController.getChaptersByBookId);

router
  .route('/:chapterId')
  .get(validate(chapterValidation.getChapter), chaterController.getSingleChapter)
  .patch(validate(chapterValidation.updateChapterById), chaterController.updateSingleClass)
  .delete(validate(chapterValidation.deleteChapterById), chaterController.deleteSingleChapter);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Chapters
 *   description:   Chapters Management System
 */

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
 *     summary: Get all chapters
 *     tags: [Chapters]
 *     parameters:
 *       - in: query
 *         name: chapterName
 *         schema:
 *           type: string
 *         description: chapter name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of chapters
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ChapterInput'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
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
 *             $ref: '#/components/schemas/ChapterUpdateInput'
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
 *
 * /chapter/getChaptersByBookid/{bookId}:
 *    get:
 *     summary: Get all chapters by bookId
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the bookId
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Chapters not found
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


/**
 * @swagger
 * components:
 *   schemas:
 *     ChapterUpdateInput:
 *       type: object
 *       properties:
 *         chapterName:
 *           type: string
 *           description: Name of the chapter
 *       example:
 *         chapterName: Chapter 1
 */
