import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/selector';

const ProtectedRoute = ({ element: Component, isAdmin, ...rest }) => {
  const { isAuthenticated, user } = useSelector(authSelector);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If admin route and user is not admin, redirect to home
  if (isAdmin && user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  // If authenticated and (if admin, user is admin), render component
  return <Component {...rest} />;
};

export default ProtectedRoute;
