const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/env');

const authenticationsRegister = (req, res, next) => {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ user }, config.secret, { expiresIn: 60*60*24 });
      return res.status(201).json({
        message: `Welcome ${user.username}!`,
        user,
        token
      });
    })
    .catch(err => res.json(err));

}

const authenticationsLogin = (req, res, next) => {
  User
    .findOne({email: req.body.email})
    .exec()
    .then(user => {
      if(!user) return res.status(404).json({ errors: 'User not found' });
      if(!user.validatePassword(req.body.password)) return res.status(401).json({ errors: 'Unauthorized.' });

      const token = jwt.sign({ user }, config.secret, { expiresIn: 60*60*24 });

      return res.status(200).json({
        message: 'Welcome back.',
        user,
        token
      });
    })
    .catch(err => res.json(err));
}

module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};
