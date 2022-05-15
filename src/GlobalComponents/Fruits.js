import React from 'react'
import './Fruits.scss'
import Tilt from 'react-parallax-tilt'
const Fruits = (props) => {
  return (
    <div className="fruits">
          <h2 className="fruits__title">{props.title}</h2>
          <div className="fruits__items">
            
            <Tilt>
              <div className="fruits__item">
                <div className="fruits__item-img">
                  <img src="assets/img/fruit1.png" alt="fruit-image" />
                </div>
                <div className="fruits__item-info">
                  <h3 className="fruits__item-name">Сухофрукты</h3>
                  <p className="fruits__item-desc">
                    Предоставляем большой выбор сухофруктов: курага, изюм,
                    компотные смеси, чернослив.
                  </p>
                </div>
              </div>
            </Tilt>
           <Tilt>
           <div className="fruits__item">
              <div className="fruits__item-img">
                <img src="assets/img/fruit2.png" alt="fruit-image" />
              </div>
              <div className="fruits__item-info">
                <h3 className="fruits__item-name">Орехи</h3>
                <p className="fruits__item-desc">
                  Поставляем орехи оптом. Ассортимент постоянно расширяется.
                </p>
              </div>
            </div>
           </Tilt>
            <Tilt>
              <div className="fruits__item">
                <div className="fruits__item-img">
                  <img src="assets/img/fruit3.png" alt="fruit-image" />
                </div>
                <div className="fruits__item-info">
                  <h3 className="fruits__item-name">Бобовые</h3>
                  <p className="fruits__item-desc">
                    Осуществляем оптовую продажу фасоли и маша. Вся продукция
                    свежего урожая, колибрована.
                  </p>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className="fruits__item">
                <div className="fruits__item-img">
                  <img src="assets/img/fruit4.png" alt="fruit-image" />
                </div>
                <div className="fruits__item-info">
                  <h3 className="fruits__item-name">Сухофрукты</h3>
                  <p className="fruits__item-desc">
                    Предлагаем большой выбор свежих фруктов, только что собранных
                    с сада.
                  </p>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className="fruits__item">
                <div className="fruits__item-img">
                  <img src="assets/img/fruit5.png" alt="fruit-image" />
                </div>
                <div className="fruits__item-info">
                  <h3 className="fruits__item-name">Овощи</h3>
                  <p className="fruits__item-desc">
                    Осуществляем поставку свежих овощей собранных с полей.
                  </p>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className="fruits__item">
                <div className="fruits__item-img">
                  <img src="assets/img/fruit6.png" alt="fruit-image" />
                </div>
                <div className="fruits__item-info">
                  <h3 className="fruits__item-name">Бахчевые культуры</h3>
                  <p className="fruits__item-desc">
                    Осуществляем оптовую продажу бахчевых культур.
                  </p>
                </div>
              </div>
            </Tilt>

          </div>
        </div>
  )
}

export default Fruits