import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Typography } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import {
  OptionsContainer,
  SpriteContainer,
  SpriteWrapper
} from './SpriteComponent.styles';
import { ESpriteModes, ISpriteProps } from './SpriteComponent.types';

export const SpriteComponent: React.FC<ISpriteProps> = ({ sprites }) => {
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [showBackSprite, setShowBackSprite] = useState<boolean>(false);

  const getSprite = useCallback(
    (mode: ESpriteModes) => {
      const images = {
        back: isShiny ? sprites.back_shiny : sprites.back_default,
        front: isShiny ? sprites.front_shiny : sprites.front_default
      };
      return images[mode] ?? '';
    },
    [
      isShiny,
      sprites.back_default,
      sprites.back_shiny,
      sprites.front_default,
      sprites.front_shiny
    ]
  );

  const currentSprite = useMemo(
    () => getSprite(showBackSprite ? ESpriteModes.back : ESpriteModes.front),
    [getSprite, showBackSprite]
  );

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
      <OptionsContainer onClick={() => setShowBackSprite(!showBackSprite)}>
        {`${showBackSprite ? 'Back' : 'Front'}`}
        <SwapHorizIcon sx={{ color: 'inherit' }} />
      </OptionsContainer>
      <OptionsContainer onClick={() => setIsShiny(!isShiny)}>
        {`${isShiny ? 'Shiny' : 'Regular'}`}
        <AutoAwesomeIcon sx={{ color: 'inherit' }} />
      </OptionsContainer>
    </SpriteContainer>
  );
};
