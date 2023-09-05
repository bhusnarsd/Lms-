const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ebookService } = require('../services');

const createEbook = catchAsync(async (req, res) => {
  const ebook = await ebookService.createEbook(req.body);
  res.status(httpStatus.CREATED).send(ebook);
});

// const getEbook = catchAsync(async (req, res) => {
//   const filter = pick(req.query, ['board']);
//   const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   const result = await mediumService.queryMedium(filter, options);
//   res.send(result);
// });

const getEbookById = catchAsync(async (req, res) => {
  const ebook = await ebookService.getEbookById(req.params.ebookId);
  if (!ebook) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Ebook not found');
  }
  res.send(ebook);
});

const getEbookByChapterId = catchAsync(async (req, res) => {
  const ebook = await ebookService.getEbookByChapterId(req.params.chapterId);
  if (!ebook) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Ebook not found');
  }
  res.send(ebook);
});

const updateEbook = catchAsync(async (req, res) => {
  const ebook = await ebookService.updateEbookById(req.params.ebookId, req.body);
  res.send(ebook);
});

const deleteEbook = catchAsync(async (req, res) => {
  await ebookService.deleteEbookById(req.params.ebookId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
    createEbook,
    getEbookById,
    getEbookByChapterId,
    updateEbook,
    deleteEbook,
};
