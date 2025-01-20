import { EPokemonTypes } from '@/domain/entities/Pokemon/Types/PokemonTypesEntity.types'

export interface ITypeBadgeProps {
  types: EPokemonTypes[]
}

export interface ITypeBadgeStyles {
  isFirst: boolean
  isMonoType: boolean
}
