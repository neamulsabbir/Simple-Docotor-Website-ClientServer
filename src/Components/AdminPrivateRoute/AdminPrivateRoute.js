import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import React from 'react'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../customHook/useAdmin/useAdmin";


const AdminPrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin,adminLoading] = useAdmin(user?.email)
    
    if(adminLoading){
        return (
            <div class="flex items-center justify-center space-x-2">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
          <span class="visually-hidden">...</span>
        </div>
      </div>
      )
    }

    if(!user && !isAdmin){
        return <Navigate to='/login'></Navigate>
    }
    return children;
    
};

export default AdminPrivateRoute;