export default (state,action) => {
    switch(action.type){
        case "ADD_TO_CART":
          if (!state.cart.find(item => item.id === action.payload.id)) {
            state.cart.push({
              ...action.payload,
              quantity: 1
            })
          }
    
          return {
            ...state,
            cart: [...state.cart]
          }
    
       
        default:
              return state

    }

}

      
