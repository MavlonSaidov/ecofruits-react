import React from 'react'
import './Hero2.scss'
const Hero2 = (props) => {
  return (
    <div className="hero2">    
        <h2 className="hero2__title">{props.title}</h2>
    </div>
  )
}

export default Hero2