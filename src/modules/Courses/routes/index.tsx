import { Route } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import CoursesLayout from '../layout';
import AboutCourse from '../pages/AboutCourse';
import Course from '../pages/Course';

const CoursesRoutes = (
  <Route element={<CoursesLayout />}>
    <Route path={PrivatePathsEnum.ABOUTCOURSE} element={<AboutCourse />} />
    <Route path={PrivatePathsEnum.COURSE} element={<Course />} />
  </Route>
);

export default CoursesRoutes;
