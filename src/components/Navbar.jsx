import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  HOME_PAGE_ROUTE,
  RECIPES_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../utils/consts";

export default function Navbar() {
  return (
    <header className="header sticky">
      <div className="header__black-top"></div>
      <div className="header__box ">
        <div className="header__left">
          <ul className="header__left-list">
            <Link to={HOME_PAGE_ROUTE}>
              <li className="header__logo">cook app</li>
            </Link>
          </ul>
          <div className="header__list">
            <Link className="header__list-item" to={RECIPES_PAGE_ROUTE}>
              <li className="header__list-item">Рецепты</li>
            </Link>
            <Link className="header__list-item" to={CONTACT_PAGE_ROUTE}>
              <li className="header__list-item">Контакты</li>
            </Link>
            <Link className="header__list-item" to={ABOUT_PAGE_ROUTE}>
              <li className="header__list-item">О нас</li>
            </Link>
            <Link className="header__list-item" to={SETTINGS_PAGE_ROUTE}>
              <li className="header__list-item">Настройки</li>
            </Link>
          </div>
        </div>

        <button className="header__right">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </header>
  );
}
