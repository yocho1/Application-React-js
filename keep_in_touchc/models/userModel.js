const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name!'],
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter your email!'],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, 'Please enter your phone!'],
      unique: true,
    },
    message: {
      type: String,
      required: [true, 'Please enter your message!'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Users', userSchema)
