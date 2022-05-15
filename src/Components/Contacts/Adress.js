import React from 'react'
import './Adress.scss'
import Form from './Form'

const Adress = () => {
  return (
    <div className='adress'>
       <div className="adress__left">
        <h4 className="adress__label">Адрес</h4>
          <p className="adress__text">
          Республика Узбекистан, г.Ташкент, Шайхонтохурский район, улица Лайлитогон 1, 141300, Самаркандская область, Пайарикский район, улица Самарканд 52.
          </p>
          <div className="adress__case">
              <div className="adress__number">+998 71 200 0224</div>
              <div className="adress__email">www.greendesert.uz</div>
              <div className="adress__number">+998 94 602 0004</div>
              <div className="adress__email">sales@ecofruit.uz</div>
              <div className="adress__number">+998 97 766 3050</div>
              <div className="adress__email"> info@ecofruit.uz</div>
          </div>
       </div>

       <div className="adress__right">
         <Form/>
       </div>
    </div>
  )
}

export default Adress