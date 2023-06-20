import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import Orders from '../component/admin/Orders';
import CreatProduct from '../component/admin/CreatProduct';
import Products from '../component/admin/Products';

const isLoggedIn= localStorage.getItem('token')
console.log(isLoggedIn)

const checkAdminAccess = (isLoggedIn) =>

  isLoggedIn ?
    <AdminDashboard />    
  : <AdminLogin />;

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    exact: true,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/admin/login',
    element: (
      // Conditionally render AdminDashboard or redirect if not logged in
      !isLoggedIn ? (
        <AdminLogin />
      ) : (
        <Navigate to="/admin/dashboard" />
      )
    ),
  },
  {
    path: '/admin/dashboard',
    element: (
      isLoggedIn ? (
        <AdminDashboard />
      ) : (
        <Navigate to="/admin/login" />
      )
    ),
    children: [
      {
        path: 'orders',
        element:<Orders/>,
      },
      {
        path: 'products',
        element:<Products/>,
      },   {
        path: 'creatproduct',
        element:<CreatProduct/>,
      },
    ]
  },
  {
    path: '*',
    element: <div>This route does not exist</div>,
  },
]);

export default routes;
