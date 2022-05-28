import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../views/Home';
import { Config } from '../views/Config'
import { Register } from '../views/Register';
import { Login } from '../views/Login';
import { Help } from '../views/Help';

import { ProtectedRoutes } from './ProtectedRoutes'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route
                path="/login" element={<Login/>}
            />
            <Route
                path="/register" element={<Register/>}
            />
            <Route 
            path="*" 
            element={
                <ProtectedRoutes>
                    <Routes>
                        <Route
                            path="/" element={<Home/>}
                        />
                        <Route
                            path="/settings" element={<Config/>}
                        />
                        <Route
                            path="/help" element={<Help/>}
                        />
                        <Route
                            path="*" element={<h1>NOT FOUND</h1>}
                        />
                    </Routes>
                </ProtectedRoutes>
            }
            />
        </Routes>
      </BrowserRouter>
  )
};

