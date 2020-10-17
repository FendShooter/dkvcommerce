const Category = require('../models/Category');
const errorResponse = require('../utils/errorResponse');

exports.getCategories = async (req, res, next) => {
  try {
    const category = await Category.find(req.query).populate('item');
    if (!category) {
      return next(new errorResponse(`Invalid id`, 404));
    }
    res.send({ success: true, category });
  } catch (error) {
    next(error);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id).populate('item');
    if (!category) {
      return next(new errorResponse(`Invalid id:${req.params.id}`, 404));
    }
    res.send({ success: true, category });
  } catch (error) {
    next(error);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.send(category);
  } catch (error) {
    next(error);
  }
};
exports.updateCategory = async (req, res, next) => {
  res.send('update a category by id');
};
exports.deleteCategory = async (req, res, next) => {
  res.send(' delete a category by id');
};
