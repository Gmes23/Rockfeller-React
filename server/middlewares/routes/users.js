const express = require('express');
const bcrypt = require('bcrypt');
const UserDB = require('../../model');
const commonValidations = require('./shared/validation/signupvalidation');


let router = express.Router();

function validateInput(data)


router.post('/', (req, res) => {
    // we validate correct inputs in the sign up form, passwords match and
    // a valid email

    const { errors, isValid } = validateInput(req.body);

    // if form is Valid we send it to our mongo database
    if (isValid){
        const password_digest = bcrypt.hashSync(req.body.password, 10);
    
        var newUser = new UserDB({ 
            screenname : req.body.screenname,
            email: req.body.email,
            password: password_digest 
        }) 

        newUser.save(function(err, doc){ 
            if (err) { 
                console.log(err);
            } else {
                res.send(doc);
            }
        });

    } else {
        res.status(400).json(errors);
    }
 
});


module.exports = router;
return router;