import { ISelectOption } from '../SelectPokemon/SelectPokemonComponent.types'

export enum ENavigationModes {
  PREVIOUS = 'previous',
  NEXT = 'next',
}

export interface IPokemonNavigationProps {
  currentSearch: ISelectOption
  onPokemonSearch: (pokemon: ISelectOption) => void
}
