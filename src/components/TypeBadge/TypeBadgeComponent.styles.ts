import { Box } from '@mui/material';
import { styled } from '../../theme/theme';
import { ITypeBadgeStyles } from './TypeBadgeComponent.types';

export const TypeBadgeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});

export const TypeBadge = styled(Box)<ITypeBadgeStyles>(
  ({ theme, color, isFirst, isMonoType }) => ({
    minWidth: 100,
    minHeight: 24,
    padding: 4,
    backgroundColor: color,
    color: theme.palette.text.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textShadow: '0.5px 0.5px 1px #000000',
    borderRadius: isMonoType ? '8px' : isFirst ? '8px 0 0 8px' : '0 8px 8px 0',
    fontWeight: 500,
    fontSize: 18
  })
);
