import { Grid, styled } from '@mui/material'

export const StyledGridPrevious = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}))

export const StyledGridNext = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}))
