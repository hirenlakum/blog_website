import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import axios from 'axios'

const DetailBlog = () => {

    const {id} = useParams()
    console.log(id)

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [image,setImage] = useState("")


    useEffect(()=>{
  axios.get("http://localhost:3006/blogDetail/"+id)
  .then(user => {
    
    setTitle(user.data.title)
    setContent(user.data.content)
    setImage(user.data.image)
  })
  .catch(err => console.log(err))
    },[])


    
    return(
        <div>
        <Navbar/>
        <div className="px-[100px] mt-4">
       <div className="flex w-full min-h-[400px]pt-5 ">
        <div className="w-[60%] h-[full] ">
   <img src={`http://localhost:3006/uploads/${image}`} className="w-full h-[70%] rounded-lg" alt="web_development image" />
   
        </div>
        <div className="mt-4 pl-2 w-[40%] ">
            <h1 className="2xl font-bold">{title}</h1>
            <p className="text-[gray] text-[14px] my-3">Created : 14 dec 2024</p>
            <p>Description:</p>
            <p>{content}</p>
        </div>
       </div>
       
        </div>
        </div>
    )
}

export default DetailBlog