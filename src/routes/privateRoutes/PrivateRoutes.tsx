import { Route } from 'react-router-dom';

import HomeRoutes from '@modules/home/routes';

import PrivateLayout from './layout';

const PrivateRoutes = <Route element={<PrivateLayout />}>{HomeRoutes}</Route>;

export default PrivateRoutes;
