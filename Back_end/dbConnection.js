const mongoose = require('mongoose')

const connection=mongoose.connect("mongodb://localhost:27017/blog").then(()=>{
    console.log("connect to the database")
})
.catch(err => console.log(err))

module.exports=connection