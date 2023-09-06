import { EPokemonTypes } from '../../@types/entities/Pokemon/Types/PokemonTypesEntity.types'

export interface ITypeBadgeProps {
  types: EPokemonTypes[]
}

export interface ITypeBadgeStyles {
  isFirst: boolean
  isMonoType: boolean
}
