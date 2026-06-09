/* eslint-disable no-unused-vars */
import React from 'react'
import MainHero from '../Components/MainHero'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'
import WhyChooseUs from '../Components/WhyChooseUs'
import HowWeWork from '../Components/HowWeWork'
import Testimonials from '../Components/Common/Testimonials'
import Blog from '../Components/Blog'

const Home = () => {
  return (
    <>
      <MainHero />  
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <Blog />
    </>
  )
}

export default Home