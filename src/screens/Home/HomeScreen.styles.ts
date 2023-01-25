import { Box, Grid, styled } from '@mui/material';
import { colors } from '../../theme/colors';

export const HomeScreenContainer = styled(Box)({
  backgroundColor: colors.background.dark,
  color: 'white',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16
});

export const HomeScreenGrid = styled(Grid)({
  padding: 16,
  width: '100%'
});

export const SearchContainer = styled(Box)({
  backgroundColor: colors.background.main,
  padding: 16,
  display: 'flex',
  borderRadius: 8
});
