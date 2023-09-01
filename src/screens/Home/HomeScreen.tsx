import React, { Fragment } from 'react'

import { Box, Card, CircularProgress, Grid } from '@mui/material'
import { IconComponent } from '../../components/Icon/IconComponent'
import { EIcons } from '../../components/Icon/IconComponent.types'
import { PokemonNavigationComponent } from '../../components/PokemonNavigation/PokemonNavigationComponent'
import { SelectComponent } from '../../components/SelectPokemon/SelectPokemonComponent'
import { SpriteComponent } from '../../components/Sprite/SpriteComponent'
import { StatsTableComponent } from '../../components/StatsTable/StatsTableComponent'
import { TypeBadgeComponent } from '../../components/TypeBadge/TypeBadgeComponent'
import { ScreenProvider } from '../../providers/Screen/ScreenProvider'
import { useHomeScreenRules } from './HomeScreen.rules'

export const HomeScreen: React.FC = () => {
  const {
    currentSearch,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch,
    pokemonData,
    pokemonList,
    pokemonTypes,
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
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {isPokemonBusy && <CircularProgress size={50} color='inherit' />}

              {!pokemonData && !isPokemonBusy && (
                <Box
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    textAlign: 'center',
                  }}
                >
                  <IconComponent fontSize='large' icon={EIcons.WARNING} />
                  Nothing to show yet. Please, select a Pokémon to display its
                  information
                </Box>
              )}
            </Grid>

            {currentSearch && pokemonData && !isPokemonBusy && (
              <Fragment>
                <Grid item xs={12}>
                  <PokemonNavigationComponent
                    currentSearch={currentSearch}
                    onPokemonSearch={onPokemonSearch}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <TypeBadgeComponent types={pokemonTypes} />
                  <SpriteComponent sprites={pokemonData.sprites} />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <StatsTableComponent statsList={pokemonData.stats} />
                </Grid>
              </Fragment>
            )}
          </Grid>
        </Card>
      </Box>
    </ScreenProvider>
  )
}
