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

  const extractEvolution = useCallback((chainLink: ChainLink) => {
    const currentEvolution: string[] = [chainLink.species.name]
    const nextEvolutions: string[] = chainLink.evolves_to.flatMap((evolution) =>
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

  const handleEvolutions = useCallback(() => {
    const evolutionNames = extractEvolution(evolutionChain.chain)

    const spritePromises = evolutionNames.map(async (name) => {
      const sprites = await getPokemonSprite(name)
      return sprites?.front_default ?? ''
    })

    Promise.all(spritePromises).then((urls) => {
      setEvolutionLine(
        evolutionNames.map((name, index) => ({ name, spriteUrl: urls[index] }))
      )
    })
  }, [evolutionChain.chain, extractEvolution, getPokemonSprite])

  useEffect(() => {
    handleEvolutions()
  }, [handleEvolutions])

  return { evolutionLine, onSelectEvolution }
}
