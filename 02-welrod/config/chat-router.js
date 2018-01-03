const router = require('express').Router();
const users = require('../controllers/users');
const chat = require('../controllers/chat');

router.route('/')
  .get(chat.conversationsAll);
router.route('/:id')
  .get(chat.conversationsOne)
  .post(chat.messagesSend)
  .delete(chat.conversationsDelete);

router.route('/new/:recipient')
  .post(chat.conversationsNew);

module.exports = router;
