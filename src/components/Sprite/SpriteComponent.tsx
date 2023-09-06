// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Box, Button, Card, Typography, useTheme } from '@mui/material'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'
import { useSpriteComponentRules } from './SpriteComponent.rules'
import { ISpriteProps } from './SpriteComponent.types'

export const SpriteComponent: React.FC<ISpriteProps> = (props) => {
  const { palette } = useTheme()
  const { currentSprite, isBackSprite, isShiny, setIsBackSprite, setIsShiny } =
    useSpriteComponentRules(props)

  return (
    <Box
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        justifyContent: 'center',
        width: 200,
      }}
    >
      <Card
        elevation={12}
        style={{
          backgroundColor: palette.divider,
          border: `2px solid`,
          minHeight: 200,
          minWidth: 200,
        }}
      >
        {currentSprite ? (
          <img
            src={currentSprite}
            width='200px'
            alt='Pokémon sprite'
            height='auto'
          />
        ) : (
          <Typography fontWeight={600}>{`No image available :(`}</Typography>
        )}
      </Card>

      <Box style={{ display: 'flex', gap: 16 }}>
        <Button
          onClick={() => setIsBackSprite(!isBackSprite)}
          variant='contained'
        >
          <IconComponent icon={EIcons.SWAP} />
        </Button>

        <Button onClick={() => setIsShiny(!isShiny)} variant='contained'>
          <IconComponent icon={EIcons.SHINY} />
        </Button>
      </Box>
    </Box>
  )
}
