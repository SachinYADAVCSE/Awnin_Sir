import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo"); // ✅ Remove user data
    navigate("/login"); // ✅ Redirect to login page
    window.location.reload(); // ✅ Refresh App.jsx to reset userData
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 ml-10 font-bold text-white px-4 py-2 rounded hover:bg-red-700 hover:scale-120"
    >
      Logout
    </button>
  );
};

export default LogoutButton;