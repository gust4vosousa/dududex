import { Box, Checkbox, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';
import { EType } from '../../@types/TypeEntity.types';
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils';
import { SpriteComponent } from '../Sprite/SpriteComponent';
import { TypeBadgeComponent } from '../TypeBadge/TypeBadgeComponent';
import { PokemonCard, TypeBadgeContainer } from './PokemonCardComponent.styles';
import { IPokemonCardProps } from './PokemonCardComponent.types';

export const PokemonCardComponent: React.FC<IPokemonCardProps> = ({
  pokemon,
  isBusy
}) => {
  const [isShiny, setIsShiny] = useState<boolean>(false);

  return (
    <PokemonCard>
      {!pokemon && !isBusy && (
        <Typography>
          Clique em um Pokémon para exibir suas informações
        </Typography>
      )}

      {pokemon && !isBusy && (
        <>
          <Typography fontSize={48} textAlign='center'>
            {firstLetterUpperCaseUtil(pokemon.name)}
          </Typography>
          <SpriteComponent sprites={pokemon.sprites} isShiny={isShiny} />
          <Checkbox checked={isShiny} onChange={() => setIsShiny(!isShiny)} />
          <TypeBadgeContainer>
            {pokemon.types.map((typelist, index) => (
              <TypeBadgeComponent
                type={typelist.type.name as EType}
                key={index}
              />
            ))}
          </TypeBadgeContainer>
        </>
      )}

      {isBusy && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color='inherit' />
        </Box>
      )}
    </PokemonCard>
  );
};
