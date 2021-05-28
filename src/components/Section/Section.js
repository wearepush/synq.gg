import React from "react";
import "./section.scss";

import MainImageWebp from "../../images/center-image-item-2x.webp";
import MainImagePng from "../../images/center-image-item-2x.png";
import LeftImageWebp from "../../images/left-image-item-2x.webp";
import LeftImagePng from "../../images/left-image-item-2x.png";
import RightImageWebp from "../../images/right-image-item-2x.webp";
import RightImagePng from "../../images/right-image-item-2x.png";

const Image = ({ alt, webp, png }) => {
  return (
    <picture>
      <source type="image/webp" srcset={webp} />
      <img src={png} alt={alt} />
    </picture>
  );
};

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
        <Image png={LeftImagePng} webp={LeftImageWebp} alt="synq 1" />
      </div>
      <div className="section__image-item section__image-item--main">
        <Image png={MainImagePng} webp={MainImageWebp} alt="synq 2" />
      </div>
      <div className="section__image-item section__image-item--right">
        <Image png={RightImageWebp} webp={RightImagePng} alt="synq 3" />
      </div>
    </div>
  </div>
);

export default Section;
