'use strict';
var express = require('express');
var router = express.Router();

// Add the Service Model
const Service = require('../models/Service');

// Add the Users Model
const User = require('../models/Users');

// Add the Subscription Model
const Subscription = require('../models/Subscriptions');

// Add the Computer Order Model
const PCOrder = require('../models/ComputerOrder');

// Add function or diffrent operators
const { Op } = require("sequelize");

/* GET home page. */
router.get('/add', function (req, res) {
    res.render('new-service');
});

router.get('/all', (req, res) => {
    Service.findAll().then(Service => res.send(Service)).catch(err => console.log(err));
 })

router.post('/add', function (req, res) {
    const { ServiceType, Price } = req.body;

    const newService = new Service({
        ServiceType,
        Price
    })
    //console.log(newService)
    newService.save().then(Service => {
        res.redirect('/services/all');
    }).catch(err => console.log(err));
});

router.get('/subscription', (req, res) => {
    User.findAll({
        where: {
            isLoggedIn: 1
        }
    }).then(Users => {
        //console.log(Users);
        let tempUser = Users[0];
        let name = tempUser.fname + tempUser.lname;
        let username = tempUser.username;
        res.render('new-subscription', { name: name, username: username })
    }).catch(err => console.log(err));

});

router.post('/subscription', (req, res) => {
    User.findAll({
        where: {
            isLoggedIn: 1
        }
    }).then(Users => {
        let tempUser = Users[0];
        let UserID = tempUser.Userid;
        let isPaid = false;
        const newSubscription = new Subscription({
            UserID,
            isPaid
        })
        newSubscription.save().then(Subscriptions => {
            res.redirect('/');
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
})

router.get('/subscription/all', (req, res) => {
    Subscription.findAll().then(Subscriptions => {
        res.send(Subscriptions);
    }).catch(err => console.log(err));

});

router.get('/computer', (req, res) => {
    res.render('add-computer');
})

router.post('/computer', (req, res) => {
    const { Type, Memory, Processor, GraphicsCard, Storage, OS, Notes } = req.body;
    //console.log(Type);
    User.findAll({
        where: {
            isLoggedIn: 1
        }
    }).then(Users => {
        //console.log(Users);
        let tempUser = Users[0];
        let UserID = tempUser.Userid;
        const newCommputers = new PCOrder({
            Type,
            Memory,
            Processor,
            GraphicsCard,
            Storage,
            OS,
            Notes,
            UserID
        })
        newCommputers.save().then(PCOrder => {
            res.redirect('/');
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
})

router.get('/computer/all', (req, res) => {
    PCOrder.findAll().then(PCOrders => res.send(PCOrders)).catch(err => console.log(err));
})

module.exports = router;
