const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { classesService } = require('../services');

const createClasses = catchAsync(async (req, res) => {
  const newClass = await classesService.createClasses(req.body);
  res.status(httpStatus.CREATED).send(newClass);
});

const getClasses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['className']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allClasses = await classesService.getAllClasses(filter, options);
  res.send(allClasses);
});

const getSingleClass = catchAsync(async (req, res) => {
  const singleClass = await classesService.getClassById(req.params.classId);
  if (!singleClass) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  res.send(singleClass);
});

// const getAllClassByMediumId = catchAsync(async (req, res) => {
//   const allClasses = await classesService.getClassesByMediumId(req.params.mediumId);
//   if (!allClasses) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Classes not found');
//   }
//   res.send(allClasses);
// });

const updateSingleClass = catchAsync(async (req, res) => {
  const updateddClass = await classesService.updateClassById(req.params.classId, req.body);
  res.send(updateddClass);
});

const deleteSingleClass = catchAsync(async (req, res) => {
  const deletedClass = await classesService.deleteClassById(req.params.classId);
  res.status(httpStatus.NO_CONTENT).send(deletedClass);
});

module.exports = {
  createClasses,
  getClasses,
  getSingleClass,
  updateSingleClass,
  deleteSingleClass,
  // getAllClassByMediumId,
};
