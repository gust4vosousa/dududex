import { Box, styled } from '@mui/material'
import { IStatBarStyleProps } from './StatsTableComponent.types'

export const StyledStatBar = styled(Box)<IStatBarStyleProps>(
  ({ value, color, theme }) => ({
    minWidth: value,
    height: 16,
    backgroundColor: color,
    borderRadius: 4,
    [theme.breakpoints.down('sm')]: {
      minWidth: value * 0.8,
    },
  })
)
