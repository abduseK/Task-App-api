const express = require('express')
require('./db/mongoose')
const Books = require('./models/books')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bookRouter = require('./routers/book')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)
app.use(bookRouter)


app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})