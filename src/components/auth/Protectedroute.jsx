// src/components/auth/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRole, children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  console.log('ProtectedRoute - Token:', token);
  console.log('ProtectedRoute - Role:', role);
  console.log('ProtectedRoute - AllowedRole:', allowedRole);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;