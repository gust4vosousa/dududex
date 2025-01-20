import React, { Fragment } from 'react'

import { DrawerComponent } from '@/presentation/components/Drawer/DrawerComponent'
import { HeaderComponent } from '@/presentation/components/Header/HeaderComponent'
import { IScreenProps } from '@/presentation/components/Providers/Screen/ScreenProvider.types'
import { Box } from '@mui/material'

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => (
  <Fragment>
    <HeaderComponent />
    <DrawerComponent />
    <Box style={{ padding: 16 }}>{children}</Box>
  </Fragment>
)
