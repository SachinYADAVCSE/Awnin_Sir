import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/landing-page/Navbar'
import HeroSection from './components/landing-page/HeroSection'
import ImageSection from './components/landing-page/ImageSection'
import AboutUs from './components/users/AboutUs'
import ContactUs from './components/users/ContactUs'
import Footer from './components/landing-page/Footer'
import { FaWhatsapp } from "react-icons/fa6";
import ContentSection from './components/landing-page/ContentSection'
import GoogleReviews from './components/landing-page/GoogleReviews'
import { Link, Route, Router, Routes } from 'react-router-dom'
import InfoSection from './components/landing-page/InfoSection'
import FeatureBox from './components/landing-page/FeaturedBox'
import PdfDown from './components/users/PdfDown'
import PdfDownId from './components/users/PdfDownId'
import UploadPdf from './components/admin/UploadPdf'
import Login from './components/landing-page/Login'
import Register from './components/landing-page/Register'
import { useLocation } from 'react-router-dom'
import Logout from './components/landing-page/Logout'
import TermsOfService from './components/landing-page/TermsOfService'
import CTA from './components/landing-page/CTA'
import JourneyForm from './components/users/JourneyForm'


function App() {
  const [userData, setUserData] = useState(null);

  const [count, setCount] = useState(0)
  const localtion = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      try {
        setUserData(JSON.parse(storedUser));
      } catch (err) {
        console.error('Invalid JSON in localStorage:', err);
        localStorage.removeItem('userInfo');
      }
    }
  }, [location.pathname]); // ✅ re-check user on route change

  console.log(userData, '#########');

  return (
    <>
      <div className='fixed bottom-10 right-10 flex items-center gap-2 bg-green-500 p-3 px-5 rounded-full  font-bold shadow-xl '>
        <FaWhatsapp className='text-white text-4xl' />
        <a className='text-xl text-white' href="https://whatsapp.com/channel/0029VbAATLKKQuJPhdMszf1s">WhatsApp Group #Free</a>
      </div>
      <Navbar />

      <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/free-downloads' element={<PdfDown />} />
            <Route path="/lectures/:id" element={<PdfDownId />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/journey-form' element={<JourneyForm/>}/>
            <Route path="/terms-condition" element={<TermsOfService />} />

          </>

        {userData?.userType === 'user' && (
          <>
            <Route path="/" element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/free-downloads' element={<PdfDown />} />
            <Route path="/lectures/:id" element={<PdfDownId />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/journey-form' element={<JourneyForm/>}/>
            <Route path="/terms-condition" element={<TermsOfService />} />
          </>
        )}

        {/* admin */}
        {userData?.userType === 'admin' && (
          <>
            <Route path="/" element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/free-downloads' element={<PdfDown />} />
            <Route path="/lectures/:id" element={<PdfDownId />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/journey-form' element={<JourneyForm/>}/>
            <Route path="/upload-pdf" element={<UploadPdf />} />
            <Route path="/terms-condition" element={<TermsOfService />} />

          </>
        )}
      </Routes>
      <Footer />

    </>
  )

}

function Home() {
  return (
    <>
      <HeroSection />
      <FeatureBox />
      <ContentSection />
      <InfoSection />
      <ImageSection />
      <CTA phoneNumber={9794077087}/>
      <GoogleReviews />
    </>
  )
}

export default App
