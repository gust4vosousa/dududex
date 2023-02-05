import { Box } from '@material-ui/core';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils';
import { usePokemonNavigationComponentRules } from './PokemonNavigationComponent.rules';
import {
  NavigationButton,
  NavigationContainer
} from './PokemonNavigationComponent.styles';
import { IPokemonNavigationProps } from './PokemonNavigationComponent.types';

export const PokemonNavigationComponent: React.FC<IPokemonNavigationProps> = ({
  currentPokemonId
}) => {
  const { currentPokemon, previousPokemon, nextPokemon, onPokemonSearch } =
    usePokemonNavigationComponentRules(currentPokemonId);

  return (
    <NavigationContainer>
      {previousPokemon && (
        <NavigationButton onClick={() => onPokemonSearch(previousPokemon?.id!)}>
          {`#${previousPokemon.id} ${firstLetterUpperCaseUtil(
            previousPokemon.label
          )}`}
          <ArrowBackIosNewIcon />
        </NavigationButton>
      )}

      <Box style={{ fontSize: 48 }}>
        {currentPokemon &&
          `#${currentPokemon.id} ${firstLetterUpperCaseUtil(
            currentPokemon.label
          )}`}
      </Box>

      {nextPokemon && (
        <NavigationButton onClick={() => onPokemonSearch(nextPokemon?.id!)}>
          <ArrowForwardIosIcon />
          {`#${nextPokemon.id} ${firstLetterUpperCaseUtil(nextPokemon.label)}`}
        </NavigationButton>
      )}
    </NavigationContainer>
  );
};
