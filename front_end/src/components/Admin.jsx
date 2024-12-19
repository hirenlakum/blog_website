import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const navigate = useNavigate()

    const [admin,setAdmin] = useState("")
    const [error,setError] = useState("")

    const login = () => {
      if(admin==='hiren2912'){
      navigate("/createblog")
      }
      else{
        setError("Password is incorrect")
      }
 
    }
  return (
    <div>
       <div className='w-screen h-screen flex items-center flex-col justify-center'>
      <div className='w-[400px] min-h-[300px] bg-[#0c0c0c] p-2 flex flex-col justify-between'>
   <h1 className='font-bold text-2xl'>Admin Login</h1>
   <div className='w-full border-2 border-gray-900 outline-none mt-4'>
    <input type="password" placeholder='Enter Admin Password' className='border-none outline-none bg-transparent h-[40px] p-2'
     name="password" required
     onChange={(e)=>setAdmin(e.target.value)} />
   </div>
   
  
   <p className='text-red-600'>{error}</p>
   <button className='flex items-center justify-center w-full rounded-lg bg-blue-500 text-white h-[40px] mt-4' onClick={login}>Login</button>
      </div>
     </div>
    </div>
  )
}

export default Admin
