const Users = require('../src/models/user')

require('../src/db/mongoose')
require('../src/models/user')


// Users.findByIdAndUpdate('63c1f8664ea4c5add034c8ba', { age: 8}).then((users) => {
//     console.log(users)
//     return Users.countDocuments({ age: 8})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })


const updateAndCount = async (id, age) => {
    const update = await Users.findByIdAndUpdate(id, { age: age})
    const count = await Users.countDocuments({age: age})
    return count
}

updateAndCount('63c1f8664ea4c5add034c8ba', 99).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})