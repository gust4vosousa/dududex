import { useCallback, useEffect, useMemo, useState } from 'react'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import { EPokedexes } from '../../@types/entities/Pokedex/PokedexEntity.types'
import { ISelectOption } from '../../components/SelectPokemon/SelectPokemonComponent.types'
import {
  selectPokedexRequestStatus,
  selectPokemonList,
} from '../../store/pokedex/pokedexSelectors'
import { fetchPokedexById } from '../../store/pokedex/pokedexThunks'
import {
  selectEvolutionChainData,
  selectPokemonData,
  selectPokemonRequestStatus,
  selectSpeciesData,
} from '../../store/pokemon/pokemonSelectors'
import { fetchPokemonById } from '../../store/pokemon/pokemonThunks'
import { useAppDispatch, useAppSelector } from '../../store/store'

export const useHomeScreenRules = () => {
  const dispatch = useAppDispatch()

  const evolutionChainData = useAppSelector(selectEvolutionChainData)
  const pokemonData = useAppSelector(selectPokemonData)
  const pokemonList = useAppSelector(selectPokemonList)
  const speciesData = useAppSelector(selectSpeciesData)
  const pokedexRequestStatus = useAppSelector(selectPokedexRequestStatus)
  const pokemonRequestStatus = useAppSelector(selectPokemonRequestStatus)

  const [currentSearch, setCurrentSearch] = useState<ISelectOption | null>(null)

  const isPokedexBusy = useMemo<boolean>(
    () => pokedexRequestStatus === ERequestStatus.BUSY,
    [pokedexRequestStatus]
  )

  const isPokemonBusy = useMemo<boolean>(
    () => pokemonRequestStatus === ERequestStatus.BUSY,
    [pokemonRequestStatus]
  )

  const onPokemonSearch = useCallback(
    (pokemon: ISelectOption | null) => {
      if (pokemon) {
        dispatch(fetchPokemonById(pokemon.id))
        setCurrentSearch(pokemon)
        return
      }
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(fetchPokedexById(EPokedexes.NATIONAL))
  }, [dispatch])

  return {
    currentSearch,
    evolutionChainData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch,
    pokemonData,
    pokemonList,
    speciesData,
  }
}
