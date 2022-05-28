import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext'

export const PublicRoute = ({children}) => {
    const user = useContext(AuthContext);
    if(user!==null){
      return <Navigate
      to={'/home'}
      />
    }else{
      return children;
    }
}