import React from 'react';
import cx from 'classnames';
import './Loader.scss';

function Loader({ className }) {
  return (
    <div className={cx('loader', { [className]: !!className })}>
      <div className="loader-piece"></div>
      <div className="loader-piece"></div>
      <div className="loader-piece"></div>
      <div className="loader-piece"></div>
      <div className="loader-circle" />
    </div>
  );
}

export default Loader;
