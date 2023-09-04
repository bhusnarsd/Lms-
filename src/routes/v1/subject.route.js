const express = require('express');
const validate = require('../../middlewares/validate');
const subjectController = require('../../controllers/subject.controller');
const subjectValidation = require('../../validations/subject.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(subjectValidation.createSubject), subjectController.createSubject)
  .get(validate(subjectValidation.getAllSubject), subjectController.getAllSubject);

router
  .route('/:subjectId')
  .patch(validate(subjectValidation.updateSubject), subjectController.updateSubject)
  .delete(validate(subjectValidation.deleteSubject), subjectController.deleteSubject)
  .get(validate(subjectValidation.getSubject), subjectController.getSubjectById);

router
  .route('/filter/:boardId/:mediumId/:classId')
  .get(validate(subjectValidation.getSubjectFilter), subjectController.getSubjectByFilter);
router.route('/class/:classId').get(validate(subjectValidation.getSubjectByClassId), subjectController.getSubjectByClassId);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Subject
 *   description: Subject management
 */

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Create a subject
 *     tags: [Subject]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - boardId
 *               - mediumId
 *               - classId
 *               - order
 *             properties:
 *               name:
 *                 type: string
 *               classId:
 *                 type: string
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               order:
 *                 type: number
 *               thumbnail:
 *                 type: string
 *             example:
 *               name: CBSC
 *               boardId: 614a7e7d7f1d813bbf8e89b9
 *               mediumId: 614a7e7d7f1d813bbf8e89b8
 *               classId: 614a7e7d7f1d813bbf8e89b7
 *               order: 2
 *               thumbnail: ajfvshBa/asfbjgvjcav
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all subjects
 *     tags: [Subject]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: subject
 *         schema:
 *           type: string
 *         description: Subject name *
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
 *         description: Maximum number of subject
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
 *                     $ref: '#/components/schemas/Subject'
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
 * /subjects/{subjectId}:
 *   get:
 *     summary: Get a subject
 *     tags: [Subject]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subjectId
 *         required: true
 *         schema:
 *           type: string
 *         description: subjectId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
/**
 * @swagger
 * /subjects/filter/{boardId}/{mediumId}/{classId}:
 *   get:
 *     summary: Get a class
 *     tags: [Subject]
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
 *         schema:
 *           type: string
 *       - in: path
 *         name: classId
 *         required: true
 *         description: The ID of the class
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /subjects/{subjectId}:
 *   patch:
 *     summary: Update a subject
 *     tags: [Subject]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subjectId
 *         required: true
 *         schema:
 *           type: string
 *         description: subjectId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               classId:
 *                 type: string
 *               boardId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               order:
 *                 type: number
 *               thumbnail:
 *                 type: string
 *             example:
 *               name: CBSC
 *               boardId: 614a7e7d7f1d813bbf8e89b9
 *               mediumId: 614a7e7d7f1d813bbf8e89b8
 *               classId: 614a7e7d7f1d813bbf8e89b7
 *               order: 2
 *               thumbnail: fvacgjhbzjnkl/aclhgh
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *               schema:
 *                $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a subject
 *     tags: [Subject]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subjectId
 *         required: true
 *         schema:
 *           type: string
 *         description: subjectId
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

/**
 * @swagger
 * /subjects/class/{classId}:
 *   get:
 *     summary: Get a class
 *     tags: [Subject]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *               schema:
 *                $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
