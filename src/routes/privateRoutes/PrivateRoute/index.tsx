import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Navigate, Outlet } from 'react-router-dom';

// import { useAuth } from '@modules/auth/hooks/auth';

// import { PublicPathsEnum } from '../../publicRoutes/publicPaths';

const PrivateRoute: React.FC = () => (
  // const { user } = useAuth();

  // if (!user) {
  //   return <Navigate to={PublicPathsEnum.LOGIN} replace />;
  // }

  <Outlet />
);
export default PrivateRoute;
