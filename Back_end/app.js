const express = require('express')
const app = express()
const path = require('path')
const connection = require('./dbConnection')
const userModel = require('./models/userModels')
const blogModel = require('./models/blogModel')
const userRouter = require('./routers/userRouters')
const blogRouter = require('./routers/blogRouters')
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use(userRouter)
app.use(blogRouter)

app.use("/",(req,res)=>{
    res.send("BackEnd Wook Successfully")
})



const port = 3006

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})