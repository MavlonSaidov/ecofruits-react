import React from 'react'
import './Content.scss'

const Content = () => {
  return (
    <div className='content '>
        <div className="container">
            <div className="content__inner">
            <div className="content__img">
            <img src="assets/img/services1.jpg" alt="services-image" />
        </div>
        <div className="content__info">
            <h3 className="content__title">Технология</h3>
            <div className="content__text">
            Мы всегда стараемся использовать новейшее высокотехнологичное оборудование, чтобы своевременно предоставлять нашим клиентам безопасный продукт. Стоит отметить, что в нашей компании используется лазерный грейдер для сортировки орехов, бобов и т.д. Он разработан как сортировщик цвета и формы, который дает возможность получать высококачественный продукт. Также, здесь находится отдел упаковки на фотографиях.
            </div>
        </div>
        
        <div className="content__info certificate">
            <h3 className="content__title">Сертификаты</h3>
            <div className="content__text">
            Выступая прямыми экспортерами с 2009 года работая более чем с 17 странами мира, мы можем предложить всему миру наиболее выгодные условия сотрудничества и высокое качество экспортируемого товара. Участвуем во многих выставках мира и являемся членом ассоциации «Specialty food association» Компания успешный обладатель международных стандартов ISO 9001:2015, ISO 22000:2018 и GlobalG.А.Р.
            </div>
        </div>

        <div className="content__img">
            <img src="assets/img/services2.jpg" alt="services-image" />
        </div>
            </div>
        </div>
    </div>
  )
}

export default Content