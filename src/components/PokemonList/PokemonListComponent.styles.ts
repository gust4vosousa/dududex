import { Paper, styled } from '@mui/material';
import { colors } from '../../theme/colors';

export const ListCard = styled(Paper)({
  padding: 8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 8,
  width: '100%',
  '&:hover': {
    backgroundColor: colors.primary.main
  }
});

export const ListContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 16,
  maxHeight: '100vh',
  overFlowY: 'scroll',
  backgroundColor: colors.background.main
});
