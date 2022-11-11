import React from 'react'
import { Link } from "react-router-dom";
import './index.scss';

function Menu() {
  return (
    <nav className="top-menu">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            {/* <li>
                <Link to="/SpringAnimation">Spring Animation</Link>
            </li>
            <li>
                <Link to="/ParallaxAnimation">Parallax Animation</Link>
            </li> */}
        </ul>
    </nav>
  )
}

export default Menu
