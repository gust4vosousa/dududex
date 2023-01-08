import { Checkbox, Typography } from '@mui/material';
import { useState } from 'react';
import { EType } from '../../@types/TypeEntity.types';
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils';
import { SpriteComponent } from '../Sprite/SpriteComponent';
import { TypeBadgeComponent } from '../TypeBadge/TypeBadgeComponent';
import { PokemonCard, TypeBadgeContainer } from './PokemonCardComponent.styles';
import { IPokemonCardProps } from './PokemonCardComponent.types';

export const PokemonCardComponent: React.FC<IPokemonCardProps> = ({
  pokemon
}) => {
  const [isShiny, setIsShiny] = useState<boolean>(false);

  const { name, types, sprites } = pokemon;

  return (
    <PokemonCard>
      <Typography fontSize={48} textAlign='center'>
        {firstLetterUpperCaseUtil(name)}
      </Typography>
      <SpriteComponent sprites={sprites} isShiny={isShiny} />
      <Checkbox checked={isShiny} onChange={() => setIsShiny(!isShiny)} />
      <TypeBadgeContainer>
        {types.map((typelist) => (
          <TypeBadgeComponent type={typelist.type.name as EType} />
        ))}
      </TypeBadgeContainer>
    </PokemonCard>
  );
};
