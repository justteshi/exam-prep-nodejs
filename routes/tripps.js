const router = require('express').Router()
const handler = require('../handlers/tripps')
const isAuth = require('../utils/isAuth')
const { playValidator } = require('../utils/validator')

router.get('/shared-tripps', isAuth(), handler.get.sharedTripps)
router.get('/offer-tripp', isAuth(), handler.get.offerTripp)


module.exports = router