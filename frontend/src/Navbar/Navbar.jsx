import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import "./navbar.scss";
const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>logo</h2>
      </div>
      <div className='user'>
        <span>{currentUser.username}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
