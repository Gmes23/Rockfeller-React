// const express = require('express');
// const bcrypt = require('bcrypt');
// const commonValidations = require('./shared/validation/signupvalidation');
// const isEmpty = require('lodash/isEmpty');
// const User = require('../../database/model/user');

// let router = express.Router();

// function validateInput(data, otherValidations) {
//     let { errors } = otherValidations(data);

//     return User.query({
//         where: { email: data.email },
//         orWhere: { screenname: data.screenname }
//     }).fetch().then( user => {
//         if ( user.get('screenname') === data.screenname) {
//             errors.screenname = 'This username is already taken';
//         }
//         if ( user.get('email') === data.email) {
//             errors.email = 'There email has already been used';
//         }

//         return {
//             errors,
//             isValid: isEmpty(errors)
//         }
//     })
// }

// router.get('/:identifier', (req, res) => {
//     User.query({
//         where: { email: req.params.identifier },
//         ofWhere: { screenname: req.params.identifier }
//     }).fetch().then(user => {
//         res.json({ users });
//     });
// });

// router.post('/', (req, res) => {
//     validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
//         if(isValid) {
//             const { screenname, email, password } = req.body;
//             const password_digest = bcrypt.hashSync(password, 10);

//             User.forge({
//                 screenname, email, password_digest
//             }, { hasTimestamps: true }).save()
//             .then(user => res.json({ success: true }))
//             .catch(err => res.status(500).json({ error: err }));

//         } else {
//             res.status(400).json(errors);
//         }
//     });
// });


// module.exports = router;
// return router;



const express = require('express');
const bcrypt = require('bcrypt');
const validateInput = require('./shared/validation/signupvalidation');
const isEmpty = require('lodash/isEmpty');
const User = require('../../database/model/user');

let router = express.Router();

// function validateInput(data, otherValidations) {
//     let { errors } = otherValidations(data);

//     return User.query({
//         where: { email: data.email },
//         orWhere: { screenname: data.screenname }
//     }).fetch().then( user => {
//         if ( user.get('screenname') === data.screenname) {
//             errors.screenname = 'This username is already taken';
//         }
//         if ( user.get('email') === data.email) {
//             errors.email = 'There email has already been used';
//         }

//         return {
//             errors,
//             isValid: isEmpty(errors)
//         }
//     })
// }

router.get('/:identifier', (req, res) => {
    User.query({
        select: [ 'screenname', 'email' ],
        where: { email: req.params.identifier },
        ofWhere: { screenname: req.params.identifier }
    }).fetch().then(user => {
        res.json({ users });
    });
});

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if(isValid) {
        const { screenname, password, email } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);

        User.forge({
            screenname, email, password_digest
        }, { hasTimestamps: true }).save()
            .then(user => res.json({ success: true }))
            .catch(err => res.status(500).json({ error: err }))
    } else {
        res.status(400).json(errors);
    }
});


module.exports = router;
return router;