import Footer from "./Footer"
import Navbar from "./Navbar"

const ContactUs = () => {
    return(
        <>
        <Navbar/>
         <section class="bg-white py-16">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
      <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the form below.
      </p>
    </div>

    <div class="container mx-auto px-6">
      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <form action="#" method="POST">
       
          <div class="mb-6">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" required/>
          </div>

       
          <div class="mb-6">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="youremail@example.com" required/>
          </div>

      
          <div class="mb-6">
            <label for="message" class="block text-gray-700 font-semibold mb-2">Your Message</label>
            <textarea id="message" name="message" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your message here..." required></textarea>
          </div>

         
          <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
        </form>
      </div>
    </div>
  </section>
  <Footer/>
        </>
    )
}

export default ContactUs