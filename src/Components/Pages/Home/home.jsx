import Navbar from "../../Navbar/Navbar";
import HeroSection from "./heroSection";
import AboutSection from "../About/AboutSection";
import ServiceSection from "../Service/ServiceSection";
import RecentWork from "../Projects/RecentWorks";
import EmailSection from "../../EmailSection";
import ResumeSection from "../../ResumeSection";
import TestimonialsSection from "../CommentSection";
import ContactFormSection from "../Contact/ContactFromSection";
import Footer from "../../Footer/Footer";

const Home = ({ image }) => {
  return (
    <>
      <Navbar />
      <HeroSection image={image}/>
      <AboutSection />
      <ServiceSection />
      <RecentWork />
      <EmailSection />
      <ResumeSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default Home;
