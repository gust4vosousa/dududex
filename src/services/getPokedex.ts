import { GameClient } from 'pokenode-ts'
import { EPokedexes } from '../@types/Entities.types'

const httpClient = new GameClient()

export const getPokedexById = async (id: EPokedexes) =>
  await httpClient.getPokedexById(id)
