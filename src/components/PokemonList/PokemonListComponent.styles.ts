import { Paper } from '@mui/material';
import { styled } from '../../theme/theme';

export const ListCard = styled(Paper)(({ theme }) => ({
  padding: 8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 8,
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.primary.main
  }
}));

export const ListContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 16,
  maxHeight: '100vh',
  overFlowY: 'scroll',
  backgroundColor: theme.palette.background.main
}));
