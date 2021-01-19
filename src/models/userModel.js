const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  credits: {
    type: Number,
    default: 0,
  },
  photo: {
    type: String,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
