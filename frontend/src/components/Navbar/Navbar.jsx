import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css';
import Login from '../../pages/LogIN-Out/Login';
import Signup from '../../pages/LogIN-Out/Signup';
import ForgotPassword from '../../pages/LogIN-Out/Forgot';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false); // State for login
  const [showSignup, setShowSignup] = useState(false); // State for signup
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State for forgot password

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  const openSignup = () => setShowSignup(true);
  const closeSignup = () => setShowSignup(false);

  const openForgotPassword = () => setShowForgotPassword(true);
  const closeForgotPassword = () => setShowForgotPassword(false);

  return (
    <div className="Navbar">
      <div className="search-box">
        <input type="text" placeholder="Search Here" />
        <SearchIcon />
      </div>
      <div className="Right-secation">
        <LightModeOutlinedIcon />
        <NotificationsActiveIcon />
        <PersonIcon onClick={openLogin} />
      </div>
      {/* Conditional rendering for login, signup, and forgot password */}
      {showLogin && (
        <Login
          closeLogin={closeLogin}
          openSignup={openSignup}
          openForgotPassword={openForgotPassword}
        />
      )}
      {showSignup && <Signup closeSignup={closeSignup} openLogin={openLogin} />}
      {showForgotPassword && (
        <ForgotPassword closeForgotPassword={closeForgotPassword} />
      )}
    </div>
  );
};

export default Navbar;
