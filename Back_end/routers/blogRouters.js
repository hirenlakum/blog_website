const express = require('express')

const multer = require('multer')
const router = express.Router()

const blogModel = require('../models/blogModel')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})



router.post("/createblog",upload.single('image'),async(req,res)=>{
 
    
        if(!req.file){
            return res.json('file not uploaded')
        }
       

     const {title,content} = req.body
      const imageUrl=`${req.file.filename}`

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

router.get("/getEachBlog/:id",async (req,res)=>{
    const {id} = req.params

    await blogModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.put("/updateBlog/:id",upload.single("image"), async (req,res)=>{
    const {id} = req.params

    const {title,content} = req.body

    console.log(title,content)

    const imageUrl =`${req.file.filename}`
    console.log(imageUrl)

   

    await blogModel.findByIdAndUpdate({_id:id},{title:req.body.title,content:req.body.content,image:imageUrl})
    .then(user => res.json(user))
    .catch(err => res.json(err))


})

module.exports=router