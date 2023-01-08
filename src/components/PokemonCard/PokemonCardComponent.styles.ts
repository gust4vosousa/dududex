import { Box } from '@material-ui/core';
import { Paper } from '@mui/material';
import { styled } from '../../theme/theme';

export const PokemonCard = styled(Paper)({
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

export const TypeBadgeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 4
});
