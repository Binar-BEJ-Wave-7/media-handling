const multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const filename =  `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

const upload = multer({ storage })

module.exports = upload

