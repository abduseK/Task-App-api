require('../src/db/mongoose')
const Tasks = require('../src/models/task')
require('../src/models/task')
const mongodb = require('mongodb')

const ObjectID = mongodb.ObjectId


// Tasks.findByIdAndDelete('63c1f8bb4ea4c5add034c8bc').then((tasks) => {
//     console.log(tasks)
//     return Tasks.countDocuments({completed: true})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteAndCount = async (id) => {
    const task = await Tasks.findByIdAndDelete(id)
    const count = await Tasks.countDocuments({completed: false})
    return count
}

deleteAndCount('63c1f96cc3f2a17789b7e939').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})