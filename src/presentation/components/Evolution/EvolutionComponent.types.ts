import { ISelectOption } from '@/presentation/components/SelectPokemon/SelectPokemonComponent.types'
import { EvolutionChain } from 'pokenode-ts'

export interface IEvolutionProps {
  evolutionChain: EvolutionChain
  onPokemonSearch: (pokemon: ISelectOption) => void
}

export interface IEvolutionLine {
  name: string
  spriteUrl: string
}
