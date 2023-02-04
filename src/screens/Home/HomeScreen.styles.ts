import { Box, styled } from '@mui/material';
import { colors } from '../../theme/colors';

export const HomeScreenContainer = styled(Box)({
  backgroundColor: colors.background.dark,
  color: 'white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  padding: 16
});

export const PokemonDetailsComponentContainer = styled(Box)({
  minWidth: '100%'
});
