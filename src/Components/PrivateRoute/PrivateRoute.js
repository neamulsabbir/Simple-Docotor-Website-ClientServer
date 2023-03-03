import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import React from 'react'
import { AuthContext } from "../../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return (
            <div class="flex items-center justify-center space-x-2">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
          <span class="visually-hidden">...</span>
        </div>
      </div>
      )
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRoute;