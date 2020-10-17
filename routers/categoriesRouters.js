const express = require('express');
const categoryRouter = express.Router();
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const { Auth } = require('../middlewares/auth');

categoryRouter.get('/', getCategories);
categoryRouter.get('/:id', getCategory);
categoryRouter.post('/', Auth, createCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

module.exports = categoryRouter;
