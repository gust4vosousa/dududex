import { EIcons } from '../Icon/IconComponent.types'

export interface IDrawerProps {
  isDrawerOpen: boolean
}

export interface IMenuItem {
  icon: EIcons
  path: string
  title: string
}
