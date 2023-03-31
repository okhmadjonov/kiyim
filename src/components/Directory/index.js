import React from "react";
import "./styles.scss";
import shopmen from "../../assets/images/shopMens.jpg";
import shopwomen from "../../assets/images/shopWomens.jpg";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${shopwomen})`,
          }}>
          <a className="item__link" href="/">
            Shop Womens
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${shopmen})`,
          }}>
          <a className="item__link" href="/">
            Shop Mens
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
