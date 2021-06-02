import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { selectShopCollections } from '../../redux/shop/ShopSelectors'

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
};

ShopPage.propTypes = {
  collections: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage)