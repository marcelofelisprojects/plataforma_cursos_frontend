import { IModality } from './IModality';

export interface ICategory {
  id: string;
  name: string;
  modalityId: string;
  modality: IModality;
  createdAt: Date;
  updatedAt: Date;
}
