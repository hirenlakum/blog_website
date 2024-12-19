import Blog from "./Blog"
import Footer from "./Footer"
import Navbar from "./Navbar"
import axios from "axios"
import { Children, useState } from "react"
import { useEffect } from "react"

const Blogs = () => {

const [getData,setGetData] = useState([])

useEffect(()=>{

    axios.get("http://localhost:3006/getBlogData")
    .then(user =>{
        
        setGetData(user.data)
    })
    .catch(err => console.log(err))
},[])




    return(

        <div>
           
       <div className="blogs flex flex-col items-center sm:px-[150px] mt-4 mb-5 ">
        <h3 className="text-2xl">Latest Blogs</h3>
        <div className="blogsCon flex flex-wrap  items-center justify-center gap-12 mt-4 ">
       
    {getData.map(item=>

        <Blog item={item} key={item.id} />
    )}
        </div>
       </div>
      
        </div>
    )
}

export default Blogs