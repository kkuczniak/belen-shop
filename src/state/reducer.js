import actions from './actions';

export const initialState = {
  user: null,
  basket: [],
  products: [
    {
      id: '1',
      title: 'Hood',
      price: 1500,
      image:
        'https://balenciaga.dam.kering.com/m/6c23b292539cbb6e/Small-578135TIV531070_D.jpg?v=3',
      size: 'L',
    },
    {
      id: '2',
      title: 'Hoodie white',
      price: 1200,
      image:
        'https://balenciaga.dam.kering.com/m/3aec9fe134bcd02b/Small-662424TKVF89085_D.jpg?v=1',
      size: 'L',
    },
    {
      id: '3',
      title: 'Hoodie',
      price: 1200,
      image:
        'https://balenciaga.dam.kering.com/m/6c23b292539cbb6e/Small-578135TIV531070_D.jpg?v=3',
      size: 'L',
    },
    {
      id: '4',
      name: 'Hoodie',
      price: 1200,
      image:
        'https://balenciaga.dam.kering.com/m/3aec9fe134bcd02b/Small-662424TKVF89085_D.jpg?v=1',
      size: 'L',
    },
    {
      id: '5',
      title: 'Hoodie',
      price: 1200,
      image:
        'https://balenciaga.dam.kering.com/m/3aec9fe134bcd02b/Small-662424TKVF89085_D.jpg?v=1',
      size: 'L',
    },
    {
      id: '6',
      title: 'Hoodie',
      price: 1200,
      image:
        'https://balenciaga.dam.kering.com/m/6c23b292539cbb6e/Small-578135TIV531070_D.jpg?v=3',
      size: 'L',
    },
    {
      id: '7',
      title: 'Hoodie',
      price: 1700,
      image:
        'https://balenciaga.dam.kering.com/m/6c23b292539cbb6e/Small-578135TIV531070_D.jpg?v=3',
      size: 'L',
    },
    {
      id: '8',
      title: 'Hoodie',
      price: 1400,
      image:
        'https://balenciaga.dam.kering.com/m/6c23b292539cbb6e/Small-578135TIV531070_D.jpg?v=3',
      size: 'L',
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actions.DELETE_FROM_BASKET: {
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) newBasket.splice(index, 1);
      else console.warn(`Can't remove the product`);
      return {
        ...state,
        basket: newBasket,
      };
    }
    case actions.EMPTY_BASKET:
      return {};
    case actions.SET_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
