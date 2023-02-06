import CompareIcon from '@mui/icons-material/Compare';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../../assets/icons/pokeball48.png';
import {
  HeaderContainer,
  NavButtonsContainer,
  NavItem,
  TitleContainer
} from './HeaderComponent.styles';

export const HeaderComponent: React.FC = () => (
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
  </HeaderContainer>
);
