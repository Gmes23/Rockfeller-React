const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../database/model/user');
const jwt = require('jsonwebtoken');
const config = require('./shared/validation/config')

let router = express.Router();

router.post('/', (req,res) => {
    const { identifier, password } = req.body;

    User.query({
        where: { screenname: identifier },
        orWhere: { email: identifier }
    }).fetch().then(user => {
        if (user) {
            if (bcrypt.compareSync(password, user.get('password_digest'))) {
                const token = jwt.sign({
                    id: user.get('id'),
                    screenname: user.get('screenname')
                }, config.jwtSecret);
                res.json({ token });
            } else {
                res.status(401).json({ errors: { form: 'Invalid Credentials' } });
            }
        } else {
            res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
    });
});

module.exports = router;
return router;