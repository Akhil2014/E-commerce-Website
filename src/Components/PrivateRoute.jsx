import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 const isAuth = useSelector((s) => s.AuthReducer.isAuth)
 const location = useLocation();
    if(!isAuth){
        return <Navigate to="/login" state={{from:location}} replace />
    }
  return children
}

export default PrivateRoute