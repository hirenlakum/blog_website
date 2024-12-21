import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import SignIn from './components/SignIn.jsx'
import Signup from './components/Signup.jsx'
import Navbar from './components/Navbar.jsx'
import NoPage from './components/NoPage.jsx'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import Blogs from './components/Blogs.jsx'
import Footer from './components/Footer.jsx'
import DetailBlog from './components/DetailBlog.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from "./components/ContactUs.jsx"
import Services from './components/Services.jsx'
import Admin from './components/Admin.jsx'
import CreateBlog from './components/CreateBlog.jsx'
import Awarded from './components/Awarded.jsx'
import ActionBlog from './components/ActionBlog.jsx'
import BlogAction from './components/BlogAction.jsx'
import UpdateBlog from './components/UpdateBlog.jsx'


const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:
    [
      {
        index:true,element:<SignIn/>,
      },
      {
       path:"/signup",element:<Signup/>,
      },
      {
      path:"/navbar",element:<Navbar/>,
      },
      {
      path:"/nopage",element:<NoPage/>
      },
      {
  path:"/hero",element:<Hero/>
      },
      {
     path:"/home",element:<Home/>
      },
      {
      path:"/blogs",element:<Blogs/>
      },
      {
      paht:"/footer",element:<Footer/>
      },
      {
      path:"/detailBlog/:id",element:<DetailBlog/>
      },
      {
   path:"/aboutus",element:<AboutUs/>
      },
      {
    path:"/contactus",element:<ContactUs/>
      },
      {
    path:"/services",element:<Services/>
      },
      {
     path:"/admin",element:<Admin/>
      },
      {
     path:"/createblog",element:<CreateBlog/>
      },
      {
     path:"/awarded",element:<Awarded/>
      },
      {
     path:"/actionBlog",element:<ActionBlog/>
      },
      {
      path:"/blogaction",element:<BlogAction/>
      },
      {
     path:"/updateblog/:id",element:<UpdateBlog/>
      },
      
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
