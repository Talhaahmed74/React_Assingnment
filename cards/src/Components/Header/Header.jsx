import React from 'react';
import './Header.css';
import team_icon from '../Header/team.png';
const Header = () => {
  return (
    <div className="Content">
      <div class="Btn">
      </div>
      <h1><img src={team_icon}></img> Team Profiles</h1>
      <div className="Links">
        <li>Home</li>
        <li>About Us</li>
        <li>Instructions</li>
      </div>
    </div>
  );
};

export default Header;
