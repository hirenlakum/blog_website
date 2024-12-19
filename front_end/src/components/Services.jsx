import Footer from "./Footer"
import Navbar from "./Navbar"

const Services = () => {
    return(
        <>
        <Navbar/>
         <section class="bg-white py-16">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Services</h2>
      <p class="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        We offer a range of services to help you achieve your goals. Whether you're looking for expert advice, creative design, or content development, we have a solution for you. Explore our offerings below.
      </p>
    </div>

    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
       
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <i class="fas fa-pencil-alt text-2xl">
              <img src="" alt="" />
                </i> 
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Content Writing</h3>
          <p class="text-gray-600">
            We create high-quality, engaging content tailored to your audience. Our writing services cover blogs, articles, and web copy that resonate with readers.
          </p>
        </div>

       
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <i class="fas fa-chart-line text-2xl"></i>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
          <p class="text-gray-600">
            Our SEO experts help you increase your website’s visibility by optimizing content, improving keyword rankings, and implementing effective SEO strategies.
          </p>
        </div>

      
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <i class="fas fa-cogs text-2xl"></i> 
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Website Design</h3>
          <p class="text-gray-600">
            We offer stunning web design services that focus on user experience and design aesthetics, ensuring your website is functional, beautiful, and easy to navigate.
          </p>
        </div>

        
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <i class="fas fa-bullhorn text-2xl"></i> 
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Social Media Marketing</h3>
          <p class="text-gray-600">
            Our team will help you increase brand awareness and drive engagement through targeted social media campaigns across various platforms.
          </p>
        </div>

      
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <i class="fas fa-video text-2xl">
               
                </i> 
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Video Production</h3>
          <p class="text-gray-600">
            We create engaging and professional video content for your brand, from concept to production, to help you stand out in the digital world.
          </p>
        </div>

      
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <i class="fas fa-mobile-alt text-2xl"></i> 
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
          <p class="text-gray-600">
            We design and develop mobile apps for iOS and Android, offering seamless user experiences and functionality that meet your business needs.
          </p>
        </div>

      </div>
    </div>
  </section>
  <Footer/>
        </>
    )
}

export default Services