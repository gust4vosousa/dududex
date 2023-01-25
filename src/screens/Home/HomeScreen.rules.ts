import { Pokedexes } from 'pokenode-ts';
import { useCallback, useEffect, useMemo } from 'react';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { selectPokedex } from '../../store/pokedex/pokedexSelectors';
import { fetchPokedexById } from '../../store/pokedex/pokedexThunks';
import { selectPokemon } from '../../store/pokemon/pokemonSelectors';
import { fetchPokemonByName } from '../../store/pokemon/pokemonThunks';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const useHomeScreenRules = () => {
  const dispatch = useAppDispatch();

  const pokemon = useAppSelector(selectPokemon);
  const pokedex = useAppSelector(selectPokedex);

  const pokemonList = useMemo(
    () =>
      pokedex.data?.pokemon_entries.map((entry) => entry.pokemon_species.name),
    [pokedex.data]
  );

  const isPokemonBusy = useMemo(
    () => pokemon.status === ERequestStatus.busy,
    [pokemon]
  );

  const isPokedexBusy = useMemo(
    () => pokedex.status === ERequestStatus.busy,
    [pokedex]
  );

  const onPokemonSearch = useCallback(
    (pokemonName: string) => {
      if (pokemonName) {
        dispatch(fetchPokemonByName(pokemonName));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchPokedexById(Pokedexes.NATIONAL));
  }, [dispatch]);

  return {
    pokemon: pokemon.data,
    pokemonList,
    isPokemonBusy,
    isPokedexBusy,
    onPokemonSearch
  };
};
