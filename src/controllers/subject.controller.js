const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { subjectService } = require('../services');

const createSubject = catchAsync(async (req, res) => {
  const subject = await subjectService.createSubject(req.body);
  res.status(httpStatus.CREATED).send(subject);
});

const getAllSubject = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['board']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await subjectService.querySubject(filter, options);
  res.send(result);
});

const getSubjectByFilter = catchAsync(async (req, res) => {
  const { boardId, mediumId, classId } = req.params;
  const subject = await subjectService.getClassByFilter(boardId, mediumId, classId);
  if (!subject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  res.send(subject);
});

const getSubjectById = catchAsync(async (req, res) => {
  const subject = await subjectService.getSubjectById(req.params.subjectId);
  if (!subject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  res.send(subject);
});

const getSubjectByClassId = catchAsync(async (req, res) => {
  const subject = await subjectService.getSubjectByClassId(req.params.classId);
  if (!subject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  res.send(subject);
});

const updateSubject = catchAsync(async (req, res) => {
  const subject = await subjectService.updatSubjectById(req.params.subjectId, req.body);
  res.send(subject);
});

const deleteSubject = catchAsync(async (req, res) => {
  await subjectService.deleteSubjectById(req.params.subjectId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSubject,
  getAllSubject,
  getSubjectById,
  updateSubject,
  deleteSubject,
  getSubjectByFilter,
  getSubjectByClassId,
};
