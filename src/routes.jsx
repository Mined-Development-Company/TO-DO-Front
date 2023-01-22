import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export const Routers = () => {
    return (
        <>
            <Routes>
                <Route element={<LoginPage />} path="/" />
                <Route element={<RegisterPage />} path="/register" />
            </Routes>
        </>
    )
}