import React from 'react'
import Hero2 from '../Service/Hero2'
import AboutDescription from './AboutDescription'
import AppleInfo from './AppleInfo'
import './style.scss'
import Target from './Target'

const About = () => {
  return (
    <div className='about'>
        <Hero2 title='О нас'/>
        <div className="about__container">
            <AboutDescription/>
            <AppleInfo/>
            <Target/>
        </div>
    </div>
  )
}

export default About