import { useCallback } from 'react'
import { selectPokemonById } from '../../store/pokemon/pokemonSelectors'
import { fetchPokemonById } from '../../store/pokemon/pokemonThunks'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils'
import { ISelectOption } from '../SelectPokemon/SelectPokemonComponent.types'

export const getPokemonLabel = (option: ISelectOption): string =>
  `#${option.id} ${firstLetterUpperCaseUtil(option.label)}`

export const usePokemonNavigationComponentRules = (
  currentPokemonId: number
) => {
  const dispatch = useAppDispatch()

  const currentPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId)
  )

  const previousPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId - 1)
  )

  const nextPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId + 1)
  )

  const onPokemonSearch = useCallback(
    (pokemonId: number) => {
      dispatch(fetchPokemonById(pokemonId))
    },
    [dispatch]
  )

  return {
    currentPokemon,
    nextPokemon,
    onPokemonSearch,
    previousPokemon,
  }
}
