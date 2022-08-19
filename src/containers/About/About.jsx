import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';

// const aboutArray = [
//   {title: "Web Development", description: 'I am a good web developer', imgURL: images.about01},
//   {title: "Front End", description: 'I am a good web developer', imgURL: images.about02},
//   {title: "Back End", description: 'I am a good web developer', imgURL: images.about03},
//   {title: "Adapting new technologies", description: 'I am a good web developer', imgURL: images.about04}
// ]

const About = () => {
  const[aboutArray, setAboutArray] = useState([]);

  useEffect(() => {
    const aboutQuery = '*[_type == "abouts"]';

    client.fetch(aboutQuery)
      .then((data) => setAboutArray(data));

  }, []);
  
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
          <img src={urlFor(about.imgUrl)} alt={about.title}/>
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
      </motion.div>
    ))}
      </div>
    </>
  )
}

export default About