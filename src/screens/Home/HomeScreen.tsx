import React from 'react'

import { Box, Card, CircularProgress, Grid } from '@mui/material'
import { IconComponent } from '../../components/Icon/IconComponent'
import { EIcons } from '../../components/Icon/IconComponent.types'
import { PokemonDetailsComponent } from '../../components/PokemonDetails/PokemonDetailsComponent'
import { SelectComponent } from '../../components/SelectPokemon/SelectPokemonComponent'
import { ScreenProvider } from '../../providers/Screen/ScreenProvider'
import { useHomeScreenRules } from './HomeScreen.rules'

export const HomeScreen: React.FC = () => {
  const {
    currentSearch,
    evolutionChainData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch,
    pokemonData,
    pokemonList,
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

            {pokemonData && !isPokemonBusy && (
              <Grid item>
                <PokemonDetailsComponent
                  evolutionChain={evolutionChainData!}
                  onPokemonSearch={onPokemonSearch}
                  pokemon={pokemonData}
                />
              </Grid>
            )}
          </Grid>
        </Card>
      </Box>
    </ScreenProvider>
  )
}
