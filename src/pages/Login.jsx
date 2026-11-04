
import React, { useState } from 'react'
import Logo from "../assets/JoinEasy_School_Logo.png"

const Login = () => {

  

  const [role, setRole] = useState("Student")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login API here
  }

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex h-16 sm:h-20 items-center justify-between bg-amber-400 px-4 sm:px-8 shadow-md">

        <img
          src={Logo}
          alt="JoinEasy Logo"
          className="w-24 sm:w-32 object-contain"
        />

        <button className="text-lg sm:text-xl font-semibold text-white hover:underline underline-offset-8">
          Home
        </button>

      </nav>


      {/* Login Section */}
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-amber-50 px-4 py-8">

        <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-amber-500 shadow-[0px_5px_20px_rgba(0,0,0,0.3)]">

          {/* Role Selection */}
          <div className="flex bg-amber-50">

            {["Student", "Teacher"].map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`w-1/2 border-b-2 py-5 text-lg sm:text-2xl font-semibold transition
                  ${role === item
                    ? "border-amber-500 text-amber-600 bg-amber-100"
                    : "border-transparent text-amber-500 hover:bg-amber-100"
                  }`}
              >
                {item}
              </button>
            ))}

          </div>


          {/* Login Form */}
          <div className="px-4 py-8 sm:px-10 sm:py-10">

            <h1 className="mb-8 text-center text-3xl sm:text-4xl font-bold text-white">
              {role} Login
            </h1>

            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-xl bg-amber-50 p-5 sm:p-8"
            >

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">
                  {role} ID
                </label>

                <input
                  type="text"
                  placeholder={`Enter ${role} ID`}
                  required
                  className="h-12 w-full rounded-xl border-2 border-amber-300 px-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-amber-500 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-amber-600 active:scale-95"
              >
                Login
              </button>

            </form>

          </div>

        </div>

      </main>

    </>
  )
}

export default Login
