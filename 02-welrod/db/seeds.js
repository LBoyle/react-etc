const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const Message = require('../models/message');
const Conversation = require('../models/conversation');
const config = require('../config/env');

mongoose.connect(config.db['development'], { useMongoClient: true });

User.collection.drop();
Message.collection.drop();
Conversation.collection.drop();

const uLouis = new User({
  'username': 'Louis',
  'email': 'louis@louis.com',
  'password': 'password',
  'passwordConfirmation': 'password',
  'profileImage': 'http://www.stevensegallery.com/200/200'
});
const uBob = new User({
	"username": "bob",
	"profileImage": "http://www.stevensegallery.com/200/200",
	"email": "bob@bob.com",
	"password": "password",
	"passwordConfirmation": "password"
});
User.create([
  uLouis,
  uBob
])
.then(users => {
  console.log(users.length + 'Users created');
})
.finally(() => {
  mongoose.connection.close();
})
.catch(err => {
  console.log(err);
});
