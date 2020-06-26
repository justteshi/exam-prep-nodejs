const router = require('../routes/index')

module.exports = (app) => {
    app.use('/home', router.home)

    app.use('/user', router.users)

    app.use('/tripp', router .tripps)
}