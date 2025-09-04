import React from 'react'
import { FaEnvelope } from "react-icons/fa";


const ContactUs = () => {
  return (
         <div>
        
                    <div className="w-[60vw] mx-auto my-12 px-4">
                        <h2 className="text-2xl font-semibold text-center mb-8">Let's us Help You!</h2>
        
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <form className='flex gap-4 flex-wrap'>
                                
                                {/* Email */}
                                <div className="mb-4 ">
                                    <label className="block font-medium mb-1">Name</label>
                                    <div className="flex items-center border rounded-lg overflow-hidden w-[25vw]">
                                        <span className="bg-gray-100 px-5 py-4 text-gray-600">
                                            <FaEnvelope />
                                        </span>
                                        <input
                                            type="email"
                                            className="flex-1 px-3 py-2 outline-none"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    {/* {errors?.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
                                    )} */}
                                </div>
        
                                {/* Email */}
                                <div className="mb-4 ">
                                    <label className="block font-medium mb-1">Your Email</label>
                                    <div className="flex items-center border rounded-lg overflow-hidden w-[25vw]">
                                        <span className="bg-gray-100 px-5 py-4 text-gray-600">
                                            <FaEnvelope />
                                        </span>
                                        <input
                                            type="email"
                                            className="flex-1 px-3 py-2 outline-none"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    {/* {errors?.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
                                    )} */}
                                </div>
        
                              
                                
                                {/* Email */}
                                <div className="mb-4 ">
                                    <label className="block font-medium mb-1">Enter Your Messages</label>
                                    <div className="flex items-center border rounded-lg overflow-hidden w-[53vw] h-60">
        
                                        <textarea
                                            type="text"
                                            className=" w-[53vw] pt-2 px-1 h-60 outline-none "
                                            placeholder="Enter your Message"
                                        />
                                    </div>
                                    {/* {errors?.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
                                    )} */}
                                </div>
        
                                {/* Submit Button */}
                                <div className="text-center mt-4">
                                    <input
                                        type="submit"
                                        value="Submit Your Enquiry"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
  )
}

export default ContactUs