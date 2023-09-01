import { createContext, useContext } from 'react'
import { IColorModeContext } from './ColorModeContext.types'

export const ColorModeContext = createContext<IColorModeContext>({
  colorMode: 'dark',
  toggleColorMode: () => {},
})

export const useColorMode = (): IColorModeContext =>
  useContext(ColorModeContext)
