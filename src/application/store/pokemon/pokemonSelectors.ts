import { selectPokemonList } from '@/application/store/pokedex/pokedexSelectors'
import { IPokemonState } from '@/application/store/pokemon/pokemonSlice.types'
import { RootState } from '@/application/store/store.types'
import { ERequestStatus } from '@/domain/application/RequestStatus.types'
import { ISelectOption } from '@/presentation/components/SelectPokemon/SelectPokemonComponent.types'
import { createSelector } from '@reduxjs/toolkit'
import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts'

export const selectPokemon = (state: RootState): IPokemonState => state.pokemon

export const selectPokemonData = (state: RootState): Pokemon | undefined =>
  createSelector([selectPokemon], ({ pokemonData }) => pokemonData)(state)

export const selectSpeciesData = (
  state: RootState,
): PokemonSpecies | undefined =>
  createSelector([selectPokemon], ({ speciesData }) => speciesData)(state)

export const selectEvolutionChainData = (
  state: RootState,
): EvolutionChain | undefined =>
  createSelector(
    [selectPokemon],
    ({ evolutionChainData }) => evolutionChainData,
  )(state)

export const selectPokemonRequestStatus = (state: RootState): ERequestStatus =>
  createSelector([selectPokemon], ({ status }) => status)(state)

export const selectPokemonById = (
  state: RootState,
  pokemonId: number,
): ISelectOption | undefined =>
  selectPokemonList(state).find(pokemon => pokemon.id === pokemonId)
