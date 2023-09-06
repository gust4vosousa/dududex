import React from 'react'

import { Autocomplete, TextField } from '@mui/material'
import { formatPokemonEntryUtil } from '../../utils/formatUtils'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'
import { ISelectProps } from './SelectPokemonComponent.types'

export const SelectComponent: React.FC<ISelectProps> = ({
  label,
  loading,
  onChange,
  options,
  currentSearch,
}) => (
  <Autocomplete
    disabled={loading}
    getOptionLabel={(option) => formatPokemonEntryUtil(option)}
    loading={loading}
    onChange={(_event, newValue) => onChange(newValue)}
    options={options}
    renderInput={(params) => (
      <TextField
        {...params}
        InputProps={{
          ...params.InputProps,
          startAdornment: <IconComponent icon={EIcons.SEARCH} />,
        }}
        label={label}
        placeholder={label}
      />
    )}
    value={currentSearch}
  />
)
