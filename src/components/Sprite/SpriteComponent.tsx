import { SpriteContainer } from './SpriteComponent.styles';
import { ISpriteProps } from './SpriteComponent.types';

export const SpriteComponent: React.FC<ISpriteProps> = ({
  sprites,
  isShiny
}) => {
  const back = isShiny ? sprites.back_shiny : sprites.back_default;
  const front = isShiny ? sprites.front_shiny : sprites.front_default;

  return (
    <SpriteContainer>
      <img src={front!} alt='Pokémon front sprite' />
      <img src={back!} alt='Pokémon back sprite' />
    </SpriteContainer>
  );
};
