const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const quizeController = require('../../controllers/quize.controller');
const quizeValidation = require('../../validations/quize.validation')

const router = express.Router();

router
  .route('/')
  .post(validate(quizeValidation.createQuize), quizeController.createQuize)
  .get(validate(quizeValidation.getQuizes), quizeController.getAllQuize);

router
  .route('/:quizeId')
  .get(validate(quizeValidation.getQuize),quizeController.getQuizeById)
  .patch(validate(quizeValidation.updateQuize),quizeController.updateQuizeById)
  .delete(validate(quizeValidation.deleteQuize),quizeController.deleteQuizeById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Quize
 *   description: Quize management and retrieval
 */

/**
 * @swagger
 * /quizes:
 *   post:
 *     summary: Create a quize
 *     tags: [Quize]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quizname  
 *               - option1
 *               - option2
 *               - option3
 *               - option4
 *               - explain
 *               - hint
 *               - types
 *               - isVerified
 *               - marks
 *               - boardId
 *               - mediumId
 *               - classId
 *               - bookId
 *               - subjectId
 *               - chapterId
 *               - lessonId                            
 *             example:
 *               quizname: Sample Quiz 
 *               option1: Option A
 *               option2: Option B
 *               option3: Option c
 *               option4: Option D
 *               explain: Explanation for the correct option
 *               hint: Hint for solving the quiz
 *               types: easy
 *               isVerified: false
 *               marks: 23
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               bookId: 64d9d7143ac675796cdcd433
 *               subjectId: 64d9d4666205c371563fcadb 
 *               chapterId: 64d327811128844220f0cce0
 *               lessonId: 64d9d83711b20e7b83affceb
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Quize'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all boards
 *     tags: [Quize]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         queName: fake quetion
 *         schema:
 *           type: string
 *         description: Quize name *       
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
 *                     $ref: '#/components/schemas/Quize'
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
 * /quizes/{id}:
 *   get:
 *     summary: Get a Quize
 *     tags: [Quize]
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
 *                $ref: '#/components/schemas/boardcast'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Quize
 *     tags: [Quize]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuizeId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string     
 *               path:
 *                 type: string             
 *             example:
 *               title: fake name 
 *               path: "54867567"             
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/boardcast'
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
 *     summary: Delete a Quize
 *     tags: [Quize]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuizeId
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
