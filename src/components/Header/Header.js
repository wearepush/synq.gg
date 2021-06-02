import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import HeaderLogo from '../../images/logo/logo_icon.inline.svg';
import './header.scss';

const Header = () => {
  const headerRef = useRef();
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const scrollHandler = (e) => {
      const headerHeight = header.getBoundingClientRect().height;
      const scrollY = window.scrollY;
      if (scrollY >= headerHeight && !isTransparent) {
        setIsTransparent(true);
      } else if (scrollY < headerHeight && isTransparent) {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [isTransparent]);

  return (
    <header
      ref={headerRef}
      className={cx('header', {
        'header--is-transparent': isTransparent,
      })}
    >
      <div className="header__container">
        <div className="header__logo">
          <HeaderLogo className="header__logo__icon" />
          <div className="header__logo__content">
            <div className="header__logo__name">Synq</div>
            <div className="header__logo__slogan">Connects sport fans to what they love</div>
          </div>
        </div>
        <div className="header__button">Soon on iOS & Android</div>
      </div>
    </header>
  );
};

export default Header;
