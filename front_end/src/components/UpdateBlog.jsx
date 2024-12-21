import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const UpdateBlog = () => {

  const navigate = useNavigate()

    const {id} = useParams()
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [image,setImage] = useState("")

    const formdata = new FormData()

    formdata.append("title",title)
    formdata.append("content",content)
    formdata.append("image",image)

    useEffect(()=>{
  axios.get("http://localhost:3006/getEachBlog/"+id)
  .then(user => {
    setTitle(user.data.title)
    setContent(user.data.content)
    setImage(user.data.image)
  })
  .catch(err => console.log(err))
    },[])

    const Update = (e) => {
      e.preventDefault()
      axios.put("http://localhost:3006/updateBlog/"+id,formdata)
      .then(user => {
        console.log(user)
        navigate("/blogaction")
      
      })
      .catch(err => console.log(err))

      
     for(let [key,value] of formdata.entries()){
      console.log(`${key}:`,value)
     }
    }
  return (
    <div className='w-screen h-screen flex items-center justify-center  bg-black'>
      <div className='w-[40%] bg-blue-500 h-[50%] p-2 '>
        <h1 className='text-center'>Update Blog</h1>
        <form action="" method='post' encType='multipart-formdata' >
            Title<input type="text"  value={title}  className='w-full mt-3 mb-2 text-black' onChange={(e)=>setTitle(e.target.value)} /><br />
            Content<input type="text" value={content} className='w-full mt-3 break-words whitespace-pre-wrap text-black' onChange={(e)=>setContent(e.target.value)}  /><br />
            <div className='w-[30%] h-[90px]  rounded-sm mt-4'>
               <img src={`http://localhost:3006/uploads/${image}` }  className="w-full h-full"/>
            </div>
            <div>
                <input type="file" name="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className='w-[20%] h-[40px] mx-auto flex justify-center items-center  bg-green-600 mt-14 '>
                <button className='flex items-center justify-center' onClick={Update}>Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateBlog
