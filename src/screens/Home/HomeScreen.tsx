import { Box } from '@mui/material';
import { Pokedexes } from 'pokenode-ts';
import { useEffect, useMemo } from 'react';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { PokemonDetailsComponent } from '../../components/PokemonDetails/PokemonDetailsComponent';
import { fetchPokedexById } from '../../store/pokedex/pokedexThunks';
import {
  selectPokemonData,
  selectPokemonRequestStatus
} from '../../store/pokemon/pokemonSelectors';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  HomeScreenContainer,
  PokemonDetailsComponentContainer
} from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const pokemonData = useAppSelector(selectPokemonData);
  const pokemonRequestStatus = useAppSelector(selectPokemonRequestStatus);

  const isPokemonBusy = useMemo(
    () => pokemonRequestStatus === ERequestStatus.busy,
    [pokemonRequestStatus]
  );

  useEffect(() => {
    dispatch(fetchPokedexById(Pokedexes.NATIONAL));
  }, [dispatch]);

  return (
    <HomeScreenContainer>
      <PokemonDetailsComponentContainer>
        <PokemonDetailsComponent pokemon={pokemonData} isBusy={isPokemonBusy} />
      </PokemonDetailsComponentContainer>

      <Box fontSize={10}>{`v${process.env.REACT_APP_VERSION}`}</Box>
    </HomeScreenContainer>
  );
};
