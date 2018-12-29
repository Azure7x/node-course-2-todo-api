// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db) => {
  if(error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
 //   console.log(result);
 // })

 // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((results) => {
 //   console.log(results);
 // })

 // db.collection('Todos').findOneAndDelete({completed: false}).then((results) => {
 //   console.log(results);
 // })

 // db.collection('Users').deleteMany({name: 'adn'}).then((results) => {
 //   console.log(results);
 // })

 db.collection('Users').findOneAndDelete({_id: new ObjectID('5c2445ea37f5c339508fd92d')}).then((results) => {
   console.log(results);
 })

  // db.close();
});
