const router = require('express').Router()
const {multerStorage, multerMemory} = require('../../middlewares/files-handling/multer')
const AuthController = require('./auth.controller')

const controller = new AuthController()

router.post('/auth/register/multer', multerStorage.single('avatar'), controller.multer)
router.post('/auth/register/cloudinary', multerMemory.single('avatar'), controller.cloudinary)
router.post('/auth/register/base64', controller.baseEnamEmpat)

module.exports = router