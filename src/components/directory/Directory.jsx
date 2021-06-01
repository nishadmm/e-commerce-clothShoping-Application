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
          linkUrl: 'hats',
        },
        {
          id: 2,
          title: 'SNEAKERS',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'sneakers',
        },
        {
          id: 3,
          title: 'JACKETS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'jackets',
        },
        {
          id: 4,
          title: 'WOMENS',
          size: 'large',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          linkUrl: 'womens',
        },
        {
          id: 5,
          title: 'MENS',
          size: 'large',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          linkUrl: 'mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSections }) => (
          <MenuItem
            key={id} {...otherSections}
          />
        ))}
      </div>
    );
  }
}
