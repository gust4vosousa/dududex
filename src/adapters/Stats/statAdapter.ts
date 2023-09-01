import { PokemonStat } from 'pokenode-ts'
import { EStatNames } from '../../@types/entities/Stats/StatsEntity.types'
import { IAdaptedStat } from './statAdapter.types'

export const statAdapter = (stat: PokemonStat): IAdaptedStat => ({
  name: stat.stat.name as EStatNames,
  value: stat.base_stat,
})
