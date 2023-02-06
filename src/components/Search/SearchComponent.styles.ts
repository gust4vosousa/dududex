import { Box, styled } from '@material-ui/core';
import { colors } from '../../theme/colors';

export const SearchContainer = styled(Box)({
  display: 'flex',
  gap: 16,
  padding: 16,
  borderRadius: 8,
  backgroundColor: colors.background.main
});

export const FilterContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap'
});
