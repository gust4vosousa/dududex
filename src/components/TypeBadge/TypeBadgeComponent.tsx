import { Typography } from '@mui/material';
import { useBadgeColorHook } from '../../hooks/badgeColor/useBadgeColorHook';
import { TypeBadge } from './TypeBadgeComponent.styles';
import { ITypeBadgeProps } from './TypeBadgeComponent.types';

export const TypeBadgeComponent: React.FC<ITypeBadgeProps> = ({ type }) => {
  const color = useBadgeColorHook(type);

  return (
    <TypeBadge color={color} elevation={3}>
      <Typography>{type.toUpperCase()}</Typography>
    </TypeBadge>
  );
};
