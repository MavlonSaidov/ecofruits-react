import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.scss";

const HeaderMenu = (props) => {
    return (
        <div
            className={
                props.toggleBtn
                    ? "header-menu header-menu__visible"
                    : "header-menu"
            }
        >
            <div className="header-menu__links">
                <Link to="/" onClick={(e) => props.setToggleBtn(false)}>
                    Дома
                </Link>
                <Link>Продукция</Link>
                <Link>Каталог</Link>
                <Link to="/service" onClick={(e) => props.setToggleBtn(false)}>
                    Услуги
                </Link>
                <Link to="/about" onClick={(e) => props.setToggleBtn(false)}>
                    О нас
                </Link>
                <Link to="/blog" onClick={(e) => props.setToggleBtn(false)}>
                    Блог
                </Link>
                <Link to="/contacts" onClick={(e) => props.setToggleBtn(false)}>
                    Контакты
                </Link>
            </div>
        </div>
    );
};

export default HeaderMenu;
