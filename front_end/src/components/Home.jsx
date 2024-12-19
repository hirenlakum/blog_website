import Navbar from "./Navbar"
import Hero from "./Hero"
import Blogs from "./Blogs"
import Footer from "./Footer"
import Home_service from "./Home_service"
import Awarded from "./Awarded"

const Home = () => {
    return(
        <div>
  <Navbar/>
  <Hero/>
  <Blogs/>
  <Home_service/>
  <Awarded/>
  <Footer/>
        </div>
    )
}

export default Home