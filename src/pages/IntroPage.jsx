import React from 'react'
import Banner from "../assets/BannerImage.png"

import Logo from "../assets/JoinEasy_School_Logo.png"
import { Link } from 'react-router-dom'

const IntroPage = () => {
  return (
    <>
    <nav className='w-full h-20 bg-amber-300 flex justify-between sticky top-0'>
        <img src={Logo} alt="LOGO"  />

        <div>
            <ul className='flex gap-10 text-2xl text-amber-50 font-semibold h-full p-5'>
                <li className='cursor-pointer hover:underline hover:underline-offset-8'><a href="#about">About</a></li>
                <li className='cursor-pointer hover:underline hover:underline-offset-8'><a href="#contact">Contact</a></li>
                <li className='cursor-pointer hover:underline hover:underline-offset-8'><Link to="/login">Login</Link></li>
       
            </ul>
        </div>


    </nav>

    <div className='w-full'>
        <img src={Banner} alt="Banner" className='w-full h-160' />
    </div>

{/* About Section */}
      <section
        id="about"
        className='w-full bg-amber-50 px-5 py-20 md:px-16 lg:px-24'
      >

        <div className='max-w-6xl mx-auto text-center'>

          <h1 className='text-3xl md:text-4xl font-bold text-amber-600 mb-6'>
            About JoinEasy School
          </h1>

          <h2 className='text-xl md:text-2xl font-semibold text-gray-800 mb-5'>
            Making Education Simple and Accessible
          </h2>

          <p className='text-base md:text-lg text-gray-600 leading-8 text-justify md:text-center'>
            Welcome to JoinEasy School! Our platform is designed to make
            the educational experience easier and more accessible for
            students and teachers. We aim to provide a simple and
            user-friendly environment where students can access their
            academic information and teachers can efficiently manage
            their educational activities.
          </p>

          {/* Features */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>

            <div className='bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition'>
              <h3 className='text-xl font-bold text-amber-600 mb-3'>
                Student Friendly
              </h3>
              <p className='text-gray-600'>
                A simple platform that helps students access their
                academic information conveniently.
              </p>
            </div>

            <div className='bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition'>
              <h3 className='text-xl font-bold text-amber-600 mb-3'>
                Teacher Support
              </h3>
              <p className='text-gray-600'>
                Useful tools to help teachers manage student-related
                educational activities.
              </p>
            </div>

            <div className='bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition'>
              <h3 className='text-xl font-bold text-amber-600 mb-3'>
                Easy Access
              </h3>
              <p className='text-gray-600'>
                A user-friendly experience designed for convenient
                access across different devices.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className='w-full bg-amber-300 px-5 py-16 md:px-16 lg:px-24'
      >

        <div className='max-w-5xl mx-auto text-center'>

          <h1 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Contact Us
          </h1>

          <p className='text-base md:text-lg text-amber-950 leading-8 mb-10'>
            Have questions or need assistance? We are here to help.
            Feel free to get in touch with us.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div className='bg-amber-50 rounded-xl p-8 shadow-md'>
              <h2 className='text-xl font-bold text-amber-700 mb-3'>
                Our Support
              </h2>
              <p className='text-gray-700'>
                Get assistance with student and teacher portal access
                and other platform-related queries.
              </p>
            </div>

            <div className='bg-amber-50 rounded-xl p-8 shadow-md'>
              <h2 className='text-xl font-bold text-amber-700 mb-3'>
                Our Commitment
              </h2>
              <p className='text-gray-700'>
                We strive to provide a smooth and convenient
                educational experience for everyone.
              </p>
            </div>

          </div>

        </div>

      </section>



    </>
  )
}

export default IntroPage
