const User = require('./User')
const jwt = require('../../utils/jwt')
const { cookie } = require('../../config/config')
const { model } = require('mongoose')

module.exports = {
    get: {
        login(req, res, next){
            res.render('users/login.hbs')
        },
        register(req, res, next){
            res.render('users/register.hbs')
        }
    },

    post: {
        login(req, res, next){
            const { email, password } = req.body
            //console.log(email, password)
            User.findOne({ email }).then((user) => { 
                console.log(user)
            }).catch((error) => {
                console.log(error)
            })

            res.redirect('/home')
        },
        register(req, res, next){
            const { email, password, rePassword} = req.body
            User.create({ email, password }).then((createdUser) => {
                //console.log(createdUser)
                res.redirect('/user/login')
            })
        }

    }
}