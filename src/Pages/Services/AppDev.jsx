/* eslint-disable no-unused-vars */
import SubHero from "../../Components/SubHero"
import Hero from '../../Components/Hero'
import HeroImage from '../../assets/Service/Shero2.png'
import ServiceChoose from '../../Components/ServiceChoose'
import OurSingleService from '../../Components/OurSingleService'
import Testimonials from '../../Components/Common/Testimonials'
import HowWeWork from '../../Components/HowWeWork'
import {
  Smartphone,
  Apple,
  TabletSmartphone,
  Wand2,
  Settings,
  ArrowRight,
} from "lucide-react";

const mobileServices = [
  {
    icon: Smartphone,
    title: "Android App Development",
    desc: "Custom Android apps optimized for performance, compatibility, and user experience.",
  },
  {
    icon: Apple,
    title: "iOS App Development",
    desc: "Feature-rich iOS apps designed to provide seamless experiences on iPhones and iPads.",
  },
  {
    icon: TabletSmartphone,
    title: "Cross-Platform App Development",
    desc: "Build once and deploy across multiple platforms with Flutter or React Native.",
  },
  {
    icon: Wand2,
    title: "App UI/UX Design",
    desc: "Intuitive designs that focus on user engagement, retention, and brand consistency.",
  },
  {
    icon: Settings,
    title: "App Maintenance & Support",
    desc: "Regular updates, performance monitoring, and technical support to keep your app running smoothly.",
  },
];


const AppDev = () => {
  return (
    <>
    <SubHero title="App Development" />
    <Hero 
      image={HeroImage}
      title="Create Powerful Mobile Apps That Engage & Grow Your Business"
      description="We build user-friendly, high-performance mobile applications for Android, iOS, and cross-platform solutions. Our apps are designed to enhance customer experience, boost engagement, and help your business stay ahead in the mobile-first world."
      /> 
      <ServiceChoose
      title="Why Choose Our Mobile App Development Services"
      description="We combine technology, creativity, and expertise to deliver solutions that help businesses succeed in today's competitive digital world. Our focus is on creating reliable, scalable, and results-driven solutions tailored to your business needs."
      features={[
        "Custom App Solutions",
        "Cross Platform Expertise",
        "Scalable & Secure",
        "Modern Design & UI/UX",
        "Performance Optimization" ,
      ]}
      />
      <OurSingleService
      title="Our Mobile App Development Solutions"
      services={mobileServices}
      ctaTitle="Ready to Innovate?"
      ctaDescription="Let's create your next mobile app."
      ctaButtonText="Get Quote"
    />
    <Testimonials />
    <HowWeWork />
    </>
  )
}

export default AppDev
