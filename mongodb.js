// CRUD operations

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

// generate our own object id

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to the database");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("63bd05cb4e9c75a88bbce3f9") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to retrieve data");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 22 })
    //   .toArray((error, result) => {
    //     console.log(result);
    //   });

    // db.collection("users")
    //   .find({ age: 22 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, result) => {
    //     console.log(result);
    //   });
    // db.collection("users")
    //   .updateOne(
    //     { age: 44 },
    //     {
    //       $set: {
    //         name: "Mark Lemiso",
    //       },
    //     }
    //   ).then((result) => {
    //     console.log(result);
    //   }).catch((error) => {
    //     console.log(error);
    //   });

    //   db.collection('tasks').updateMany(
    //     {completed: false},
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   ).then((result) => {
    //     console.log(result)
    //   }).catch((error) => {
    //     console.log(error)
    //   })

    // db.collection('users').deleteMany(
    //   {name: 'Abdulselam'}
    // ).then((result) => {
    //   console.log(result.deletedCount)
    // }).catch((error) => {
    //   console.log(error)
    // })

    // db.collection('tasks').deleteMany(
    //   {completed: true}
    // ).then((result) => {
    //   console.log(result.deletedCount)
    // }).catch((error) => {
    //   console.log(error)
    // })

    // db.collection('tasks').deleteOne(
    //   {_id: new ObjectID("63bd08aade35e32f247d41ea")}
    // ).then((result) => {
    //   console.log(result.deletedCount)
    // }).catch((error) => {
    //   console.log(error)
    // })
    
    
  }
);
