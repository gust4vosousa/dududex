import { PokemonSprites } from 'pokenode-ts';

export enum ESpriteModes {
  front = 'front',
  back = 'back'
}
export interface ISpriteProps {
  sprites: PokemonSprites;
}
