// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db) => {
  if(error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 // db.collection('Todos').findOneAndUpdate({
 //   _id: new ObjectID('5c26e6057e434b53fc729498')
 // }, {
 //   $set: {
 //     completed: true
 //   }
 // }, {
 //   returnOriginal: false
 // }).then((results) => {
 //   console.log(results);
 // });

 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5c26b47bac3e1208d0e56327')
 },{
   $set: {
     name: 'adn'
   },
   $inc: {
     age: 3
   }
 }, {
   returnOriginal: false
 }).then((results) => {
   console.log(results);
 })

  // db.close();
});
