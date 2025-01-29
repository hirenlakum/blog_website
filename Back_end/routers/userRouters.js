const express = require('express')
const {body,validationResult}=require('express-validator')
const bcrypt = require('bcrypt')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET_KEY ="HIREN"

const router = express.Router()

const userModel = require('../models/userModels')

router.post("/createuser",
    
   


    async (req,res)=>{
  
     

    const {name,email,password} = req.body

    let emailCon =await userModel.findOne({email:email})
    

    if(emailCon){
      return res.json({
        success:false,
        msg:"email already exists"
      })
    }
    else{
      const hashpassword = await bcryptjs.hashSync(password,10)

      await userModel.create({
        name:name,
        email:email,
        password:hashpassword

      })
      .then(user =>{ res.json({
        success:true,
        msg:"sign up!!"
      })

         
      })
      .catch(err => res.json(err))
    }

      

        

})

router.post("/login",async (req,res)=>{
  let {email,password} = req.body

 const user= await userModel.findOne({email:email})

 if(user){
  const passwordResult=await bcryptjs.compareSync(password,user.password)

  if(passwordResult){

   const token= jwt.sign({

      id:user._id,
      email:user.email

    },SECRET_KEY)

    return res.json({
      success:true,
      msg:"login"
    })
  }
  else{
    return res.json({
      success:false,
      msg:"email or password is inccorrect"
    })
  }
 }
 else{
  return res.json({
    success:false,
    msg:"email or password is inccorrect"
  })
 }
})

router.get("/getUser",async (req,res) =>{
  await userModel.find({})
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

router.delete("/deleteUser/:id",async (req,res)=>{
  const {id} = req.params
  await userModel.findByIdAndDelete({_id:id})
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

module.exports=router