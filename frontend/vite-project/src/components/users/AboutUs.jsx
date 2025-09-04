import React from "react";
import gold from "../../assets/awnindra_sir.jpg";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          Why{" "}
          <span className="text-blue-600">#Students</span>,{" "}
          <span className="text-green-600">#CorporateEmployees</span>,{" "}
          <span className="text-purple-600">#Adults</span> Choose Us?
        </h2>

        {/* Intro */}
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          We are not just another institute teaching English. <br />
          We believe in making you speak confidently — as{" "}
          <span className="font-semibold text-blue-800">your true self</span>.
          Here’s how we do it:
        </p>

        {/* Points */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="space-y-4 text-lg text-gray-800">
            <p>
              <b>#1</b> Build your <span className="font-semibold">confidence</span>
            </p>
            <p>
              <b>#2</b> Help you discover{" "}
              <span className="font-semibold">who you really are</span>
            </p>
            <p>
              <b>#3</b> Teach{" "}
              <span className="font-semibold">professional English</span>
            </p>
            <p>
              <b>#4</b> Focus on{" "}
              <span className="font-semibold">speaking, not just studying</span>
            </p>
            <p>
              <b>#5</b> Provide{" "}
              <span className="font-semibold">real-life practice</span> —
              on stage, in conferences, mock interviews, and podcasts
            </p>
          </div>

          {/* Image + Highlight */}
          <div className="bg-[#fffbe7] rounded-3xl shadow-xl flex flex-col md:flex-row items-center p-6 gap-6">
            <img
              src={gold}
              alt="Gold Classes"
              className="rounded-2xl shadow-lg w-64 h-64 object-cover"
            />
            <p className="text-xl font-medium text-gray-800">
              We don’t just teach — we mentor, motivate, and make learning
              meaningful. <br />
              <span className="font-bold text-blue-700">
                Join Gold Classes and give your child the golden edge in
                education.
              </span>
            </p>

          </div>

        </div>
        <p className="flex flex-col gap-3 text-center text-slate-800">
          <p >
          At Gold Classes, we strongly believe that every single learner may shine like a gold radiating glow in the place he/she lives in. This platform believes in the immense potential of youths as a learner. In the past <b> two decades we have created numerous talents by polishing their skills and making them pro speakers.</b>
          </p>
          <p>In order to reach to the heights of success, an individual needs soft skills such as <b><u>Public Speaking, Decision Making, Problem Solving and excellent communication skills.</u></b> Studies have shown Indian youths have a huge skill gap that the global market needs. Keeping in mind the urgent need of such skills that every single person needs to shine in his life, we have created this platform to provide you with training and exposure.
          We believe that the power of English communication can open doors to success in education, career, and life. With years of teaching experience, Dr. Awnindra Sir has helped thousands of students, professionals, and aspirants achieve fluency, confidence, and clarity in English.
          </p>
          <br></br> <p className="text-[30px] font-bold text-center">Our Mission</p>
          To empower learners with excellent communication skills, develop their confidence, and prepare them to excel in interviews, presentations, and real-life conversations.
          <p className="text-[30px] font-bold text-center">Why Choose Us?</p>
          Expert Guidance: Learn directly under the mentorship of Dr. Awnindra Sir, a seasoned English trainer with deep expertise in language teaching.
          Practical Approach: Focus on real-life communication, not just grammar.
          Customized Learning: Courses designed for students, job-seekers, professionals, and homemakers.
          Personality Development: Special emphasis on body language, confidence building, and public speaking.
          Supportive Environment: Friendly, motivating, and result-oriented teaching style.
          <div className="flex flex-col ">
          <br></br><p className="text-[30px] text-center font-bold">What We Offer ?</p><br></br>
          <ul className="flex flex-col ml-10  items-start  gap-2 list-disc list-inside">
            <li>Basic to Advanced English Speaking Course</li>
            <li>Interview Preparation & GD Training</li>
            <li>Public Speaking & Stage Confidence</li>
            <li>Accent Neutralization & Fluency Building</li>
            <li>Personality Development Sessions</li>
          </ul>
          </div>

          <p className="text-[17px] ml-200 font-bold text-slate-600">
            Dr. Awnindra Vishwakarma <br></br>
            Ph.D ( English), B.Ed, M.A.( English) , 15+ years of experience
          </p>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
