import { AppBar, Box, styled } from '@material-ui/core';
import { colors } from '../../theme/colors';

export const HeaderContainer = styled(AppBar)({
  position: 'sticky',
  padding: 16,
  backgroundColor: colors.background.main,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 32,
  flexWrap: 'wrap'
});

export const TitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontSize: 32,
  gap: 8
});
