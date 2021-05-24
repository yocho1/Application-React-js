const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const sendMail = require('../controllers/sendMail')

router.post('/contact', userCtrl.contact)

router.get('/getInfos', userCtrl.getUsersAllInfos)

router.post('/mail/:email', sendMail)

router.post('/search', userCtrl.findContact)

module.exports = router
