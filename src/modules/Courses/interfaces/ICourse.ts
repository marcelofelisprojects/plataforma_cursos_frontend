import { ICategory } from './ICategory';

export interface ICourse {
  id: string;
  name: string;
  fullName: string;
  description: string;
  imageFileName: string;
  targetAudience: string;
  availableFrom: Date;
  workload: number;
  status: string;
  categoryId: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
}
