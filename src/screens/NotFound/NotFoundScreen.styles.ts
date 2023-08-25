import { Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { colors } from '../../theme/colors'

export const NotFoundComponent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 32,
  padding: 32,
  gap: 16,
})

export const MessageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background.main,
  padding: 32,
  borderRadius: 16,
})

export const HomepageLink = styled(Link)({
  fontSize: 16,
  color: 'inherit',
})
