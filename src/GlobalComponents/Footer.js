import React from "react";
import Email from "./Email";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__bg">
                    <img src="assets/img/endingBanner.png" alt="fruits-image" />
                </div>
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__info">
                            <div className="footer__info-logo">
                                <img
                                    src="assets/img/footerLogo.svg"
                                    alt="logo"
                                />
                            </div>
                            <p className="footer__info-adress">
                                Республика Узбекистан, г.Ташкент,
                                Шайхонтохурский район, улица Лайлитогон 1,
                                141300, Самаркандская область, Пайарикский
                                район, улица Самарканд 52.
                            </p>
                            <div className="footer__info-contacts">
                                <div className="footer__info-phone">
                                    +998 71 200 0224
                                </div>
                                <div className="footer__info-link">
                                    www.greendesert.uz
                                </div>
                                <div className="footer__info-phone">
                                    +998 94 602 0004
                                </div>
                                <div className="footer__info-link">
                                    sales@ecofruit.uz
                                </div>
                                <div className="footer__info-phone">
                                    +998 97 766 3050
                                </div>
                                <div className="footer__info-link">
                                    info@ecofruit.uz
                                </div>
                            </div>
                        </div>

                        <div className="footer__right">
                            <div className="footer__rightTop">
                                <div className="footer__links">
                                    <h3 className="footer__title">
                                        Быстрые ссылки
                                    </h3>
                                    <ul className="footer__lists">
                                        <li className="footer__list">
                                            <a href="/contacts">Контакты</a>
                                        </li>
                                        <li className="footer__list">
                                            <a href="/service">Услуги</a>
                                        </li>
                                        <li className="footer__list">
                                            <a href="#">Каталог</a>
                                        </li>
                                        <li className="footer__list">
                                            <a href="#">Продукция</a>
                                        </li>
                                        <li className="footer__list">
                                            <a href="/about">О нас</a>
                                        </li>
                                        <li className="footer__list">
                                            <a href="/blog">Блог</a>
                                        </li>
                                    </ul>
                                </div>

                                <h3 className="footer__label">
                                    Подписывайтесь на нас
                                </h3>
                            </div>
                            <Email />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
