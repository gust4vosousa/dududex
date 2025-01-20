import React from 'react'

import { formatPokemonEntryUtil } from '@/application/utils/formatUtils'
import { IconComponent } from '@/presentation/components/Icon/IconComponent'
import { EIcons } from '@/presentation/components/Icon/IconComponent.types'
import { Button, Grid } from '@mui/material'
import { usePokemonNavigationComponentRules } from './PokemonNavigationComponent.rules'
import {
  StyledGridNext,
  StyledGridPrevious,
} from './PokemonNavigationComponent.styles'
import { IPokemonNavigationProps } from './PokemonNavigationComponent.types'

export const PokemonNavigationComponent: React.FC<IPokemonNavigationProps> = ({
  currentSearch,
  onPokemonSearch,
}) => {
  const { currentPokemon, nextPokemon, previousPokemon } =
    usePokemonNavigationComponentRules(currentSearch)

  return (
    <Grid
      container
      style={{
        alignItems: 'center',
      }}
    >
      <StyledGridPrevious item xs={12} md={4}>
        {previousPokemon && (
          <Button
            onClick={() => onPokemonSearch(previousPokemon)}
            variant='contained'
          >
            {formatPokemonEntryUtil(previousPokemon)}
            <IconComponent icon={EIcons.ARROW_BACK} />
          </Button>
        )}
      </StyledGridPrevious>

      <Grid
        item
        xs={12}
        md={4}
        style={{ display: 'flex', fontSize: 32, justifyContent: 'center' }}
      >
        {currentPokemon && formatPokemonEntryUtil(currentPokemon)}
      </Grid>

      <StyledGridNext item xs={12} md={4}>
        {nextPokemon && (
          <Button
            onClick={() => onPokemonSearch(nextPokemon)}
            variant='contained'
          >
            <IconComponent icon={EIcons.ARROW_FORWARD} />
            {formatPokemonEntryUtil(nextPokemon)}
          </Button>
        )}
      </StyledGridNext>
    </Grid>
  )
}
