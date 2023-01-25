import { Grid, Typography } from '@mui/material';
import { PokemonCardComponent } from '../../components/PokemonCard/PokemonCardComponent';
import { SelectComponent } from '../../components/SelectPokemon/SelectPokemonComponent';
import { useHomeScreenRules } from './HomeScreen.rules';
import { HomeScreenContainer, HomeScreenGrid } from './HomeScreen.styles';

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
      <Typography fontSize={64}>Dududex</Typography>

      <HomeScreenGrid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <SelectComponent
            options={pokemonList ?? []}
            label='Pokémon'
            value={pokemon?.name}
            onChange={onPokemonSearch}
            loading={isPokedexBusy}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <PokemonCardComponent pokemon={pokemon} isBusy={isPokemonBusy} />
        </Grid>
      </HomeScreenGrid>
    </HomeScreenContainer>
  );
};
