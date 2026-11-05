import React from 'react'
import MainPage from './pages/MainPage'
import IntroPage from './pages/IntroPage'
import Login from './pages/Login'
import {mockData} from './data/mockData'
import { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  useEffect(() => {

    const existingData = localStorage.getItem("users");

    if (!existingData) {
      localStorage.setItem("users", JSON.stringify(mockData));
    }

  }, []);

  return (
  <>
 <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main-page" element={<MainPage />} />

    </Routes>
  </>
  )
}

export default App
