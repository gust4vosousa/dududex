import { useCallback, useState } from 'react';

import { Typography } from '@mui/material';
import { Pokemon } from 'pokenode-ts';
import { PokemonCardComponent } from '../../components/PokemonCard/PokemonCardComponent';
import { SearchComponent } from '../../components/Search/SearchComponent';
import { getPokemonByName } from '../../services/getPokemon';
import { HomeScreenContainer } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const [currentSearch, setCurrentSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Pokemon>();

  const onSubmit = useCallback(async () => {
    const data = await getPokemonByName(currentSearch);
    setSearchResult(data);
  }, [currentSearch]);

  return (
    <HomeScreenContainer>
      <Typography>Dududex</Typography>

      <SearchComponent
        fullWidth
        label='Busque pelo nome do Pokémon'
        placeholder='Pokémon'
        value={currentSearch}
        onChange={(value) => setCurrentSearch(value)}
        onSubmit={onSubmit}
      />

      {searchResult && <PokemonCardComponent pokemon={searchResult} />}
    </HomeScreenContainer>
  );
};
