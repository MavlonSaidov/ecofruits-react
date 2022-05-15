import React from 'react'
import Fruits from '../../GlobalComponents/Fruits'
import Description from './Description'
import Gallery from './Gallery'
import Hero from './Hero'
import './style.scss'
import Why from './Why'


const Homepage = () => {
  return (
    <div className='homepage'>
      <Hero/>
        <div className="container">
          <Description/>
          <Gallery/>
          <Why/>
          <Fruits title='Узбекские сухофрукты и орехи'/>
      </div>
    </div>
  )
}

export default Homepage