import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [image,setImage] = useState("")
  const [mesg,setMsg] = useState("")

  const navigate = useNavigate()

    const createBlog =   (e) => {
      e.preventDefault()

      const formdata = new FormData()

      formdata.append("title",title)
      formdata.append("content",content)
      formdata.append("image",image)

      axios.post("http://localhost:3006/createblog",formdata)
      .then(user => {
        
        console.log(user)
        if(user.data.sucess){
          setMsg(user.data.msg)
        }
      }
      
      )
      .catch(err => console.log(err))

     for(let [key,value] of formdata.entries()){
      console.log(`${key}:`,value)
     }

 
    }

    const actionOnBlog = () => {
      navigate("/actionBlog")
    }

  return (
    <div>
      <div className='w-screen h-screen flex items-center flex-col justify-center'>
     <div className='w-[400px] min-h-[300px] bg-[#0c0c0c] p-2 flex flex-col justify-between'>
  <h1 className='font-bold text-2xl'>Create Blog</h1>
  <form>
  <div className='w-full border-2 border-gray-900 outline-none mt-4'>
   <input type="text" placeholder='Title' className='border-none outline-none bg-transparent h-[40px] p-2'
    name="title" required onChange={(e)=>setTitle(e.target.value)}
 />
  </div>
  <div className='w-full border-2 border-gray-900 outline-none mt-4'>
   <input type="text" placeholder='Content' className='border-none outline-none bg-transparent h-[40px] p-2'
    name="content" required onChange={(e)=>setContent(e.target.value)}
     />
  </div>
  <div className='w-full border-2 border-gray-900 outline-none mt-4'>
   <input type="file" name="file" id="" onChange={(e)=>setImage(e.target.files[0])} />
  </div>
 <div>{mesg}</div>
  <button className='flex items-center justify-center w-full rounded-lg bg-blue-500 text-white h-[40px] mt-4' onClick={createBlog}>createBlog</button>
  <button className='flex items-center justify-center w-full rounded-lg bg-blue-500 text-white h-[40px] mt-4' onClick={actionOnBlog}>ActionOnBlog</button>
  </form>
  
     </div>
    </div>
    </div>
  )
}

export default CreateBlog
