import React,{useReducer,createContext} from "react";
import AppReducer from "../reducer/AppReducer";

const initialState = {
    cart: []
}


export const CartContext = createContext(initialState);

export const CartProvider =({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);


    const AddToCart = (product) =>{
        dispatch(
            {
                type:"ADD_TO_CART",
                payload:product
            }
        )
        console.log(state);
    }
    return(
        <CartContext.Provider value={{cart:state.cart,AddToCart}}>
            {children}
        </CartContext.Provider>
    )
}