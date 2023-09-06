import { Pokemon } from 'pokenode-ts'
import { useMemo } from 'react'
import { EPokemonTypes } from '../../@types/entities/Pokemon/Types/PokemonTypesEntity.types'
import { abilityAdapter } from '../../adapters/Ability/AbilityAdapter'

export const usePokemonDetailsComponentRules = (pokemon: Pokemon) => {
  const { abilities, types } = useMemo(
    () => ({
      abilities: pokemon.abilities.map((ability) => abilityAdapter(ability)),
      types: pokemon.types.map(({ type }) => type.name as EPokemonTypes),
    }),
    [pokemon.abilities, pokemon.types]
  )

  return { abilities, types }
}
