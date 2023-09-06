import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { formatPokemonEntryUtil } from '../../utils/formatUtils'
import { EvolutionComponent } from '../Evolution/EvolutionComponent'
import { SpriteComponent } from '../Sprite/SpriteComponent'
import { StatsTableComponent } from '../StatsTable/StatsTableComponent'
import { TypeBadgeComponent } from '../TypeBadge/TypeBadgeComponent'
import { usePokemonDetailsComponentRules } from './PokemonDetailsComponent.rules'
import { IPokemonDetailsProps } from './PokemonDetailsComponent.types'

export const PokemonDetailsComponent: React.FC<IPokemonDetailsProps> = ({
  evolutionChain,
  onPokemonSearch,
  pokemon,
}) => {
  const { abilities, types } = usePokemonDetailsComponentRules(pokemon)

  return (
    <Card style={{ padding: 16 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <SpriteComponent sprites={pokemon.sprites} />
        </Grid>
        <Grid
          item
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <Typography fontSize={32} fontWeight='bold'>
            {formatPokemonEntryUtil({ id: pokemon.id, label: pokemon.name })}
          </Typography>

          <TypeBadgeComponent types={types} />

          <Box>
            <Typography fontSize={24} fontWeight='bold'>
              Abilities
            </Typography>

            {abilities.map((ability) => (
              <Typography
                fontSize={18}
                key={ability.name}
              >{`• ${ability.name}`}</Typography>
            ))}
          </Box>

          <EvolutionComponent
            evolutionChain={evolutionChain}
            onPokemonSearch={onPokemonSearch}
          />
        </Grid>
        <Grid item>
          <StatsTableComponent statsList={pokemon.stats} />
        </Grid>
      </Grid>
    </Card>
  )
}
