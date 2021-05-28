import React from "react";
import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo">
        <div className="footer__logo__icon" />
        <div className="footer__logo__content">
          <div className="footer__logo__name">Synq</div>
          <div className="footer__logo__slogan">
            Connects sport fans to what they love
          </div>
        </div>
      </div>
      <div className="footer__text">
        Design by{" "}
        <a
          href="https://flatstudio.co/"
          target="blank"
          className="footer__link"
        >
          Flatstudio
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
