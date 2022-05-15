import React, { useState } from 'react'
import './Header.scss'
import HeaderMenu from './HeaderMenu'

const Header = () => {
    const [toggleBtn ,setToggleBtn] = useState(false)
  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__inner">
                <div className="header__logo">
                    <img src="assets/img/logo.png" alt="logo" />
                </div>
                <HeaderMenu toggleBtn={toggleBtn}/>
                <div className="header__right">
                    <div className="header__lang">
                        <div className="sl-nav">
                        <ul>
                            <li>
                            <label>Eng</label>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <div className="triangle"></div>
                            <ul>
                                <li>
                                <i className="sl-flag flag-usa"><div id="germany"></div></i>
                                <span className="active">Eng</span>
                                </li>
                                <li>
                                <i className="sl-flag flag-de"><div id="germany"></div></i>
                                <span>Ru</span>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="header__search">
                        <img src="assets/icons/Search.png" alt="Search-icon" />
                    </div>
                    <div id='nav-icon1' className={toggleBtn? 'header__burger open': 'header__burger'} onClick={e => setToggleBtn(!toggleBtn)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Header