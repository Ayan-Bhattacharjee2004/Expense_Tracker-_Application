import React from 'react';
import './Sidebar.css';
import AyanImage from '../../assets/Ayan.png';
import RoofingIcon from '@mui/icons-material/Roofing';
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp';
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';
import PriceCheckSharpIcon from '@mui/icons-material/PriceCheckSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Profile-dp">
        <img src={AyanImage} alt="Ayan Bhattacharjee" />
        <h4>Ayan Bhattacharjee</h4>
      </div>
      <div className="menu-section">
        <div className="menu-item">
          <RoofingIcon />
          <span>Home</span>
        </div>
        <div className="menu-item">
          <AccountBalanceWalletSharpIcon />
          <span>Income</span>
        </div>
        <div className="menu-item">
          <CreditCardSharpIcon />
          <span>Expenses</span>
        </div>
        <div className="menu-item">
          <PriceCheckSharpIcon />
          <span>Budgets</span>
        </div>
        <div className="menu-item">
          <LocalPhoneSharpIcon />
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
