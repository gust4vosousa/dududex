import { PokemonSprites } from 'pokenode-ts'

export enum ESpriteModes {
  FRONT = 'front',
  BACK = 'back',
}
export interface ISpriteProps {
  sprites: PokemonSprites
}
