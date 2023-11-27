import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/authContext';

interface AuthProps {
  allowedRoles: string[];
}

const AuthRole = ({ allowedRoles }: AuthProps) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  console.log('LOCATION', location);
  return allowedRoles.find((role) => auth?.role?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to={`/signin?redirect=${location.pathname}`} state={{ from: location }} replace />
  );
};

export default AuthRole;
