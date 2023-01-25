import { Box, Grid } from '@mui/material';
import { PokemonCardComponent } from '../../components/PokemonCard/PokemonCardComponent';
import { SelectComponent } from '../../components/SelectPokemon/SelectPokemonComponent';
import { useHomeScreenRules } from './HomeScreen.rules';
import {
  HomeScreenContainer,
  HomeScreenGrid,
  SearchContainer
} from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const {
    pokemon,
    pokemonList,
    isPokemonBusy,
    isPokedexBusy,
    onPokemonSearch
  } = useHomeScreenRules();

  return (
    <HomeScreenContainer>
      <Box fontSize={64}>Dududex</Box>
      <Box fontSize={10}>{`v${process.env.REACT_APP_VERSION}`}</Box>

      <HomeScreenGrid container spacing={4}>
        <Grid item xs={12}>
          <SearchContainer>
            <SelectComponent
              options={pokemonList ?? []}
              label='Pokémon'
              value={pokemon?.name}
              onChange={onPokemonSearch}
              loading={isPokedexBusy}
            />
          </SearchContainer>
        </Grid>

        <Grid item xs={12}>
          <PokemonCardComponent pokemon={pokemon} isBusy={isPokemonBusy} />
        </Grid>
      </HomeScreenGrid>
    </HomeScreenContainer>
  );
};
