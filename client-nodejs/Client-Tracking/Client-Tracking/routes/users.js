'use strict';
var express = require('express');
var router = express.Router();

const { Op } = require("sequelize");

// Users Model
const User = require('../models/Users');

// Password encryption methods
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/login', function (req, res) {
    res.render('login');
});

/* GET users listing. */
router.get('/register', function (req, res) {
    res.render('register');

});

router.get('/reg-error', function (req, res) {
    res.render('reg-error');

});

// The Register Submission
router.post('/register', (req, res) => {
    const { username, pass, passConfirm, email, fname, lname, address, apt, state, zip, phone, country } = req.body;
    let errors = [];
   
    if (pass.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
        res.render('reg-error')
    }
    if (errors.length > 0) {

    } else {
        User.findAll({
            where: {
                email: email
            }
        }).then(Users => {
            if (Users.length > 0) {
                errors.push({ msg: 'User already exists' })
            } else {
                var salt = bcrypt.genSaltSync(10);
                var password = bcrypt.hashSync(pass, salt);
                const newUser = new User({
                    username,
                    password,
                    email,
                    fname,
                    lname,
                    address,
                    apt,
                    state,
                    zip,
                    phone,
                    salt,
                    country
                })
                newUser.save().then(User => {
                    res.redirect('/users/login');
                }).catch(err => console.log(err));
            }
        }).catch(err => console.log(err));
    }


});

router.post('/login', (req, res) => {
    const { username, password } = req.body; 
    User.findAll({
        where: {
            [Op.or]: [
                { email: username },
                { username: username }
            ]
        }
    }).then(Users => {
        if (Users.length === 0) {
            errors.push({ msg: 'There is no user that matches those credentials' })
        } else {
            const tempUser = Users[0]
            var salt = tempUser.salt;
            var newHash = bcrypt.hashSync(password, salt);
            var oldHash = tempUser.password;
            console.log('New Hash: ' + newHash);
            console.log('Old Hash: ' + oldHash);
            if (newHash == oldHash) {
                tempUser.isLoggedIn = 1;
                console.log(tempUser);
                tempUser.save().then(User => {
                    res.redirect('/');
                }).catch(err => console.log(err));
            }
        }
        

    }).catch(err => console.log(err));
});


module.exports = router;
