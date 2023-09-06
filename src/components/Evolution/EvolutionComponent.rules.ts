import { ChainLink } from 'pokenode-ts'
import { useCallback, useEffect, useState } from 'react'
import { getPokemonByName } from '../../services/getPokemon'
import { selectPokemonList } from '../../store/pokedex/pokedexSelectors'
import { useAppSelector } from '../../store/store'
import { IEvolutionLine, IEvolutionProps } from './EvolutionComponent.types'

export const useEvolutionComponentRules = ({
  evolutionChain,
  onPokemonSearch,
}: IEvolutionProps) => {
  const [evolutionLine, setEvolutionLine] = useState<IEvolutionLine[]>([])

  const pokemonList = useAppSelector(selectPokemonList)

  const getPokemonSprite = useCallback(async (pokemonName: string) => {
    try {
      const response = await getPokemonByName(pokemonName)
      return response.sprites
    } catch (error) {
      console.log(error)
    }
  }, [])

  const extractEvolution = useCallback((chain: ChainLink) => {
    const currentEvolution: string[] = [chain.species.name]
    const nextEvolutions: string[] = chain.evolves_to.flatMap((evolution) =>
      extractEvolution(evolution)
    )

    return [...currentEvolution, ...nextEvolutions]
  }, [])

  const onSelectEvolution = useCallback(
    (pokemonName: string) => {
      const id = pokemonList.find(
        (pokemon) => pokemon.label === pokemonName.toLowerCase()
      )?.id

      if (id) {
        onPokemonSearch({ id, label: pokemonName })
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    },
    [onPokemonSearch, pokemonList]
  )

  useEffect(() => {
    setEvolutionLine([])
    const evolutionNames = extractEvolution(evolutionChain.chain)

    evolutionNames.forEach(async (name) => {
      const sprites = await getPokemonSprite(name)

      if (sprites) {
        const spriteUrl: string = sprites.front_default ?? ''

        setEvolutionLine((prev) => {
          if (!prev.find((line) => line.name === name)) {
            return [...prev, { name, spriteUrl }]
          }

          return prev
        })
      }
    })
  }, [evolutionChain.chain, extractEvolution, getPokemonSprite])

  return { evolutionLine, onSelectEvolution }
}
