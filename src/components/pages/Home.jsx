import React from 'react'

import './Home.style.scss'

const Home = () => {
  return (
    <div className="homepage" >
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Caps</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
