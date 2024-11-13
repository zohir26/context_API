import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Layout from './Route/Layout';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import AuthProvider from './Providers/AuthProvider';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Profile from './profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile> </PrivateRoute>
      }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
