import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss'

const aboutArray = [
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
      <div className="app__profiles">
    {aboutArray.map((about, index) => (
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={about.imgURL} alt={about.title}/>
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
      </motion.div>
    ))}
      </div>
    </>
  )
}

export default About