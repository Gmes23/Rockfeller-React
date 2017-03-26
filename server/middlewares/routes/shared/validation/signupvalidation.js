const isEmpty = require('lodash/isEmpty');
const validator = require('validator');


function validateInput(data) {
    let errors = {};

    if(validator.isEmpty(data.screenname)) {
      errors.screenname = 'This field is require';
    }

    if(validator.isEmpty(data.email)) {
      errors.email = 'This field is require';
    }

    if(!validator.isEmail(data.email)){
      errors.email = 'Email is not valid!';
    }

    if(validator.isEmpty(data.password)) {
      errors.password = 'This field is require';
    }

    if (!validator.equals(data.password, data.passwordConfirmation)){
      errors.passwordConfirmation = 'Passwords must match!';
    }

    if(validator.isEmpty(data.passwordConfirmation)) {
      errors.passwordConfirmation = 'This field is require';
    }

    return{
      errors,
      isValid: isEmpty(errors)
    }
}

module.exports = validateInput;