const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  profileImage: { type: String, trim: true }
});

userSchema
  .virtual('password')
  .set(setPassword);

userSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

userSchema
  .path('passwordHash')
  .validate(validatePasswordHash);

userSchema
  .path('email')
  .validate(validateEmail);

userSchema.methods.validatePassword = validatePassword;

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.passwordHash;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);

function setPassword(value){
  this._password    = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash() {
  if (this.isNew) {
    if (!this._password) {
      return this.json({ password: 'A password is required. - server' });
    }

    if (this._password.length < 7) {
      this.json({ password: 'Must be at least 7 characters. - server' });
    }

    if (this._password !== this._passwordConfirmation) {
      return this.json({ passwordConfirmation: 'Passwords do not match. - server' });
    }
  }
}

function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return this.json({ email: 'Must be a valid email address. - server' });
  }
}

function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}
