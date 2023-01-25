import WarningIcon from '@mui/icons-material/Warning';
import { Box, CircularProgress, Grid } from '@mui/material';
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils';
import { SpriteComponent } from '../Sprite/SpriteComponent';
import { StatsTableComponent } from '../StatsTable/StatsTableComponent';
import { TypeBadgeComponent } from '../TypeBadge/TypeBadgeComponent';
import { PokemonCard } from './PokemonCardComponent.styles';
import { IPokemonCardProps } from './PokemonCardComponent.types';

export const PokemonCardComponent: React.FC<IPokemonCardProps> = ({
  pokemon,
  isBusy
}) => {
  return (
    <PokemonCard>
      {!pokemon && !isBusy && (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            fontSize: 18
          }}
        >
          <WarningIcon />
          {'Select a Pokémon to display its information'}
        </Box>
      )}

      {pokemon && !isBusy && (
        <>
          <Grid
            container
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Grid
              item
              sm={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 16
              }}
            >
              <Box fontSize={48}>{firstLetterUpperCaseUtil(pokemon.name)}</Box>
              <TypeBadgeComponent types={pokemon.types} />
              <SpriteComponent sprites={pokemon.sprites} />
            </Grid>
            <Grid item sm={12} md={6}>
              <StatsTableComponent statsList={pokemon.stats} />
            </Grid>
          </Grid>
        </>
      )}

      {isBusy && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={120} />
        </Box>
      )}
    </PokemonCard>
  );
};
