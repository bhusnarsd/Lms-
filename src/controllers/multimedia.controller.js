const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { multimediaService } = require('../services');

const createMultimedia = catchAsync(async (req, res) => {
  const multimedia = await multimediaService.createMultimedia(req.body);
  res.status(httpStatus.CREATED).send(multimedia);
});

const getMultimedia = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['lessionName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await multimediaService.queryMultimedia(filter, options);
  res.send(result);
});

const getMultimediaById = catchAsync(async (req, res) => {
  const multimedia = await multimediaService.getMultimediaById(req.params.multimediaId);
  if (!multimedia) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Multimedia not found');
  }
  res.send(multimedia);
});

const getByChapterId = catchAsync(async (req, res) => {
  const multimedia = await multimediaService.getByChapterId(req.params.chapterId);
  if (!multimedia) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Multimedia not found by chapterId');
  }
  res.send(multimedia);
});

const updateMultimedia = catchAsync(async (req, res) => {
  const multimedia = await multimediaService.updateMultimediaById(req.params.multimediaId, req.body);
  res.send(multimedia);
});

const deleteMultimedia = catchAsync(async (req, res) => {
  await multimediaService.deleteMultimediaById(req.params.multimediaId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMultimedia,
  getMultimedia,
  getMultimediaById,
  getByChapterId,
  updateMultimedia,
  deleteMultimedia,
};
