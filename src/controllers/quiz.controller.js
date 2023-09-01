const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { quizeService } = require('../services');

const createQuize = catchAsync(async (req, res) => {
  const quize = await quizeService.createQuize(req.body);
  res.status(httpStatus.CREATED).send(quize);
});

const getAllQuize = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['quizname']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await quizeService.queryQuize(filter, options);
  res.send(result);
});

const getAllNotSelected = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['quizname']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await quizeService.QuizeNotSelected(filter, options);
  res.send(result);
});

const getQuizeById = catchAsync(async (req, res) => {
  const quize = await quizeService.getQuizeById(req.params.quizeId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  res.send(quize);
});

const QuizeByIdSubmit = catchAsync(async (req, res) => {
  const quiz = await quizeService.QuizeByIdSubmit(req.params.quizeId);
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  const correctAnswerSet = new Set(quiz.correctOptions);
  const userAnswerSet = new Set(req.body.answer);
  const allSelectedCorrect = Array.from(userAnswerSet).every((index) => correctAnswerSet.has(index));
  const atLeastOneCorrect = Array.from(userAnswerSet).some((index) => correctAnswerSet.has(index));
  if (allSelectedCorrect) {
    quiz.userAnswers = req.body.answer;
    await quiz.save();
    return res.json({ message: 'Correct answer!' });
  }
  if (atLeastOneCorrect) {
    return res.json({ message: 'At least one correct answer selected, but not all.' });
  }
  return res.json({ message: 'Incorrect answer.' });
});

const updateQuizeById = catchAsync(async (req, res) => {
  const quize = await quizeService.updateQuizeById(req.params.quizeId, req.body);
  res.send(quize);
});

const deleteQuizeById = catchAsync(async (req, res) => {
  await quizeService.deleteQuizeById(req.params.quizeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createQuize,
  getAllQuize,
  getQuizeById,
  QuizeByIdSubmit,
  updateQuizeById,
  deleteQuizeById,
  getAllNotSelected,
};
