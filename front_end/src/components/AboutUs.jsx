import Footer from "./Footer"
import Navbar from "./Navbar"

const AboutUs = () => {
    return(
        <>
        <Navbar/>
        <section class="bg-white py-16">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
      <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        Welcome to My Blog! We are a passionate team of writers and creators who share our insights, experiences, and creativity on various topics. Our goal is to inspire and inform our readers through high-quality content. We hope you enjoy exploring our articles and join our community of like-minded individuals.
      </p>
    </div>
  </section>

 
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-12">Meet the Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      
        <div class="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4"/>
          <h3 class="text-xl font-semibold text-gray-800">Hardik</h3>
          <p class="text-gray-600"> Lead Writer</p>
          <p class="text-gray-600 mt-4">Hardik is the visionary behind the blog, leading our team with creativity and enthusiasm. He writes about lifestyle, tech, and personal development.</p>
        </div>
       
        <div class="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4"/>
          <h3 class="text-xl font-semibold text-gray-800">Rahul</h3>
          <p class="text-gray-600">Content Strategist</p>
          <p class="text-gray-600 mt-4">Rahul handles content strategy, ensuring all our posts are engaging and informative. She specializes in SEO and digital marketing.</p>
        </div>
      
        <div class="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4"/>
          <h3 class="text-xl font-semibold text-gray-800">Mohit</h3>
          <p class="text-gray-600">Graphic Designer</p>
          <p class="text-gray-600 mt-4">Mohit designs the visuals for the blog, creating stunning graphics and layouts that complement our content.</p>
        </div>
      </div>
    </div>
  </section>
        <Footer/>
        </>
    )
}

export default AboutUs