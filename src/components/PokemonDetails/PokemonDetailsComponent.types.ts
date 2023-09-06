import { EvolutionChain, Pokemon } from 'pokenode-ts'
import { ISelectOption } from '../SelectPokemon/SelectPokemonComponent.types'

export interface IPokemonDetailsProps {
  evolutionChain: EvolutionChain
  onPokemonSearch: (pokemon: ISelectOption) => void
  pokemon: Pokemon
}
