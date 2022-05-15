import React from 'react'
import './HeaderMenu.scss'

const HeaderMenu = (props) => {
  return (
    <div className={props.toggleBtn? 'header-menu header-menu__visible': 'header-menu'}>
        <div className="header-menu__links">
            <a href='/'>Дома</a>
            <a >Продукция</a>
            <a >Каталог</a>
            <a href='/service'>Услуги</a>
            <a href='/about'>О нас</a>
            <a href='/blog'>Блог</a>
            <a href='/contacts'>Контакты</a>
        </div>
    </div>
  )
}

export default HeaderMenu