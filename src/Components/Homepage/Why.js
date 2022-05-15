import React from 'react'
import './Why.scss'

const Why = () => {
  return (
    <div className="why">
          <h2 className="why__title">Почему мы</h2>

          <div className="why__items">
            <div className="why__item">
              <div className="why__item-icon">
                <img src="assets/icons/why1.svg" alt="item-icon" />
              </div>
              <p className="why__item-text">Гарантия высокого качества</p>
            </div>

            <div className="why__item">
              <div className="why__item-icon">
                <img src="assets/icons/why2.svg" alt="item-icon" />
              </div>
              <p className="why__item-text">Вкусные и полезные продукты</p>
            </div>

            <div className="why__item">
              <div className="why__item-icon">
                <img src="assets/icons/why3.svg" alt="item-icon" />
              </div>
              <p className="why__item-text">Сертифицированная продукция</p>
            </div>

            <div className="why__item">
              <div className="why__item-icon">
                <img src="assets/icons/why4.svg" alt="item-icon" />
              </div>
              <p className="why__item-text">Упаковка</p>
            </div>

            <div className="why__item">
              <div className="why__item-icon">
                <img src="assets/icons/why5.svg" alt="item-icon" />
              </div>
              <p className="why__item-text">Экспорт</p>
            </div>

            <div className="why__item">
              <div className="why__item-icon">
                <img src="assets/icons/why6.svg" alt="item-icon" />
              </div>
              <p className="why__item-text">Конкурентоспособные цены</p>
            </div>
          </div>
        </div>
  )
}

export default Why