import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div>
<div className="flex items-center justify-between h-[100px] px-[50px] bg-[#0c0c0c]">
 <div className="text-white text-[2vmax] pr-4">
    Blog Website
 </div>
 <div className="flex gap-2 text-[1.5vmax]">

<Link className="navlink active" to="/home">Home</Link>
<Link className="navlink active" to="/aboutus">AboutUs</Link>

<Link className="navlink active" to="/services">Service</Link>
<Link className="navlink active" to="/contactus">ContactUs</Link>
 </div>
</div>
        </div>
    )
}


export default Navbar