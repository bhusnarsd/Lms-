const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const  quizeController = require('../../controllers/quize.controller');
const boardValidation = require('../../validations/board.validation')

const router = express.Router();

router
  .route('/')
  .post( quizeController.createQuize)
  .get( quizeController.getAllQuize);

router
  .route('/:quizeId')
  .get( quizeController.getQuizeById)
  .patch(  quizeController.updateQuizeById)
  .delete( quizeController.deleteQuizeById);

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
 *               - queName  
 *               - option1
 *               - option2
 *               - option3
 *               - option4
 *               - explain
 *               - hint
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
 *               queName: fake quetion 
 *               option1: Fake option 
 *               option2: fake option 
 *               option3: fake option
 *               option4: fake option
 *               explain: fake expaination of anwser
 *               hint: fake hint of quetion 
 *               marks: 23
 *               boardId: 2657
 *               mediumId: 3475324
 *               classId: 6754665
 *               bookId: 454787
 *               subjectId: 435646 
 *               chapterId: 5677
 *               lessonId: 47868687
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
 *     tags: [Board]
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
 * /quizes/{quizeId}:
 *   get:
 *     summary: Get a quize
 *     description: Logged in quize can fetch only their own board information. Only admins can fetch other users.
 *     tags: [Quize]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: quizeId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Quize'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a quize
 *     tags: [Quize]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *           : id
 *         required: true
 *         schema:
 *           type: string
 *         description: quizeId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string                
 *             example:
 *               name: fake name*               
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Board'
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
 *     summary: Delete a board
 *     tags: [Board]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: boardId
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
