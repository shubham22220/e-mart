const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    //add item to cart
    case "ADDITEM":
      //Check if Product is Alredy Exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      // eslint-disable-next-line
      break;
    ///add item
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        //reduce item from cart
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      
      break;

    default:
      return state;
      
      break;
  }
};

export default handleCart;