import { Box, styled } from '@mui/material';
import { colors } from '../../theme/colors';

export const HomeScreenContainer = styled(Box)({
  minHeight: '100vh',
  position: 'fixed',
  right: 0,
  left: 0,
  backgroundColor: colors.background.dark,
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  padding: 16
});

export const PokemonDetailsComponentContainer = styled(Box)({
  minWidth: '100%'
});
