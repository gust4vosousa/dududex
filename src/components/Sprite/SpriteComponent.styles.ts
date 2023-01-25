import { Box } from '@mui/material';
import { styled } from '../../theme/theme';

export const SpriteContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
  width: 200
});

export const SpriteWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `2px solid ${theme.palette.background.dark}`,
  borderRadius: 20,
  backgroundColor: theme.palette.background.light,
  minHeight: 200,
  minWidth: 200,
  color: theme.palette.background.dark
}));

export const OptionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.dark,
  padding: '8px 16px 8px 16px',
  borderRadius: 8,
  minWidth: '80%',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.background.dark
  }
}));
