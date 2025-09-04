import { CheckCircle2 } from "lucide-react";
//import women from "../../assets/women.jpg";
//import men from "../../assets/men.jpg";
// import imgClass2 from '../../assets/A-1024x768.jpg'
// import imgClass3 from '../../assets/B-1024x768.jpg'
import imgClass4 from '../../assets/img1Best.jpg' 

export default function InfoSection() {

  const handleClick = () => {
    return (
     <></> 
    )
  }

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Row 1 - Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-green-700 tracking-wide mb-2">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            We are Result Driven not Academic but Public
          </h2>
          <p className="text-gray-600 mb-6 text-[20px]">
            We’re not just teaching English — we help you grow confidence, 
            express yourself authentically, and achieve professional goals. 
            With interactive learning, guidance, and practice, you’ll go 
            beyond grammar and start speaking with impact, Emotion, and Reflect your Personality.
          </p>
        </div>

        {/* Row 2 - Info + Image */}
        <div className="space-y-6 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            You define your Goals as At Gold Classes, We help you Achieve them.
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-[20px]">
            Learn at your own pace with structured lessons, real-time guidance, 
            and engaging materials. Whether you’re <b>preparing</b> for <b>interviews, 
            presentations, Public Speaking, Personality development, or everyday conversations</b> — we’ve got you covered.
          </p>
          <img
            src={imgClass4}
            alt="Teacher explaining"
            className="rounded-xl mt-4 shadow-lg mx-auto max-h-[400px] w-200 object-cover"
          />
           <button onClick={handleClick} className="px-6 py-3 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition">
            Ask Us Your Requirements →
          </button>
        </div>

        {/* Row 3 - Features */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <p className="text-sm font-semibold text-green-700 tracking-wide mb-2">
            PROGRAM HIGHLIGHTS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            A 100% Online & Offiline (If you can come).
          </h2>
          <ul className="space-y-5 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
              Including a study plan to take your English to the next level in
              just a few months.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
              Each level has 24 units and 6 group review classes with our
              expert teachers.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
              Earn a Certificate for every level you complete and showcase it
              on LinkedIn.
            </li>
          </ul>
        </div>

        {/* Row 4 - Teacher Image + CTA
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={men}
            alt="Teacher presenting"
            className="rounded-xl shadow-md"
          />
          <div>
            <p className="text-gray-600 mb-6">
              Ready to take the next step? Our expert-led English programs help 
              you build skills for real-world impact. Whether it’s for your career, 
              studies, or personal growth, we’re here to support your journey.
            </p>
            <button className="px-6 py-3 border border-indigo-700 text-indigo-700 font-semibold rounded-full hover:bg-indigo-700 hover:text-white transition">
              CONTACT US →
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
