import { Box, styled } from '@mui/material';
import {
  IStatBarStyleProps,
  IStatLabelStyleProps
} from './StatsTableComponent.types';

export const StatsTableContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 8
});

export const StatBarContainer = styled(Box)({
  display: 'flex',
  gap: 8
});

export const StatLabel = styled(Box)<IStatLabelStyleProps>(({ type }) => ({
  display: 'flex',
  minWidth: type === 'name' ? 100 : 30,
  justifyContent: type === 'name' ? 'flex-end' : 'flex-start'
}));

export const StatBar = styled(Box)<IStatBarStyleProps>(
  ({ value, color, theme }) => ({
    minWidth: value,
    minHeight: 16,
    backgroundColor: color,
    borderRadius: 4,
    [theme.breakpoints.down('sm')]: {
      minWidth: value / 2
    }
  })
);
