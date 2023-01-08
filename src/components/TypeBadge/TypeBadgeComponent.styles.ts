import { Paper } from '@mui/material';
import { styled } from '../../theme/theme';

export const TypeBadge = styled(Paper)(({ theme, color }) => ({
  minWidth: 80,
  minHeight: 16,
  backgroundColor: color,
  color: theme.palette.text.white,
  display: 'flex',
  justifyContent: 'center',
  textShadow: '0.5px 0.5px 1px #000000'
}));
