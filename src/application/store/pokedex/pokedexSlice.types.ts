import { ERequestStatus } from '@/domain/application/RequestStatus.types'
import { Pokedex } from 'pokenode-ts'

export interface IPokedexState {
  data?: Pokedex
  status: ERequestStatus
}

export enum EPokedexActionTypes {
  fetchById = 'pokedex/fetchById',
}
