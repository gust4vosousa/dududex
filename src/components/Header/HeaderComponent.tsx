import React from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { useColorModeContext } from '../../contexts/ColorMode/ColorModeContext'
import { useDrawerContext } from '../../contexts/Drawer/DrawerContext'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'

export const HeaderComponent: React.FC = () => {
  const { currentColorMode, toggleColorMode } = useColorModeContext()
  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <AppBar position='static' enableColorOnDark>
      <Toolbar style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <IconButton onClick={toggleDrawerOpen}>
          <IconComponent icon={EIcons.MENU} />
        </IconButton>

        <Typography fontSize={48}>DuduDex</Typography>

        <IconButton onClick={toggleColorMode}>
          <IconComponent
            icon={
              currentColorMode === 'dark' ? EIcons.DARK_MODE : EIcons.LIGHT_MODE
            }
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
