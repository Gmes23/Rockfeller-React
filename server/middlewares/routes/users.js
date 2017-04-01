const express = require('express');
const bcrypt = require('bcrypt');
const commonValidations = require('./shared/validation/signupvalidation');
const isEmpty = require('lodash/isEmpty');
const User = require('../../database/model/user');


let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  console.log(data)

  return User.query({
    where: { email: data.email },
    orWhere: { screenname: data.screenname }
  }).fetch().then(user => {
    if (user) {
      if (user.get('screenname') === data.screenname) {
        errors.screenname = 'There is user with such username';
      }
      if (user.get('email') === data.email) {
        errors.email = 'There is user with such email';
      }
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  })

}

router.get('/:identifier', (req, res) => {
  User.query({
    select: [ 'screenname', 'email' ],
    where: { email: req.params.identifier },
    orWhere: { screenname: req.params.identifier }
  }).fetch().then(user => {
    res.json({ user });
  });
});




router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { screenname, password, email } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);

      User.forge({
        screenname, email, password_digest
      }, { hasTimestamps: true }).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }));

    } else {
      res.status(400).json(errors);
    }
  });

});

// export default router;
module.exports = router;
return router;