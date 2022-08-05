import { DELETE_ALL, POST_CART_SUCCESS, POST_SUCCESS } from "./actionType"

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
        case POST_SUCCESS:{
            return{
                ...state,
                cart:payload
            }
        }
        case DELETE_ALL: {
            return{
                ...state,
                cart:[]
            }
        }
        default: 
           return state
    }
}