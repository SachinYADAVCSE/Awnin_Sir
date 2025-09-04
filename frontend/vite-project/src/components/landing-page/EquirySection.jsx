import React from 'react';
import { FaEnvelope, FaUser } from "react-icons/fa";

const EnquirySection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Let Us Help You!</h2>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form className="flex flex-col gap-6">

            {/* Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-2">Name</label>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <span className="bg-gray-100 px-4 py-2 text-gray-600">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex-1">
                <label className="block font-medium mb-2">Email</label>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <span className="bg-gray-100 px-4 py-2 text-gray-600">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    className="flex-1 px-3 py-2 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-2">Your Message</label>
              <textarea
                className="w-full border rounded-lg p-4 outline-none resize-none h-48"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Your Enquiry
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;