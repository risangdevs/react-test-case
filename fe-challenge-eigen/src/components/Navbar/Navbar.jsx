import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { NavDropdown } from "react-bootstrap";
import { fetchNewsByCountry } from "../../store/action";

const Navbar = () => {
  const dispatch =useDispatch()
  const country =(country)=>{
    dispatch(fetchNewsByCountry(country))
  }
  return (
    <ul className="menu-bars">
      <li className="navbar a">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar a">
        <a href="#">About</a>
      </li>
      <li className="navbar a">
        <a href="#">Services</a>
      </li>
      <li className="navbar a">
        <a href="#">Team</a>
      </li>
      <li className="navbar a">
        <a href="https://www.linkedin.com/in/risanggani/">Contact</a>
      </li>
      <NavDropdown
        title="Country"
        id="collasible-nav-dropdown"
        className="navbar a"
      >
        <NavDropdown.Item href="#" onClick={() => country("id")}>
          Indonesia
        </NavDropdown.Item>
        <NavDropdown.Item href="#" onClick={() => country("us")}>
          USA
        </NavDropdown.Item>
        <NavDropdown.Item href="#" onClick={() => country("ru")}>
          Russia
        </NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </ul>
  );
};

export default Navbar;
