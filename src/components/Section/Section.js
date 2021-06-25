import React, { useState } from 'react';
import cx from 'classnames';
import './section.scss';
import MainImageWebp from '../../images/center-image-item-2x.webp';
import MainImagePng from '../../images/center-image-item-2x.png';
import LeftImageWebp from '../../images/left-image-item-2x.webp';
import LeftImagePng from '../../images/left-image-item-2x.png';
import RightImageWebp from '../../images/right-image-item-2x.webp';
import RightImagePng from '../../images/right-image-item-2x.png';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';

const Image = ({ alt, webp, png }) => {
  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <img src={png} alt={alt} />
    </picture>
  );
};

const Section = ({ bodyTitle, bodyDescription, pageKey }) => {
  const [isMainImgAnimationEnd, setMainImgAnimationEnd] = useState(false);
  return (
    <div className="section">
      <div className="section__wrapper">
        <div className="section__container">
          <div className="section__content">
            <div className="section__pre-title">
              {bodyTitle}
            </div>
            <div className="section__title">
             {bodyDescription}
            </div>
            <SubscriptionForm pageKey={pageKey} />
          </div>
        </div>
        <div
          className={cx('section__image-list', {
            'section__image-list--is-main-anim-end': isMainImgAnimationEnd,
          })}
        >
          <div className="section__image-item section__image-item--left">
            <Image png={LeftImagePng} webp={LeftImageWebp} alt="synq 1" />
          </div>
          <div
            className="section__image-item section__image-item--main"
            onAnimationEnd={() => setMainImgAnimationEnd(true)}
          >
            <Image png={MainImagePng} webp={MainImageWebp} alt="synq 2" />
          </div>
          <div className="section__image-item section__image-item--right">
            <Image png={RightImagePng} webp={RightImageWebp} alt="synq 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
