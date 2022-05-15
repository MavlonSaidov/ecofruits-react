import React from 'react'
import './Target.scss'

const Target = () => {
  return (
    <div className='target'>
        <div className="target__left">
            <img src="assets/img/target.jpg" alt="factory-image" />
        </div>
        <div className="target__right">
            <h4 className="target__title">Наша цель</h4>
            <p className="target__text">
            Наша цель – обеспечить вас качественной и безопасно выращенной культурой и предоставить как можно больше вариантов продукции. 
            </p>
        </div>
    </div>
  )
}

export default Target