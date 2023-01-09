import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pokemonReducer } from './pokemon/pokemonSlice';
import { AppDispatch, RootState } from './store.types';

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default configureStore({
  reducer: rootReducer
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
