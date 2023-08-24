const express = require('express');
const validate = require('../../middlewares/validate');
const planvideoController = require('../../controllers/planvideo.controller');
const planValidation = require('../../validations/planvideo.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(planValidation.createNewPlan), planvideoController.createNewPlan)
  .get(validate(planValidation.getAllPlan), planvideoController.getAllPlans);

router
  .route('/:planId')
  .get(validate(planValidation.getSinglePlan), planvideoController.getSinglePlan)
  .patch(validate(planValidation.updatePlanById), planvideoController.updatePlan)
  .delete(validate(planValidation.deletePlanById), planvideoController.deletePlan);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: PlanVideo
 *   description: APIs for managing plan videos
 */

/**
 * @swagger
 * /planvideos:
 *   post:
 *     summary: Create a new plan video
 *     tags: [PlanVideo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - date
 *               - time
 *               - type
 *               - boardId
 *               - classId
 *               - subjectId
 *               - bookId
 *               - chapterId
 *               - lessonId
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               boardId:
 *                 type: string
 *               classId:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               chapterId:
 *                 type: string
 *               lessonId:
 *                 type: string
 *               mediumId:
 *                 type: string
 *               type:
 *                 type: string
 *             example:
 *               name: Today Plan title
 *               date: 2023-07-25
 *               time: 10:00
 *               type: video
 *               boardId: 64bf7a68c0797a1734b71faa
 *               classId: 64bf7a68c0797a1734b71faa
 *               subjectId: 64bf7a68c0797a1734b71faa
 *               bookId:  64bf7a68c0797a1734b71faa
 *               chapterId: 64bf7a68c0797a1734b71faa
 *               mediumId: 64bf7a68c0797a1734b71faa
 *               lessonId: 64bf7a68c0797a1734b71faa
 *     responses:
 *       201:
 *         description: Plan video successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanVideo'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all users
 *     description: Only admins can retrieve all users.
 *     tags: [Today Lesson]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name *
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
 *                     $ref: '#/components/schemas/User'
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
 * /planvideos:
 *   get:
 *     summary: Get all plan videos
 *     tags: [PlanVideo]
 *     responses:
 *       200:
 *         description: List of plan videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PlanVideo'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * /planvideos/{planId}:
 *   get:
 *     summary: Get a single plan video by ID
 *     tags: [PlanVideo]
 *     parameters:
 *       - name: planId
 *         in: path
 *         description: ID of the plan video to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested plan video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanVideo'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * /planvideos/{planId}:
 *   patch:
 *     summary: Update a plan video by ID
 *     tags: [PlanVideo]
 *     parameters:
 *       - name: planId
 *         in: path
 *         description: ID of the plan video to update
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
 *               name:
 *                 type: string
 *             example:
 *               name: fake name*
 *     responses:
 *       200:
 *         description: Plan video successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanVideo'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * /planvideos/{planId}:
 *   delete:
 *     summary: Delete a plan video by ID
 *     tags: [PlanVideo]
 *     parameters:
 *       - name: planId
 *         in: path
 *         description: ID of the plan video to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Plan video successfully deleted
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PlanVideo:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         date:
 *           type: string
 *         time:
 *           type: string
 *         type:
 *           type: string
 *         boardId:
 *           type: string
 *         mediumId:
 *           type: string
 *         classId:
 *           type: string
 *         subjectId:
 *           type: string
 *         bookId:
 *           type: string
 *         chapterId:
 *           type: string
 *         lessonId:
 *           type: string
 *         status:
 *           type: string
 *           default: active
 *       required:
 *         - name
 *         - date
 *         - time
 *         - type
 *         - boardId
 *         - mediumId
 *         - classId
 *         - subjectId
 *         - bookId
 *         - chapterId
 *         - lessonId
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PlanVideoUpdate:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 */
