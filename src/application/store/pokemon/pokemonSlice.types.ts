import { ERequestStatus } from '@/domain/application/RequestStatus.types'
import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts'

export interface IPokemonState {
  evolutionChainData?: EvolutionChain
  pokemonData?: Pokemon
  speciesData?: PokemonSpecies
  status: ERequestStatus
}

export enum EPokemonActionTypes {
  FETCH_BY_ID = '@pokemon/fetchById',
  FETCH_SPECIES_BY_ID = '@pokemon/fetchSpeciesById',
}
