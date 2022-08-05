import { GET_API_FAILURE, GET_API_REQUEST, GET_API_SUCCESS } from "./actionType"
import axios from "axios";

export const apiRequest = () => {
    return{
        type:GET_API_REQUEST
    }
}

export const apiSuccess = (payload) => {
    return{
        type:GET_API_SUCCESS,
        payload
    }
}

export const apiFailure = () => {
    return{
        type:GET_API_FAILURE
    }
}

export  const getData = () => (dispatch) => {
    dispatch(apiRequest());
    return axios
      .get("https://fakestoreapi.com/products")
      .then((data) => dispatch(apiSuccess(data.data)))
      .catch((e) => dispatch(apiFailure()));
  };