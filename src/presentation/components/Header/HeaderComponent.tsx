import React from 'react'

import { useColorModeContext } from '@/application/contexts/ColorMode/ColorModeContext'
import { useDrawerContext } from '@/application/contexts/Drawer/DrawerContext'
import { IconComponent } from '@/presentation/components/Icon/IconComponent'
import { EIcons } from '@/presentation/components/Icon/IconComponent.types'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

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
