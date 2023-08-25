import logo from '../../assets/icons/pokeball48.png'
import { INavigationItem } from './HeaderComponent.types'
import { Link } from 'react-router-dom'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import { useColorMode } from '../../contexts/ColorMode/ColorModeContext'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'

export const HeaderComponent: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const navigationItems: INavigationItem[] = [
    {
      icon: <IconComponent icon={EIcons.HOME} />,
      title: 'Home',
      url: '/',
    },
    {
      icon: <IconComponent icon={EIcons.COMPARE} />,
      title: 'Compare',
      url: '/compare',
    },
  ]

  return (
    <AppBar
      position='static'
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        justifyContent: 'center',
        minHeight: 100,
      }}
    >
      <Toolbar style={{ display: 'flex', gap: 32 }}>
        <Box
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: 32,
            gap: 8,
          }}
        >
          <img src={logo} alt='Logo' />
          Dududex
        </Box>

        <Box style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
          {navigationItems.map(({ icon, title, url }) => (
            <Link
              to={url}
              style={{
                alignItems: 'center',
                color: 'white',
                display: 'flex',
                gap: 8,
                textDecoration: 'none',
              }}
            >
              {icon}
              {title}
            </Link>
          ))}
        </Box>

        <IconButton onClick={toggleColorMode}>
          <IconComponent
            icon={colorMode === 'dark' ? EIcons.DARK_MODE : EIcons.LIGHT_MODE}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
