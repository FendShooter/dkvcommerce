const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    category: {
      type: String,
      enum: ['Computers', 'Laptops', 'Access'],
      required: [true, 'Please enter a category on this field...'],
    },
    desc: {
      type: String,
      required: [true, 'Please enter a description on this field...'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
categorySchema.virtual('item', {
  // name for the field
  ref: 'Product', // name of other collection to link with
  localField: '_id',
  foreignField: 'category', // collection field
  justOne: false,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
