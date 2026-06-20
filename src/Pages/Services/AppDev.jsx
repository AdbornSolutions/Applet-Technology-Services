/* eslint-disable no-unused-vars */
import SubHero from "../../Components/SubHero"
import Hero from '../../Components/Hero'
import HeroImage from '../../assets/Service/Shero1.png'
import ServiceChoose from '../../Components/ServiceChoose'
import OurSingleService from '../../Components/OurSingleService'
import Testimonials from '../../Components/Common/Testimonials'
import HowWeWork from '../../Components/HowWeWork'
import {
  Briefcase,
  ShoppingCart,
  Code2,
  Wand2,
  Database,
  HouseWifi,
} from "lucide-react";
const webServices = [
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Professional websites for businesses.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Online stores with payment integration.",
  },
  {
    icon: Code2,
    title: "Custom Apps",
    desc: "Tailored web applications.",
  },
  {
    icon: Wand2,
    title: "Website Redesign",
    desc: "Modern redesign solutions.",
  },
  {
    icon: Database,
    title: "CMS Integration",
    desc: "WordPress & custom CMS.",
  },
];

const AppDev = () => {
  return (
    <>
    <SubHero title="App Development" />
    <Hero 
      image={HeroImage}
      title="Build Cutting-Edge Websites That Scale Your Business"
      description="Novara Digital Services creates responsive, fast, and high-performing websites to help you reach more customers and maximize online impact."
      /> 
      <ServiceChoose
      title="Why Choose Our Web Development Services"
      description="We combine technology, creativity, and expertise to deliver solutions that help businesses succeed in today's competitive digital world. Our focus is on creating reliable, scalable, and results-driven solutions tailored to your business needs."
      features={[
        "Customized Solutions",
        "Responsive & Mobile-Friendly",
        "SEO-Optimized",
        "Modern Design & UI/UX",
        "High Performance" ,
      ]}
      />
      <OurSingleService
      title="Our Web Development Solutions"
      services={webServices}
      ctaTitle="Ready to Build?"
      ctaDescription="Let's create your next website."
      ctaButtonText="Start Project"
    />
    <Testimonials />
    <HowWeWork />
    </>
  )
}

export default AppDev
