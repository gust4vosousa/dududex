import { Icon } from '@mui/material'
import { IIconProps } from './IconComponent.types'

export const IconComponent: React.FC<IIconProps> = ({ icon }) => (
  <Icon>{icon}</Icon>
)
