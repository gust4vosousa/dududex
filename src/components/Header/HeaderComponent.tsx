import CompareIcon from '@mui/icons-material/Compare';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../../assets/icons/pokeball48.png';
import { SelectComponent } from '../SelectPokemon/SelectPokemonComponent';
import { useHeaderComponentRules } from './HeaderComponent.rules';
import {
  HeaderContainer,
  NavButtonsContainer,
  NavItem,
  TitleContainer
} from './HeaderComponent.styles';
import { EHeaderModes, IHeaderProps } from './HeaderComponent.types';

export const HeaderComponent: React.FC<IHeaderProps> = ({ mode }) => {
  const { pokemonList, isPokedexBusy, onPokemonSearch } =
    useHeaderComponentRules();

  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={logo} alt='Logo' />
        Dududex
      </TitleContainer>

      <NavButtonsContainer>
        <NavItem to='/' color='inherit'>
          <HomeIcon />
          Home
        </NavItem>

        <NavItem to='/compare'>
          <CompareIcon />
          Compare
        </NavItem>
      </NavButtonsContainer>

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
