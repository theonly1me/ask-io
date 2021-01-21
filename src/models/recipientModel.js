const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  responded: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = recipientSchema;
