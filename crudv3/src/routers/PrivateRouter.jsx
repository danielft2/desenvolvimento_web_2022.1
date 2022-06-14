import { Outlet, Navigate } from 'react-router-dom';

export function PrivateRouter({ isLogged }) {
    return isLogged ? <Outlet /> : <Navigate to="/" />
}