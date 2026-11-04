
import React from 'react'



const MainBar = () => {
  return (
    <>
    <div className='w-full min-h-screen bg-amber-50'>

   <div className='w-full min-h-36 sm:min-h-40 bg-gray-200 p-4 sm:p-5 flex items-center justify-between shadow-2xl sticky top-0 z-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
              Welcom Back Shridhar!👋
            </h1>
        </div>

        <div className='flex flex-col lg:flex-row items-center lg:items-center p-5 sm:p-8 md:p-12 lg:p-16 xl:p-20 w-full bg-amber-100 mt-5 sm:mt-10 shadow-2xl relative'>

            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 lg:mb-0 lg:absolute lg:top-5 lg:left-1/2 lg:-translate-x-1/2'>
              Student Details
            </h1>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVvVN2X3f9JL2NZefVhaOZKQa-_5lm1S04oWy5eXKxnRrwPLJXfqQfjjO&s=10" alt="Student Image" className='w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover shrink-0' />

            <div className='text-lg sm:text-xl md:text-2xl flex flex-col gap-4 sm:gap-6 lg:gap-8 lg:pl-10 xl:pl-20 mt-6 lg:mt-10 lg:ml-10 text-center lg:text-left break-words'>
              <h1>Name : Shridhar M Kulkarni</h1>
              <h1>Class : 7th std</h1>
              <h1>Section : A</h1>
              <h1>Roll No : 55</h1>
              <h1>Student Id : JES@55</h1>

            </div>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8 p-5 sm:p-8 md:p-12 lg:p-16 xl:p-20 w-full bg-amber-200 mt-5 sm:mt-10 shadow-2xl'>

            <div className='w-full min-h-40 sm:min-h-48 bg-amber-50 cursor-pointer hover:bg-amber-500 hover:text-amber-50 hover:border-2 hover:border-amber-50 rounded-2xl shadow-lg flex items-center justify-center text-center p-5 transition-all duration-300'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl'>
                Previous Test Marks
              </h1>
            </div>

            <div className='w-full min-h-40 sm:min-h-48 bg-amber-50 cursor-pointer hover:bg-amber-500 hover:text-amber-50 hover:border-2 hover:border-amber-50 rounded-2xl shadow-lg flex items-center justify-center text-center p-5 transition-all duration-300'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl'>
                Attendence
              </h1>
            </div>

            <div className='w-full min-h-40 sm:min-h-48 bg-amber-50 cursor-pointer hover:bg-amber-500 hover:text-amber-50 hover:border-2 hover:border-amber-50 rounded-2xl shadow-lg flex items-center justify-center text-center p-5 transition-all duration-300'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl'>
                Honrs and Prizes
              </h1>
            </div>

        </div>

    </div>
    </>
  )
}

export default MainBar
