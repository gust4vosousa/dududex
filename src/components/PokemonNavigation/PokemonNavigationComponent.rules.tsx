import { useCallback } from 'react';
import { selectPokemonById } from '../../store/pokemon/pokemonSelectors';
import { fetchPokemonById } from '../../store/pokemon/pokemonThunks';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const usePokemonNavigationComponentRules = (
  currentPokemonId: number
) => {
  const dispatch = useAppDispatch();

  const currentPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId)
  );

  const previousPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId - 1)
  );

  const nextPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId + 1)
  );

  const onPokemonSearch = useCallback(
    (pokemonId: number) => {
      dispatch(fetchPokemonById(pokemonId));
    },
    [dispatch]
  );

  return {
    currentPokemon,
    previousPokemon,
    nextPokemon,
    onPokemonSearch
  };
};
