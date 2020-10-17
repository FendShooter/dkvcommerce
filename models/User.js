const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const errorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name field cant be empty'],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    required: [true, 'email field cant be empty'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'password field cant be empty'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createAt: {
    type: Date,
    default: Date.now,
     },
     tokens: [{
          token: {
               type: String,
               required:true
       }
  }]
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
};

userSchema.statics.credentials = async (email, password) => {
     const user = await User.findOne({ email });
       if (!user) {
         throw new errorResponse('Invalid email', 400);
       }
     const isMatch = await bcrypt.compare(password, user.password);
     console.log(user , isMatch);
     
       if (!isMatch) {
         throw new errorResponse('Invalid password', 400);
       }
       return user;


};

const User = mongoose.model('User', userSchema);

module.exports = User;
