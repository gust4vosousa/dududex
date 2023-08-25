import { PokemonClient } from 'pokenode-ts'

const httpClient = new PokemonClient()

export const getPokemonByName = async (pokemon: string) =>
  await httpClient.getPokemonByName(pokemon)

export const getPokemonById = async (id: number) =>
  await httpClient.getPokemonById(id)
