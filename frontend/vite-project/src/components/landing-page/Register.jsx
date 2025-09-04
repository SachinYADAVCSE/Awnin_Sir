import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const data = {
    name: name,
    username: username,
    email: email,
    password: password,
  }

  // Simple client-side validation
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        'http://localhost:9001/user/register',
        data, // send as JSON, 
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Registration Successful",
          text: response.data.message || "Account created successfully",
          icon: "success"
        });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error"
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-70 p-6 bg-white rounded-lg shadow-md mt-40">
      <h2 className="text-3xl font-semibold text-center mb-8">Register</h2>
      <form onSubmit={handleRegister}>
        
        {/* Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaUser /></span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Username</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaUser /></span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaEnvelope /></span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaKey /></span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link to="/login" className="text-blue-900">
          Already have an account? Login here
        </Link>
      </div>
    </div>
  );
};

export default UserRegister;
