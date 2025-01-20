import React from 'react'

import { useColor } from '@/presentation/hooks/useColor/useColorHook'
import { Box } from '@mui/material'
import { StyledTypeBadge } from './TypeBadgeComponent.styles'
import { ITypeBadgeProps } from './TypeBadgeComponent.types'

export const TypeBadgeComponent: React.FC<ITypeBadgeProps> = ({ types }) => {
  const { getTypeColor } = useColor()

  return (
    <Box
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {types.map((type, index) => (
        <StyledTypeBadge
          key={type}
          isFirst={index === 0}
          isMonoType={types.length <= 1}
          style={{ backgroundColor: getTypeColor(type) }}
        >
          {type.toUpperCase()}
        </StyledTypeBadge>
      ))}
    </Box>
  )
}
