/* eslint-disable no-unused-vars */
import React from 'react'
import SubHero from '../Components/SubHero'
import img from '../assets/Images/Aboutus.png'
import AboutUs from '../Components/AboutUs'
import WhyChooseUs from '../Components/WhyChooseUs'
import HowWeWork from '../Components/HowWeWork'
import Testimonials from '../Components/Common/Testimonials'
import Blog from '../Components/Blog'

const About = () => {
  return (
    <>
      <SubHero />
      <AboutUs
        title="Building Digital Solutions That Help Businesses Grow"
        description="We provide result-focused technology and marketing services for businesses that want to build a strong online presence. From website development to mobile apps, digital marketing, and technical support, we deliver solutions that are practical, scalable, and business-friendly."
        features={["Professional Online Presence",
        "Customizable Solutions",
        "24/7 Availability",
        "Skilled and Trained Team",
        "Use of Advanced Technology",]}
        image={img}
        showButton={true}
        buttonText="Learn More"
        onButtonClick={() => console.log("Button clicked!")}
      />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <Blog />
    </>
  )
}

export default About