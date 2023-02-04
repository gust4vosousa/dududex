import logo from '../../assets/icons/pokeball48.png';
import { SelectComponent } from '../SelectPokemon/SelectPokemonComponent';
import { useHeaderComponentRules } from './HeaderComponent.rules';
import { HeaderContainer, TitleContainer } from './HeaderComponent.styles';

export const HeaderComponent: React.FC = () => {
  const { pokemonList, isPokedexBusy, onPokemonSearch } =
    useHeaderComponentRules();

  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={logo} alt='Logo' />
        Dududex
      </TitleContainer>

      <SelectComponent
        options={pokemonList}
        label='Pokémon'
        onChange={onPokemonSearch}
        loading={isPokedexBusy}
      />
    </HeaderContainer>
  );
};
