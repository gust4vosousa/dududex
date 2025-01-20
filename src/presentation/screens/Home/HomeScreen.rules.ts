import { abilityAdapter } from '@/application/adapters/Ability/AbilityAdapter'
import {
  selectPokedexRequestStatus,
  selectPokemonList,
} from '@/application/store/pokedex/pokedexSelectors'
import { fetchPokedexById } from '@/application/store/pokedex/pokedexThunks'
import {
  selectEvolutionChainData,
  selectPokemonData,
  selectPokemonRequestStatus,
  selectSpeciesData,
} from '@/application/store/pokemon/pokemonSelectors'
import { fetchPokemonById } from '@/application/store/pokemon/pokemonThunks'
import { useAppDispatch, useAppSelector } from '@/application/store/store'
import { ERequestStatus } from '@/domain/application/RequestStatus.types'
import { EPokedexes } from '@/domain/entities/Pokedex/PokedexEntity.types'
import { EPokemonTypes } from '@/domain/entities/Pokemon/Types/PokemonTypesEntity.types'
import { ISelectOption } from '@/presentation/components/SelectPokemon/SelectPokemonComponent.types'
import { useCallback, useEffect, useMemo, useState } from 'react'

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
    [pokedexRequestStatus],
  )

  const isPokemonBusy = useMemo<boolean>(
    () => pokemonRequestStatus === ERequestStatus.BUSY,
    [pokemonRequestStatus],
  )

  const { abilities, types } = useMemo(
    () => ({
      abilities: pokemonData?.abilities.map(ability => abilityAdapter(ability)),
      types: pokemonData?.types.map(({ type }) => type.name as EPokemonTypes),
    }),
    [pokemonData?.abilities, pokemonData?.types],
  )

  const onPokemonSearch = useCallback(
    (pokemon: ISelectOption | null) => {
      if (pokemon) {
        dispatch(fetchPokemonById(pokemon.id))
        setCurrentSearch(pokemon)
        return
      }
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(fetchPokedexById(EPokedexes.NATIONAL))
  }, [dispatch])

  return {
    abilities,
    currentSearch,
    evolutionChainData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch,
    pokemonData,
    pokemonList,
    speciesData,
    types,
  }
}
