import { Route } from 'react-router-dom';

import HomeRoutes from '@modules/Home/routes';

import CoursesRoutes from '@modules/Courses/routes';
import PrivateLayout from './layout';

const PrivateRoutes = (
  <Route element={<PrivateLayout />}>
    {HomeRoutes}, {CoursesRoutes}
  </Route>
);

export default PrivateRoutes;
