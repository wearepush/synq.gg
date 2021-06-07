import React from 'react';
import cx from 'classnames';
import './Loader.scss';

function Loader({ className }) {
  return (
    <div class={cx('loader', { [className]: !!className })}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
