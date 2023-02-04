import WarningIcon from '@mui/icons-material/Warning';
import { Box, CircularProgress } from '@mui/material';
import { Fragment } from 'react';
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
}) => (
  <PokemonDetailsCard>
    {!pokemon && !isBusy && (
      <Fragment>
        <WarningIcon />
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
            <TypeBadgeComponent types={pokemon.types} />
            <SpriteComponent sprites={pokemon.sprites} />
          </PokemonInfoContainer>

          <StatsTableComponent statsList={pokemon.stats} />
        </PokemonDetailsContainer>
      </Fragment>
    )}

    {isBusy && (
      <Fragment>
        <CircularProgress size={120} />
      </Fragment>
    )}
  </PokemonDetailsCard>
);
