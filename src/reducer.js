export const initialState = {
    basket: [],
    user: null,
    loginStatus: false
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action){
    console.log(action)


    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
        //state.basket.push(action.item)

      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];

        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}): Not in basket!`
          );
        }

        return {
          ...state,
          basket: newBasket,
        };

      case "SET_USER":
          return {
            ...state,
            user: action.user,
          };

      case "LOGGED_IN":
        return{
          ...state,
          loginStatus: action.loginStatus
        }

      default:
        return state;
    }
}

export default reducer