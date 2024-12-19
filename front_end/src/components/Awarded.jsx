import React from 'react'

const Awarded = () => {
  return (
    <div>
      <h1 className='text-center text-[40px]'>Our Achievements</h1>
      <main class="container mx-auto mt-12 px-4">
       
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-yellow-400">Best Blog of the Year</h2>
                <p class="mt-2 text-lg">Awarded for excellence in content creation and community engagement.</p>
                <img src="images/web_development.jpg" alt="Award Image" class="mt-4 h-[60%] rounded-lg shadow-md"/>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-yellow-400">Top Influencer in Tech</h2>
                <p class="mt-2 text-lg">Recognized for innovation and leadership in the technology blogging space.</p>
                <img src="images/elon_musk.jpeg" alt="Award Image" class="mt-4 h-[60%] rounded-lg shadow-md"/>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-yellow-400">Best Content Strategy</h2>
                <p class="mt-2 text-lg">Awarded for crafting engaging and sustainable content strategies.</p>
                <img src="images/content_strategy.webp" alt="Award Image" class="mt-4 rounded-lg shadow-md"/>
            </div>
        </section>

      
        <section class="mt-16 text-center">
            <h2 class="text-3xl font-semibold text-yellow-400">What Our Readers Say</h2>
            <div class="mt-8 space-y-8">
                <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <p class="text-lg italic">"This blog has been a game-changer for my tech knowledge. The content is always top-notch!"</p>
                    <p class="mt-4 font-bold">Hardik, Tech Enthusiast</p>
                </div>

                <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <p class="text-lg italic">"The articles are incredibly insightful. I've learned so much in a short time!"</p>
                    <p class="mt-4 font-bold">Rahul, Startup Founder</p>
                </div>
            </div>
        </section>

      
        <section class="mt-16 bg-gray-900 py-8">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold text-yellow-400">Join Our Community</h2>
                <p class="mt-4 text-lg">Be part of the conversation. Subscribe to our newsletter for exclusive content!</p>
                <a href="subscribe.html" class="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">Subscribe Now</a>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Awarded
