const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();
exports.CONNEC_TDB = async () => {
  await mongoose.connect(process.env.DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`database connected...`.bgMagenta);
};
