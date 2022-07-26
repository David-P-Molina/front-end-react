import React, {useState} from 'react'

import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants/index'
import './NavBar.scss'

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__logo">
          <img src={images.logo} alt="name logo for David"/>
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills', 'contact'].map((element) =>  (
            <li key={`link-${element}`} className="app__flex p-test">
              <a href={`#${element}`}>{element}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [300,0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'work', 'skills', 'contact'].map((element) => (
                    <li key={element}>
                      <a href={`#${element}`} onClick={() => setToggle(false)}>
                        {element}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
        </div>

      </nav>
    </>
  )
}

export default NavBar