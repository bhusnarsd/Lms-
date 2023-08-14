const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { lessionService } = require('../services');

const createLession = catchAsync(async (req, res) => {
  const lession = await lessionService.createLession(req.body);
  res.status(httpStatus.CREATED).send(lession);
});

const getLessions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['board']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await lessionService.queryLessions(filter, options);
  res.send(result);
});

const getLession = catchAsync(async (req, res) => {
  const lession = await lessionService.getLessionById(req.params.lessionId);
  if (!lession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lession not found');
  }
  res.send(lession);
});

const updateLession = catchAsync(async (req, res) => {
  const lession = await lessionService.updateLessionById(req.params.lessionId, req.body);
  res.send(lession);
});

const deleteLession = catchAsync(async (req, res) => {
  await lessionService.deleteLessionById(req.params.lessionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLession,
  getLessions,
  getLession,
  updateLession,
  deleteLession,
};
