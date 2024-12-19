import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"


const ActionBlog = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const [data,setData] = useState([])

  useEffect(()=>{
axios.get("http://localhost:3006/getUser")
.then(user => {
  
  setData(user.data)
})
.catch(err => console.log(err))

  },[data])


  const handleDelete = (id) => {
 axios.delete("http://localhost:3006/deleteUser/"+id)
 .then(user =>
  { console.log(user)

    alert("user deleted")
  }

)
 .catch(err => console.log(err))
  }
  
  return (
    <div>
      <div class="font-sans overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100 whitespace-nowrap">
          <tr>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
            userName
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Email
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
             Password
            </th>
           
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Actions
            </th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap">
          
          

         {
          data.map(user =>
            <tr class="hover:bg-gray-50">
            <td class="p-4 text-[15px] text-gray-800">
              {user.name}
            </td>
            <td class="p-4 text-[15px] text-gray-800">
             {user.email}
            </td>
            <td class="p-4 text-[15px] text-gray-800">
              {user.password}
            </td>
            
            <td class="p-4">
             
              <button class="mr-4" title="Delete" onClick={()=>handleDelete(user._id)} >
                <svg xmlns="http://www.w3.org/2000/svg"  class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000" />
                  <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000" />
                </svg>
              </button>
            </td>
          </tr>

          )
         }

         
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ActionBlog
