import { PaletteMode } from '@mui/material'

export interface IColorModeContext {
  colorMode: PaletteMode
  toggleColorMode: () => void
}
