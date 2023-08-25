import { PaletteMode, createTheme } from '@mui/material'
import { useMemo, useState } from 'react'
import { IColorModeContext } from '../contexts/ColorMode/ColorModeContext.types'

export const useCustomTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('dark')

  const colorMode = useMemo<IColorModeContext>(
    () => ({
      colorMode: mode,
      toggleColorMode: () =>
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [mode]
  )

  const theme = createTheme({
    palette: {
      mode,
    },
  })

  return { colorMode, theme }
}
