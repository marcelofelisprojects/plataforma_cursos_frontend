import React, { createContext, useContext } from 'react';
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';

import { errorHandler } from '@errors/errorHandler';

import { api } from '@services/api';
import { QueryKeys, queryClient } from '@services/queryClient';
import { useToast } from '@hooks/ToastProvider';
import { ICourse } from '@modules/Courses/interfaces/ICourse';
import { CoursesApiRoutes } from '../../api/paths.routes';

interface IUpdateCourseData {
  id: string;
  name?: string;
  fullName?: string;
  description?: string;
  imageFileName?: string;
  targetAudience?: string;
  availableFrom?: Date;
  workload?: number;
  status?: string;
  categoryId?: string;
}

interface ICreateCourseData {
  name: string;
  fullName: string;
  description: string;
  imageFileName: string;
  targetAudience: string;
  availableFrom: Date;
  workload: number;
  status: string;
  categoryId: string;
}

interface useCourseParams {
  options?: UseQueryOptions<ICourse[]>;
}

interface CourseContextData {
  GetCourses(options?: useCourseParams): UseQueryResult<ICourse[]>;
  DeleteCourse(course_id: string): Promise<ICourse>;
  UpdateCourse(course_data: IUpdateCourseData): Promise<ICourse>;
  CreateCourse(course_data: ICreateCourseData): Promise<ICourse>;
}

const CourseContext = createContext<CourseContextData>({} as CourseContextData);

interface ICourseProviderProps {
  children: React.ReactNode;
}

const CourseProvider: React.FC<ICourseProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const GetCourses = (
    { options } = {} as useCourseParams
  ): UseQueryResult<ICourse[]> =>
    useQuery(
      [QueryKeys.COURSES] as QueryKey,
      async () => {
        const { data } = await api.get<ICourse[]>(CoursesApiRoutes.COURSES);

        return data;
      },
      {
        // change the key so data can update
        staleTime: 1000 * 60 * 10, // 10min
        ...options,
      }
    );

  const DeleteCourse = useMutation(
    async (course_id: string) => {
      const { data } = await api.delete(
        `${CoursesApiRoutes.COURSES}/${course_id}`
      );

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.COURSES]);
        addToast({
          title: 'Empresa excluída',
          description: 'A empresa foi excluída com sucesso',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Erro',
          addToast,
        });
      },
    }
  ).mutateAsync;

  const UpdateCourse = useMutation(
    async (courseData: IUpdateCourseData) => {
      const { id, ...dataToSend } = courseData;

      const { data } = await api.put(
        `${CoursesApiRoutes.COURSES}/${id}`,
        dataToSend
      );

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.COURSES]);
        addToast({
          title: 'Empresa atualizada',
          description: 'A empresa foi atualizada com sucesso',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Erro',
          addToast,
        });
      },
    }
  ).mutateAsync;

  const CreateCourse = useMutation(
    async (dataToSend: ICreateCourseData) => {
      const { data } = await api.post(
        `${CoursesApiRoutes.COURSES}`,
        dataToSend
      );

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKeys.COURSES]);
        addToast({
          title: 'Empresa Criada',
          description: 'A empresa foi criada',
          type: 'success',
        });
      },
      onError: (error) => {
        errorHandler({
          error,
          title: 'Erro',
          addToast,
        });
      },
    }
  ).mutateAsync;

  return (
    <CourseContext.Provider
      value={{
        GetCourses,
        DeleteCourse,
        UpdateCourse,
        CreateCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

function useCourse(): CourseContextData {
  const context = useContext(CourseContext);

  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }

  return context;
}

export { CourseProvider, useCourse };
