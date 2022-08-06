import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./action"


export const loginRequest= () => {
    return{
        type:POST_LOGIN_REQUEST
    }
}

export const loginSuccess = (payload) => {
    return{
        type:POST_LOGIN_SUCCESS,
        payload
    }
}

export const loginFailure= () => {
    return{
        type:POST_LOGIN_FAILURE
    }
}