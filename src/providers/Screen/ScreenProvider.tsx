import React, { Fragment } from 'react'

import { Box } from '@mui/material'
import { DrawerComponent } from '../../components/Drawer/DrawerComponent'
import { FooterComponent } from '../../components/Footer/FooterComponent'
import { HeaderComponent } from '../../components/Header/HeaderComponent'
import { IScreenProps } from './ScreenProvider.types'

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => (
  <Fragment>
    <HeaderComponent />
    <DrawerComponent />
    <Box style={{ padding: 16 }}>{children}</Box>
    <FooterComponent />
  </Fragment>
)
