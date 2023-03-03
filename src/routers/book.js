const express = require('express')
const router = new express.Router()
const Books = require('../models/books')

router.post('/books', async (req, res) => {
    const books = new Books(req.body)

    try {
        await books.save()
        res.status(200).send(books)
    } catch(e) {
        res.status(400).send()
    }
})

router.get('/books', async (req, res) => {

    try {
        const books = await Books.find({})
        res.status(200).send(books)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/books/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const book = await Books.findById(_id)
        if(!book) {
            res.status(404).send()
        }

        res.status(200).send(book)
    } catch(e) {
        res.status(400).send(e)
    }
})


module.exports = router