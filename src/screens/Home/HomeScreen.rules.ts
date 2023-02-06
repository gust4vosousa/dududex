import { Pokedexes } from 'pokenode-ts';
import { useCallback, useEffect, useMemo } from 'react';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { selectPokedexRequestStatus } from '../../store/pokedex/pokedexSelectors';
import { fetchPokedexById } from '../../store/pokedex/pokedexThunks';
import {
  selectPokemonData,
  selectPokemonList,
  selectPokemonRequestStatus
} from '../../store/pokemon/pokemonSelectors';
import { fetchPokemonById } from '../../store/pokemon/pokemonThunks';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const useHomeScreenRules = () => {
  const dispatch = useAppDispatch();

  const pokemonList = useAppSelector(selectPokemonList);
  const pokemonData = useAppSelector(selectPokemonData);
  const pokedexRequestStatus = useAppSelector(selectPokedexRequestStatus);
  const pokemonRequestStatus = useAppSelector(selectPokemonRequestStatus);

  const isPokedexBusy = useMemo(
    () => pokedexRequestStatus === ERequestStatus.busy,
    [pokedexRequestStatus]
  );

  const isPokemonBusy = useMemo(
    () => pokemonRequestStatus === ERequestStatus.busy,
    [pokemonRequestStatus]
  );

  const onPokemonSearch = useCallback(
    (pokemonId: number) => {
      dispatch(fetchPokemonById(pokemonId));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchPokedexById(Pokedexes.NATIONAL));
  }, [dispatch]);

  return {
    pokemonList,
    pokemonData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch
  };
};
