import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/ShopSelectors";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./Collection.style.scss";

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
