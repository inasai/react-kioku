import { useSelector } from 'react-redux';
import React from 'react';

import mail from '../assets/img/gmail.svg';
import Logo from '../assets/img/kioku-logo.svg';

function Footer() {
  return (
    <div className="hefooterader">
      <div className="container">
        <div className="footer__inner">
          <div className="header__logo">
            <img width="53" src={Logo} alt="KiokuLogo" />
            <div>
              <p>
                Kioku
                <br />
                Technology
              </p>
            </div>
          </div>
          <ul className="social">
            <li className="social-item">
              <a href="#" className="social-item__link">
                <span>пошта: tribute.uved@gmail.com</span>
              </a>
            </li>
            <li className="contacts-item">
              <a href="tel:+380953609379" className="contacts-item__link">
                телефон: +380953609379
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
