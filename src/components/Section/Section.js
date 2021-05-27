import React from "react";
import "./section.scss";
import MainImage from "../../images/center-image-item.webp";
import LeftImage from "../../images/left-image-item.webp";
import RightImage from "../../images/right-image-item.webp";

const Section = () => (
  <div className="section">
    <div className="section__container">
      <div className="section__content">
        <div className="section__pre-title">Bet Together!</div>
        <div className="section__title">
          Wants <span>to be the first</span>? Subscribe to the newsletter and be
          aware of all the most favorable sport odds.
        </div>
        <form className="section__form">
          <input
            type="email"
            className="section__form__input"
            placeholder="Enter your e-mail"
          />
          <button className="section__form__button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="section__image-list">
      <div className="section__image-item section__image-item--left">
        <img src={LeftImage} alt="synq 1" />
      </div>
      <div className="section__image-item section__image-item--main">
        <img src={MainImage} alt="synq 2" />
      </div>
      <div className="section__image-item section__image-item--right">
        <img src={RightImage} alt="synq 3" />
      </div>
    </div>
  </div>
);

export default Section;
