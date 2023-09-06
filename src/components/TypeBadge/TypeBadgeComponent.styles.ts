import { Box, styled } from '@mui/material'
import { ITypeBadgeStyles } from './TypeBadgeComponent.types'

export const StyledTypeBadge = styled(Box)<ITypeBadgeStyles>(
  ({ color, isFirst, isMonoType }) => ({
    alignItems: 'center',
    backgroundColor: color,
    borderRadius: isMonoType ? '4px' : isFirst ? '4px 0 0 4px' : '0 4px 4px 0',
    color: 'white',
    display: 'flex',
    fontSize: 18,
    fontWeight: 500,
    justifyContent: 'center',
    minWidth: 100,
    minHeight: 24,
    padding: 4,
    textShadow: '0.5px 0.5px 1px #000000',
  })
)
