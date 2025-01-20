import { EStatNames } from '@/domain/entities/Stats/StatsEntity.types'

export interface IAdaptedStat {
  name: EStatNames
  value: number
}
