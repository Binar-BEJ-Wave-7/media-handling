const fs = require('fs')

class AuthController {
    multer(req, res, next) {
        // cek email already exist

        // hash password
        const hashedPassword = 'xxxxxx'

        // create user
        const user = {
            email: req.body.email,
            password: hashedPassword,
            avatar: req.file.path // uploads/1678195130721-avatar.png
        }

        // send response
        return res.status(200).json({
            message: 'success',
        })
    }

    baseEnamEmpat(req, res, next) {
        const fileAsBuffer = Buffer.from(req.body.avatar, 'base64')
        const path = `uploads/avatar-${Date.now()}.jpg`
        fs.writeFileSync(path, fileAsBuffer) // upload buffer to file

        // cek email already exist

        // hash password
        const hashedPassword = 'xxxxxx'

        // create user
        const user = {
            email: req.body.email,
            password: hashedPassword,
            avatar: path // uploads/1678195130721-avatar.png
        }

        // send response
        return res.status(200).json({
            message: 'success',
        })
    }
}

module.exports = AuthController