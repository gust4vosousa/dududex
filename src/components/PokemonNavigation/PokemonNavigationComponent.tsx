import React from 'react'

import { Button, Grid } from '@mui/material'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'
import {
  getPokemonLabel,
  usePokemonNavigationComponentRules,
} from './PokemonNavigationComponent.rules'
import {
  StyledGridNext,
  StyledGridPrevious,
} from './PokemonNavigationComponent.styles'
import { IPokemonNavigationProps } from './PokemonNavigationComponent.types'

export const PokemonNavigationComponent: React.FC<IPokemonNavigationProps> = ({
  currentPokemonId,
}) => {
  const { currentPokemon, nextPokemon, onPokemonSearch, previousPokemon } =
    usePokemonNavigationComponentRules(currentPokemonId)

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
            onClick={() => onPokemonSearch(previousPokemon.id)}
            variant='contained'
          >
            {getPokemonLabel(previousPokemon)}
            <IconComponent icon={EIcons.ARROW_BACK} />
          </Button>
        )}
      </StyledGridPrevious>

      <Grid
        item
        xs={12}
        md={4}
        style={{ display: 'flex', fontSize: 48, justifyContent: 'center' }}
      >
        {currentPokemon && getPokemonLabel(currentPokemon)}
      </Grid>

      <StyledGridNext item xs={12} md={4}>
        {nextPokemon && (
          <Button
            onClick={() => onPokemonSearch(nextPokemon.id)}
            variant='contained'
          >
            <IconComponent icon={EIcons.ARROW_FORWARD} />
            {getPokemonLabel(nextPokemon)}
          </Button>
        )}
      </StyledGridNext>
    </Grid>
  )
}
