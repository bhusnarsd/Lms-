const httpStatus = require('http-status');
const { Planvideo } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a todaysPlan
 * @param {Object} planBody
 * @returns {Promise<Planvideo>}
 */
const createNewPlan = async (planBody) => {
  return Planvideo.create(planBody);
};

/**
 * Query for TodayPlans
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllPlans = async (filter, options) => {
  const videos = await Planvideo.paginate(filter, options);
  return videos;
};

/**
 * Get Planvideo by id
 * @param {ObjectId} planId
 * @returns {Promise<Planvideo>}
 */
const getPlanById = async (planId) => {
  return Planvideo.findById(planId);
};

/**
 * Update Planvideo by id
 * @param {ObjectId} planId
 * @param {Object} updateBody
 * @returns {Promise<Planvideo>}
 */
const updatePlanById = async (planId, updateBody) => {
  const todaysPlan = await getPlanById(planId);
  if (!todaysPlan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plan not found');
  }
  Object.assign(todaysPlan, updateBody);
  await todaysPlan.save();
  return todaysPlan;
};

/**
 * Delete user by id
 * @param {ObjectId} planId
 * @returns {Promise<Planvideo>}
 */

const deletePlanById = async (planId) => {
  const deletedPlan = await getPlanById(planId);
  if (!deletedPlan) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plan not found');
  }
  await deletedPlan.remove();
  return deletedPlan;
};

module.exports = {
  createNewPlan,
  getAllPlans,
  getPlanById,
  updatePlanById,
  deletePlanById,
};
