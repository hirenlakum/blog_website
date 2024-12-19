import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { use } from 'react'


const SignIn = () => {

  const [error,setError] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()

axios.post("http://localhost:3006/login",{email,password})
.then(user => {
  console.log(user)
  if(user.data.success){
    navigate("/home")
  }
  else{
    setError(user.data.msg)
  }
  
})
.catch(err => console.log(err))
    
    console.log(email,password)
    
  } 

  

  
  return (
    <div>
     <div className='w-screen h-screen flex items-center flex-col justify-center'>
      <div className='w-[400px] min-h-[300px] bg-[#0c0c0c] p-2 flex flex-col justify-between'>
   <h1 className='font-bold text-2xl'>SignIn</h1>
   <div className='w-full border-2 border-gray-900 outline-none mt-4'>
    <input type="text" placeholder='Email' className='border-none outline-none bg-transparent h-[40px] p-2'
     name="email" required
     onChange={(e)=>setEmail(e.target.value)} />
   </div>
   <div className='w-full border-2 border-gray-900 outline-none mt-4'>
    <input type="text" placeholder='Password' className='border-none outline-none bg-transparent h-[40px] p-2'
     name="password" required
     onChange={(e)=>setPassword(e.target.value)} />
   </div>
   <p className='mt-2 text-[15px] text-gray-700'>Dont't have an account!<Link className='text-blue-500' to="/signup" >Sign Up</Link></p>
   <p className='text-red-600'>{error}</p>
   <button className='flex items-center justify-center w-full rounded-lg bg-blue-500 text-white h-[40px] mt-4' onClick={login}>Login</button>
      </div>
     </div>
    </div>
  )
}

export default SignIn
