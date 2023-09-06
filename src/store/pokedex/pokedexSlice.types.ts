import { Pokedex } from 'pokenode-ts'
import { ERequestStatus } from '../../@types/RequestStatus.types'

export interface IPokedexState {
  data?: Pokedex
  status: ERequestStatus
}

export enum EPokedexActionTypes {
  fetchById = 'pokedex/fetchById',
}
