import { PokemonAbility } from 'pokenode-ts'
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils'
import { IAdaptedAbility } from './AbilityAdapter.types'

export const abilityAdapter = (ability: PokemonAbility): IAdaptedAbility => ({
  isHidden: ability.is_hidden,
  name: firstLetterUpperCaseUtil(ability.ability.name),
  slot: ability.slot,
})
