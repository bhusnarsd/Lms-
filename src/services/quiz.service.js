const httpStatus = require('http-status');
const { Quize } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a quize
 * @param {Object} quizeBody
 * @returns {Promise<Quize>}
 */
const createQuize = async (quizeBody) => {
  return Quize.create(quizeBody);
};
/**
 * Create Upload quize
 * @param {Object} quizeBody
 * @returns { Promise<Quize>}
 */
const uploadQuiz = async (quizeBody) => {
  const quizData = Quize.create(quizeBody);
  return quizData;
};
/**
 * Query for board
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryQuize = async (filter, options) => {
  const quizes = await Quize.paginate(filter, options);
  return quizes;
};

/**
 * Get quize by id
 * @param {ObjectId} id
 * @returns {Promise<Quize>}
 */
const getQuizeById = async (id) => {
  return Quize.findById(id);
};

/**
 * Query for board
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const QuizeNotSelected = async (filter, options) => {
  const updatedFilter = { ...filter, isVerified: true };
  const quizes = await Quize.paginate(updatedFilter, options);
  return quizes;
};

/**
 * create quize by id
 * @param {ObjectId} quizeId
 * @param {Object} updateBody
 * @returns {Promise<Quize>}
 */
const QuizeByIdSubmit = async (quizeId, updateBody) => {
  const quizes = await getQuizeById(quizeId);
  if (!quizes) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  Object.assign(quizes, updateBody);
  await quizes.save();
  return quizes;
};

const CheckoutAnswer = async (correctOptions, answer) => {
  const quiz = await QuizeByIdSubmit(correctOptions);
  const correctAnswerSet = new Set(quiz.correctOptions);
  const userAnswerSet = new Set(answer);
  const allSelectedCorrect = Array.from(userAnswerSet).every((index) => correctAnswerSet.has(index));
  const atLeastOneCorrect = Array.from(userAnswerSet).some((index) => correctAnswerSet.has(index));
  if (allSelectedCorrect) {
    quiz.userAnswers = answer;
    await quiz.save();
    throw new ApiError(httpStatus.ACCEPTED, 'Correct answer!');
  }
  if (atLeastOneCorrect) {
    throw new ApiError(httpStatus.NOT_FOUND, 'At least one correct answer selected, but not all.');
  }
  throw new ApiError(httpStatus.NOT_FOUND, 'Incorrect answer.');
};

/**
 * Update quize by id
 * @param {ObjectId} quizeId
 * @param {Object} updateBody
 * @returns {Promise<Quize>}
 */
const updateQuizeById = async (quizeId, updateBody) => {
  const quizes = await getQuizeById(quizeId);
  if (!quizes) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  Object.assign(quizes, updateBody);
  await quizes.save();
  return quizes;
};

/**
 * Delete quize by id
 * @param {ObjectId} quizeId
 * @returns {Promise<Quize>}
 */
const deleteQuizeById = async (quizeId) => {
  const quize = await getQuizeById(quizeId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  await quize.remove();
  return quize;
};

module.exports = {
  createQuize,
  queryQuize,
  getQuizeById,
  QuizeByIdSubmit,
  updateQuizeById,
  deleteQuizeById,
  QuizeNotSelected,
  uploadQuiz,
  CheckoutAnswer,
};
