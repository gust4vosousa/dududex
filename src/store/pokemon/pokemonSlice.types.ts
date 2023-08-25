import { Pokemon } from 'pokenode-ts'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import { ISelectOption } from '../../components/SelectPokemon/SelectPokemonComponent.types'

export interface IPokemonState {
  data?: Pokemon
  status: ERequestStatus
}

export type TPokemonListItem = ISelectOption

export enum EPokemonActionTypes {
  FETCH_BY_NAME = '@pokemon/fetchByName',
  FETCH_BY_ID = '@pokemon/fetchById',
  RESET = '@pokemon/reset',
}
