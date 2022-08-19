import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((element, index) => (
            
        <a 
            href={`#${element}`} 
            key={element+index}
            className="app__navigation-dot"
            style={active === element ? {backgroundColor: '#313BAC' } : {}} />
                  ))}
    </div>
  )
}

export default NavigationDots