import { AppBar, Box, styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';

export const HeaderContainer = styled(AppBar)({
  minHeight: 100,
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
  fontSize: 32,
  gap: 8
});

export const NavButtonsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: 16
});

export const NavItem = styled(Link)({
  padding: 8,
  color: 'white',
  borderRadius: 8,
  gap: 8,
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: colors.background.dark
  }
});
