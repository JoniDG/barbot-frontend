import { Home } from '@mui/icons-material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Config } from '../components/Config'
import { Help } from '../components/Help'
import { NavBar } from '../components/NavBar'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <NavBar/>
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
      </BrowserRouter>
  )
}
