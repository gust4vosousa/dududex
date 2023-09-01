import { EStatNames } from '../@types/entities/Stats/StatsEntity.types'
import { ISelectOption } from '../components/SelectPokemon/SelectPokemonComponent.types'

export const firstLetterUpperCaseUtil = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export const formatStatNameUtil = (statName: EStatNames) => {
  const name = {
    [EStatNames.ATTACK]: 'Attack',
    [EStatNames.DEFENSE]: 'Defense',
    [EStatNames.SPEED]: 'Speed',
    [EStatNames.HP]: 'Hp',
    [EStatNames.SPECIAL_ATTACK]: 'Sp. Attack',
    [EStatNames.SPECIAL_DEFENSE]: 'Sp. Defense',
  }

  return name[statName]
}

export const formatPokemonEntryUtil = ({ id, label }: ISelectOption): string =>
  `#${id} ${firstLetterUpperCaseUtil(label)}`
