import { IAdaptedAbility } from '@/application/adapters/Ability/AbilityAdapter.types'
import { firstLetterUpperCaseUtil } from '@/application/utils/formatUtils'
import { PokemonAbility } from 'pokenode-ts'

export const abilityAdapter = (ability: PokemonAbility): IAdaptedAbility => ({
  isHidden: ability.is_hidden,
  name: firstLetterUpperCaseUtil(ability.ability.name),
  slot: ability.slot,
})
