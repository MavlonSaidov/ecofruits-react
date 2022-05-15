import React from 'react'
import './AppleInfo.scss'
const AppleInfo = () => {
  return (
    <div className='apple-info'>
        <div className="apple-info__image">
            <img src="assets/img/apples.png" alt="fruits-image" />
        </div>
        <div className="apple-info__box">
            <div className="apple-info__description">
                <p>Компания предоставляет большой ассортимент экологически чистых продуктов более 150 позиций сухофруктов, бобовых и орехов, а цены конкурентоспособные. Процесс подготовки продуктов включает: выращивание, сушку, переработку и фасовку. Организация занимается упаковкой различной готовой продукции для сети супермаркетов.
                </p>
            </div>
            <div className="apple-info__douthers">
                <h4 className="apple-info__douthers-title">Eco Fruit – это группа компания, которая включает в себе 3 компании:</h4>
                    <div className="apple-info__douthers-items">
                        <span className="apple-info__douthers-item">
                            ООО «GreenDesert»
                        </span>
                        <span className="apple-info__douthers-item">
                        ООО «Khorezmgardencels»
                        </span>
                        <span className="apple-info__douthers-item">
                        СП ООО «Hankagroimpex».
                        </span>
                    </div>
            </div>
        </div>
        <div className="apple-info__image">
            <img src="assets/img/apples.png" alt="fruits-image" />
        </div>
    </div>
  )
}

export default AppleInfo