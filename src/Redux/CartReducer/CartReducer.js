import { POST_CART_SUCCESS } from "./actionType"

const initCart = {
    cart:[]
}

export const CartReducer = (state = initCart , {type, payload}) => {
    switch(type){
        case POST_CART_SUCCESS : {
            return{
                ...state,
                cart:[...state.cart,payload]
            }
        }
        default: 
           return state
    }
}