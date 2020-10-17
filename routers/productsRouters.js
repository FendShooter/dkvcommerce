const express = require('express');
const {
  getProducts,
  createProduct,
} = require('../controllers/productController');
const { Auth } = require('../middlewares/auth');

const productsRouters = express.Router()

productsRouters.get('/', Auth, getProducts);
productsRouters.post('/', Auth,createProduct)


module.exports = productsRouters;