import React from "react";
// import payments from '../../assets/Gold-Classes-logo-PR-1.png'
import logo from '../../assets/Gold-Classes-logo-PR-1.png'
import {Link} from 'react-router-dom'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1021] text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img 
                src={logo}
                height={70}
                width={200}
            />
            {/* <h2 className="text-2xl font-bold text-amber-200">Gold Classes</h2> */}
          </div>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
          <div className="flex flex-col space-y-2 text-sm">
            <span className="flex items-center space-x-2">
              <FaMapMarkerAlt /> <span>TDPG Old Campus, Jaunpur, Uttar Pradesh</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaPhoneAlt /> <span>+91 979-407-7087</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope /> <span>dr.awnindra@goldClasses.in</span>
            </span>
          </div>

          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li className="text-[16px]">Locations Map
                <li><a href="https://maps.app.goo.gl/eFbe5pasuFqSV24a6?g_st=ac"><b><u>Jaunpur Office</u> </b></a></li>
                <li><a href=""><b><u>Mumbai Office</u></b></a></li>
            </li>
            <li><Link to="contact-us">Contact us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Onlince Courses</a></li>
            <li><a href="#">Offline Training</a></li>
            <li><a href="#">1 v 1 sessions (Weekly) </a></li>
            <li><Link to="/terms-condition">Terms & Conditions</Link></li>
            <li><a href="#">Promotional Offers</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login">Login</Link></li>
            <li><a href="#">My account</a></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div >
          <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email*"
              className="flex-1 px-3 py-2 rounded-l bg-white text-black text-sm outline-none"
            />
            <button className="bg-indigo-500 px-4 rounded-r text-white">➤</button>
          </div>

          {/* <p className="text-sm font-medium mt-4">We Accept</p>
          <div className="flex mt-2">
            <img src= {payments} alt="payments" className="h-8 w-220"/>
          </div> */}
        </div>
      </div>        

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-gray-400 text-sm py-4 px-4 flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        
        <p>All Rights Reserved @ Gold Class since 2011</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Claim</a>
          <a href="#">Privacy & Policy</a>
        </div>
      </div>
    </footer>
  );
}