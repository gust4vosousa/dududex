import { Pokemon } from 'pokenode-ts'
import { ERequestStatus } from '../../@types/RequestStatus.types'

export interface IPokemonState {
  data?: Pokemon
  status: ERequestStatus
}

export enum EPokemonActionTypes {
  FETCH_BY_NAME = '@pokemon/fetchByName',
  FETCH_BY_ID = '@pokemon/fetchById',
  RESET = '@pokemon/reset',
}
