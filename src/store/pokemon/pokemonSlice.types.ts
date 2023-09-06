import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts'
import { ERequestStatus } from '../../@types/RequestStatus.types'

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
