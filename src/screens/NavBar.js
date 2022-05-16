import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <li>
        <Link to="/signup">signup</Link>
      </li>
      <li>
        <Link to="/login">login </Link>
      </li>
      <li>
        <Link to="/loginrestaurant">Login Restaurant</Link>
      </li>
      <li>
        <Link to="/registerrestaurant">Register Restaurant</Link>
      </li>
    </nav>
  );
}

export default NavBar