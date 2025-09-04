import React from "react";
// import bgFree from "../../assets/bg-Free.png";
import backgroundImage from '../../assets/bg-again.jpg'
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto  px-6 lg:px-16 grid md:grid-cols-2 gap-10 justify-between items-center">
        
        {/* Left Content Box */}
        <div className="bg-blue-900/50 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12  text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400 leading-snug">
            Learn to Speak English Confidently, <br /> Make your influence!
          </h1>

          <ul className="mt-6 space-y-4 text-white text-lg font-medium">
            <li>✨ Not being able to add Emotion in Your Speech</li>
            <li>📚 Don't have a Strong Base in English</li>
            <li>🎧 Not being able to understand Native English Speakers</li>
            <li>🗣️ Not being able to speak exactly what's in your mind</li>
            <li>😨 Fear of getting Wrong in front of Everyone</li>
            <li>📝 Not having words to express yourself</li>
          </ul>

          <button onClick={()=>navigate("/journey-form")} className="mt-8 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg text-xl transition">
            🚀 Start Your Journey!
          </button>

          {/* Turning the Togle form on or taking */}
          {/* { togleForm && <div>
            </div>}
        
        </div>

        {/* Right Image */}
        {/* <div className="flex justify-center"> */}
          {/* <img
            src=""
            alt="Hero Illustration"
            className="w-[90%] md:w-[400px] lg:w-[2000px] drop-shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
