const httpStatus = require('http-status');
const { Multimedia } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Multimedia
 * @param {Object} multimediaBody
 * @returns {Promise<Multimedia>}
 */

const createMultimedia = async (multimediaBody) => {
  return Multimedia.create(multimediaBody);
};

/**
 * Query for Multimedia
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMultimedia = async (filter, options) => {
  const multimedia = await Multimedia.paginate(filter, options);
  return multimedia;
};

/**
 * Get multimedia by id
 * @param {ObjectId} id
 * @returns {Promise<Multimedia>}
 */
const getMultimediaById = async (id) => {
  return Multimedia.findById(id);
};

/**
 * Get mutimedia by Filter
 * @param {ObjectId} boardId
 *  @param {ObjectId} mediumId
 *  @param {ObjectId} classId
 *  @param {ObjectId} subjectId
 *  @param {ObjectId} bookId
 *  @param {ObjectId} chapterId
 *  @param {ObjectId} lessionId
 * @returns {Promise<Multimedia>}
 */
const getMultimediaByFilter = async (boardId, mediumId, classId, subjectId, bookId, chapterId, lessionId) => {
  return Multimedia.find({ boardId, mediumId, classId, subjectId, bookId, chapterId, lessionId });
};

/**
 * Update Multimedia by id
 * @param {ObjectId} multimediaId
 * @param {Object} updateBody
 * @returns {Promise<Multimedia>}
 */
const updateMultimediaById = async (multimediaId, updateBody) => {
  const multimedia = await getMultimediaById(multimediaId);
  if (!multimedia) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Multimedia not found');
  }
  Object.assign(multimedia, updateBody);
  await multimedia.save();
  return multimedia;
};

/**
 * Delete Multimedia by id
 * @param {ObjectId} multimediaId
 * @returns {Promise<Multimedia>}
 */
const deleteMultimediaById = async (multimediaId) => {
  const multimedia = await getMultimediaById(multimediaId);
  if (!multimedia) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Multimedia not found');
  }
  await multimedia.remove();
  return multimedia;
};

module.exports = {
  createMultimedia,
  queryMultimedia,
  getMultimediaByFilter,
  updateMultimediaById,
  deleteMultimediaById,
  getMultimediaById,
};
