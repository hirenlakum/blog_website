const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:[3,"username must have atleast 3 characters"]
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlength:[4,"password must have atleast 4 number"]
    },
})

const userModel= mongoose.model("user",userSchema)

module.exports=userModel