import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Blog = ({item}) => {

    const navigate = useNavigate()

    const handleDetailBlog = (id) => {
        console.log(id)
        navigate(`/detailBlog/${id}`)

    }
    return(
        <>
      
        <div onClick={()=>{handleDetailBlog(item._id)}}>
     <div className="blog w-[300px] h-[300px] bg-[#0c0c0c] mx-auto rounded-[10px] cursor-pointer transition duration-[.3s] transform hover:translate-y-[-5px]">
        <img src={`http://localhost:3006/uploads/${item.image}`} className="w-full h-[60%] rounded-lg mb-3" alt="web_development Image" />
        <h3>{item.title}</h3>
        <p className="text-gray-400 text-[90%] line-clamp-3">{item.content}</p>
     </div>

        </div>
       
        </>
    )
}

export default Blog