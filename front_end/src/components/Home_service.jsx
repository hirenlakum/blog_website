import React from 'react'

const Home_service = () => {
  return (
    <div>
      <section class="bg-black text-white py-16 px-4">
  <div class="max-w-screen-xl mx-auto text-center">
    <h2 class="text-4xl font-bold mb-8">Our Services</h2>
    <p class="text-lg mb-12">We provide top-notch services to help you create, manage, and grow your online presence with ease. Whether you're looking to build a blog, optimize your website, or dive into the world of web development, we're here to assist you every step of the way.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
   
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold mb-4">Web Development</h3>
        <p class="text-gray-300 mb-4">We specialize in building responsive, high-performance websites tailored to your needs. From personal blogs to complex applications, we deliver efficient and visually appealing solutions.</p>
        <a href="#web-development" class="text-blue-500 hover:underline">Learn More</a>
      </div>
      
     
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold mb-4">SEO Optimization</h3>
        <p class="text-gray-300 mb-4">Our SEO experts will help you rank higher on search engines, drive traffic, and increase your site's visibility to ensure your content reaches a larger audience.</p>
        <a href="#seo-optimization" class="text-blue-500 hover:underline">Learn More</a>
      </div>
      
  
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold mb-4">Content Strategy</h3>
        <p class="text-gray-300 mb-4">We offer content strategy services to help you craft engaging, informative, and SEO-friendly content that keeps your audience coming back for more.</p>
        <a href="#content-strategy" class="text-blue-500 hover:underline">Learn More</a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Home_service
