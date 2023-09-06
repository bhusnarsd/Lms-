const express = require('express');
const validate = require('../../middlewares/validate');
const multimediaController = require('../../controllers/multimedia.controller');
const multimediaValidation = require('../../validations/multimedia.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(multimediaValidation.createMultimeda), multimediaController.createMultimedia)
  .get(validate(multimediaValidation.getAllMultimedia), multimediaController.getMultimedia);

router
  .route('/:multimediaId')
  .get(validate(multimediaValidation.getMultimediaById), multimediaController.getMultimediaById)
  .patch(validate(multimediaValidation.updateMultimedia), multimediaController.updateMultimedia)
  .delete(validate(multimediaValidation.deleteMultimedia), multimediaController.deleteMultimedia);

router
  .route('/filter/:boardId/:mediumId/:classId/:subjectId/:bookId/:chapterId/:lessionId')
  .get(validate(multimediaValidation.getMultimediaByFilter), multimediaController.getMultimediaByFilter);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Multimedia
 *   description: Medium management and retrieval
 */

/**
 * @swagger
 * /multimedia:
 *   post:
 *     summary: Create a multimedia
 *     description: Create other multimedia.
 *     tags: [Multimedia]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lessionName
 *               - path
 *             properties:
 *               lessionName:
 *                 type: string
 *               icon1:
 *                 type: string
 *               icon2:
 *                 type: string
 *               path:
 *                 type: string
 *               multimediaType:
 *                 type: string
 *               order:
 *                 type: number
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               chapterId:
 *                 type: string
 *               lessionId:
 *                 type: string
 *             example:
 *               lessionName: English
 *               icon1: imagelink/icon1
 *               icon2: imagelink/icon2
 *               path: multimedia/path
 *               multimediaType: video
 *               order: 1
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               subjectId: 64d9d4666205c371563fcadb
 *               bookId: 64d9d7143ac675796cdcd433
 *               chapterId: 64d327811128844220f0cce0
 *               lessionId: 64d9d83711b20e7b83affceb
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Multimedia'
 *       "401":
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Forbidden'
 *
 *
 *   get:
 *     summary: Get all Multimedia
 *     description: all mulrimedia.
 *     tags: [Multimedia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: lessionName
 *         schema:
 *           type: string
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
 *         description: Maximum number of Multimedia
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
 *                     $ref: '#/components/schemas/Multimedia'
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
 * /multimedia/{multimediaId}:
 *   get:
 *     summary: Get a multimedia
 *     tags: [Multimedia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: multimediaId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Multimedia'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a multimedia
 *     tags: [Multimedia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: multimediaId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lessionName:
 *                 type: string
 *               icon1:
 *                 type: string
 *               icon2:
 *                 type: string
 *               path:
 *                 type: string
 *               mediumType:
 *                 type: string
 *               order:
 *                 type: string
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               chapterId:
 *                 type: string
 *               lessionId:
 *                 type: string
 *             example:
 *               lessionName: English
 *               icon1: imagelink/icon1
 *               icon2: imagelink/icon2
 *               path: multimedia/path
 *               multimediaType: video
 *               order: 1
 *               boardId: 64d9ceaef49e9f5dc06502c6
 *               mediumId: 64d327a41128844220f0cce4
 *               classId: 64d327811128844220f0cce0
 *               subjectId: 64d9d4666205c371563fcadb
 *               bookId: 64d9d7143ac675796cdcd433
 *               chapterId: 64d327811128844220f0cce0
 *               lessionId: 64d9d83711b20e7b83affceb
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Multimedia'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a multimedia
 *     tags: [Multimedia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: multimediaId
 *         required: true
 *         schema:
 *           type: string
 *         description: multimediaId
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 * /multimedia/filter/{boardId}/{mediumId}/{classId}/{subjectId}/{bookId}/{subjectId}/{chapterId}/{lessionId}:
 *   get:
 *     summary: Get a multimedia
 *     tags: [Multimedia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         description: The ID of the board
 *         schema:
 *           type: string
 *       - in: path
 *         name: mediumId
 *         required: true
 *         description: The ID of the medium
 *       - in: path
 *         name: classId
 *         required: true
 *         description: The ID of the class
 *       - in: path
 *         name: subjectId
 *         required: true
 *         description: The ID of the subject
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book
 *       - in: path
 *         name: chapterId
 *         required: true
 *         description: The ID of the chapter
 *       - in: path
 *         name: lessionId
 *         required: true
 *         description: The ID of the lession
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Multimedia'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
