import React from 'react'

import { images } from '../../constants/index'
import './NavBar.scss'

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <img src={images.logo} />
        </div>
      </nav>
    </>
  )
}

export default NavBar