import React from "react";
import HeaderLogo from "../../images/logo/logo_icon.inline.svg";
import "./header.scss";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <HeaderLogo className="header__logo__icon" />
        <div className="header__logo__content">
          <div className="header__logo__name">Synq</div>
          <div className="header__logo__slogan">
            Connects sport fans to what they love
          </div>
        </div>
      </div>
      <div className="header__button">Soon on iOS & Android</div>
    </div>
  </header>
);

export default Header;
