const httpStatus = require('http-status');
const { Subject } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a subject
 * @param {Object} subjectBody
 * @returns {Promise<Subject>}
 */
const createSubject = async (subjectBody) => {
  return Subject.create(subjectBody);
};

/**
 * Query for subject
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySubject = async (filter, options) => {
  const subject = await Subject.paginate(filter, options);
  return subject;
};

/**
 * Get subject by id
 * @param {ObjectId} id
 * @returns {Promise<Subject>}
 */
const getSubjectById = async (id) => {
  return Subject.findById(id);
};

/**

/**
 * Update subject by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Board>}
 */
const updatSubjectById = async (subjectId, updateBody) => {
  const subject = await getSubjectById(subjectId);
  if (!subject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  Object.assign(subject, updateBody);
  await subject.save();
  return subject;
};

/**
 * Delete board by id
 * @param {ObjectId} subjectId
 * @returns {Promise<Subject>}
 */
const deleteSubjectById = async (subjectId) => {
  const subject = await getSubjectById(subjectId);
  if (!subject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  await subject.remove();
  return subject;
};

module.exports = {
  createSubject,
  querySubject,
  getSubjectById,
  updatSubjectById,
  deleteSubjectById,
};
