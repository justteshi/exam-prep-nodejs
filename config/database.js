const mongoose = require('mongoose')
const dbString = require('./config').dbUrl  //TODO Add Colllection name
const rdyString = `${'*'.repeat(10)}Database is Ready${'*'.repeat(10)}`

module.exports = () => {
    return mongoose.connect(dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, 
    console.log(rdyString)
    )
}