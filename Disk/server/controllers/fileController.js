const FileService = require('../services/fileService')
const User = require('../models/User')
const File = require('../models/File')

class FileController {
    async createDir(req,res){
        try{
            const {name, type, parent} = req.body
            const file = new File({name, type, parent, user: req.user.id})
            const parrentFile = await File.findOne({_id:parent})
             if(!parrentFile){
                 file.path = name
                 await FileService.createDir(file)
             } else{
                 file.path = `${parrentFile.path}\\${file.name}`
                 await FileService.createDir(file)
                 parrentFile.childs.push(file._id)
                 await parrentFile.save()

             }
            await file.save()
            return res.json(file)
        }catch(e){
            console.log(e)
            return res.status(400).json(e)
        }
    }


    async getFile(req, res ){
        try{
            const files = await File.find({user: req.user.id, parent: req.query.parent})
            return res.json(files)

        }catch(e){
            console.log(e)
            return res.status(500).json({message:"Can not get files"})
        }
    }
}





module.exports = new FileController()