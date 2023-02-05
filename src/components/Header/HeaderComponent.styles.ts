import { AppBar, styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
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

export const TitleContainer = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  fontSize: 32,
  gap: 8,
  textDecoration: 'none'
});
