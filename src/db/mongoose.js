const mongoose = require("mongoose");
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
  useNewUrlParser: true,
  // useCreateIndex: true
});

// let's create a mongoose model

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



const sixUser = new Users({
  name: '   Abrsh   ',
  email: 'ABDEKSLE@GMAIL.COM',
  password: ' 3323d'
})

// Users.deleteOne({name: 'Abrsh'}, (error, result) => {
//   if(error) {
//     return console.log('unable to delete')
//   }

//   console.log(result)
// })

// sixUser.save().then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })


// fourthUser
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// fifthUser
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const me = new Users({
//   name: "Abdulselam",
//   age: 22,
// });

// const me2 = new Users({
//   name: "Markos",
//   age: 23,
// });

// const thirdUser = new Users({
//   name: "Hanan",
//   age: 24,
// });

// thirdUser
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// me.save().then((result) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

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
});

const task1 = new Tasks({
  completed: true
  
});



task1.save().then((result) => {
    console.log(task1)
}).catch((error) => {
    console.log(error)
})
