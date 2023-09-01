import { EPokemonTypes } from '../../@types/entities/PokemonTypes/PokemonTypesEntity.types'

export interface ITypeBadgeProps {
  types: EPokemonTypes[]
}

export interface ITypeBadgeStyles {
  color: string
  isFirst: boolean
  isMonoType: boolean
}
