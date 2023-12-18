import React, { ReactElement } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/authSlice';

interface Props {
    children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const token = useSelector(selectToken)
    const location = useLocation();

    if (token) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;