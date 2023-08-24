const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { chapterService } = require('../services');

const createChapter = catchAsync(async (req, res) => {
  const newChapter = await chapterService.createChapter(req.body);
  res.status(httpStatus.CREATED).send(newChapter);
});

const getChapter = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['chapterName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allChapter = await chapterService.getAllChapter(filter, options);
  res.send(allChapter);
});

const getSingleChapter = catchAsync(async (req, res) => {
  const singleChapter = await chapterService.getChapterById(req.params.chapterId);
  if (!singleChapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  res.send(singleChapter);
});
const getChaptersByBookId = catchAsync(async (req, res) => {
  const AllChapter = await chapterService.getChaptersByBookId(req.params.bookId);
  if (!AllChapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapters not found');
  }
  res.send(AllChapter);
});

const updateSingleClass = catchAsync(async (req, res) => {
  const updateddClass = await chapterService.updateChapterById(req.params.chapterId, req.body);
  res.send(updateddClass);
});

const deleteSingleChapter = catchAsync(async (req, res) => {
  const deletedChapter = await chapterService.deleteChapterById(req.params.chapterId);
  res.status(httpStatus.NO_CONTENT).send(deletedChapter);
});

module.exports = {
  createChapter,
  getChapter,
  getSingleChapter,
  updateSingleClass,
  deleteSingleChapter,
  getChaptersByBookId,
};
