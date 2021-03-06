import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`shop/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl}) no-repeat center center/cover`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="sub-title">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
