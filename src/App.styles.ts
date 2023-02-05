import { Box, styled } from '@material-ui/core';
import { colors } from './theme/colors';

export const AppContainer = styled(Box)({
  color: 'white',
  minHeight: '100vh',
  backgroundColor: colors.background.dark
});
