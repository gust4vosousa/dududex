import axios from 'axios'
import {
  EvolutionChain,
  Pokemon,
  PokemonClient,
  PokemonSpecies,
} from 'pokenode-ts'

const httpClient = new PokemonClient()

export const getPokemonById = async (id: number): Promise<Pokemon> =>
  await httpClient.getPokemonById(id)

export const getPokemonByName = async (name: string): Promise<Pokemon> =>
  await httpClient.getPokemonByName(name)

export const getPokemonSpeciesById = async (
  id: number
): Promise<PokemonSpecies> => await httpClient.getPokemonSpeciesById(id)

export const getEvolutionChain = async (url: string): Promise<EvolutionChain> =>
  (await axios.get(url)).data
