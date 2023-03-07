const router = require('express').Router()
const multer = require('../../middlewares/files-handling/multer')
const AuthController = require('./auth.controller')

const controller = new AuthController()

router.post('/auth/register/multer', multer.single('avatar'), controller.multer)
router.post('/auth/register/base64', controller.baseEnamEmpat)

module.exports = router