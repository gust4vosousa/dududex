// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Button, Typography } from '@mui/material'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'
import { useSpriteComponentRules } from './SpriteComponent.rules'
import { SpriteContainer, SpriteWrapper } from './SpriteComponent.styles'
import { ISpriteProps } from './SpriteComponent.types'

export const SpriteComponent: React.FC<ISpriteProps> = (props) => {
  const { currentSprite, isBackSprite, isShiny, setIsBackSprite, setIsShiny } =
    useSpriteComponentRules(props)

  return (
    <SpriteContainer>
      <SpriteWrapper>
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
      </SpriteWrapper>

      <Button
        onClick={() => setIsBackSprite(!isBackSprite)}
        style={{
          minWidth: '70%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
        variant='contained'
      >
        {isBackSprite ? 'Back' : 'Front'}
        <IconComponent icon={EIcons.SWAP} />
      </Button>

      <Button
        onClick={() => setIsShiny(!isShiny)}
        style={{
          minWidth: '70%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
        variant='contained'
      >
        {isShiny ? 'Shiny' : 'Regular'}
        <IconComponent icon={EIcons.SHINY} />
      </Button>
    </SpriteContainer>
  )
}
