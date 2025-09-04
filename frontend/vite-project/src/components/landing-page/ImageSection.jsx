import React from "react";
import { Mic, Sparkles, MessageSquare, BookOpen } from "lucide-react";
// import imgClass from '../../assets/07-ES-1.jpeg'
// import imgClass2 from '../../assets/A-1024x768.jpg'
// import imgClass3 from '../../assets/B-1024x768.jpg'
// import imgClass4 from '../../assets/D.jpeg'
// import imgClass5 from '../../assets/07-ES-1.jpeg'
import studentImg from '../../assets/student.jpeg'
import bgChoice from '../../assets/bg-choice.jpg'
import bgNewBG from '../../assets/imgNewBg.jpg'
import imgNewOne from '../../assets/imgNewOne.png'

const features = [
  {
    title: "Build Confidence",
    description:
      "Learn to speak confidently in public, overcome fear, and unlock the best version of yourself.",
    image: bgNewBG,
    icon: <Mic className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Highly Influential Personality",
    description:
      "Transform your communication skills to leave a lasting impact in interviews, meetings, and daily conversations.",
    image: bgChoice,
    icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Fluent Spoken English",
    description:
      "Gain fluency through interactive practice sessions, debates, stage speaking, and podcasts.",
    image: imgNewOne,
    icon: <MessageSquare className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Core & Strong Grammar",
    description:
      "Master the foundations of English grammar, so your speech is natural, accurate, and professional.",
    image: studentImg,
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
  },
];

export default function ImageSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 px-6 lg:px-20">

      <p className="text-center py-5 text-3xl font-bold flex flex-wrap justify-center">

        Our 4 Cores Pillars, We Focus to Develop in Our Students for All.
      </p>

      <p className="text-center py-2 mb-19 text-[19px] flex flex-wrap justify-center">

        At Gold Classes, We try to train Students so They shine like Gold in the Outside World.
      </p>

      <div className="max-w-7xl mx-auto space-y-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div
              className={`flex justify-center ${index % 2 !== 0 ? "md:order-2" : ""
                }`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-2xl shadow-2xl max-w-[450px] hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div
              className={`flex flex-col justify-center space-y-5 text-center md:text-left ${index % 2 !== 0 ? "md:order-1" : ""
                }`}
            >
              {/* Icon + Heading */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                {feature.icon}
                <h2 className="text-3xl font-extrabold text-gray-900">
                  {feature.title}
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                {feature.description}
              </p>

              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition w-fit mx-auto md:mx-0">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
