const User = require('../models/user');
const Conversation = require('../models/conversation');
const Message = require('../models/message');

const conversationsAll = (req, res, next) => {
  Conversation
    .find()
    .populate('participants')
    .exec()
    .then(conversations => {
      if(!conversations.length) return res.status(404).json({ errors: 'Not found' });
      return res.status(200).json(conversations);
    })
    .catch(next);
};

const conversationsOne = (req, res, next) => {
  Conversation
    .findById(req.params.id)
    .populate('participants')
    .exec()
    .then(conversation => {
      if(!conversation) return res.status(404).json({ errors: 'Not found' });
      return res.status(200).json(conversation);
    })
    .catch(next);
};

const conversationsNew = (req, res, next) => {
  if(!req.params.recipient) {
    res.status(422).send({ errors: 'Please choose a valid recipient for your message.' });
    return next();
  }
  if(!req.body.composedMessage) {
    res.status(422).send({ errors: 'Please enter a message.' });
    return next();
  }
  console.log(req.user);
  const conversation = new Conversation({
    participants: [req.user.id, req.params.recipient]
  });

  conversation.save((err, newConversation) => {
      if(err) {
        res.send({ errors: 'Error starting conversation.' })
        return next(err);
      };
      const message = new Message({
        conversationId: newConversation._id,
        body: req.body.composedMessage,
        author: req.user.id
      });
      message.save((err, newMessage) => {
        if (err) {
          res.send({ errors: 'Error saving first message to conversation.' });
          return next(err);
        }

        res.status(201).json({ message: 'Conversation started!', conversationId: conversation._id, firstMessage: newMessage});
        return next();
      });
      // return res.status(201).json(conversation);
    })
    .catch(next);
};

const conversationsDelete = (req, res, next) => {
  Conversation
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.status(204).json({ message: 'Deleted!' }))
    .catch(next);
};

const messagesSend = (req, res, next) => {
  const reply = new Message({
    conversationId: req.params.id,
    body: req.body.composedMessage,
    author: req.user.id
  });
  reply.save(function(err, sentReply) {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    res.status(201).json({ message: 'Reply successfully sent!' });
    return next();
  });
};

const messagesUpdate = (req, res, next) => {
  Message
    .findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(message => {
      if(!message) return res.status(404).json({ errors: 'Message not found' });
      return res.status(201).json(message);
    })
    .catch(next);
};

module.exports = {
  conversationsAll,
  conversationsOne,
  conversationsNew,
  conversationsDelete,
  messagesSend,
  messagesUpdate
};
