import WarningIcon from '@mui/icons-material/Warning';
import { Box, CircularProgress } from '@mui/material';
import { Fragment, useMemo } from 'react';
import { EType } from '../../@types/Entities.types';
import { PokemonNavigationComponent } from '../PokemonNavigation/PokemonNavigationComponent';
import { SpriteComponent } from '../Sprite/SpriteComponent';
import { StatsTableComponent } from '../StatsTable/StatsTableComponent';
import { TypeBadgeComponent } from '../TypeBadge/TypeBadgeComponent';
import {
  PokemonDetailsCard,
  PokemonDetailsContainer,
  PokemonInfoContainer
} from './PokemonDetailsComponent.styles';
import { IPokemonDetailsProps } from './PokemonDetailsComponent.types';

export const PokemonDetailsComponent: React.FC<IPokemonDetailsProps> = ({
  pokemon,
  isBusy
}) => {
  const pokemonTypes: EType[] = useMemo(
    () =>
      pokemon?.types.map((pokemonType) => pokemonType.type.name as EType) || [],
    [pokemon?.types]
  );

  return (
    <PokemonDetailsCard>
      {!pokemon && !isBusy && (
        <Fragment>
          <WarningIcon fontSize='large' />
          {
            'Nothing to show yet. Please, select a Pokémon to display its information'
          }
        </Fragment>
      )}

      {pokemon && !isBusy && (
        <Fragment>
          <Box>
            <PokemonNavigationComponent currentPokemonId={pokemon.id} />
          </Box>

          <PokemonDetailsContainer>
            <PokemonInfoContainer>
              <TypeBadgeComponent types={pokemonTypes} />
              <SpriteComponent sprites={pokemon.sprites} />
            </PokemonInfoContainer>

            <StatsTableComponent statsList={pokemon.stats} />
          </PokemonDetailsContainer>
        </Fragment>
      )}

      {isBusy && (
        <Fragment>
          <CircularProgress size={100} color='inherit' />
        </Fragment>
      )}
    </PokemonDetailsCard>
  );
};
