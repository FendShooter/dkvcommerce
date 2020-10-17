const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    specs: {
      type: String,
    },
    qty: {
      type: Number,
      default: 200,
    },
    price: {
      type: Number,
      default: 2,
    },
  }
);



const Product = mongoose.model('Product', productSchema);

module.exports = Product;
