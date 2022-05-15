import React from 'react'
import './Description.scss'

const Description = () => {
  return (
        <div className="desc">
          <div className="desc__info">
            <h3 className="desc__title">Сухофрукты очень питательны</h3>
            <p className='desc__text'>
              Один кусочек сухофрукта содержит примерно такое же количество
              питательных веществ, как и свежий фрукт, но упакован в гораздо
              меньшую упаковку.
            </p>
            <p className='desc__text'>
              Одна порция может обеспечить большой процент рекомендуемой
              суточной нормы многих витаминов и минералов, таких как фолиевая
              кислота.
            </p>
          </div>
        </div>
  )
}

export default Description