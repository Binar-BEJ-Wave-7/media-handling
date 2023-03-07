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

const multerStorage = multer({ storage })
const multerMemory = multer({ storage: multer.memoryStorage() })

module.exports = {
    multerStorage,
    multerMemory
}

