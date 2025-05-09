import React from 'react'

function Hero() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
    <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6  lg:px-8 ">
      <div className="mx-auto max-w-prose text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          All Your Digital Products
          <strong className="text-primary"> Is One CLick Away </strong>
          
        </h1>
  
        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Satrt Exploring State Of The Art Assets Now !
        </p>
  
        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
          <a
            className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-teal-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
