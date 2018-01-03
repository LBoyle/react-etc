const User = require('../models/user');

const usersIndex = (req, res, next) => {
  User
    .find()
    .exec()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(next);
}

const usersShow = (req, res, next) => {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      return res.status(200).json(user);
    })
    .catch(next);
}

const usersUpdate = (req, res, next) => {
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(user => {
      if(!user) {
        return res.notFound();
      } else {
        return res.status(201).json(user);
      }
    })
    .catch(next);
}

const usersDelete = (req, res, next) => {
  User
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.status(204).json({ message: 'Deleted!' });
    })
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
