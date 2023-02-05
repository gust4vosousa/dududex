import logo from '../../assets/icons/pokeball48.png';
import { SelectComponent } from '../SelectPokemon/SelectPokemonComponent';
import { useHeaderComponentRules } from './HeaderComponent.rules';
import { HeaderContainer, TitleContainer } from './HeaderComponent.styles';
import { EHeaderModes, IHeaderProps } from './HeaderComponent.types';

export const HeaderComponent: React.FC<IHeaderProps> = ({ mode }) => {
  const { pokemonList, isPokedexBusy, onPokemonSearch } =
    useHeaderComponentRules();

  return (
    <HeaderContainer>
      <TitleContainer to='/'>
        <img src={logo} alt='Logo' />
        Dududex
      </TitleContainer>

      {mode === EHeaderModes.home && (
        <SelectComponent
          options={pokemonList}
          label='Pokémon'
          onChange={onPokemonSearch}
          loading={isPokedexBusy}
        />
      )}
    </HeaderContainer>
  );
};
