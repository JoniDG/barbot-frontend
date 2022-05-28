import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Config } from '../components/Config'
import { Help } from '../components/Help'
import { Login } from '../components/Login'
import { Home } from '../views/Home'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>

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
                    </Routes>
                </ProtectedRoutes>
            }
            />
            <Route
                path="/login" element={<Login/>}
            />
        </Routes>
      </BrowserRouter>
  )
};

