import { Grid, Typography } from '@mui/material';
import { PokemonCardComponent } from '../../components/PokemonCard/PokemonCardComponent';
import { PokemonListComponent } from '../../components/PokemonList/PokemonListComponent';
import { HomeScreenRules } from './HomeScreen.rules';
import { HomeScreenContainer, HomeScreenGrid } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { pokemon, pokemonList, isPokemonBusy, onListItemClick } =
    HomeScreenRules();

  return (
    <HomeScreenContainer>
      <Typography>Dududex</Typography>

      <HomeScreenGrid container spacing={4}>
        <Grid item xs={4}>
          <PokemonListComponent
            list={pokemonList ?? []}
            onClick={onListItemClick}
          />
        </Grid>

        <Grid item xs={8}>
          <PokemonCardComponent pokemon={pokemon} isBusy={isPokemonBusy} />
        </Grid>
      </HomeScreenGrid>
    </HomeScreenContainer>
  );
};
