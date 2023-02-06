import { PokemonDetailsComponent } from '../../components/PokemonDetails/PokemonDetailsComponent';
import { SearchComponent } from '../../components/Search/SearchComponent';
import { ScreenProvider } from '../../providers/Screen/ScreenProvider';
import { useHomeScreenRules } from './HomeScreen.rules';
import {
  HomeScreenContainer,
  ScreenElementContainer
} from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const {
    pokemonList,
    pokemonData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch
  } = useHomeScreenRules();

  return (
    <ScreenProvider>
      <HomeScreenContainer>
        <ScreenElementContainer>
          <SearchComponent
            pokemonList={pokemonList}
            label='Pokémon'
            isBusy={isPokedexBusy}
            onChange={onPokemonSearch}
          />
        </ScreenElementContainer>

        <ScreenElementContainer>
          <PokemonDetailsComponent
            pokemon={pokemonData}
            isBusy={isPokemonBusy}
          />
        </ScreenElementContainer>
      </HomeScreenContainer>
    </ScreenProvider>
  );
};
