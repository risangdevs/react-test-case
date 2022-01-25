import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
      <ul className="menu-bars">
          <li className="navbar a"><Link to="/">Home</Link></li>
          <li className="navbar a"><a href="#">About</a></li>
          <li className="navbar a"><a href="#">Services</a></li>
          <li className="navbar a"><a href="#">Team</a></li>
          <li className="navbar a"><a href="https://www.linkedin.com/in/risanggani/">Contact</a></li>         
      </ul>
  );
};

export default Navbar;
