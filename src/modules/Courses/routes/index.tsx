import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import CoursesLayout from '../layout';
import AboutCourse from '../pages/AboutCourse';

const CoursesRoutes = (
  <Route element={<CoursesLayout />}>
    <Route path={PrivatePathsEnum.ABOUTCOURSE} element={<AboutCourse />} />
  </Route>
);

export default CoursesRoutes;
