import { Pokemon } from 'pokenode-ts';
import { ERequestStatus } from '../../@types/RequestStatus.types';

export interface IPokemonState {
  data?: Pokemon;
  status: ERequestStatus;
}

export interface IPokemonListItem {
  label: string;
  id: number;
}

export enum EPokemonActionTypes {
  fetchByName = 'pokemon/fetchByName',
  fetchById = 'pokemon/fetchById'
}
