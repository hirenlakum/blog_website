const express = require('express')

const multer = require('multer')
const router = express.Router()

const blogModel = require('../models/blogModel')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+ "-"+file.originalname)
    },
})

const upload = multer({storage})



router.post("/createblog",upload.single("image"),async(req,res)=>{
 
    
        
        const {title,content} = req.body
        const imageUrl = `${req.file.filename}`

       await  blogModel.create({
            title:title,
            content:content,
            image:imageUrl

        }).then(user => {
            res.json({
                sucess:true,
                msg:"blog created!!!"
            })
        }).catch(err => res.json(err))

    

})



router.get("/getBlogData",async (req,res)=>{
   await blogModel.find({})
   .then(user => res.json(user))
   .catch(err => res.json(err))
})

router.get("/blogDetail/:id", async (req,res)=>{
    const {id} = req.params
    
    console.log("receive id:",id)
   await blogModel.findById(id)
   .then(user => res.json(user))
   .catch(err => console.log(err))

})

router.delete("/blogDelete/:id", async (req,res)=>{
    const {id} = req.params

    await blogModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

module.exports=router