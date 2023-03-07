const fs = require('fs')
const cloudinary = require('../../middlewares/files-handling/cloudinary')

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

    cloudinary(req, res, next) {
        cloudinary.uploader.upload_stream({resource_type: 'raw', format: 'jpg' }, (err, resp) => {
            if (err) {
                return res.status(500).json({message: 'error'})
            } else {
                console.log(resp)

                const user = {
                    email: req.body.email,
                    password: hashedPassword,
                    avatar: resp.secure_url // https://res.cloudinary.com/saefullohbinar/raw/upload/v1678199657/rwozmidwdbmunwvyvwzs.jpg
                }

                return res.status(200).json({
                    message: 'success',
                })
            }
        }).end(req.file.buffer)
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