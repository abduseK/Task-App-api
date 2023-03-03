const express = require('express')
const router = new express.Router()
const Tasks = require('../models/task')

router.post('/tasks', async (req, res) => {
    const tasks = new Tasks(req.body)

    try {
        await tasks.save()
        res.status(200).send(tasks)
    } catch(e) {
        res.status(400).send(e)
    }

})

router.get('/tasks', async (req, res) => {
    
    try {
        const task = await Tasks.find({})
        res.status(200).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try{
        const task = await Tasks.findById(_id)
        if(!task) {
            return res.status(400).send()
        }

        res.status(200).send(task)
        
    } catch(e) {
        res.status(500).send(e)
    }

})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["description", "completed"]
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidUpdate) {
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try {
        const _id = req.params.id
        const task = await Tasks.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        if(!task) {
            return res.status(404).send()
        }

        res.status(200).send(task)
    } catch(e) {
        return res.status(400).send(e)
    }
})


router.delete('/tasks/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const task = await Tasks.findByIdAndDelete(_id)
        if(!task) {
            return res.status(404).send()
        }

        res.status(200).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router