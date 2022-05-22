import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
    const user = localStorage.getItem("user");
    if(user!==null){
        return children;
    }else{
        return <Navigate
        to={'/login'}
        />
    }
}