import React from 'react'
import Fruits from '../../GlobalComponents/Fruits'
import Content from './Content'
import Hero2 from './Hero2'
import ServiceDescription from './ServiceDescription'
import './style.scss'
const Service = () => {
  return (
      <div className="service">
         <Hero2 title='Услуги'/>
         <div className="container">
         <ServiceDescription/>
         <Content/>
         <Fruits title='Продукция'/>
         </div>
      </div>
  )
}

export default Service