import { selectPokemonById } from '@/application/store/pokemon/pokemonSelectors'
import { useAppSelector } from '@/application/store/store'
import { ISelectOption } from '@/presentation/components/SelectPokemon/SelectPokemonComponent.types'

export const usePokemonNavigationComponentRules = (
  currentSearch: ISelectOption,
) => {
  const currentPokemon = useAppSelector(state =>
    selectPokemonById(state, currentSearch.id),
  )

  const previousPokemon = useAppSelector(state =>
    selectPokemonById(state, currentSearch.id - 1),
  )

  const nextPokemon = useAppSelector(state =>
    selectPokemonById(state, currentSearch.id + 1),
  )

  return {
    currentPokemon,
    nextPokemon,
    previousPokemon,
  }
}
