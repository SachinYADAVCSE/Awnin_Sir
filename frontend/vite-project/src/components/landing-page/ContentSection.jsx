import React from "react";

const ContentSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-cyan-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why <span className="text-indigo-700">#Students</span>,{" "}
          <span className="text-indigo-700">#CorporateEmployees</span>,{" "}
          <span className="text-indigo-700">#Graduates</span> Choose Us?
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Not just another English institute – we focus on{" "}
          <b>
            <u>
              confidence, real-world skills, Body Language, Personality, and
              practical fluency.
            </u>
          </b>
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Other Institutes */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            ❌ Other Institutes
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>📖 Focus only on grammar and textbooks</li>
            <li>😶 Students hesitate to speak</li>
            <li>🎯 Lack of real-world applications</li>
            <li>⏳ Passive learning with little practice</li>
          </ul>
        </div>

        {/* Our Institute */}
        <div className="bg-indigo-700 text-white rounded-xl shadow-lg p-8 transform hover:scale-[1.03] transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-center">
            ✅ Why Choose Us?
          </h3>
          <ul className="space-y-3">
            <li>💬 Build your <b>confidence</b> to speak fluently</li>
            <li>🔍 Discover who <b>you truly are</b></li>
            <li>👔 Learn <b>professional English</b></li>
            <li>🎤 Practice in <b>public speaking, interviews, podcasts</b></li>
            <li>🔥 Interactive Activity sessions, not boring lectures</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;