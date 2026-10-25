import React from 'react';

import { CourseProvider } from './courses';

type CoursesModuleProvidersProps = {
  children: React.ReactNode;
};

const CoursesModuleProviders: React.FC<CoursesModuleProvidersProps> = ({
  children,
}) => <CourseProvider>{children}</CourseProvider>;

export default CoursesModuleProviders;
