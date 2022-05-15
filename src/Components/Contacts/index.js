import React from 'react'
import Adress from './Adress'
import Hero3 from './Hero3'
import InfoContact from './InfoContact'
import Map from './Map'
import './style.scss'
const Contacts = () => {
  return (
      <div className="contacts">
          <Hero3 title='Контакты'/>
          <div className="contacts__container">
            <InfoContact/>
            <Adress/>
            <Map/>
          </div>
      </div>
  )
}

export default Contacts