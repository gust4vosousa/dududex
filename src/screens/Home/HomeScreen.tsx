import { Box, Card, CircularProgress } from '@mui/material'
import { Fragment } from 'react'
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
    pokemonList,
    pokemonData,
    isPokedexBusy,
    isPokemonBusy,
    onPokemonSearch,
    pokemonTypes,
  } = useHomeScreenRules()

  return (
    <ScreenProvider>
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Card style={{ padding: 16 }}>
          <SelectComponent
            options={pokemonList}
            label='Pokémon'
            loading={isPokedexBusy}
            onChange={onPokemonSearch}
          />
        </Card>

        <Card style={{ padding: 16 }}>
          {isPokemonBusy && <CircularProgress size={50} color='inherit' />}

          {!pokemonData && !isPokemonBusy && (
            <Fragment>
              <IconComponent icon={EIcons.WARNING} />
              {
                'Nothing to show yet. Please, select a Pokémon to display its information'
              }
            </Fragment>
          )}

          {pokemonData && !isPokemonBusy && (
            <Fragment>
              <PokemonNavigationComponent currentPokemonId={pokemonData.id} />
              <TypeBadgeComponent types={pokemonTypes} />
              <SpriteComponent sprites={pokemonData.sprites} />
              <StatsTableComponent statsList={pokemonData.stats} />
            </Fragment>
          )}
        </Card>
      </Box>
    </ScreenProvider>
  )
}
