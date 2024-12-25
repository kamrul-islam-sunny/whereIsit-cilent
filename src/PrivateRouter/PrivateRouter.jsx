import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="flex items-center justify-center h-screen">
            <span className="loading  loading-bars loading-lg"></span>
        </div>
    }

    if(user && user?.email)
    {
        return children;
    }

    return (
        <Navigate to={'/login'} state={location.pathname}>
            
        </Navigate>
    );
};

export default PrivateRouter;