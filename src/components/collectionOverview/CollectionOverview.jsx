import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectShopCollections } from "../../redux/shop/ShopSelectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
};

CollectionOverview.propTypes = {
  collections: PropTypes.array.isRequired,
};

const mapStateProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateProps)(CollectionOverview);
