const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//this connects to local database
const url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(url);

//this connects to mlab database
// const url = process.env.MONGOLAB_URI;
// mongoose.connect(url);

module.exports = {mongoose};
