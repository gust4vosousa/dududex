import { IPokemonListItem } from '../../store/pokemon/pokemonSlice.types';

export interface ISearchProps {
  pokemonList: IPokemonListItem[];
  label: string;
  isBusy: boolean;
  onChange: (pokemonId: number) => void;
}
