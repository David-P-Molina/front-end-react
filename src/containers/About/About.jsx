import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss'

const abouts = [
  {title: "Web Development", description: 'I am a good web developer', imgURL: ''},
  {title: "Front End", description: 'I am a good web developer', imgURL: ''},
  {title: "Back End", description: 'I am a good web developer', imgURL: ''},
  {title: "Adapting new technologies", description: 'I am a good web developer', imgURL: ''}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span><br /> means <span> good business</span>
      </h2>
    </>
  )
}

export default About