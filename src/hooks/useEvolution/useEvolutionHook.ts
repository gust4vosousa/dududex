import { ChainLink } from 'pokenode-ts'
import { useCallback, useMemo } from 'react'
import { getPokemonByName } from '../../services/getPokemon'
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils'

export const useEvolutionHook = (chain: ChainLink) => {
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

    return [...currentEvolution, ...nextEvolutions].map((name) =>
      firstLetterUpperCaseUtil(name)
    )
  }, [])

  const evolutionNames = useMemo<string[]>(
    () => extractEvolution(chain),
    [chain, extractEvolution]
  )

  const evolutionLine = useMemo(() => {
    const line = evolutionNames.map(async (name) => ({
      name,
      sprites: await getPokemonSprite(name),
    }))

    return line
  }, [evolutionNames, getPokemonSprite])

  return { evolutionLine }
}
