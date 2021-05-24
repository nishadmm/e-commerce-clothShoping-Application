import React from 'react';

import './CollectioItems.style.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
      />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    </div>
  );
};

export default CollectionItem;
