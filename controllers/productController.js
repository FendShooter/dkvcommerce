const Product = require('../models/Products');

exports.getProducts = async(req, res, next) => {
     try {
          const product = await Product.find().populate('category')
          res.send({success:true, product})
     } catch (error) {
          next(error)
     }
}
exports.createProduct = async(req, res, next) => {
     try {
          const product = await Product.create(req.body)
          res.send({'succes': true, product})
     } catch (error) {
          next(error)
     }
}