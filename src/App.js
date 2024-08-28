import React from 'react'
import './App.css'
import Navbartop from './component/Navbartop'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import AboutUS from './page/AboutUs'
import Courses from './page/Courses'
import OnlineLearning from './page/OnlineLearning'
import Resources from './page/Resources'
import Footer from './component/Footer'
import "bootstrap-icons/font/bootstrap-icons.css";



const App = () => {
  return (
    <>

      <Navbartop/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/aboutUS" element={<AboutUS />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/onlineLearning" element={<OnlineLearning />} />
        

        <Route path="*"  element={<div className="text-center text-danger">Page not found</div>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App