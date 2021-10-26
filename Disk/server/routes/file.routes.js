const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const FileController = require('../controllers/fileController')

router.post('', authMiddleware, FileController.createDir)
router.get('', authMiddleware, FileController.getFile)






module.exports = router 