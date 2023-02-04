import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { selectPokedexRequestStatus } from '../../store/pokedex/pokedexSelectors';
import { selectPokemonList } from '../../store/pokemon/pokemonSelectors';
import { fetchPokemonById } from '../../store/pokemon/pokemonThunks';
import { useAppDispatch } from '../../store/store';

export const useHeaderComponentRules = () => {
  const dispatch = useAppDispatch();

  const pokedexRequestStatus = useSelector(selectPokedexRequestStatus);
  const pokemonList = useSelector(selectPokemonList);

  const isPokedexBusy = useMemo(
    () => pokedexRequestStatus === ERequestStatus.busy,
    [pokedexRequestStatus]
  );

  const onPokemonSearch = useCallback(
    (pokemonId: number) => {
      dispatch(fetchPokemonById(pokemonId));
    },
    [dispatch]
  );

  return {
    pokemonList,
    isPokedexBusy,
    onPokemonSearch
  };
};
