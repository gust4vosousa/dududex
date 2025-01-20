import { useDrawerContext } from '@/application/contexts/Drawer/DrawerContext'
import { EIcons } from '@/presentation/components/Icon/IconComponent.types'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMenuItem } from './DrawerComponent.types'

export const useDrawerComponentRules = () => {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()
  const navigate = useNavigate()

  const menuItems: IMenuItem[] = [
    {
      icon: EIcons.HOME,
      path: '/',
      title: 'Home',
    },
    {
      icon: EIcons.COMPARE,
      path: '/compare',
      title: 'Compare',
    },
  ]

  const handleOnClick = useCallback(
    (path: string) => {
      toggleDrawerOpen()
      navigate(path)
    },
    [navigate, toggleDrawerOpen],
  )

  return { handleOnClick, isDrawerOpen, menuItems, toggleDrawerOpen }
}
