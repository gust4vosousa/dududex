import React from 'react'

import { formatPokemonEntryUtil } from '@/application/utils/formatUtils'
import { EvolutionComponent } from '@/presentation/components/Evolution/EvolutionComponent'
import { IconComponent } from '@/presentation/components/Icon/IconComponent'
import { EIcons } from '@/presentation/components/Icon/IconComponent.types'
import { ScreenProvider } from '@/presentation/components/Providers/Screen/ScreenProvider'
import { SelectComponent } from '@/presentation/components/SelectPokemon/SelectPokemonComponent'
import { SpriteComponent } from '@/presentation/components/Sprite/SpriteComponent'
import { StatsTableComponent } from '@/presentation/components/StatsTable/StatsTableComponent'
import { TypeBadgeComponent } from '@/presentation/components/TypeBadge/TypeBadgeComponent'
import { Box, Card, CircularProgress, Grid, Typography } from '@mui/material'
import { useHomeScreenRules } from './HomeScreen.rules'

export const HomeScreen: React.FC = () => {
  const {
    abilities,
    currentSearch,
    evolutionChainData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch,
    pokemonData,
    pokemonList,
    types,
  } = useHomeScreenRules()

  return (
    <ScreenProvider>
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Card style={{ padding: 16 }}>
          <SelectComponent
            currentSearch={currentSearch}
            options={pokemonList}
            label='Pokémon'
            loading={isPokedexBusy}
            onChange={onPokemonSearch}
          />
        </Card>

        <Card style={{ padding: 16 }}>
          <Grid container spacing={2}>
            {isPokemonBusy && (
              <Grid
                item
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  textAlign: 'center',
                }}
                xs={12}
              >
                <CircularProgress size={50} color='inherit' />
              </Grid>
            )}

            {!pokemonData && !isPokemonBusy && (
              <Grid
                item
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  textAlign: 'center',
                }}
                xs={12}
              >
                <IconComponent fontSize='large' icon={EIcons.WARNING} />
                Nothing to show yet. Please, select a Pokémon to display its
                information
              </Grid>
            )}

            {pokemonData && !isPokemonBusy && (
              <Grid item>
                <Grid container spacing={2}>
                  <Grid
                    item
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                    }}
                  >
                    <SpriteComponent sprites={pokemonData.sprites} />
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                    }}
                  >
                    <Typography fontSize={32} fontWeight='bold'>
                      {formatPokemonEntryUtil({
                        id: pokemonData.id,
                        label: pokemonData.name,
                      })}
                    </Typography>
                    <TypeBadgeComponent types={types!} />
                    <Box>
                      <Typography fontSize={24} fontWeight='bold'>
                        Abilities
                      </Typography>

                      {abilities!.map(ability => (
                        <Typography
                          fontSize={18}
                          key={ability.name}
                        >{`• ${ability.name}`}</Typography>
                      ))}
                    </Box>
                    <EvolutionComponent
                      evolutionChain={evolutionChainData!}
                      onPokemonSearch={onPokemonSearch}
                    />
                  </Grid>
                  <Grid item>
                    <StatsTableComponent statsList={pokemonData.stats} />
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Card>
      </Box>
    </ScreenProvider>
  )
}
