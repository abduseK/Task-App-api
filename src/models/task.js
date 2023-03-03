const mongoose = require('mongoose')

const date_obj = new Date()

const Tasks = mongoose.model("Tasks", {
    description: {
      trim: true,
      required: true,
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      default: date_obj
    }
  });

  module.exports = Tasks