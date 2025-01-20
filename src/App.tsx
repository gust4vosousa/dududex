import React from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { useAppRules } from './App.rules'
import { ColorModeContext } from './application/contexts/ColorMode/ColorModeContext'
import { DrawerContext } from './application/contexts/Drawer/DrawerContext'
import { router } from './application/routes/routes'
import store from './application/store/store'

export const App: React.FC = () => {
  const { colorModeContextValue, drawerContextValue, theme } = useAppRules()

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorModeContextValue}>
        <DrawerContext.Provider value={drawerContextValue}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
          </ThemeProvider>
        </DrawerContext.Provider>
      </ColorModeContext.Provider>
    </Provider>
  )
}
