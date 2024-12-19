import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'
import axios from "axios"

const Signup = () => {

  const [error,setError] = useState("")

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const signup = (e) => {
    e.preventDefault()
    
    console.log(name,email,password)

    axios.post("http://localhost:3006/createuser",{name,email,password})
    .then(user =>  {console.log(user)

      if(user.data.success){
        setError(user.data.msg)
      }
      else{
        setError(user.data.msg)
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
    <div className='w-screen h-screen flex items-center flex-col justify-center'>
     <div className='w-[400px] min-h-[300px] bg-[#0c0c0c] p-2 flex flex-col justify-between'>
  <h1 className='font-bold text-2xl'>SignUp</h1>
  <form>
  <div className='w-full border-2 border-gray-900 outline-none mt-4'>
   <input type="text" placeholder='userName' className='border-none outline-none bg-transparent h-[40px] p-2'
    name="userName" required
    onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className='w-full border-2 border-gray-900 outline-none mt-4'>
   <input type="text" placeholder='Email' className='border-none outline-none bg-transparent h-[40px] p-2'
    name="email" required
    onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className='w-full border-2 border-gray-900 outline-none mt-4'>
   <input type="text" placeholder='Password' className='border-none outline-none bg-transparent h-[40px] p-2'
    name="password" required
    onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <p className='mt-2 text-[15px] text-gray-700'>Already Have an Account!<Link className='text-blue-500' to="/">Sign In</Link></p>
  <p className='text-red-700'>{error}</p>
  <button className='flex items-center justify-center w-full rounded-lg bg-blue-500 text-white h-[40px] mt-4' onClick={signup}>SignUp</button>
  </form>
     </div>
    </div>
   </div>
  )
}

export default Signup
