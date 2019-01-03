const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5c2d78ca1e51b75c20d4eee711';
//
// if(!ObjectID.isValid(id)) {
//   console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//   return console.log('id not found');
//   }
//   console.log('Todo id', todo);
// }).catch((e) => {
//   console.log(e);
// });
User.findById('5c2bfea90ba67188159c0615').then((user) => {
  if(!user) {
    return console.log('no user found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e);
});
