const express = require('express')
const Users = require('../models/user')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new Users(req.body)

    try {
        await user.save()
        res.status(200).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
    
})

router.get('/users', async (req, res) => {

    try {
        const users = await Users.find({})
        res.status(200).send(users)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/users/:id', async (req, res) => {

    const _id = req.params.id

    try{
        const user = await Users.findById(_id)
        if(!user) {
            return res.status(400).send()
        }

        res.status(200).send(user)

    } catch(e) {
        res.status(500).send(e)
    }
    
})

router.patch('/users/:id', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "emai", "password", "age"]
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
    
    if(!isValidUpdate) {
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try {
        const _id = req.params.id
        const user = await Users.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})

        if(!user) {
            return res.status(404).send()
        }

        res.status(200).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    
    try {
        const _id = req.params.id
        const user = await Users.findByIdAndDelete(_id)
        if(!user) {
            return res.status(400).send()
        }

        res.status(200).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router