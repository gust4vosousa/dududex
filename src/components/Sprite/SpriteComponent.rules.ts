import { useMemo, useState } from 'react'
import { ESpriteModes, ISpriteProps } from './SpriteComponent.types'

export const useSpriteComponentRules = ({ sprites }: ISpriteProps) => {
  const [isShiny, setIsShiny] = useState<boolean>(false)
  const [isBackSprite, setIsBackSprite] = useState<boolean>(false)

  const currentSprite = useMemo<string | null>(() => {
    const mode = isBackSprite ? ESpriteModes.BACK : ESpriteModes.FRONT

    const images: Record<ESpriteModes, string | null> = {
      [ESpriteModes.BACK]: isShiny ? sprites.back_shiny : sprites.back_default,
      [ESpriteModes.FRONT]: isShiny
        ? sprites.front_shiny
        : sprites.front_default,
    }

    return images[mode]
  }, [
    isBackSprite,
    isShiny,
    sprites.back_default,
    sprites.back_shiny,
    sprites.front_default,
    sprites.front_shiny,
  ])

  return { currentSprite, isBackSprite, isShiny, setIsBackSprite, setIsShiny }
}
