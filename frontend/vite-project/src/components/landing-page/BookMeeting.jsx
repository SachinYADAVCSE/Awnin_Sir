import React from 'react';

const BookMeeting = () => {
  return (
    <section className="bg-indigo-50 py-12 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Try to Book a Free Meeting
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-xl">
        Schedule a free session with our expert and explore how we can help you improve your English, confidence, and professional skills.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Book Your Free Meeting
      </button>
    </section>
  );
};

export default BookMeeting;