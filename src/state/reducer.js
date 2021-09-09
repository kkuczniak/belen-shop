import actions from './actions';

export const initialState = {
  user: null,
  basket: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_BASKET:
      return {};
    case actions.DELETE_FROM_BASKET:
      return {};
    case actions.EMPTY_BASKET:
      return {};
    case actions.SET_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
