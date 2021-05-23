import React from 'react';

import './Menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='sub-title'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
