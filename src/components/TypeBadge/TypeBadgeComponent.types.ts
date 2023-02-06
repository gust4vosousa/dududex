import { EType } from '../../@types/Entities.types';

export interface ITypeBadgeProps {
  types: EType[];
}

export interface ITypeBadgeStyles {
  color: string;
  isFirst: boolean;
  isMonoType: boolean;
}
