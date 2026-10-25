import React from 'react';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import ErrorBoundary from '@errors/ErrorBoundary';
// import { useAuth } from '@modules/auth/hooks/auth';
import PrivateRoutes from './privateRoutes/PrivateRoutes';
import PublicRoutes from './publicRoutes/PublicRoutes';
import { PrivatePathsEnum } from './privateRoutes/privatePaths';

const ProtectedRoute = () => (
  // const { user } = useAuth();

  // if (!user) {
  //   return <Navigate to="/app/login" replace />;
  // }

  <Navigate to={PrivatePathsEnum.COURSE} replace />
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorBoundary />} path="/app">
        {PrivateRoutes}
        {PublicRoutes}
      </Route>
      <Route path="/*" element={<ProtectedRoute />} />
    </>
  )
);

const Router: React.FC = () => <RouterProvider router={router} />;

export default Router;
