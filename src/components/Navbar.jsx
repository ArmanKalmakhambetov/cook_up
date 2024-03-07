import React from "react";
import { Link } from "react-router-dom";

import {
  HOME_PAGE_ROUTE,
  RECIPES_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../utils/consts";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__box">
        <div className="header__left">
          <ul className="header__left-list">
            <Link to={HOME_PAGE_ROUTE}>
              <li className="header__logo">logo</li>
            </Link>
          </ul>
          <div className="header__list">
            <Link to={RECIPES_PAGE_ROUTE}>
              <li className="header__list-item">Рецепты</li>
            </Link>
            <Link to={CONTACT_PAGE_ROUTE}>
              <li className="header__list-item">Контакты</li>
            </Link>
            <Link to={ABOUT_PAGE_ROUTE}>
              <li className="header__list-item">О нас</li>
            </Link>
            <Link to={SETTINGS_PAGE_ROUTE}>
              <li className="header__list-item">Настройки</li>
            </Link>
          </div>
        </div>
        <div className="header__right"></div>
      </div>
    </header>
  );
}
