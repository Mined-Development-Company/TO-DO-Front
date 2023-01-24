import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';

export const Routers = () => {
    const { isLogged } = useContext(AuthContext);

    return (
        <>
            <Routes>
                {
                    !isLogged ? (
                        <>
                            <Route element={<LoginPage />} path="/" />
                            <Route element={<RegisterPage />} path="/register" />
                            <Route element={<Navigate to="/" replace />} path="*" />
                        </>
                    ) : (
                        <>
                            <Route element={<DashboardPage />} path="/dashboard" />
                            <Route element={<Navigate to="/dashboard" replace />} path="*" />
                        </>
                    )
                }
            </Routes>
        </>
    )
}