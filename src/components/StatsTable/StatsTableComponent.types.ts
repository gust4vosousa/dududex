import { PokemonStat } from 'pokenode-ts';

export interface IStatsTableProps {
  statsList: PokemonStat[];
}

export interface IStatBarStyleProps {
  value: number;
  color: string;
}

export interface IStatLabelStyleProps {
  type: 'name' | 'value';
}

export enum EStatRanges {
  bad,
  regular,
  medium,
  good,
  excellent
}

export enum EStatNames {
  hp = 'hp',
  attack = 'attack',
  defense = 'defense',
  speed = 'speed',
  specialAttack = 'special-attack',
  specialDefense = 'special-defense'
}
