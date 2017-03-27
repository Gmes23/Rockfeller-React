const express = require('express');
const bcrypt = require('bcrypt');
// const UserDB = require('../../model');
const validateInput = require('./shared/validation/signupvalidation');
const isEmpty = require('lodash/isEmpty');
const User = require('../../database/model/user');

let router = express.Router();


router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if(isValid) {
        const { screenname, email, password } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);

        User.forge({
            screenname, email, password_digest
        }, { hasTimestamps: true }).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }));

    } else {
        res.status(400).json(errors);
    }

})


// router.post('/', (req, res) => {
    
//         const { errors, isValid } = validateInput(req.body);

//         if (isValid){
//             const password_digest = bcrypt.hashSync(req.body.password, 10);
        
//             var newUser = new UserDB({ 
//                 screenname : req.body.screenname,
//                 email: req.body.email,
//                 password: password_digest 
//             }) 

//             newUser.save(function(err, doc){ 
//                 if (err) { 
//                     console.log(err);
//                 } else {
//                     res.send(doc);
//                 }
//             });

//         } else {
//             res.status(400).json(errors);
//         }
// });


module.exports = router;
return router;