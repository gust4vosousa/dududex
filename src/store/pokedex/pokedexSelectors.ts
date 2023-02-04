import { Pokedex } from 'pokenode-ts';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { RootState } from '../store.types';

export const selectPokedexData = (state: RootState): Pokedex | undefined =>
  state.pokedex.data;

export const selectPokedexRequestStatus = (state: RootState): ERequestStatus =>
  state.pokedex.status;
