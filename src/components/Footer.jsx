import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HOME_PAGE_ROUTE,
  RECIPES_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../utils/consts";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <Link className="footer__logo" to={HOME_PAGE_ROUTE}>
            <div className="header__logo">cook app</div>
          </Link>
          <div className="footer__links-box">
            
            <Link className="footer__links-item" to={RECIPES_PAGE_ROUTE}>
              <li className="footer__links-item">Рецепты</li>
            </Link>
            <Link className="footer__links-item" to={CONTACT_PAGE_ROUTE}>
              <li className="footer__links-item">Контакты</li>
            </Link>
            <Link className="footer__links-item" to={ABOUT_PAGE_ROUTE}>
              <li className="footer__links-item">О нас</li>
            </Link>
            <Link className="footer__links-item" to={SETTINGS_PAGE_ROUTE}>
              <li className="footer__links-item">Настройки</li>
            </Link>
          </div>
        </div>
        <div className="footer__top-right">
          <div className="footer__socials">
            <a href="!#" className="footer__socials-item">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="!#" className="footer__socials-item">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="!#" className="footer__socials-item">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bot">
        <div className="footer__bot-copyright">2024 © Все права защищены</div>
        
      </div>
      <div className="footer__bot-black"></div>
    </footer>
  );
}
