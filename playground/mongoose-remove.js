const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: 'abc'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove("5c3d16708208c19016997790").then((todo) => {
  console.log(todo);
});
