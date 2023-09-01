import { Box, styled } from '@mui/material'
import { colors } from '../../theme/colors'

export const SpriteContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
  width: 200,
})

export const SpriteWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `2px solid ${colors.background.dark}`,
  borderRadius: 8,
  backgroundColor: colors.background.light,
  minHeight: 200,
  minWidth: 200,
  color: colors.background.dark,
})

export const OptionsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: colors.background.dark,
  padding: '8px 16px 8px 16px',
  borderRadius: 8,
  minWidth: '80%',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.background.light,
    color: colors.background.dark,
  },
})
