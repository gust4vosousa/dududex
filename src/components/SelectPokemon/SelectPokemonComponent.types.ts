import { IPokemonListItem } from '../../store/pokemon/pokemonSlice.types';

export interface ISelectPokemonProps {
  options: IPokemonListItem[];
  label?: string;
  loading: boolean;
  onChange: (pokemonId: number) => void;
}
