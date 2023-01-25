import { Box, styled } from '@material-ui/core';
import { colors } from '../../theme/colors';

export const PokemonCard = styled(Box)({
  color: 'white',
  backgroundColor: colors.background.main,
  borderRadius: 8,
  padding: 16
});
