import { Box, styled } from '@mui/material'
import { colors } from '../../theme/colors'

export const NavigationContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
  gap: 32,
  flexWrap: 'wrap',
})

export const NavigationButton = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background.dark,
  padding: '8px 16px 8px 16px',
  borderRadius: 8,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.background.light,
    color: colors.background.dark,
  },
})
