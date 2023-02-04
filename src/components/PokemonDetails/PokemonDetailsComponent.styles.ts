import { Box, styled } from '@material-ui/core';
import { colors } from '../../theme/colors';

export const PokemonDetailsCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  fontSize: 18,
  color: 'white',
  backgroundColor: colors.background.main,
  borderRadius: 8,
  padding: 16,
  flexWrap: 'wrap'
});

export const PokemonDetailsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  fontSize: 18,
  flexWrap: 'wrap'
});

export const PokemonInfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  fontSize: 18,
  flexWrap: 'wrap'
});
