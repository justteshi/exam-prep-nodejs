
const User = require('../users/User')
const { validationResult } = require('express-validator')
const Tripp = require('./Tripp')

module.exports = {
    get:{
        sharedTripps(req, res, next){
            res.render('tripp/shared-tripps.hbs', {
                isLoggedIn: req.user !== undefined,
                userMail: req.user ? req.user.email : ''
            })
        },

        offerTripp(req, res, next){
            res.render('tripp/offer-tripp.hbs', {
                isLoggedIn: req.user !== undefined,
                userMail: req.user ? req.user.email : ''
            })
        }
    },
    post:{

    }
}