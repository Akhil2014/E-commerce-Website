import { GET_API_FAILURE, GET_API_REQUEST, GET_API_SUCCESS } from "./actionType"


const initState = {
    products: [],
    isLoading:false,
    isError:false
}

export const ApiReducer = (oldState = initState, {type,payload}) => {
    switch(type){
        case GET_API_REQUEST : {
            return{
                ...oldState,
                isLoading:true,
                isError:false,
            }
        }
        case GET_API_SUCCESS : {
            return{
                ...oldState,
                isLoading:false,
                isError:false,
                products:payload
            }
        }
        case GET_API_FAILURE : {
            return{
                ...oldState,
                isError:true,
                isLoading:false
            }
        }
        default : 
           return oldState
    }
}