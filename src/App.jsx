/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import WebDev from './Pages/Services/WebDev'
import AppDev from './Pages/Services/AppDev'
import Digital from './Pages/Services/Digital'
import Technical from './Pages/Services/Technical'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/app-development" element={<AppDev />} />
        <Route path="/digital-marketing" element={<Digital />} />
        <Route path="/technical-support" element={<Technical />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
