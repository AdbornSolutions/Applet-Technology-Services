/* eslint-disable no-unused-vars */
import SubHero from "../../Components/SubHero"
import Hero from '../../Components/Hero'
import HeroImage from '../../assets/Service/Shero3.png'
import ServiceChoose from '../../Components/ServiceChoose'
import OurSingleService from '../../Components/OurSingleService'
import Testimonials from '../../Components/Common/Testimonials'
import HowWeWork from '../../Components/HowWeWork'
import {
  Search,
  Share2,
  MousePointerClick,
  Wand2,
  FileText,
  ArrowRight,
} from "lucide-react";

const digitalMarketingServices = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Increase your website's visibility on Google and other search engines with on-page, off-page, and technical SEO strategies.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build brand awareness, engage your audience, and drive traffic with effective social media campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    desc: "Reach potential customers actively searching for your services through targeted ads and PPC campaigns.",
  },
  {
    icon: Wand2,
    title: "Content Marketing",
    desc: "Create valuable content that educates, engages, and builds trust with your audience while improving SEO performance.",
  },
  {
    icon: FileText,
    title: "Lead Generation Campaigns",
    desc: "Generate high-quality leads through customized campaigns designed to convert prospects into customers.",
  },
];


const Digital = () => {
  return (
    <>
    <SubHero title="Digital Marketing" />
    <Hero 
      image={HeroImage}
      title="Grow Your Business with Result-Driven Digital Marketing"
      description="We help businesses increase their online visibility, generate quality leads, and build stronger customer engagement through strategic digital marketing solutions. Our goal is to create campaigns that deliver measurable results and real business growth."
      /> 
      <ServiceChoose
      title="Why Choose Our Digital Marketing Services"
      description="We combine technology, creativity, and expertise to deliver solutions that help businesses succeed in today's competitive digital world. Our focus is on creating reliable, scalable, and results-driven solutions tailored to your business needs."
      features={[
        "Targeted Marketing Strategies",
        "Data-Driven Approach",
        "Multi-Channel Expertise",
        "Measurable Results",
        "Continuous Optimization" ,
      ]}
      />
      <OurSingleService
      title="Our Digital Marketing Services"
      services={digitalMarketingServices}
      ctaTitle="Ready to Grow?"
      ctaDescription="Let's boost your online presence."
      ctaButtonText="Get Quote"
    />
    <Testimonials />
    <HowWeWork />
    </>
  )
}

export default Digital
