import { EPokemonTypes } from '../../@types/entities/Pokemon/Types/PokemonTypesEntity.types'
import { EStatRanges } from '../../@types/entities/Stats/StatsEntity.types'

export const useColor = () => {
  const getTypeColor = (type: EPokemonTypes) => {
    const colors: Record<EPokemonTypes, string> = {
      [EPokemonTypes.BUG]: '#A6B91A',
      [EPokemonTypes.DARK]: '#705746',
      [EPokemonTypes.DRAGON]: '#6F35FC',
      [EPokemonTypes.ELECTRIC]: '#F7D02C',
      [EPokemonTypes.FAIRY]: '#D685AD',
      [EPokemonTypes.FIGHTING]: '#C22E28',
      [EPokemonTypes.FIRE]: '#EE8130',
      [EPokemonTypes.FLYING]: '#A98FF3',
      [EPokemonTypes.GHOST]: '#735797',
      [EPokemonTypes.GRASS]: '#7AC74C',
      [EPokemonTypes.GROUND]: '#E2BF65',
      [EPokemonTypes.ICE]: '#96D9D6',
      [EPokemonTypes.NORMAL]: '#A8A77A',
      [EPokemonTypes.POISON]: '#A33EA1',
      [EPokemonTypes.PSYCHIC]: '#F95587',
      [EPokemonTypes.ROCK]: '#B6A136',
      [EPokemonTypes.STEEL]: '#B7B7CE',
      [EPokemonTypes.WATER]: '#6390F0',
    }

    return colors[type]
  }

  const getStatColor = (statValue: number) => {
    const statRanges = [
      { maxValue: 20, title: EStatRanges.TERRIBLE },
      { maxValue: 50, title: EStatRanges.LOW },
      { maxValue: 80, title: EStatRanges.AVERAGE },
      { maxValue: 110, title: EStatRanges.GOOD },
      { maxValue: 140, title: EStatRanges.HIGH },
      { maxValue: 170, title: EStatRanges.EXCELLENT },
    ]

    const colors: Record<EStatRanges, string> = {
      [EStatRanges.TERRIBLE]: '#d32f2f',
      [EStatRanges.LOW]: '#dd2c00',
      [EStatRanges.AVERAGE]: '#ff6d00',
      [EStatRanges.GOOD]: '#ffd600',
      [EStatRanges.HIGH]: '#64dd17',
      [EStatRanges.EXCELLENT]: '#00c853',
      [EStatRanges.LEGENDARY]: '#00bfa5',
    }

    const range: EStatRanges =
      statRanges.find((statRange) => statValue <= statRange.maxValue)?.title ??
      EStatRanges.LEGENDARY

    return colors[range]
  }

  return { getTypeColor, getStatColor }
}
