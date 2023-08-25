import { useCallback, useEffect, useMemo } from 'react'
import { EPokedexes, EType } from '../../@types/Entities.types'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import {
  selectPokedexRequestStatus,
  selectPokemonList,
} from '../../store/pokedex/pokedexSelectors'
import { fetchPokedexById } from '../../store/pokedex/pokedexThunks'
import {
  selectPokemonData,
  selectPokemonRequestStatus,
} from '../../store/pokemon/pokemonSelectors'
import { TPokemonListItem } from '../../store/pokemon/pokemonSlice.types'
import { fetchPokemonById } from '../../store/pokemon/pokemonThunks'
import { useAppDispatch, useAppSelector } from '../../store/store'

export const useHomeScreenRules = () => {
  const dispatch = useAppDispatch()

  const pokemonList = useAppSelector(selectPokemonList)
  const pokemonData = useAppSelector(selectPokemonData)
  const pokedexRequestStatus = useAppSelector(selectPokedexRequestStatus)
  const pokemonRequestStatus = useAppSelector(selectPokemonRequestStatus)

  const isPokedexBusy = useMemo<boolean>(
    () => pokedexRequestStatus === ERequestStatus.busy,
    [pokedexRequestStatus]
  )

  const isPokemonBusy = useMemo<boolean>(
    () => pokemonRequestStatus === ERequestStatus.busy,
    [pokemonRequestStatus]
  )

  const pokemonTypes = useMemo<EType[]>(
    () =>
      pokemonData?.types.map((pokemonType) => pokemonType.type.name as EType) ||
      [],
    [pokemonData?.types]
  )

  const onPokemonSearch = useCallback(
    (pokemon: TPokemonListItem | null) => {
      if (pokemon) {
        dispatch(fetchPokemonById(pokemon.id))
        return
      }
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(fetchPokedexById(EPokedexes.NATIONAL))
  }, [dispatch])

  return {
    pokemonList,
    pokemonData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch,
    pokemonTypes,
  }
}
