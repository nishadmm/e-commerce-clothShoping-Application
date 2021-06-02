import ShopData from './ShopData'

const initislState = {
  collections: ShopData
};

const ShopReducer = (state = initislState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ShopReducer;
