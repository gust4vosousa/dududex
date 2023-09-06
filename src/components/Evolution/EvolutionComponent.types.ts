import { EvolutionChain } from 'pokenode-ts'
import { ISelectOption } from '../SelectPokemon/SelectPokemonComponent.types'

export interface IEvolutionProps {
  evolutionChain: EvolutionChain
  onPokemonSearch: (pokemon: ISelectOption) => void
}

export interface IEvolutionLine {
  name: string
  spriteUrl: string
}
