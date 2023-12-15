// import { ReactNode } from "react";
// import { Navigate, useLocation } from "react-router-dom";

// interface PrivateRouteProps {
//     children: ReactNode;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//     const loggedIn = true;
//     const location = useLocation();

//     if (loggedIn) {
//         return children;
//     }

//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default PrivateRoute;


import React from 'react';

const PrivateRouter = () => {
    return (
        <div>
            Private
        </div>
    );
};

export default PrivateRouter;