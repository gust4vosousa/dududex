import { Box } from '@mui/material';
import { styled } from '../../theme/theme';
import {
  IStatBarStyleProps,
  IStatLabelStyleProps
} from './StatsTableComponent.types';

export const StatsTableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 8,
  borderRadius: 20
}));

export const StatBarContainer = styled(Box)({
  display: 'flex',
  gap: 8
});

export const StatLabel = styled(Box)<IStatLabelStyleProps>(({ type }) => ({
  display: 'flex',
  gap: 8,
  minWidth: type === 'name' ? 130 : 25,
  justifyContent: type === 'name' ? 'flex-end' : 'flex-start'
}));

export const StatBar = styled(Box)<IStatBarStyleProps>(({ value, color }) => ({
  minWidth: value,
  minHeight: 16,
  backgroundColor: color,
  borderRadius: 4,
  transition: 'margin-right 1s'
}));
