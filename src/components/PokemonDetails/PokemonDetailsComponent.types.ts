import { EvolutionChain, Pokemon, PokemonSpecies } from 'pokenode-ts'
import { ISelectOption } from '../SelectPokemon/SelectPokemonComponent.types'

export interface IPokemonDetailsProps {
  evolutionChain: EvolutionChain
  onPokemonSearch: (pokemon: ISelectOption) => void
  pokemon: Pokemon
  species: PokemonSpecies
}
