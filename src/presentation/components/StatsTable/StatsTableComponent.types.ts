import { PokemonStat } from 'pokenode-ts'

export interface IStatsTableProps {
  statsList: PokemonStat[]
}

export interface IStatBarStyleProps {
  value: number
  color: string
}

export interface IStatLabelStyleProps {
  type: 'name' | 'value'
}
