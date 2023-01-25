import { PokemonType } from 'pokenode-ts';

export interface ITypeBadgeProps {
  types: PokemonType[];
}

export interface ITypeBadgeStyles {
  color: string;
  isFirst: boolean;
  isMonoType: boolean;
}
