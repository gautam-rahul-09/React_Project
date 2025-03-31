import Header from "./components/page/header";
import LaundryService from "./components/homepage/home";
import AboutUs from "./components/homepage/about";
import OurServices from "./components/homepage/ourservice";
import HowItWorks from "./components//homepage/works";
import WhyChooseUs from "./components/homepage/whychoseus";
import ContactUs from "./components/homepage/contect";
import Footer from "./components/page/fother";
import './App.css'



function App() {


  return (
    <>
    <Header />
    <LaundryService/>
    <AboutUs/>
    <OurServices/>
    <HowItWorks/>
    <WhyChooseUs/>
    <ContactUs/>
    < Footer/> 
    </>
  )
}

export default App
