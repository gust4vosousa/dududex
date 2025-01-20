import { IAdaptedStat } from '@/application/adapters/Stats/statAdapter.types'
import { EStatNames } from '@/domain/entities/Stats/StatsEntity.types'
import { PokemonStat } from 'pokenode-ts'

export const statAdapter = (stat: PokemonStat): IAdaptedStat => ({
  name: stat.stat.name as EStatNames,
  value: stat.base_stat,
})
