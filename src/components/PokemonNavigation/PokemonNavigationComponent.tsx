import { Box } from '@material-ui/core';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCallback } from 'react';
import { selectPokemonById } from '../../store/pokemon/pokemonSelectors';
import { fetchPokemonById } from '../../store/pokemon/pokemonThunks';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils';
import {
  NavigationButton,
  NavigationContainer
} from './PokemonNavigationComponent.styles';
import { IPokemonNavigationProps } from './PokemonNavigationComponent.types';

export const PokemonNavigationComponent: React.FC<IPokemonNavigationProps> = ({
  currentPokemonId
}) => {
  const dispatch = useAppDispatch();

  const onPokemonSearch = useCallback(
    (pokemonId: number) => {
      dispatch(fetchPokemonById(pokemonId));
    },
    [dispatch]
  );

  const currentPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId)
  );

  const previousProkemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId - 1)
  );

  const nextPokemon = useAppSelector((state) =>
    selectPokemonById(state, currentPokemonId + 1)
  );

  return (
    <NavigationContainer>
      {previousProkemon && (
        <NavigationButton
          onClick={() => onPokemonSearch(previousProkemon?.id!)}
        >
          {`#${previousProkemon.id} ${firstLetterUpperCaseUtil(
            previousProkemon.label
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
