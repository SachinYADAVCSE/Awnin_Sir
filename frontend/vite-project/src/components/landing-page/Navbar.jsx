import React, { useEffect, useState } from "react";
import logo from "../../assets/Gold-Classes-logo-PR-1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ clean icons (lucide-react)

const Navbar = () => {
  const [userData, setUserData] = useState("");
  const [userLogin, setUserLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile toggle
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      try {
        setUserData(JSON.parse(storedUser));
        setUserLogin(true);
      } catch (err) {
        console.error("Invalid JSON in localStorage:", err);
        localStorage.removeItem("userInfo");
      }
    } else {
      setUserLogin(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-slate-800 h-8 flex items-center justify-end px-4">
        <p className="text-blue-600 bg-amber-200 h-6 px-3 font-bold flex items-center border rounded">
          Contact Us: +91 979-407-7087
        </p>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-[17px] font-semibold text-slate-800 items-center">
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <span>Courses</span>
            <span>Curriculum</span>
            <Link to="/free-downloads">Free Downloads</Link>

            {userLogin ? (
              <button
                className="px-4 py-2 bg-slate-400 text-white rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-amber-400 text-white rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-400 text-white rounded-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-100 px-6 py-4 space-y-4 flex flex-col font-medium text-slate-800">
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
            <span onClick={() => setMenuOpen(false)}>Courses</span>
            <span onClick={() => setMenuOpen(false)}>Curriculum</span>
            <Link to="/free-downloads" onClick={() => setMenuOpen(false)}>
              Free Downloads
            </Link>

            {userLogin ? (
              <button
                className="w-full px-4 py-2 bg-slate-400 text-white rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 bg-amber-400 text-white rounded-md text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-full px-4 py-2 bg-blue-400 text-white rounded-md text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
