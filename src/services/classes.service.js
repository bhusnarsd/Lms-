const httpStatus = require('http-status');
const { Classes } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Classes
 * @param {Object} userBody
 * @returns {Promise<Classes>}
 */
const createClasses = async (userBody) => {
  return Classes.create(userBody); 
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllClasses = async (filter, options) => {
  const classes = await Classes.paginate(filter, options);
  return classes;
};

/**
 * Get Classes by id
 * @param {ObjectId} id
 * @returns {Promise<Classes>}
 */
const getClassById = async (id) => {
  return Classes.findById(id);
};

/**
 * Update Classes by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Classes>}
 */
const updateClassById = async (classId, updateBody) => {
  const singleClass = await getClassById(classId);
  if (!singleClass) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  Object.assign(singleClass, updateBody);
  await singleClass.save();
  return singleClass;
};

/**
 * Delete Classes by id
 * @param {ObjectId} userId
 * @returns {Promise<Classes>}
 */
const deleteClassById = async (classId) => {
  const user = await getClassById(classId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createClasses,
  getAllClasses,
  getClassById,
  updateClassById,
  deleteClassById,
};
