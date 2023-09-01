import React from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ColorModeContext } from './contexts/ColorMode/ColorModeContext'
import { router } from './routes/routes'
import store from './store/store'
import { useCustomTheme } from './theme/useCustomThemeHook'

export const App: React.FC = () => {
  const { colorMode, theme } = useCustomTheme()

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  )
}
