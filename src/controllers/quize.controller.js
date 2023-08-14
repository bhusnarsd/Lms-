const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { quizeService } = require('../services');
 
 
const createQuize = catchAsync(async (req, res) => {
  const quize = await quizeService.createBoard(req.body);
  res.status(httpStatus.CREATED).send(quize);
});


const getAllQuize = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['queName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await quizeService.queryBoard(filter, options);
  res.send(result);
});

const getQuizeById = catchAsync(async (req, res) => {
  const quize = await quizeService.getQuizeById(req.params.quizeId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  res.send(quize);
});

const updateQuizeById = catchAsync(async (req, res) => {
  const quize = await quizeService.updateQuizeById(req.params.quizeId, req.body);
  res.send(quize);
});

const deleteQuizeById = catchAsync(async (req, res) => {
  await quizeService.deleteQuizeById(req.params.boardId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createQuize,
  getAllQuize,
  getQuizeById,
  updateQuizeById,
  deleteQuizeById,
};
