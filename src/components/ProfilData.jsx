import React from 'react'




const ProfilData = ({user}) => {



  return (
    <>
    
    <div className='flex flex-col lg:flex-row items-center lg:items-center p-5 sm:p-8 md:p-12 lg:p-16 xl:p-20 w-full bg-amber-100 mt-5 sm:mt-10 shadow-2xl relative'>

            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 lg:mb-0 lg:absolute lg:top-5 lg:left-1/2 lg:-translate-x-1/2'>
              {user?.role} Details
            </h1>

            <img src={`./${user?.id}.avif`} alt="Student Image" className='w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover shrink-0' />

            <div className='text-lg sm:text-xl md:text-2xl flex flex-col gap-4 sm:gap-6 lg:gap-8 lg:pl-10 xl:pl-20 mt-6 lg:mt-10 lg:ml-10 text-center lg:text-left break-words'>
              <h1>Name : {user?.name}</h1>
              {
                user.class && (
              <h1>Class : {user?.class}</h1>
                )
              }
                {
                user.section && (
              <h1>Section : {user?.section}</h1>

                )
              }

              {
                user.rollNo && (
              <h1>Roll No : {user?.rollNo}</h1>

                )
              }
              <h1>{user?.role} Id : {user?.id}</h1>

            </div>

        </div>

    </>
  )
}

export default ProfilData
