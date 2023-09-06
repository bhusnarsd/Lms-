const express = require('express');
const validate = require('../../middlewares/validate');
const homeworkController = require('../../controllers/homework.controller');
const HomeworkValidation = require('../../validations/homework.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(HomeworkValidation.createHomework), homeworkController.createHomework)
  .get(validate(HomeworkValidation.getAllHomework), homeworkController.getAllHomework);

router
  .route('/:homeworkId')
  .get(validate(HomeworkValidation.getHomework), homeworkController.getHomeworkById)
  .patch(validate(HomeworkValidation.updateHomework), homeworkController.updateHomework)
  .delete(validate(HomeworkValidation.deleteHomework), homeworkController.deleteHomework);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: homework
 *   description: Quize management and retrieval
 */

/**
 * @swagger
 * /homework:
 *   post:
 *     summary: Create a homework
 *     tags: [homework]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Question
 *               - veryShortAnswer
 *               - shortAnswer
 *               - longAnswer
 *               - boardId
 *               - mediumId
 *               - classId
 *               - bookId
 *               - subjectId
 *               - chapterId
 *             example:
 *               Question: Run Node.js scripts from the command line
 *               veryShortAnswer: node app.js
 *               shortAnswer: new data
 *               longAnswer: To execute a string as argument you can use -e, --eval "script". Evaluate the following argument as JavaScript. The modules which are predefined in the REPL can also be used in script.
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               bookId: 64d9d7143ac675796cdcd433
 *               subjectId: 64d9d4666205c371563fcadb
 *               chapterId: 64d327811128844220f0cce0
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all homework
 *     tags: [homework]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         queName: fake quetion
 *         schema:
 *           type: string
 *         description: homework name
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
 *         description: Maximum number of users
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
 */

/**
 * @swagger
 * /homework/{id}:
 *   get:
 *     summary: Get a Quize
 *     tags: [homework]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quize
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Quize
 *     tags: [homework]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: HomeworkId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - Question
 *               - veryShortAnswer
 *               - shortAnswer
 *               - longAnswer
 *               - boardId
 *               - mediumId
 *               - classId
 *               - bookId
 *               - subjectId
 *               - chapterId
 *             example:
 *               Question: Run Node.js scripts from the command line
 *               veryShortAnswer: node app.js
 *               shortAnswer: new data
 *               longAnswer: To execute a string as argument you can use -e, --eval "script". Evaluate the following argument as JavaScript. The modules which are predefined in the REPL can also be used in script.
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               bookId: 64d9d7143ac675796cdcd433
 *               subjectId: 64d9d4666205c371563fcadb
 *               chapterId: 64d327811128844220f0cce0
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a homework
 *     tags: [homework]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: HomeworkId
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
