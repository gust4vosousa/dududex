import { Pokedexes } from 'pokenode-ts';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { getPokedexById } from '../../services/getPokedex';
import { getPokemonByName } from '../../services/getPokemon';
import {
  selectPokemon,
  selectPokemonStatus
} from '../../store/pokemon/pokemonSelectors';
import {
  setPokemon,
  setPokemonRequestStatus
} from '../../store/pokemon/pokemonSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const HomeScreenRules = () => {
  const [pokemonList, setPokemonList] = useState<string[]>();

  const dispatch = useAppDispatch();

  const pokemon = useAppSelector(selectPokemon);
  const pokemonStatus = useAppSelector(selectPokemonStatus);

  const isPokemonBusy = useMemo(
    () => pokemonStatus === ERequestStatus.busy,
    [pokemonStatus]
  );

  const onListItemClick = useCallback(
    async (pokemonName: string) => {
      dispatch(setPokemonRequestStatus(ERequestStatus.busy));

      try {
        const data = await getPokemonByName(pokemonName);
        dispatch(setPokemon(data));
        dispatch(setPokemonRequestStatus(ERequestStatus.success));
      } catch (error) {
        console.log(error);
        dispatch(setPokemonRequestStatus(ERequestStatus.failure));
      }
    },
    [dispatch]
  );

  const getPokemonList = useCallback(async () => {
    const data = await getPokedexById(Pokedexes.NATIONAL);
    setPokemonList(
      data?.pokemon_entries.map((entry) => entry.pokemon_species.name)
    );
  }, []);

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList]);

  return {
    pokemon,
    pokemonList,
    isPokemonBusy,
    onListItemClick
  };
};
