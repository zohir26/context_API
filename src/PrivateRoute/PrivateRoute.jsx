import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user,loading}= useContext(AuthContext);
   if (user) {
   return children;
     }
     if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
       }
   return (
    <Navigate to ='/login'></Navigate>
    );

};

export default PrivateRoute;