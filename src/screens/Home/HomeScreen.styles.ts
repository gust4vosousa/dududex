import { Box, Grid } from '@mui/material';
import { styled } from '../../theme/theme';

export const HomeScreenContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  color: theme.palette.text.white,
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16
}));

export const HomeScreenGrid = styled(Grid)({
  padding: 16,
  width: '100%'
});
