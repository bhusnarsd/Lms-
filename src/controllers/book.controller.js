const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bookService } = require('../services');
 
 
const createBook = catchAsync(async (req, res) => {
  const book = await bookService.createBook(req.body);
  res.status(httpStatus.CREATED).send(book);
});


const getAllBook = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['board']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await bookService.queryBook(filter, options);
  res.send(result);
});

const getBookById = catchAsync(async (req, res) => {
  const book = await bookService.getBookById(req.params.boardId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'book not found');
  }
  res.send(book);
});

const getBookByClassId = catchAsync(async (req, res) => {
    const book = await bookService.getClassById(req.params.classId);
    if (!book) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
    }
    res.send(book);
  });

const updateBook = catchAsync(async (req, res) => {
  const book = await bookService.updatBookById(req.params.bookId, req.body);
  res.send(book);
});

const deleteBook = catchAsync(async (req, res) => {
  await bookService.deleteBookById(req.params.bookId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBook,
  getAllBook,
  getBookById,
  updateBook,
  deleteBook,
  getBookByClassId,
};