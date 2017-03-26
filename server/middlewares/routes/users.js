const express = require('express');
const UserDB = require('../../model');
const validateInput = require('./shared/validation/signupvalidation');
// const isEmpty = require('lodash/isEmpty');

// const validator = require('validator');


let router = express.Router();

// function validateInput(data) {
//     let errors = {};

//     if(validator.isEmpty(data.screenname)) {
//       errors.screenname = 'This field is require';
//     }

//     if(validator.isEmpty(data.email)) {
//       errors.email = 'This field is require';
//     }

//     if(!validator.isEmail(data.email)){
//       errors.email = 'Email is not valid!';
//     }

//     if(validator.isEmpty(data.password)) {
//       errors.password = 'This field is require';
//     }

//     if (!validator.equals(data.password, data.passwordConfirmation)){
//       errors.passwordConfirmation = 'Passwords must match!';
//     }

//     if(validator.isEmpty(data.passwordConfirmation)) {
//       errors.passwordConfirmation = 'This field is require';
//     }

//     return{
//       errors,
//       isValid: isEmpty(errors)
//     }
// }

router.post('/', (req, res) => {
    console.log(req.body);

    var newUser = new UserDB(req.body);

    newUser.save(function(err, doc) {
    if (err) {
        console.log(err);
    } else {
        res.send(doc);
        console.log(doc);
    }
    });

    const { errors, isValid } = validateInput(req.body);

    if (isValid){
      res.json({ succes: true });
    } else {
      res.status(400).json(errors);
    }


});


module.exports = router;
return router;