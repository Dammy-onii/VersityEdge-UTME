import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './nav.css';

function Nav() {
  return (
    <div className='nav'>
      <div className="navContainer">
        <div className="navLinks">
        <NavLink to="/">
          <li>
            <h3>Home</h3>
          </li>
        </NavLink>

        <NavLink to="/">
          <li>
            <h3>About Us</h3>
          </li>
        </NavLink>

        <NavLink to="/PartnerWith">
          <li>
            <h3>Partner with Us</h3>
          </li>
        </NavLink>

        <NavLink to="/">
          <li>
            <h3>Contact Us</h3>
          </li>
        </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Nav