const mongoose = require('mongoose')
const validator = require('validator')

const Users = mongoose.model("Users", {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if(!validator.isEmail(value)) {
          throw new Error('The email is invalid')
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value) {
        if(value.toLowerCase().includes('password')) {
          throw new Error('The password can\'t be string password')
        }
      }
    },
    age: {
      type: Number,
      validate(value) {
        if(value < 0) {
          throw new Error('Age must be greater than 0')
        }
      }
    },
  });


  module.exports = Users