import { DELETE_ALL, POST_CART_FAILURE, POST_CART_REQUEST, POST_CART_SUCCESS, POST_SUCCESS } from "./actionType"

export const cartRequest = () => {
    return {
        type:POST_CART_REQUEST,
    }
}
export const cartSuccess = (payload) => {
    return {
        type:POST_CART_SUCCESS,
        payload,
    }
}
export const cartFailure = () => {
    return {
        type:POST_CART_FAILURE,
    }
}
export const cartArrayPost = (payload) => {
    return {
        type:POST_SUCCESS,
        payload,
    }
}

export const deleteCart = () => {
    return{
        type:DELETE_ALL
    }
}