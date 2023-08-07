const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { classesService } = require('../services');
 
 
const createClasses = catchAsync(async (req, res) => {
  const user = await classesService.createClasses(req.body);
  res.status(httpStatus.CREATED).send(user);
});


const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['classname']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await classesService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await videoService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await videoService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await videoService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createClasses,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
