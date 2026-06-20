/* eslint-disable no-unused-vars */
import SubHero from "../../Components/SubHero"
import Hero from '../../Components/Hero'
import HeroImage from '../../assets/Service/Shero4.png'
import ServiceChoose from '../../Components/ServiceChoose'
import OurSingleService from '../../Components/OurSingleService'
import Testimonials from '../../Components/Common/Testimonials'
import HowWeWork from '../../Components/HowWeWork'
import {
  Wrench,
  Bug,
  ServerCog,
  ShieldCheck,
  Headset,
  ArrowRight,
} from "lucide-react";

const technicalSupportServices = [
  {
    icon: Wrench,
    title: "Website Support & Maintenance",
    desc: "Regular updates, bug fixes, security checks, and performance optimization to keep your website running smoothly.",
  },
  {
    icon: Bug,
    title: "Software Troubleshooting & Support",
    desc: "Resolve software issues, ensure smooth operation, and improve system efficiency.",
  },
  {
    icon: ServerCog,
    title: "Server Monitoring & Management",
    desc: "Monitor server performance, uptime, and security to prevent downtime and optimize performance.",
  },
  {
    icon: ShieldCheck,
    title: "Security Updates & Protection",
    desc: "Keep your digital assets safe with timely security patches, vulnerability fixes, and backup solutions.",
  },
  {
    icon: Headset,
    title: "IT Consultation & Assistance",
    desc: "Get expert guidance on system upgrades, technology solutions, and IT best practices for your business.",
  },
];

const Technical = () => {
  return (
    <>
    <SubHero title="Technical Support" />
    <Hero 
      image={HeroImage}
      title="Reliable Technical Support to Keep Your Business Running Smoothly"
      description="We provide professional technical support services to ensure your digital systems, websites, and applications operate without interruptions. Our team delivers fast, reliable, and proactive solutions so your business can focus on growth, not downtime."
      /> 
      <ServiceChoose
      title="Why Choose Our Technical Support Services"
      description="We combine technology, creativity, and expertise to deliver solutions that help businesses succeed in today's competitive digital world. Our focus is on creating reliable, scalable, and results-driven solutions tailored to your business needs."
      features={[
        "24/7 Assistance",
        "Proactive Monitoring",
        "Experienced Professionals",
        "Secure & Reliable",
        "Tailored Solutions" ,
      ]}
      />
      <OurSingleService
      title="Our Technical Support Solutions"
      services={technicalSupportServices}
      ctaTitle="Ready to Innovate?"
      ctaDescription="Let's create your next mobile app."
      ctaButtonText="Get Quote"
    />
    <Testimonials />
    <HowWeWork />
    </>
  )
}

export default Technical
