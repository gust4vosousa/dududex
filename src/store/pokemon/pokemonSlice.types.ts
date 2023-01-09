import { Pokemon } from 'pokenode-ts';
import { ERequestStatus } from '../../@types/RequestStatus.types';

export interface IPokemonState {
  data?: Pokemon;
  status: ERequestStatus;
}
