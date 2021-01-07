const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
