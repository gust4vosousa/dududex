import { EPokedexes } from '@/domain/entities/Pokedex/PokedexEntity.types'
import { GameClient } from 'pokenode-ts'

const httpClient = new GameClient()

export const getPokedexById = async (id: EPokedexes) =>
  await httpClient.getPokedexById(id)
