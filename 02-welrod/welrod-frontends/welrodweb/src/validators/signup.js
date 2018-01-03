import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data, callback) {
  let errors = {};
  if(Validator.isEmpty(data.username)) {
    errors.username = 'This field is required - client';
  }
  if(Validator.isEmpty(data.email)) {
    errors.email = 'This field is required - client';
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Must be a valid email address - client';
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = 'This field is required - client';
  }
  if(data.password.length < 7) {
    errors.password = 'Password must me longer than 7 characters - client';
  }
  if(Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required - client';
  }
  if(!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match - client';
  }
  callback(errors, isEmpty(errors));
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
