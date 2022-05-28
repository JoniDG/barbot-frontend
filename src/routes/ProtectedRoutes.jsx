import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { getSession } from '../services/sessionsService';

export const ProtectedRoutes = ({children}) => {
    const [route,setRoute] = useState(null);
    const token = localStorage.getItem("token");
    getSession(token)
    .then(()=>{
        setRoute(children);
    })
    .catch(()=>{
        setRoute(<Navigate
        to={'/login'}
        />)
    })
    return route
}