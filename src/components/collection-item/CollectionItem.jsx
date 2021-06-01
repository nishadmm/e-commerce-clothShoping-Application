import React from "react";
import { connect } from "react-redux";

import CustomButton from "../customButton/CustomButton";
import { addItem } from "../../redux/cart/CartAction";
import "./CollectioItems.style.scss";

const CollectionItem = ({item, addItem}) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {" "}
        Add to Cart{" "}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
