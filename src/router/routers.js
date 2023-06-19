import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
  
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
      // Conditionally render AdminDashboard or redirect if not logged in
      isLoggedIn ? (
        <AdminDashboard />
      ) : (
        <Navigate to="/admin/login" />
      )
    ),
  },
  {
    path: '*',
    element: <div>This route does not exist</div>,
  },
]);

export default routes;
