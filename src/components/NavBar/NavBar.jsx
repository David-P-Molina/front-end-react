import React from 'react'

import { images } from '../../constants/index'
import './NavBar.scss'

const NavBar = () => {
  return (
    <>
      <nav className="app__navbar">
        <div className="app__logo">
          <img src={images.logo} />
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills', 'contact'].map((element) =>  (
            <li key={`link-${element}`} className="app__flex p-test">
              <a href={`#${element}`}>{element}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar