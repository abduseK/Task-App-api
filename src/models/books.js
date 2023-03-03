const mongoose = require('mongoose')

let date_ob = new Date()

const Books = mongoose.model('Books', {
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: 'Unknown'
    },
    date: {
        type: String,
        default: date_ob
    }
})

module.exports = Books