import { Box } from '@material-ui/core';
import { styled } from '../../theme/theme';

export const PokemonCard = styled(Box)(({ theme }) => ({
  color: theme.palette.text.white,
  backgroundColor: theme.palette.background.main,
  borderRadius: 20,
  padding: 16,
  paddingBottom: 32
}));
