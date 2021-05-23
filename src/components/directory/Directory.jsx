import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';

import './Directory.style.scss';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: 'CAPS',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
          id: 2,
          title: 'SNEAKERS',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
          id: 3,
          title: 'JACKETS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
          id: 4,
          title: 'WOMENS',
          size: 'large',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        },
        {
          id: 5,
          title: 'MENS',
          size: 'large',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
